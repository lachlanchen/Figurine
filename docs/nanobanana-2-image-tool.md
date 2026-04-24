# Nano Banana 2 Image Tool

This repo contains a local adaptation of the Nano Banana 2 runner copied from:

- `../LazyEarn/Video2Book/scripts/book_cover_nanobanana.py`

The implementation keeps the proven mechanics:

- reads `GRSAI` from the environment or local `.env`
- submits to `POST /v1/draw/nano-banana`
- polls `POST /v1/draw/result`
- saves prompt, redacted payload, submit response, result response, manifest, and downloaded image

The product prompt layer is changed for a global ecommerce site selling handmade leather notebooks with rough, distressed, patchwork craft styling.

## Defaults

| Setting | Value |
| --- | --- |
| Host | `https://grsaiapi.com` |
| Model | `nano-banana-2` |
| Aspect ratio | `16:9` |
| Image size | `2K` |
| Output stem | `handmade_notebook_image` |

## Useful Commands

Hero image dry run:

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --dry-run
```

Hero image generation:

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --resume
```

Product-card image from CLI fields:

```bash
python3 scripts/nanobanana_image_gen.py \
  --site-use "product-card image for a global ecommerce catalog" \
  --aspect-ratio 4:5 \
  --composition "single handmade patchwork leather notebook on raw linen, front cover visible, soft side light" \
  --reference-image path/to/private-reference-image.jpeg \
  --output-dir generated/product-card-patchwork \
  --resume
```

Detail image:

```bash
python3 scripts/nanobanana_image_gen.py \
  --site-use "close-up detail image for a product page" \
  --aspect-ratio 1:1 \
  --composition "macro close-up of stitches, leather grain, worn edges, and patch seams" \
  --reference-image path/to/private-reference-image.jpeg \
  --output-dir generated/detail-stitching \
  --resume
```

Use `--dry-run` first when tuning prompts.
