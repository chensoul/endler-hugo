---
title: "Getting Started with Hugo: A Complete Guide"
slug: "getting-started-with-hugo"
date: 2025-01-15
tags: ["hugo", "tutorial", "static-site", "web-development", "beginner"]
---

Hugo is a fast and modern static site generator written in Go. It's designed for speed and flexibility, making it perfect for blogs, documentation sites, and portfolios.

<!--more-->

## Why Choose Hugo?

Hugo stands out from other static site generators for several reasons:

- **Speed**: Hugo can build most websites in under a second
- **Flexibility**: Supports multiple content formats and custom layouts
- **No Dependencies**: Single binary with no external dependencies
- **Active Community**: Large ecosystem of themes and plugins

## Installation

### macOS

```bash
# Using Homebrew
brew install hugo

# Using MacPorts
sudo port install hugo
```

### Windows

```bash
# Using Chocolatey
choco install hugo

# Using Scoop
scoop install hugo
```

### Linux

```bash
# Ubuntu/Debian
sudo apt install hugo

# Arch Linux
sudo pacman -S hugo

# Or download from GitHub releases
wget https://github.com/gohugoio/hugo/releases/download/v0.120.0/hugo_0.120.0_Linux-64bit.tar.gz
```

## Creating Your First Site

1. **Create a new site**:
   ```bash
   hugo new site my-blog
   cd my-blog
   ```

2. **Add a theme**:
   ```bash
   git init
   git submodule add https://github.com/username/theme-name.git themes/theme-name
   echo "theme = 'theme-name'" >> config.toml
   ```

3. **Create your first post**:
   ```bash
   hugo new posts/my-first-post.md
   ```

4. **Start the development server**:
   ```bash
   hugo server -D
   ```

## Directory Structure

```bash
my-blog/
├── archetypes/          # Content templates
├── assets/              # Files to be processed
├── content/             # Your content files
├── data/                # Configuration files
├── layouts/             # Template files
├── public/              # Generated site (don't edit)
├── static/              # Static files
├── themes/              # Themes
└── config.toml          # Site configuration
```

## Configuration

Hugo uses `config.toml` for site configuration:

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Blog"
theme = "theme-name"

[params]
  author = "Your Name"
  description = "A blog about web development"

[menu]
  [[menu.main]]
    name = "Home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Posts"
    url = "/posts/"
    weight = 2
```

## Content Management

### Front Matter

Every content file starts with front matter:

```yaml
---
title: "Post Title"
date: 2025-01-15
draft: false
tags: ["tag1", "tag2"]
categories: ["category1"]
---
```

### Content Organization

```bash
content/
├── posts/
│   ├── 2025/
│   │   └── my-post.md
│   └── _index.md
├── about.md
└── _index.md
```

## Deployment

### GitHub Pages

```yaml
# .github/workflows/hugo.yml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      
      - name: Build
        run: hugo --minify
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### Netlify

1. Connect your Git repository
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Deploy!

## Advanced Features

### Shortcodes

Hugo includes built-in shortcodes for common elements:

{{< youtube dQw4w9WgXcQ >}}

### Custom Layouts

Create custom layouts in the `layouts/` directory:

```html
<!-- layouts/_default/single.html -->
{{ define "main" }}
<article>
  <h1>{{ .Title }}</h1>
  <time>{{ .Date.Format "2006-01-02" }}</time>
  {{ .Content }}
</article>
{{ end }}
```

## Performance Tips

1. **Optimize Images**: Use Hugo's image processing
2. **Minify Output**: Use `hugo --minify`
3. **Enable Caching**: Configure proper cache headers
4. **Use CDN**: Serve static assets from a CDN

## Conclusion

Hugo is an excellent choice for building fast, modern websites. Its speed, flexibility, and active community make it perfect for developers who want to focus on content rather than infrastructure.

Start with a simple blog, experiment with themes, and gradually explore Hugo's advanced features as your needs grow.

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Hugo Community Forum](https://discourse.gohugo.io/)
- [Hugo GitHub Repository](https://github.com/gohugoio/hugo)
