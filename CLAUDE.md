# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based blog using the Nomod theme, a modern and elegant design with dark/light mode support, multiple authors, and a clean, responsive layout.

## Development Commands

**IMPORTANT**: This project uses Docker for Jekyll compilation. Jekyll is NOT installed locally.

### Starting the Development Server
```bash
docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
```
Then visit `http://localhost:4000` to see the site.

### Creating a New Jekyll Site (Do not run unless starting fresh)
```bash
docker run -v $(pwd):/site bretfisher/jekyll new .
```

### Building the Site
The build happens automatically when starting the development server. The output goes to the `_site` directory.

### Stopping the Server
Find the container ID and stop it:
```bash
docker ps
docker stop <container_id>
```

## Architecture

### Directory Structure

- **Root directory** - Active blog with Nomod theme implemented
  - `_posts/` - Published blog posts
  - `_authors/` - Author profiles (collection)
  - `_layouts/` - Page templates (default, post, home, author, page)
  - `_includes/` - Reusable components (header, footer, post-card, newsletter, search-modal, etc.)
  - `_sass/` - SCSS stylesheets (variables, base, layout, pages, components, animations)
  - `assets/` - CSS (compiled from SCSS) and JavaScript
  - `_config.yml` - Main site configuration
  - `index.html` - Homepage (uses home layout)
  - `about.md` - About page
  - `authors.html` - Authors listing page
  - `latest.html` - All posts chronologically
  - `featured.html` - Featured posts only
  - `tags.html` - Posts organized by category
  - `contact.html` - Contact form

- **template/** - Original Nomod theme (reference only)
  - Contains the original theme files with example content
  - Use as reference when customizing or troubleshooting
  - Not used by the live site

### Key Files

- `_config.yml` - Site configuration, plugins, collections, defaults
- `Gemfile` - Ruby dependencies (Jekyll 4.4.1, plugins)
- `.github/workflows/jekyll.yml` - GitHub Actions workflow for deployment to GitHub Pages

### Theme Architecture

The Nomod theme uses a modular SCSS architecture:

1. **_variables.scss** - Design tokens (colors, fonts, spacing, breakpoints, shadows)
   - Light/dark theme colors
   - Category colors (Lifestyle: green, Technology: blue, Design: orange, Travel: red)
   - Accent colors with gradient support
   - Spacing scale, border radius, shadows, transitions
   - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

2. **_base.scss** - Base styles and typography
3. **_layout.scss** - Layout components (header, footer, containers)
4. **_components.scss** - UI components (buttons, cards, forms)
5. **_pages.scss** - Page-specific styles
6. **_animations.scss** - Animation utilities

### Collections

- **authors** - Author profiles with bio, avatar, social links
  - Output: true (generates individual author pages)
  - Permalink: `/authors/:name/`

### Layouts

- **default.html** - Base layout with header, footer, dark mode toggle, search
- **post.html** - Blog post layout with author info, featured image, tags
- **home.html** - Homepage with featured posts and latest content
- **author.html** - Author profile page
- **page.html** - Simple page layout

### Includes (Reusable Components)

- `header.html` - Site navigation with search and dark mode toggle
- `footer.html` - Footer with social links and newsletter signup
- `post-card.html` - Full post card with image, excerpt, category badge
- `post-card-minimal.html` - Simplified post card
- `author-card.html` - Author bio card
- `newsletter.html` - Newsletter signup form
- `search-modal.html` - Client-side search interface
- `mobile-menu.html` - Responsive mobile navigation

### Features

- Dark/light mode with manual toggle and system preference detection
- Client-side search functionality (main.js)
- Multi-author support with author collections
- Category system (Lifestyle, Technology, Design, Travel) with color coding
- Featured posts
- Newsletter signup component
- Responsive design with mobile-first approach

## Content Creation

### Blog Posts

Create posts in `_posts/` with filename format: `YYYY-MM-DD-title.markdown`

Required front matter:
```yaml
---
layout: post
title: "Post Title"
date: 2024-01-15
author: authorname  # matches short_name in _authors/
category: Technology  # Lifestyle, Technology, Design, or Travel
image: /assets/images/posts/image.jpg
featured: true  # optional
tags: [Tag1, Tag2]
excerpt: "Brief description"
---
```

### Authors

Create author profiles in `_authors/`:
```yaml
---
short_name: authorname
name: Full Name
avatar: /assets/images/authors/avatar.jpg
bio: Author biography
social:
  twitter: https://twitter.com/handle
  instagram: https://instagram.com/handle
  github: https://github.com/handle
---
```

## Deployment

The site is configured to deploy to GitHub Pages via GitHub Actions (`.github/workflows/jekyll.yml`):
- Triggers on push to `main` branch
- Uses Ruby 3.1
- Builds with `bundle exec jekyll build`
- Deploys to GitHub Pages automatically

## Configuration Notes

- Jekyll version: 4.4.1
- Theme: Nomod (custom theme, fully implemented)
- Plugins: jekyll-feed, jekyll-seo-tag, jekyll-sitemap, jekyll-paginate
- Markdown: kramdown
- Syntax highlighter: rouge
- SASS compilation: compressed
- Pagination: 6 posts per page
- **IMPORTANT**: Changes to `_config.yml` require server restart (not auto-reloaded)
- **IMPORTANT**: When using Docker, remember to stop the previous container before starting a new one

## Customization

### Colors
Edit `_sass/_variables.scss` to change theme colors, category colors, or accent colors. The file includes:
- Light/dark theme color schemes
- Category colors (Lifestyle: green, Technology: blue, Design: orange, Travel: red)
- Accent colors and gradients
- Design tokens for spacing, shadows, transitions, etc.

### Fonts
The theme uses:
- Primary: DM Sans
- Headings: Playfair Display
- Monospace: JetBrains Mono

Update font imports in `assets/css/main.scss` and variables in `_sass/_variables.scss`.

### Layouts and Components
The theme's layouts are in `_layouts/` and reusable components in `_includes/`. Modify these files directly to customize the theme structure and appearance.
