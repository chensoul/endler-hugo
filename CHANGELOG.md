# Changelog

## [1.2.0] - 2025-08-23

### Added
- **Complete Tags System**: Tag cloud page, individual tag pages, and tag display on posts
- **RSS Summary Mode**: RSS feeds now output only summaries instead of full content
- **Chinese Language Support**: Optimized fonts and typography for Chinese content
- **Enhanced Article Previews**: Date and tags display on homepage and archive pages
- **Custom RSS Template**: Better control over RSS feed content and format

### Improved
- **RSS Configuration**: Custom output format generates `rss.xml` instead of `index.xml`
- **Font Stack**: Added Chinese font support with proper fallbacks
- **CSS Organization**: Cleaned up and optimized stylesheet
- **Mobile Responsiveness**: Better mobile layout for tags and article previews
- **SEO**: Enhanced meta tags and RSS feed structure

### Fixed
- **RSS XML Format**: Fixed HTML escaping issues in RSS feeds
- **Tag Links**: Proper URL generation for tag pages
- **Date Format**: Consistent date formatting across all pages
- **Typography**: Better Chinese character rendering and spacing

### Removed
- **Unused Files**: Removed redundant search.js, comment partials, and unused images
- **Video Shortcode**: Removed empty video shortcode template

## [1.1.0] - 2025-08-22

### Added
- **Compact Layout**: Improved spacing and typography
- **CSS Cleanup**: Organized and optimized stylesheets
- **Better Documentation**: Enhanced README with detailed configuration

### Fixed
- **Layout Issues**: Various spacing and alignment improvements
- **Font Loading**: Optimized font loading performance

## [1.0.0] - 2025-01-01

### Added
- Initial Hugo theme port from endler.dev Zola theme
- Complete layout system with baseof.html, index.html, single.html, list.html, and 404.html
- Responsive design with mobile-first approach
- Dark/light theme toggle functionality
- Search functionality support
- Social media icons (GitHub, Mastodon, Twitter, RSS, Home)
- Pagination support for blog posts and archives
- Typography with custom fonts (Happy-Headline, Happy, Merriweather, JetBrains Mono)
- Syntax highlighting for code blocks
- SEO-friendly meta tags and Open Graph support
- RSS feed generation
- Accessible design with proper ARIA labels
- Footer with random greeting functionality

### Features
- **Layouts**: Complete set of Hugo layouts maintaining original design
- **Partials**: Modular components for header, footer, search, social icons, and article previews
- **Static Assets**: All necessary CSS, fonts, and icon files
- **Configuration**: Example site with proper Hugo configuration
- **Content Types**: Support for posts, pages, and taxonomies
- **Responsive**: Mobile-optimized layout with breakpoints
- **Performance**: Optimized font loading and CSS

### Technical Details
- Hugo minimum version: 0.110.0
- CSS custom properties for theming
- JavaScript for theme toggle and search
- SVG icons for social media links
- Font preloading for performance
- Semantic HTML structure

### Files Added
- `layouts/_default/baseof.html` - Base template
- `layouts/index.html` - Homepage layout
- `layouts/_default/single.html` - Single post/page layout
- `layouts/_default/list.html` - Archive/list layout
- `layouts/404.html` - Error page
- `layouts/partials/` - All partial templates
- `static/css/main.css` - Main stylesheet
- `static/fonts/` - Custom font files
- `static/icons/` - SVG social media icons
- `static/*.svg` - Logo files
- `exampleSite/` - Complete example site
- `README.md` - Documentation
- `LICENSE` - MIT license
- `theme.toml` - Theme configuration

### Compatibility
- Maintains 100% visual compatibility with original endler.dev design
- All interactive features preserved (theme toggle, search, pagination)
- Responsive behavior identical to original
- Typography and spacing exactly matched
