# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal blog and portfolio website for Bala Krishna, hosted at https://krishnaclouds.github.io. The site uses the Minima theme and focuses on personal writing, book reviews, and professional musings.

## Architecture

- **Jekyll Static Site Generator**: Uses Jekyll 4.3.3 with the Minima theme
- **Content Structure**:
  - `_posts/`: Blog posts in Markdown format with YAML front matter
  - `about.markdown`: About page with embedded HTML and CSS
  - `index.markdown`: Homepage using the default home layout
  - `images/`: Static assets including profile photos
- **Configuration**: `_config.yml` contains site settings, personal info, and theme configuration
- **Dependencies**: Managed via Gemfile with Ruby gems

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build
```

### Content Management
- Blog posts should be placed in `_posts/` with naming convention: `YYYY-MM-DD-title.markdown`
- Posts require YAML front matter with `layout`, `title`, `date`, and `categories`
- Images should be stored in `images/` directory

## Site Configuration

Key configuration in `_config.yml`:
- Site title: "Musings by Bala Krishna"  
- Base URL: https://krishnaclouds.github.io
- Theme: minima
- Social links: Twitter (@koffeecuptales) and GitHub (@krishnaclouds)

## Content Style

- Blog posts mix embedded HTML with inline CSS for custom styling
- Heavy use of custom CSS within individual posts for unique layouts
- Responsive design with mobile breakpoints
- Color scheme emphasizes blues (#0066cc) and oranges (#ff6600)

## Deployment

The site appears to be configured for GitHub Pages deployment based on the repository structure and CNAME file present.