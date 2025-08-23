# Endler Hugo Theme

A Hugo theme port of [endler.dev](https://endler.dev) (original Zola theme). This theme maintains the clean, minimalist design and functionality of the original website.

## Features

- **Clean, minimalist design** - Faithful port of the original endler.dev design
- **Dark/light theme toggle** - Automatic system preference detection with manual toggle
- **Responsive layout** - Mobile-first design that works on all devices
- **Search functionality** - Fast client-side search with keyboard navigation
- **Tags system** - Complete tag cloud and individual tag pages
- **Social media icons** - GitHub, Mastodon, Twitter, RSS, and Home icons
- **RSS feed support** - Summary-only RSS feeds (not full content)
- **Pagination** - Automatic pagination for posts and tag pages
- **Syntax highlighting** - Code blocks with syntax highlighting
- **Font optimization** - Custom fonts with Chinese language support
- **SEO optimized** - Proper meta tags and Open Graph support

## Installation

### As a Git Submodule

```bash
git submodule add https://github.com/your-username/endler-hugo.git themes/endler-hugo
```

### Direct Download

Download the theme and extract it to your `themes/` directory.

### Hugo Modules (Recommended)

```bash
hugo mod init github.com/your-username/your-site
hugo mod get github.com/your-username/endler-hugo
```

## Configuration

Add the following to your `config.toml`:

```toml
baseURL = "https://your-site.com"
languageCode = "zh-cn"  # or "en-us" for English
title = "Your Site Title"
theme = "endler-hugo"

# Pagination
[pagination]
  pagerSize = 10

[params]
  author = "Your Name"
  description = "Your site description"
  mastodon = "yourusername"  # without full URL
  github = "yourusername"
  twitter = "yourusername"

[taxonomies]
  tag = "tags"
  category = "categories"

[outputs]
  home = ["HTML", "RSS"]

[outputFormats]
  [outputFormats.RSS]
    mediaType = "application/rss+xml"
    baseName = "rss"  # generates rss.xml instead of index.xml
```

## Content Structure

### Posts

Create posts in the `content/posts/` directory:

```markdown
---
title: "Your Post Title"
date: 2025-01-01
tags: ["tag1", "tag2", "tag3"]
excerpt: "A brief description of your post for RSS feeds"
---

This is the beginning of your post content that will be shown as summary.

<!--more-->

This is the detailed content that won't appear in RSS feeds.
```

**Note**: Use `<!--more-->` to separate summary from full content, or use the `excerpt` field for custom RSS descriptions.

### Pages

Create pages in the `content/` directory:

```markdown
---
title: "About"
---

Your page content here...
```

## Features Detail

### Tags System

The theme includes a complete tags system:
- **Tag cloud page** (`/tags/`) - Shows all tags with post counts
- **Individual tag pages** (`/tags/tag-name/`) - Lists posts for each tag
- **Tag display** - Tags shown on post previews and individual posts
- **Pagination** - Tag pages support pagination for large numbers of posts

### RSS Feeds

- **Summary-only RSS** - RSS feeds contain only post summaries, not full content
- **Custom RSS filename** - Generates `rss.xml` (standard name) instead of `index.xml`
- **Proper encoding** - Full UTF-8 support for Chinese and other languages
- **SEO optimized** - Includes proper meta tags and descriptions

### Search Functionality

- **Client-side search** - Fast search without server requests
- **Keyboard navigation** - Use arrow keys to navigate results
- **Real-time results** - Search as you type
- **Content indexing** - Searches through post titles and content

### Theme Toggle

- **System preference detection** - Automatically detects user's preferred color scheme
- **Manual toggle** - Users can override system preference
- **Persistent choice** - Remembers user's manual selection
- **Smooth transitions** - Animated transitions between themes

## Customization

### Fonts

The theme uses optimized font stacks with Chinese language support:
- **Body text**: Merriweather + Chinese serif fonts (Noto Serif SC, Source Han Serif)
- **Headings**: Happy + Chinese sans-serif fonts (Noto Sans SC, PingFang SC)
- **Code**: JetBrains Mono + Chinese monospace fonts (Source Han Mono)

### Colors

CSS custom properties for easy customization:
```css
:root {
  --accent-color: #fc218a;
  --background: #fff;
  --text-color: #2d2d2d;
  --surface-color: #f8f9fa;
  --border-color: #e9ecef;
}

[data-theme="dark"] {
  --background: #1a1a1a;
  --text-color: #e1e1e1;
  --surface-color: #2d2d2d;
  --border-color: #404040;
}
```

### Social Media

Configure social media links in `config.toml`:
```toml
[params]
  github = "username"
  twitter = "username"
  mastodon = "username"  # just username, not full URL
```

## Development

To work on the theme:

1. Clone the repository
2. Navigate to `exampleSite/` directory
3. Create symlink: `mkdir -p themes && ln -sf ../../ themes/endler-hugo`
4. Run `hugo server` for development
5. Visit `http://localhost:1313` to see the site

### Building for Production

```bash
cd exampleSite/
hugo --minify
```

### File Structure

```
endler-hugo/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── list.html        # List pages
│   │   ├── single.html      # Single posts
│   │   ├── taxonomy.html    # Tag pages
│   │   ├── terms.html       # Tag cloud
│   │   └── rss.xml          # RSS template
│   ├── partials/
│   │   ├── article_preview.html
│   │   ├── footer.html
│   │   ├── search.html
│   │   └── social.html
│   ├── 404.html
│   ├── index.html           # Homepage
│   └── robots.txt
├── static/
│   ├── css/main.css         # Main stylesheet
│   ├── fonts/               # Font files
│   ├── icons/               # SVG icons
│   └── search_min.js        # Search functionality
├── exampleSite/             # Example site for testing
└── theme.toml               # Theme configuration
```

## Troubleshooting

### RSS Issues
- Ensure `[outputs]` includes `"RSS"`
- Check `[services.rss]` configuration
- Verify content files exist in `content/posts/`

### Search Not Working
- Ensure `search_min.js` is loaded
- Check browser console for JavaScript errors
- Verify search index is generated

### Tags Not Showing
- Check `[taxonomies]` configuration
- Ensure posts have `tags` in front matter
- Verify tag pages are generated in `public/tags/`

## License

MIT License - see LICENSE file for details.

## Credits

- **Original design**: [Matthias Endler](https://endler.dev) for his Zola-based website
- **Hugo port**: Created with AI assistance
- **Fonts**: Happy fonts by [Matthias Endler](https://endler.dev), Merriweather by Google Fonts
- **Icons**: Custom SVG icons based on the original design

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.
