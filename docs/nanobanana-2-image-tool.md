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

## API Reference

Hosts:

- Global: `https://grsaiapi.com`
- China: `https://grsai.dakka.com.cn`

Use `Host + Path`, for example:

```text
https://grsaiapi.com/v1/draw/nano-banana
```

The API also supports the Gemini official request format by replacing the base URL with a GRS AI host and changing model names such as `gemini-2.5-flash-image` to `nano-banana-fast`.

### Generate Image

```http
POST /v1/draw/nano-banana
Content-Type: application/json
Authorization: Bearer <GRSAI_KEY>
```

Request:

```json
{
  "model": "nano-banana-2",
  "prompt": "Clean high-end product image of the reference notebook",
  "aspectRatio": "4:5",
  "imageSize": "2K",
  "urls": ["https://example.com/reference.png"],
  "webHook": "-1",
  "shutProgress": false
}
```

Parameters:

- `model` required string. Supported values include `nano-banana-2`, `nano-banana-2-cl`, `nano-banana-2-4k-cl`, `nano-banana-fast`, `nano-banana`, `nano-banana-pro`, `nano-banana-pro-vt`, `nano-banana-pro-cl`, `nano-banana-pro-vip`, and `nano-banana-pro-4k-vip`.
- `prompt` required string. Describe the desired image or edit.
- `urls` optional array. Reference image URLs or Base64/data URI images.
- `aspectRatio` optional string. Supported: `auto`, `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3`, `5:4`, `4:5`, `21:9`. Nano Banana 2 variants also support `1:4`, `4:1`, `1:8`, and `8:1`.
- `imageSize` optional string. Use `1K`, `2K`, or `4K` depending on model support.
- `webHook` optional string. Omit for stream response, pass a callback URL for POST callbacks, or pass `-1` to return an id for polling.
- `shutProgress` optional boolean. When true, progress messages are suppressed and only the final result is returned; most useful with a webhook.

When `webHook` is `-1`, the submit response returns an id:

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": "task-id"
  }
}
```

### Poll Result

```http
POST /v1/draw/result
Content-Type: application/json
Authorization: Bearer <GRSAI_KEY>
```

Request:

```json
{
  "id": "task-id"
}
```

Response:

```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "id": "task-id",
    "results": [
      {
        "url": "https://example.com/generated-image.jpg",
        "content": "Prompt or generated response content"
      }
    ],
    "progress": 100,
    "status": "succeeded",
    "failure_reason": "",
    "error": ""
  }
}
```

Status values are `running`, `succeeded`, and `failed`. `failure_reason` may include `input_moderation`, `output_moderation`, or `error`; retrying can help for transient `error` failures.

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
