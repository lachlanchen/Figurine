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
- [website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-office-writing-v1.jpg](website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-office-writing-v1.jpg) - lifestyle detail image generated from the clean product reference
- [website/assets/products/patchwork-leather-notebook/product.json](website/assets/products/patchwork-leather-notebook/product.json) - product metadata
- [website/stripe-config.js](website/stripe-config.js) - public Stripe Payment Link config; keep it empty until `../Stripe` exports a real Payment Link URL

The current hero product image was generated from:

- Source/reference: `conversation_with_my_sister/muted-patchwork-leather-notebook-front.jpeg`
- Local Nano Banana run folder, ignored by git: `generated/product-image-optimization/patchwork-leather-notebook-clean-v2`

The current lifestyle detail image was generated from:

- Source/reference: `website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg`
- Prompt: [prompts/patchwork-leather-notebook-office-lifestyle.txt](prompts/patchwork-leather-notebook-office-lifestyle.txt)
- Local Nano Banana run folder, ignored by git: `generated/product-image-optimization/patchwork-leather-notebook-office-writing-v1`

## Stripe Checkout

The storefront is wired for a Stripe Payment Link via [website/stripe-config.js](website/stripe-config.js). The separate helper repo is initialized at `../Stripe`; fill `../Stripe/.env`, then run:

```bash
cd ../Stripe
npm run create:payment-link
npm run export:figurine
```

The first product is configured at original price `$998` and launch price `$888` using `usd`. Product settings live in `../Stripe/config/patchwork-leather-notebook.json`; checkout allows quantity changes and promotion codes. Real Stripe keys stay in `../Stripe/.env` and are not committed.

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
