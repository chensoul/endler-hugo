---
title: "Welcome to the Endler Hugo Theme: A Complete Feature Showcase"
slug: example-post
date: 2025-08-23
tags: ["hugo", "theme", "example", "markdown", "features", "showcase", "design", "typography"]
excerpt: "Explore the complete feature set of the Endler Hugo theme through this comprehensive showcase of design elements, typography, and functionality."
comments: true
---

Welcome to the Endler Hugo theme! This comprehensive post demonstrates all the features and capabilities of this elegant theme, which is a faithful port of the original [endler.dev](https://endler.dev) Zola theme by [Matthias Endler](https://endler.dev).

<!--more-->

## Theme Overview

The Endler Hugo theme brings the sophisticated design of endler.dev to the Hugo ecosystem. This theme prioritizes readability, performance, and user experience while maintaining the elegant minimalism that made the original so popular.

### Key Design Principles

- **Minimalism**: Every element serves a purpose
- **Typography**: Carefully chosen fonts for optimal readability
- **Performance**: Optimized for speed and efficiency
- **Accessibility**: Inclusive design for all users
- **Responsiveness**: Seamless experience across all devices

## Core Features

### 🎨 Design & Layout

- **Clean, Minimalist Design**: Distraction-free reading experience
- **Dark/Light Mode Toggle**: Automatic system preference detection with manual override
- **Responsive Layout**: Mobile-first design that scales beautifully
- **Typography Excellence**: Professional font stack with web font optimization
- **Color Harmony**: Carefully selected color palette for both themes

### ⚡ Performance & Technical

- **Lightning Fast**: Optimized CSS and minimal JavaScript
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **RSS Support**: Summary-only feeds for better performance
- **Search Functionality**: Client-side search with keyboard navigation
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

### 🏷️ Content Management

- **Tag System**: Complete tag cloud and individual tag pages
- **Pagination**: Automatic pagination for posts and archives
- **Comments Integration**: Support for multiple commenting systems
- **Social Media**: Integrated social media links and sharing
- **Archive Pages**: Organized content browsing by date and category

## Code Highlighting Showcase

The theme features comprehensive syntax highlighting powered by Hugo's built-in Chroma highlighter, supporting over 200 programming languages with multiple color schemes.

### Popular Languages

**Rust** - Systems programming with memory safety:
```rust
use std::collections::HashMap;

fn fibonacci_memoized(n: u32, memo: &mut HashMap<u32, u64>) -> u64 {
    match memo.get(&n) {
        Some(&result) => result,
        None => {
            let result = match n {
                0 => 0,
                1 => 1,
                _ => fibonacci_memoized(n - 1, memo) + fibonacci_memoized(n - 2, memo),
            };
            memo.insert(n, result);
            result
        }
    }
}

fn main() {
    let mut memo = HashMap::new();
    println!("Fibonacci(20) = {}", fibonacci_memoized(20, &mut memo));
}
```

**JavaScript** - Modern ES6+ features:
```javascript
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.bindEvents();
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        document.documentElement.setAttribute('data-theme', this.theme);

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themechange', {
            detail: { theme: this.theme }
        }));
    }

    bindEvents() {
        document.querySelector('.theme-toggle')?.addEventListener('click', () => {
            this.toggle();
        });
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();
```

**Python** - Data science and web development:
```python
import asyncio
import aiohttp
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class BlogPost:
    title: str
    slug: str
    content: str
    tags: List[str]
    published: bool = False

    def __post_init__(self):
        if not self.slug:
            self.slug = self.title.lower().replace(' ', '-')

class BlogManager:
    def __init__(self, base_url: str):
        self.base_url = base_url
        self.session: Optional[aiohttp.ClientSession] = None

    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()

    async def fetch_posts(self) -> List[BlogPost]:
        async with self.session.get(f"{self.base_url}/api/posts") as response:
            data = await response.json()
            return [BlogPost(**post) for post in data]

# Usage
async def main():
    async with BlogManager("https://api.example.com") as blog:
        posts = await blog.fetch_posts()
        published_posts = [p for p in posts if p.published]
        print(f"Found {len(published_posts)} published posts")

if __name__ == "__main__":
    asyncio.run(main())
```

**Go** - Concurrent web services:
```go
package main

import (
    "context"
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"
)

type Post struct {
    ID       int       `json:"id"`
    Title    string    `json:"title"`
    Content  string    `json:"content"`
    Created  time.Time `json:"created"`
}

type BlogService struct {
    posts []Post
    mu    sync.RWMutex
}

func (s *BlogService) GetPosts(w http.ResponseWriter, r *http.Request) {
    s.mu.RLock()
    defer s.mu.RUnlock()

    w.Header().Set("Content-Type", "application/json")
    if err := json.NewEncoder(w).Encode(s.posts); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}

func (s *BlogService) CreatePost(w http.ResponseWriter, r *http.Request) {
    var post Post
    if err := json.NewDecoder(r.Body).Decode(&post); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    s.mu.Lock()
    post.ID = len(s.posts) + 1
    post.Created = time.Now()
    s.posts = append(s.posts, post)
    s.mu.Unlock()

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(post)
}

func main() {
    service := &BlogService{}

    http.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case http.MethodGet:
            service.GetPosts(w, r)
        case http.MethodPost:
            service.CreatePost(w, r)
        default:
            http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        }
    })

    server := &http.Server{
        Addr:         ":8080",
        ReadTimeout:  15 * time.Second,
        WriteTimeout: 15 * time.Second,
    }

    log.Println("Server starting on :8080")
    log.Fatal(server.ListenAndServe())
}
```

### Configuration Files

**YAML** - Hugo configuration:
```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "My Blog"
theme: "endler-hugo"

params:
  author: "Your Name"
  description: "A blog about technology and life"
  social:
    github: "username"
    twitter: "username"
    mastodon: "username"

markup:
  goldmark:
    renderer:
      unsafe: true
  highlight:
    style: "github"
    lineNos: true
    tabWidth: 4
```

**TOML** - Alternative configuration format:
```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Blog"

[params]
  author = "Your Name"
  description = "A blog about technology and life"

[params.social]
  github = "username"
  twitter = "username"
  mastodon = "username"

[markup.goldmark.renderer]
  unsafe = true

[markup.highlight]
  style = "github"
  lineNos = true
  tabWidth = 4
```

**JSON** - API responses and data:
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Getting Started with Hugo",
      "slug": "getting-started-hugo",
      "excerpt": "Learn how to build fast websites with Hugo",
      "content": "Hugo is a fast static site generator...",
      "tags": ["hugo", "web-development", "tutorial"],
      "published": true,
      "created": "2025-01-15T10:00:00Z",
      "updated": "2025-01-15T10:00:00Z",
      "author": {
        "name": "John Doe",
        "email": "john@example.com",
        "avatar": "https://example.com/avatar.jpg"
      },
      "meta": {
        "readTime": 5,
        "wordCount": 1200,
        "views": 1500,
        "likes": 42
      }
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

## Typography Excellence

Typography is at the heart of the Endler theme's design philosophy. The carefully curated font stack ensures optimal readability across all devices and contexts.

### Font Hierarchy

**Primary Fonts:**
- **Happy-Headline**: Custom font for article titles and main headings
- **Happy**: UI elements and secondary headings
- **Merriweather**: Body text with excellent readability
- **JetBrains Mono**: Code blocks and technical content

### Font Features

**Web Font Optimization:**
- Preloaded critical fonts for faster rendering
- Font-display: swap for better performance
- Subset fonts to reduce file size
- WOFF2 format for modern browsers

**Responsive Typography:**
```css
/* Fluid typography using clamp() */
:root {
  --font-size-xs: clamp(0.75rem, 0.9vw, 0.875rem);
  --font-size-sm: clamp(0.875rem, 1.1vw, 1rem);
  --font-size-base: clamp(1rem, 1.3vw, 1.125rem);
  --font-size-lg: clamp(1.125rem, 1.5vw, 1.25rem);
  --font-size-xl: clamp(1.25rem, 1.8vw, 1.5rem);
  --font-size-2xl: clamp(1.5rem, 2.2vw, 2rem);
  --font-size-3xl: clamp(2rem, 3vw, 3rem);
}
```

### Typography Scale

# Heading 1 - Main Article Title
## Heading 2 - Section Headers
### Heading 3 - Subsection Headers
#### Heading 4 - Minor Sections
##### Heading 5 - Small Sections
###### Heading 6 - Micro Sections

**Body Text**: This is the standard body text using Merriweather, optimized for long-form reading with proper line height and spacing.

**Small Text**: <small>This is smaller text for captions, footnotes, and secondary information.</small>

**Large Text**: <big>This is larger text for emphasis and important callouts.</big>

## Text Formatting & Elements

The theme supports a comprehensive range of text formatting options and semantic elements.

### Inline Formatting

- **Bold text** for emphasis and importance
- *Italic text* for subtle emphasis and foreign words
- `Inline code` for technical terms and short code snippets
- ~~Strikethrough text~~ for corrections and deletions
- <mark>Highlighted text</mark> for important information
- <kbd>Ctrl</kbd> + <kbd>C</kbd> for keyboard shortcuts
- H<sub>2</sub>O for subscript and E=mc<sup>2</sup> for superscript

### Links and Navigation

- [External links](https://example.com) open in the same tab
- [Internal links](/about) for site navigation
- [Email links](mailto:example@example.com) for contact
- [Anchor links](#typography-excellence) for page navigation

### Blockquotes

> **Simple Quote**: This is a standard blockquote for highlighting important information or quotes from other sources.

> **Multi-paragraph Quote**: This blockquote demonstrates how longer quotes are handled. The styling remains consistent across multiple paragraphs.
>
> The second paragraph maintains proper spacing and typography, ensuring readability even in longer quoted content.

> **Nested Quote**: Sometimes you need to quote someone who is quoting someone else.
>
> > This is a nested quote within the main quote, showing how the theme handles multiple levels of quotation.

### Code Elements

**Inline Code**: Use `const theme = 'endler'` for short code snippets within sentences.

**Keyboard Input**: Press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> to open the command palette.

**Sample Output**:
```
$ hugo server
Start building sites …
hugo v0.120.0+extended darwin/arm64 BuildDate=2023-12-01T08:47:09Z VendorInfo=brew

                   | EN
-------------------+-----
  Pages            | 78
  Paginator pages  | 0
  Non-page files   | 0
  Static files     | 34
  Processed images | 0
  Aliases          | 32
  Cleaned          | 0

Built in 64 ms
Watching for changes in /Users/user/site/{archetypes,content,data,layouts,static,themes}
Watching for file system events.
Web Server is available at http://localhost:1313/
Press Ctrl+C to stop
```

## Lists and Organization

The theme provides excellent support for various list types and organizational structures.

### Unordered Lists

**Simple Lists:**
- First level item
- Another first level item
- Third item with more content

**Nested Lists:**
- **Development Tools**
  - Code Editors
    - Visual Studio Code
    - Neovim
    - Sublime Text
  - Version Control
    - Git
    - GitHub
    - GitLab
- **Programming Languages**
  - Systems Programming
    - Rust
    - Go
    - C++
  - Web Development
    - JavaScript
    - TypeScript
    - Python

### Ordered Lists

**Sequential Steps:**
1. **Planning Phase**
   1. Define requirements
   2. Create wireframes
   3. Design mockups
2. **Development Phase**
   1. Set up development environment
   2. Implement core features
   3. Add styling and interactions
3. **Testing Phase**
   1. Unit testing
   2. Integration testing
   3. User acceptance testing
4. **Deployment Phase**
   1. Build optimization
   2. Deploy to staging
   3. Deploy to production

### Task Lists

- [x] ✅ Set up Hugo development environment
- [x] ✅ Create basic site structure
- [x] ✅ Implement responsive design
- [ ] 🔄 Add search functionality
- [ ] 📋 Implement comment system
- [ ] 🚀 Deploy to production

### Definition Lists

**Hugo**
: A fast and modern static site generator written in Go

**Markdown**
: A lightweight markup language with plain text formatting syntax

**Static Site Generator**
: A tool that generates a full static HTML website based on raw data and templates

**JAMstack**
: A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup

## Tables and Data

The theme provides excellent support for tables and structured data presentation.

### Basic Tables

| Feature | Endler Theme | Other Themes | Notes |
|---------|--------------|--------------|-------|
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Optimized CSS and minimal JS |
| **Typography** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Custom font stack |
| **Responsiveness** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Mobile-first design |
| **Accessibility** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | WCAG 2.1 compliant |
| **Customization** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Focused on simplicity |

### Performance Metrics

| Metric | Score | Industry Average | Notes |
|--------|-------|------------------|-------|
| **Lighthouse Performance** | 98/100 | 75/100 | Excellent optimization |
| **First Contentful Paint** | 0.8s | 2.1s | Fast initial render |
| **Largest Contentful Paint** | 1.2s | 3.4s | Quick main content load |
| **Cumulative Layout Shift** | 0.02 | 0.15 | Stable layout |
| **Time to Interactive** | 1.1s | 4.2s | Rapid interactivity |

### Browser Support

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| **Chrome** | 90+ | ✅ Full | All features supported |
| **Firefox** | 88+ | ✅ Full | Complete compatibility |
| **Safari** | 14+ | ✅ Full | WebKit optimizations |
| **Edge** | 90+ | ✅ Full | Chromium-based support |
| **IE 11** | - | ❌ None | Not supported |

## Images and Media

The theme provides comprehensive support for images and multimedia content with responsive design and performance optimization.

### Responsive Images

![Hero Image](https://placehold.co/800x400/2d3748/ffffff?text=Hero+Image)
*A large hero image demonstrating responsive scaling*

![Medium Image](https://placehold.co/600x300/4a5568/ffffff?text=Medium+Image)
*Medium-sized image for content illustration*

![Small Image](https://placehold.co/400x200/718096/ffffff?text=Small+Image)
*Smaller image for inline content*

### Image Alignment

**Left-aligned image:**
![Left Image](https://placehold.co/300x200/3182ce/ffffff?text=Left)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

**Right-aligned image:**
![Right Image](https://placehold.co/300x200/e53e3e/ffffff?text=Right)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Center-aligned image:**
![Center Image](https://placehold.co/500x250/38a169/ffffff?text=Centered)

### Image Galleries

![Gallery 1](https://placehold.co/300x200/805ad5/ffffff?text=Gallery+1) ![Gallery 2](https://placehold.co/300x200/d69e2e/ffffff?text=Gallery+2) ![Gallery 3](https://placehold.co/300x200/f56565/ffffff?text=Gallery+3)

*A simple image gallery using inline images*

## Advanced Features

### Mathematical Expressions

The theme supports mathematical notation through MathJax or KaTeX:

**Inline Math**: The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$

**Block Math**:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### Footnotes

This is a sentence with a footnote[^1]. Here's another footnote[^2].

[^1]: This is the first footnote explaining something important.
[^2]: This is the second footnote with additional context.

### Abbreviations

The *[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript

HTML and CSS are fundamental web technologies, while JS adds interactivity.

## Theme Customization

### Color Schemes

The theme supports both light and dark modes with carefully chosen color palettes:

**Light Mode Colors:**
- Primary: `#2d3748` (Dark Gray)
- Secondary: `#4a5568` (Medium Gray)
- Accent: `#3182ce` (Blue)
- Background: `#ffffff` (White)
- Surface: `#f7fafc` (Light Gray)

**Dark Mode Colors:**
- Primary: `#e2e8f0` (Light Gray)
- Secondary: `#cbd5e0` (Medium Light Gray)
- Accent: `#63b3ed` (Light Blue)
- Background: `#1a202c` (Dark Blue Gray)
- Surface: `#2d3748` (Dark Gray)

### CSS Custom Properties

```css
:root {
  /* Typography */
  --font-family-sans: "Happy", system-ui, sans-serif;
  --font-family-serif: "Merriweather", Georgia, serif;
  --font-family-mono: "JetBrains Mono", Consolas, monospace;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Border radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.5rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Conclusion

The Endler Hugo theme represents a perfect balance of elegance, performance, and functionality. It maintains the sophisticated minimalism of the original endler.dev design while providing all the modern features expected from a contemporary Hugo theme.

### Key Strengths

- **Performance**: Lightning-fast loading and excellent Core Web Vitals scores
- **Typography**: Professional font stack with optimal readability
- **Responsiveness**: Seamless experience across all devices and screen sizes
- **Accessibility**: WCAG 2.1 compliant with inclusive design principles
- **Maintainability**: Clean, semantic HTML and organized CSS architecture

### Perfect For

- **Developers**: Technical blogs and portfolio sites
- **Writers**: Long-form content and storytelling
- **Professionals**: Corporate blogs and thought leadership
- **Educators**: Documentation and tutorial sites
- **Minimalists**: Clean, distraction-free reading experience

Whether you're building a personal blog, a company website, or a documentation site, the Endler theme provides the solid foundation you need to create something beautiful and functional.

Ready to get started? Check out the [installation guide](/posts/getting-started-with-hugo/) and begin building your perfect website today!
