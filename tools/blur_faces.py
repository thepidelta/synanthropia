from __future__ import annotations

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image


PYTHON_ROOT = Path(r"C:\Users\User\AppData\Local\Programs\Python\Python312")
DEFACE_EXE = PYTHON_ROOT / "Scripts" / "deface.exe"
DEFAULT_SOURCE = Path(r"C:\Users\User\Documents\GitHub\synanthropia\images\actions\history")
DEFAULT_OUTPUT = Path.home() / "Pictures" / "synanthropia-actions-blurred" / "history"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Batch blur faces in the actions photo archive.")
    parser.add_argument("--source-dir", default=str(DEFAULT_SOURCE))
    parser.add_argument("--output-dir", default=str(DEFAULT_OUTPUT))
    parser.add_argument("--mode", choices=["blur", "mosaic", "solid"], default="blur")
    parser.add_argument("--threshold", type=float, default=0.2)
    parser.add_argument("--mask-scale", type=float, default=1.3)
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--keep-metadata", action="store_true")
    parser.add_argument("--overwrite", action="store_true")
    return parser.parse_args()


def iter_files(source_dir: Path) -> list[Path]:
    files = [
        path for path in source_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
    ]
    return sorted(files)


def run_deface(input_path: Path, output_path: Path, mode: str, threshold: float, mask_scale: float, keep_metadata: bool) -> None:
    command = [
        str(DEFACE_EXE),
        str(input_path),
        "--output",
        str(output_path),
        "--replacewith",
        mode,
        "--thresh",
        str(threshold),
        "--mask-scale",
        str(mask_scale),
    ]

    if keep_metadata:
        command.append("--keep-metadata")

    result = subprocess.run(command, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="", file=sys.stderr)

    if result.returncode != 0:
        raise RuntimeError(f"deface failed for {input_path}")

    if not output_path.exists() or output_path.stat().st_size == 0:
        raise RuntimeError(f"deface did not produce output for {input_path}")


def process_file(source_path: Path, source_root: Path, output_root: Path, args: argparse.Namespace) -> None:
    relative_path = source_path.relative_to(source_root)
    target_path = output_root / relative_path
    target_path.parent.mkdir(parents=True, exist_ok=True)

    if target_path.exists() and not args.overwrite:
        print(f"Skipping existing file: {target_path}")
        return

    print(f"Processing: {relative_path}")

    if source_path.suffix.lower() == ".webp":
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_dir_path = Path(temp_dir)
            temp_input = temp_dir_path / "input.png"
            temp_output = temp_dir_path / "output.png"

            with Image.open(source_path) as image:
                image.convert("RGB").save(temp_input, format="PNG")

            run_deface(temp_input, temp_output, args.mode, args.threshold, args.mask_scale, False)

            with Image.open(temp_output) as image:
                image.save(target_path, format="WEBP", quality=90, method=6)
        return

    run_deface(source_path, target_path, args.mode, args.threshold, args.mask_scale, args.keep_metadata)


def main() -> int:
    args = parse_args()
    source_dir = Path(args.source_dir).resolve()
    output_dir = Path(args.output_dir).resolve()

    if not DEFACE_EXE.exists():
        print(f"deface.exe was not found at {DEFACE_EXE}", file=sys.stderr)
        return 1

    if not source_dir.exists():
        print(f"Source folder was not found: {source_dir}", file=sys.stderr)
        return 1

    files = iter_files(source_dir)
    if args.limit > 0:
        files = files[:args.limit]

    if not files:
        print(f"No supported image files found under {source_dir}")
        return 0

    output_dir.mkdir(parents=True, exist_ok=True)

    processed = 0
    for file_path in files:
        process_file(file_path, source_dir, output_dir, args)
        processed += 1

    print(f"Finished. Processed {processed} file(s) into {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())