# Nomod - A Beautiful Jekyll Blog Theme

A modern, elegant Jekyll theme inspired by clean design principles. Perfect for personal blogs, creative portfolios, and content-focused websites.

![Nomod Theme Preview](assets/images/og-image.jpg)

## Features

- 🎨 **Beautiful Design** - Clean, modern aesthetics with attention to typography
- 🌙 **Dark/Light Mode** - Automatic theme switching with manual toggle
- 📱 **Fully Responsive** - Looks great on all devices
- 🔍 **Built-in Search** - Fast client-side search functionality
- 👥 **Multiple Authors** - Support for team blogs with author profiles
- 🏷️ **Categories & Tags** - Organize content effectively
- ⚡ **Fast Performance** - Optimized CSS and minimal JavaScript
- ♿ **Accessible** - Built with accessibility in mind
- 📰 **Newsletter Ready** - Newsletter signup component included
- 🎭 **Customizable** - Easy to customize colors, fonts, and layouts

## Quick Start

### Prerequisites

- Ruby 2.7+
- Jekyll 4.3+
- Bundler

### Installation

1. **Clone or download this repository**

```bash
git clone https://github.com/yourusername/nomod-jekyll.git
cd nomod-jekyll
```

2. **Install dependencies**

```bash
bundle install
```

3. **Start the development server**

```bash
bundle exec jekyll serve
```

4. **Open your browser**

Visit `http://localhost:4000` to see your site.

## Configuration

Edit `_config.yml` to customize your site:

```yaml
# Site Settings
title: Your Blog Title
description: Your blog description
url: "https://yourdomain.com"

# Author
author:
  name: Your Name
  bio: Your bio here
  avatar: /assets/images/avatar.jpg

# Social Links
social:
  twitter: https://twitter.com/yourhandle
  instagram: https://instagram.com/yourhandle
  github: https://github.com/yourhandle
```

## Directory Structure

```
nomod-jekyll/
├── _authors/          # Author profiles
├── _includes/         # Reusable components
├── _layouts/          # Page templates
├── _posts/            # Blog posts
├── _sass/             # SCSS stylesheets
├── assets/
│   ├── css/          # Compiled CSS
│   ├── js/           # JavaScript files
│   └── images/       # Images and media
├── _config.yml        # Site configuration
├── Gemfile           # Ruby dependencies
└── index.html        # Homepage
```

## Creating Content

### Blog Posts

Create posts in the `_posts` directory with this format:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
author: yourname
category: Lifestyle
image: /assets/images/posts/your-image.jpg
featured: true
tags: [Tag1, Tag2]
excerpt: "A brief description of your post"
---

Your content here...
```

### Authors

Create author profiles in the `_authors` directory:

```markdown
---
short_name: yourname
name: Your Full Name
avatar: /assets/images/authors/your-avatar.jpg
bio: Your biography here
social:
  twitter: https://twitter.com/yourhandle
---

Extended biography (optional)
```

## Customization

### Colors

Edit `_sass/_variables.scss` to change the color scheme:

```scss
// Accent Colors
$accent-primary: #6366f1;
$accent-secondary: #8b5cf6;

// Category Colors
$color-lifestyle: #10b981;
$color-technology: #3b82f6;
$color-design: #f59e0b;
```

### Fonts

Update the font imports in `assets/css/main.scss`:

```scss
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');
```

Then update `_sass/_variables.scss`:

```scss
$font-primary: 'Your Font', sans-serif;
$font-heading: 'Your Heading Font', serif;
```

## Pages

The theme includes these pages:

- **Home** (`index.html`) - Featured posts and latest content
- **Latest** (`latest.html`) - All posts chronologically
- **Authors** (`authors.html`) - Team member profiles
- **Tags** (`tags.html`) - Posts organized by category
- **Featured** (`featured.html`) - Highlighted content
- **About** (`about.md`) - About page
- **Contact** (`contact.html`) - Contact form
- **404** (`404.html`) - Error page

## Deployment

### GitHub Pages

1. Push your repository to GitHub
2. Go to Settings > Pages
3. Select your branch and save

### Netlify

1. Connect your repository to Netlify
2. Build command: `jekyll build`
3. Publish directory: `_site`

### Vercel

1. Import your repository
2. Framework: Jekyll
3. Deploy

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Credits

- Design inspired by [Nomod Theme](https://nomod.netlify.app/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## License

MIT License - feel free to use this theme for personal or commercial projects.

## Support

If you find this theme useful, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs via issues
- 💡 Suggesting new features
- 🤝 Contributing improvements

---

Made with ❤️ for the Jekyll community
