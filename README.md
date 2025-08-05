# Musings by Bala Krishna

Personal blog and portfolio website built with Jekyll and Beautiful Jekyll theme, hosted at [balakrishna.live](https://balakrishna.live).

## Prerequisites

- macOS with Homebrew installed
- Git

## Setup Instructions

### 1. Install Ruby 3.x

```bash
# Install Ruby via Homebrew
brew install ruby

# Add Ruby to your PATH
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"

# Make the change permanent (add to your shell profile)
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
```

### 2. Install Dependencies

```bash
# Clone the repository
git clone https://github.com/krishnaclouds/krishnaclouds.github.io.git
cd krishnaclouds.github.io

# Install Jekyll and dependencies
bundle install
```

## Development

### Run Local Server

```bash
# Start the Jekyll development server
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve

# Or serve on all interfaces (accessible from other devices on network)
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

The site will be available at:
- Local: http://localhost:4000
- Network: http://0.0.0.0:4000

### Build for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Project Structure

```
├── _config.yml          # Site configuration
├── _posts/              # Blog posts (Markdown with YAML front matter)
├── about.markdown       # About page
├── index.markdown       # Homepage
├── images/              # Static assets
├── Gemfile             # Ruby dependencies
└── CLAUDE.md           # Documentation for Claude Code
```

## Theme Features

This site uses the [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) theme which provides:

- **Responsive Design** - Mobile-friendly responsive layout
- **Social Media Integration** - Links to Twitter, GitHub, LinkedIn
- **SEO Optimized** - Built-in SEO tags and optimization
- **Blog Features** - Pagination, tags, categories, and post navigation
- **Customizable** - Easy to customize colors, fonts, and layout
- **Fast Loading** - Optimized for performance

## Writing Blog Posts

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.markdown`
2. Add YAML front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   subtitle: "Optional description"
   date: YYYY-MM-DD HH:MM:SS +0530
   tags: [tag1, tag2, tag3]
   cover-img: "/images/cover-image.jpg"  # Optional
   ---
   ```
3. Write your content in Markdown below the front matter

## Deployment

This site is configured for GitHub Pages deployment. Push changes to the `master` branch to deploy automatically.

## Troubleshooting

### Ruby 3.4+ Compatibility Issues

If you encounter errors related to missing gems (csv, logger, base64), they should already be included in the Gemfile. If issues persist:

```bash
gem install csv logger base64
bundle install
```

### SASS Deprecation Warnings

The Minima theme shows deprecation warnings about SASS division operators. These are cosmetic and don't affect functionality.