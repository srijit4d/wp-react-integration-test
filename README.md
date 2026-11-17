# WordPress Docker Setup

Local WordPress environment using Docker Compose.

## Prerequisites

- Docker Desktop installed on macOS
- Docker Desktop running

If `docker` is not found in a new terminal, ensure your `~/.zshrc` includes:

```zsh
# Docker Desktop CLI
export PATH="$HOME/Applications/Docker.app/Contents/Resources/bin:$PATH"
```

Then reload shell config:

```zsh
source ~/.zshrc
```

## Project Location

```zsh
cd "/Users/srijit.ghosh/Library/CloudStorage/OneDrive-FOURTHDIMENSION,INC/wordpress test"
```

## Start the Stack

```zsh
docker compose up -d
```

## Check Running Services

```zsh
docker compose ps
```

## View Logs

```zsh
docker compose logs -f
```

Or for WordPress only:

```zsh
docker compose logs -f wordpress
```

## Stop the Stack

```zsh
docker compose down
```

## Access WordPress

- URL: http://localhost:8080

On first run, complete the WordPress installation in the browser.

## Gutenberg React Block Setup

A custom Gutenberg block plugin has been scaffolded at:

```zsh
wp-content/plugins/fd-react-block
```

### Activate the Plugin

1. Open `http://localhost:8080/wp-admin`
2. Go to **Plugins**
3. Activate **FD React Block**

### React Development (Watch Mode)

Run this in a separate terminal while Docker is up:

```zsh
cd "/Users/srijit.ghosh/Library/CloudStorage/OneDrive-FOURTHDIMENSION,INC/wordpress test/wp-content/plugins/fd-react-block"
npm start
```

### Production Build

```zsh
cd "/Users/srijit.ghosh/Library/CloudStorage/OneDrive-FOURTHDIMENSION,INC/wordpress test/wp-content/plugins/fd-react-block"
npm run build
```

### Where to Edit

- Block source: `wp-content/plugins/fd-react-block/src/fd-react-block/`
- Main editor entry: `wp-content/plugins/fd-react-block/src/fd-react-block/index.js`
- Block metadata: `wp-content/plugins/fd-react-block/src/fd-react-block/block.json`

After activating the plugin, open the WordPress editor and insert the **FD React Block** block.

### New Custom Blocks

Two additional custom Gutenberg blocks are available in the block inserter:

- **FAQ Block** (`fourthdimension/faq-block`)
- **Timeline Block** (`fourthdimension/timeline-block`)

Source locations:

- `wp-content/plugins/fd-react-block/src/faq-block/`
- `wp-content/plugins/fd-react-block/src/timeline-block/`

Usage:

1. Open any page/post in the Block Editor.
2. Insert **FAQ Block** or **Timeline Block**.
3. Edit block title and items directly in the editor.
4. Use **Add item** / **Remove item** controls to manage entries.

## Rett Site Pages and Templates

Custom block templates were added to `twentytwentyfive` for these page slugs:

- `homepage` → `templates/page-homepage.html`
- `about` → `templates/page-about.html`
- `contact` → `templates/page-contact.html`
- `what-is-rett-syndrome` → `templates/page-what-is-rett-syndrome.html`
- `navigating-life-with-rett` → `templates/page-navigating-life-with-rett.html`
- `rett-resources` → `templates/page-rett-resources.html`

The blog listing template (`Rett Stories`) is customized in:

- `templates/home.html`

### WordPress Admin Setup

1. Go to `http://localhost:8080/wp-admin`
2. Create these pages with matching titles/slugs:
	- Homepage (`homepage`)
	- About (`about`)
	- Contact (`contact`)
	- What is Rett Syndrome (`what-is-rett-syndrome`)
	- Navigating Life with Rett (`navigating-life-with-rett`)
	- Rett Resources (`rett-resources`)
	- Rett Stories (`rett-stories`) ← this should be the posts page
3. Go to **Settings → Reading**
	- Set **Your homepage displays** to **A static page**
	- Set **Homepage** = `Homepage`
	- Set **Posts page** = `Rett Stories`

Once slugs match, WordPress will automatically apply the corresponding `page-{slug}.html` templates.
