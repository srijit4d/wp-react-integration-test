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
