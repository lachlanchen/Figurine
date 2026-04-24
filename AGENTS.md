# Repository Guidelines

## Project Structure & Module Organization

This repository is a lightweight public product-site workspace for handmade leather notebook assets and AI image generation.

- `scripts/`: executable tooling. `nanobanana_image_gen.py` is the Nano Banana 2 image-generation runner.
- `prompts/`: reusable prompt presets for hero, product-card, and detail images.
- `conversation_with_my_sister/`: optional private local source media. Ignored by Git.
- `references/`: optional private local transcript and screen recording references. Ignored by Git.
- `docs/`: tool notes and operational handoff documentation.
- `generated/`: local image-generation outputs. This directory is ignored and should not be treated as source.

## Build, Test, and Development Commands

Run commands from the repository root.

```bash
python3 -m py_compile scripts/nanobanana_image_gen.py
```

Checks Python syntax without calling the API.

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --dry-run
```

Writes the prompt, manifest, and redacted payload without spending API credits.

```bash
python3 scripts/nanobanana_image_gen.py \
  --prompt-file prompts/handmade-leather-notebook-site-hero.txt \
  --output-dir generated/site-hero \
  --resume
```

Submits and polls a real Nano Banana 2 image job when `GRSAI` is configured.

## Coding Style & Naming Conventions

Use Python 3, standard-library dependencies where practical, and 4-space indentation. Keep scripts standalone unless shared code becomes necessary. Use descriptive kebab-case for asset filenames, for example `colorful-patchwork-leather-notebook-front-01.jpeg`, and snake_case for Python functions and variables.

## Testing Guidelines

There is no formal test suite yet. For script changes, run `py_compile` and at least one `--dry-run`. For prompt changes, inspect `generated/*/request_payload.redacted.json` to confirm `model`, `host`, `aspectRatio`, and reference images are correct.

## Commit & Pull Request Guidelines

No Git history is available in this folder, so use clear imperative commit messages such as `Add Nano Banana product image prompts`. Pull requests should summarize changed files, include dry-run or syntax-check results, and attach generated image samples or screenshots when visual output changes.

## Security & Configuration Tips

Never commit real API keys, private conversations, or source reference media. Use `GRSAI` in the shell or a local `.env`; `.env`, `generated/`, `conversation_with_my_sister/`, and `references/` are ignored. Keep payload files redacted when sharing logs.
