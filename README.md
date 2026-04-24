# Figurine

Public website workspace for a handmade leather notebook and figurine product site.

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

For product-card or detail images, use `--aspect-ratio 4:5` or `--aspect-ratio 1:1`. Optional private source references can be kept locally and passed with repeated `--reference-image` arguments; they should not be committed.
