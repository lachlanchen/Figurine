# Figurine

Public website workspace for the `buy.lazying.art` storefront by LazyingArt. The first product is a handmade patchwork leather notebook.

## Website

The static site lives in [website/](website/) and is deployed to GitHub Pages by [.github/workflows/deploy-website.yml](.github/workflows/deploy-website.yml).

Key files:

- [website/index.html](website/index.html) - storefront markup and metadata
- [website/styles.css](website/styles.css) - responsive visual design
- [website/script.js](website/script.js) - English, Simplified Chinese, Traditional Chinese, and Japanese i18n
- [website/CNAME](website/CNAME) - custom domain: `buy.lazying.art`

Product and brand assets:

- [website/assets/brand/lazyingart-logo.png](website/assets/brand/lazyingart-logo.png) - LazyingArt logo used in the header
- [website/assets/brand/lazyingart-icon.png](website/assets/brand/lazyingart-icon.png) - favicon
- [website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg](website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg) - current hero product image
- [website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-office-writing-v1.jpg](website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-office-writing-v1.jpg) - lifestyle detail image generated from the clean product reference
- [website/assets/products/patchwork-leather-notebook/colorful-patchwork-leather-notebook-front-01.webp](website/assets/products/patchwork-leather-notebook/colorful-patchwork-leather-notebook-front-01.webp) - carousel front view
- [website/assets/products/patchwork-leather-notebook/colorful-patchwork-leather-notebook-front-02.webp](website/assets/products/patchwork-leather-notebook/colorful-patchwork-leather-notebook-front-02.webp) - carousel alternate front view
- [website/assets/products/patchwork-leather-notebook/product.json](website/assets/products/patchwork-leather-notebook/product.json) - product metadata
- [website/stripe-config.js](website/stripe-config.js) - public Stripe Payment Link config for localized USD, CNY, and HKD checkout links
- [docs/stripe-checkout-and-smart-wrap.md](docs/stripe-checkout-and-smart-wrap.md) - checkout links, promotion code, regeneration workflow, and smart text wrapping notes

The current hero product image was generated from:

- Source/reference: `conversation_with_my_sister/muted-patchwork-leather-notebook-front.jpeg`
- Local Nano Banana run folder, ignored by git: `generated/product-image-optimization/patchwork-leather-notebook-clean-v2`

The current lifestyle detail image was generated from:

- Source/reference: `website/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg`
- Prompt: [prompts/patchwork-leather-notebook-office-lifestyle.txt](prompts/patchwork-leather-notebook-office-lifestyle.txt)
- Local Nano Banana run folder, ignored by git: `generated/product-image-optimization/patchwork-leather-notebook-office-writing-v1`

## Stripe Checkout

The storefront is wired for Stripe Payment Links via [website/stripe-config.js](website/stripe-config.js). The separate helper repo is initialized at `../Stripe`; fill `../Stripe/.env`, then run:

```bash
cd ../Stripe
npm run create:payment-link
npm run export:figurine
```

The first product uses original prices `HKD 998`, `CNY 998`, and `USD 148`. Promotion code `LAZY` applies a `0.88x` checkout price (`12%` off), shown on the homepage as `HKD 878.24`, `CNY 878.24`, and `USD 130.24`. Product settings live in `../Stripe/config/patchwork-leather-notebook.json`; checkout allows quantity changes, promotion codes, billing and shipping address collection, customer names, and phone numbers. Real Stripe keys stay in `../Stripe/.env` and are not committed. Full operational notes are in [docs/stripe-checkout-and-smart-wrap.md](docs/stripe-checkout-and-smart-wrap.md).

## Smart Text Wrapping

Hero and section headings use phrase-level i18n arrays in [website/script.js](website/script.js). Each phrase is rendered as a non-breaking `.text-chunk`; Chinese and Japanese chunks are separated with zero-width spaces so wrapping happens at chosen phrase boundaries. `fitSmartText()` reduces heading size only when the widest chunk would overflow. See [docs/stripe-checkout-and-smart-wrap.md](docs/stripe-checkout-and-smart-wrap.md) before changing multilingual display copy.

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
