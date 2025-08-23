// Lightweight client-side search without WASM
let indexCache = null;
let loading = false;

async function loadIndex() {
  if (indexCache || loading) return indexCache;
  loading = true;
  try {
    const r = await fetch('/index.json', { headers: { 'Accept': 'application/json' } });
    if (!r.ok) throw new Error('Failed to load index');
    indexCache = await r.json();
  } catch (e) {
    console.error('Search index error:', e);
    indexCache = [];
  } finally {
    loading = false;
  }
  return indexCache;
}

function normalize(s) { return (s || '').toString().toLowerCase(); }
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

function escapeHtml(str) {
  return (str || '').replace(/[&<>"]+/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}

function highlight(text, query) {
  const t = text || '';
  const q = normalize(query);
  if (!q) return escapeHtml(t);
  const lt = t.toString();
  const idx = lt.toLowerCase().indexOf(q);
  if (idx === -1) return escapeHtml(lt);
  const before = escapeHtml(lt.slice(0, idx));
  const match = escapeHtml(lt.slice(idx, idx + q.length));
  const after = escapeHtml(lt.slice(idx + q.length));
  return `${before}<mark>${match}</mark>${after}`;
}

function findMatches(q, max = 5) {
  const nq = normalize(q);
  if (!nq) return [];
  const data = indexCache || [];
  const scored = data.map(item => {
    const t = normalize(item.title);
    const b = normalize(item.body);
    let score = -1;
    const ti = t.indexOf(nq);
    const bi = b.indexOf(nq);
    if (ti !== -1) score = 1000 - ti; // prioritize title hits, earlier is better
    else if (bi !== -1) score = 100 - clamp(bi, 0, 100);
    return { item, score };
  }).filter(x => x.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map(x => x.item);
  return scored;
}

function debounce(fn, wait = 200) {
  let t = null;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

function setupAutocomplete(inp) {
  let currentFocus = -1;
  // ARIA combobox semantics
  inp.setAttribute('role', 'combobox');
  inp.setAttribute('aria-autocomplete', 'list');
  inp.setAttribute('aria-expanded', 'false');

  function closeList() {
    const x = document.getElementById(inp.id + '-autocomplete-list');
    if (x && x.parentNode) x.parentNode.removeChild(x);
    currentFocus = -1;
    // ARIA state reset
    inp.setAttribute('aria-expanded', 'false');
    inp.removeAttribute('aria-activedescendant');
    inp.removeAttribute('aria-controls');
  }

  function addActive(x) {
    if (!x || !x.length) return;
    [...x].forEach(el => {
      el.classList.remove('autocomplete-active');
      el.setAttribute('aria-selected', 'false');
    });
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add('autocomplete-active');
    x[currentFocus].setAttribute('aria-selected', 'true');
    // Sync active descendant for screen readers
    if (x[currentFocus].id) {
      inp.setAttribute('aria-activedescendant', x[currentFocus].id);
    }
  }

  async function renderList(val) {
    closeList();
    if (!val) return;
    await loadIndex();

    const list = document.createElement('DIV');
    list.setAttribute('id', inp.id + '-autocomplete-list');
    list.setAttribute('class', 'autocomplete-items');
    list.setAttribute('role', 'listbox');
    list.setAttribute('aria-live', 'polite');
    inp.parentNode.appendChild(list);
    // ARIA relationships
    inp.setAttribute('aria-controls', list.id);
    inp.setAttribute('aria-expanded', 'true');

    const results = findMatches(val, 5);

    if (!results.length) {
      const empty = document.createElement('DIV');
      empty.className = 'no-results';
      empty.setAttribute('role', 'status');
      empty.textContent = 'No results';
      list.appendChild(empty);
      return;
    }

    results.forEach((e, i) => {
      const option = document.createElement('DIV');
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', 'false');
      option.id = `${inp.id}-option-${i}`;
      option.innerHTML = highlight(e.title, val);
      option.addEventListener('click', () => {
        window.location.href = `${e.url}?q=${encodeURIComponent(val)}`;
      });
      list.appendChild(option);
    });
  }

  const debouncedRender = debounce(v => renderList(v), 200);

  ['focus','click'].forEach(evt => {
    inp.addEventListener(evt, () => { loadIndex(); });
  });
  inp.addEventListener('input', e => { debouncedRender(inp.value); });
  inp.addEventListener('keydown', e => {
    let x = document.getElementById(inp.id + '-autocomplete-list');
    let items = x ? x.getElementsByTagName('div') : null;

    if (e.key === 'ArrowDown') {
      currentFocus++;
      addActive(items);
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      currentFocus--;
      addActive(items);
      e.preventDefault();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFocus > -1 && items) {
        items[currentFocus].click();
      } else if (items && items.length) {
        items[0].click();
      }
    } else if (e.key === 'Escape') {
      closeList();
    }
  });

  document.addEventListener('click', e => {
    if (e.target !== inp) closeList();
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const el = document.getElementById('tinysearch');
  if (el) setupAutocomplete(el);
  // Preload index early
  loadIndex();
  // Pre-fill from query parameter ?q=
  try {
    const usp = new URLSearchParams(window.location.search);
    const q = usp.get('q');
    if (q && el) {
      el.value = q;
    }
  } catch {}
});
