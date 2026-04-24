#!/usr/bin/env python3
"""Prepare a Nano Banana product-image optimization prompt."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


DEFAULT_PROMPT = """Respect the exact product in the reference image: a handmade patchwork leather notebook with visible hand stitching, mixed leather scraps, worn grain, uneven edges, and one-of-a-kind craft character.

Create a clean high-end ecommerce product image. Remove the room background, cables, screen, hands, desk clutter, shadows from the original environment, and any distracting objects. Keep the notebook's true patchwork layout, leather colors, stitches, proportions, and handmade imperfections.

Place the notebook on a premium warm off-white studio background with subtle natural shadow, soft directional light, and luxury product photography polish. The result should feel like a flagship product image for an Apple-like product page: clean, quiet, vivid, tactile, and expensive, while still honest to the handmade object.

No readable text, no logos, no watermark, no extra props, no fake labels, no altered product design, no plastic-looking leather, no distorted geometry."""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-image", required=True, type=Path)
    parser.add_argument("--output-dir", default=Path("generated/product-image-optimization"), type=Path)
    parser.add_argument("--aspect-ratio", default="4:5")
    parser.add_argument("--image-size", default="2K")
    parser.add_argument("--output-stem", default="patchwork-leather-notebook-studio")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    source = args.source_image.expanduser().resolve()
    if not source.exists():
        raise SystemExit(f"source image not found: {source}")

    output_dir = args.output_dir.expanduser().resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    prompt_path = output_dir / "optimize-product-image-prompt.txt"
    manifest_path = output_dir / "prompt_manifest.json"
    command_path = output_dir / "run_nanobanana.sh"

    prompt_path.write_text(DEFAULT_PROMPT + "\n", encoding="utf-8")
    manifest_path.write_text(
        json.dumps(
            {
                "source_image": str(source),
                "prompt_file": str(prompt_path),
                "aspect_ratio": args.aspect_ratio,
                "image_size": args.image_size,
                "output_stem": args.output_stem,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    command = (
        "#!/usr/bin/env bash\n"
        "set -euo pipefail\n"
        f"python3 scripts/nanobanana_image_gen.py \\\n"
        f"  --prompt-file {prompt_path} \\\n"
        f"  --reference-image {source} \\\n"
        f"  --aspect-ratio {args.aspect_ratio} \\\n"
        f"  --image-size {args.image_size} \\\n"
        f"  --output-stem {args.output_stem} \\\n"
        f"  --output-dir {output_dir} \\\n"
        "  --resume\n"
    )
    command_path.write_text(command, encoding="utf-8")
    command_path.chmod(0o755)

    print(prompt_path)
    print(command_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
