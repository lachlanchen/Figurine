# Figurine

Public website workspace for the `buy.lazying.art` storefront by LazyingArt. The first product is a handmade patchwork leather notebook.

## Website

The static site lives in [website/](website/) and is deployed to GitHub Pages by [.github/workflows/deploy-website.yml](.github/workflows/deploy-website.yml).

Key files:

- [website/index.html](website/index.html) - storefront markup and metadata
- [website/styles.css](website/styles.css) - responsive visual design
- [website/script.js](website/script.js) - English, Chinese, and Japanese i18n
- [website/CNAME](website/CNAME) - custom domain: `buy.lazying.art`

Product and brand assets:

- [website/assets/brand/lazyingart-logo.png](website/assets/brand/lazyingart-logo.png) - LazyingArt logo used in the header
- [website/assets/brand/lazyingart-icon.png](website/assets/brand/lazyingart-icon.png) - favicon
- [website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg](website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg) - current hero product image
- [website/assets/products/patchwork-leather-notebook/product.json](website/assets/products/patchwork-leather-notebook/product.json) - product metadata

The current hero product image was generated from:

- Source/reference: `conversation_with_my_sister/muted-patchwork-leather-notebook-front.jpeg`
- Local Nano Banana run folder, ignored by git: `generated/product-image-optimization/patchwork-leather-notebook-clean-v2`

## Nano Banana 2 Image Tool

The local image-generation runner is:

- [scripts/nanobanana_image_gen.py](scripts/nanobanana_image_gen.py)

It uses the GRS AI global host by default:

- `https://grsaiapi.com`
- model: `nano-banana-2`

Set credentials with either:

```bash
export GRSAI=sk-your-grsai-api-key
```

or create a local `.env` from `.env.example`.

Dry-run a website hero prompt without spending API credits:

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --dry-run
```

Generate the image when the key is available:

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --resume
```

Regenerate the current clean product image from the original notebook reference:

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/optimize-patchwork-leather-notebook-product-image.txt \
  --reference-image conversation_with_my_sister/muted-patchwork-leather-notebook-front.jpeg \
  --model nano-banana-2 \
  --aspect-ratio 4:5 \
  --image-size 2K \
  --output-stem patchwork-leather-notebook-luxury-clean-v2 \
  --output-dir generated/product-image-optimization/patchwork-leather-notebook-clean-v2 \
  --resume
```

For product-card or detail images, use `--aspect-ratio 4:5` or `--aspect-ratio 1:1`. Optional private source references can be kept locally and passed with repeated `--reference-image` arguments; they should not be committed.
