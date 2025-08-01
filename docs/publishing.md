# Publishing to GitHub Pages

This guide walks through the steps to publish the rencfs website to GitHub Pages.

## Prerequisites

- [ ] Ensure you have admin access to the repository
- [ ] The repository must be public (or you need GitHub Pro for private repos)

## Initial Setup (One-time)

### 1. Enable GitHub Pages

- [ ] Go to your repository on GitHub
- [ ] Navigate to **Settings** → **Pages** (in the left sidebar)
- [ ] Under **Source**, select **GitHub Actions**
- [ ] Click **Save**

### 2. Verify Repository Name

- [ ] If your repository is named `[username].github.io`, the site will be available at `https://[username].github.io/`
- [ ] For any other repository name (like `rencfs-website`), it will be at `https://[username].github.io/[repository-name]/`

## Deployment

### Automatic Deployment

- [ ] Simply push to the `main` branch
- [ ] GitHub Actions will automatically build and deploy
- [ ] Check the Actions tab for build status

### Manual Deployment

- [ ] Go to **Actions** tab in your repository
- [ ] Select **Deploy to GitHub Pages** workflow
- [ ] Click **Run workflow** → **Run workflow**

## Post-Deployment Checklist

- [ ] Wait 2-5 minutes for deployment to complete
- [ ] Visit your site at `https://[username].github.io/rencfs-website/`
- [ ] Test navigation between pages (Features, Documentation, etc.)
- [ ] Verify all routes work correctly (refresh on any page should work)

## Troubleshooting

### Build Failures

If the GitHub Actions build fails:

1. Check the Actions tab for error messages
2. Common issues:
   - Missing `npm ci` instead of `npm install` in CI
   - TypeScript errors - run `npm run build` locally to debug
   - Missing dependencies - ensure `package-lock.json` is committed

### 404 Errors

If you get 404 errors on routes:

1. Ensure GitHub Pages source is set to "GitHub Actions"
2. Check that `public/404.html` exists
3. Verify the `pathSegmentsToKeep = 1` in 404.html matches your base path depth

### Assets Not Loading

If CSS/JS files don't load:

1. Check the base path in `vite.config.ts`
2. For custom domains, you may need to adjust `BASE_URL` in the workflow

## Custom Domain (Optional)

To use a custom domain:

1. [ ] Add a `CNAME` file to the `public/` directory with your domain
2. [ ] Configure DNS records as per [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
3. [ ] Update `BASE_URL` in workflow to `/` instead of `/rencfs-website/`

## Local Testing

To test the GitHub Pages build locally:

```bash
# Install dependencies
npm install

# Generate types and build with GitHub Pages config
cp worker-configuration.d.ts.template worker-configuration.d.ts
BASE_URL=/rencfs-website/ npm run build

# Preview the build
npm run preview
```

Note: The preview won't have the exact same routing as GitHub Pages, but you can verify the build output.