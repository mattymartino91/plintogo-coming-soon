# PLIN TO GO — Website

Premium static website for PLIN TO GO, ready for GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository (for example `plintogo-site`).
2. Upload **all files and the `assets` folder** from this package to the repository root.
3. In GitHub go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will provide the live URL after deployment.

## Custom domain

To use `plintogo.com`, add the custom domain in **Settings → Pages → Custom domain**, then update the domain DNS records as shown by GitHub.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive design and visual system
- `script.js` — language switcher, mobile menu and reveal animations
- `assets/` — optimized images, transparent logo and favicon

The site is fully static and does not require a build step, Node.js or a framework.
