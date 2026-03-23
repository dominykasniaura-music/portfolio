# Dominykas Niaura site v1

A Vite + React portfolio site prepared for GitHub and Netlify preview.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select the GitHub repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

Netlify should also detect these settings from `netlify.toml`.

## Notes

- Images are already included in `src/assets`.
- The current version has one fully filled project page and placeholder pages for the others.
- The social share image is currently the performance photo used as `public/og-image.jpg`.
