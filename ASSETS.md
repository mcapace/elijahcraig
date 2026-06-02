# Asset Inventory

Client source files live in the project root. Optimized web assets are in `public/assets/`.

## Source files (project root)

| File | Description | Used on site |
|------|-------------|--------------|
| `EC_BarrelProof_Rye_CaseTucker_2026.png` | BPR case hero photography (Case Tucker, 2026) | Hero background |
| `EC_BRANDSTANDARD_2024.pdf` | Official brand standards (colors, logo usage, typography) | Reference — not deployed |
| `screencapture-prnewswire-...-whisky-of-the-year-...pdf` | WA 2025 Whiskey of the Year press release | Copy reference |
| `screencapture-prnewswire-...-launches-...barrel-proof-...pdf` | BPR launch press release | Copy reference |

## Public assets (`public/assets/`)

| Path | Source |
|------|--------|
| `hero/barrel-proof-rye-hero-desktop.jpg` | Optimized from `EC_BarrelProof_Rye_CaseTucker_2026.png` |
| `hero/barrel-proof-rye-hero-mobile.jpg` | Optimized from `EC_BarrelProof_Rye_CaseTucker_2026.png` |
| `products/barrel-proof-rye-bottle.png` | Official C925 bottle from [elijahcraig.com](https://elijahcraig.com) |
| `logos/elijah-craig-logo-white.svg` | Official white logo from [elijahcraig.com](https://elijahcraig.com) |
| `logos/elijah-craig-logo.svg` | Official logo from [elijahcraig.com](https://elijahcraig.com) |
| `logos/WA_WHITE-removebg-preview.png` | Whisky Advocate co-brand |
| `logos/WA_BLUE-removebg-preview.png` | Whisky Advocate co-brand (color) |

## Brand colors (from elijahcraig.com)

| Token | Hex | Usage |
|-------|-----|-------|
| Burgundy | `#7A303F` | Primary accent |
| Olive | `#51623A` | Secondary |
| Slate | `#465966` | Tertiary |
| Navy | `#273D5C` | Deep accent |
| Cream | `#F5F0E8` | Body text |

## Sync after asset updates

```bash
npm run sync-assets
```

## Still needed (per campaign proposal)

- **WA #1 Whisky of the Year video (AV)** — add file or Vimeo/YouTube URL to `src/lib/content.ts` → `videos`
