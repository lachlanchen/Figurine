[English](README.md) · [العربية](i18n/README.ar.md) · [Español](i18n/README.es.md) · [Français](i18n/README.fr.md) · [日本語](i18n/README.ja.md) · [한국어](i18n/README.ko.md) · [Tiếng Việt](i18n/README.vi.md) · [中文 (简体)](i18n/README.zh-Hans.md) · [中文（繁體）](i18n/README.zh-Hant.md) · [Deutsch](i18n/README.de.md) · [Русский](i18n/README.ru.md)

[![LazyingArt banner](figs/banner.png)](https://lazying.art)

# Figurine

Multilingual LazyingArt storefront for handmade figurine-style objects: patchwork leather notebooks, Rara-chan / Lala-chan panda dolls, Lucky Paw leather pendants, and optional AI accessories.

[![Website](https://img.shields.io/badge/Website-buy.lazying.art-111827?style=for-the-badge&logo=googlechrome&logoColor=white)](https://buy.lazying.art)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=for-the-badge&logo=githubpages&logoColor=white)](https://github.com/lachlanchen/Figurine/actions)
[![Stripe](https://img.shields.io/badge/Checkout-Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](docs/stripe-checkout-and-smart-wrap.md)

## Products

| Product | Checkout |
| --- | --- |
| Patchwork Leather Notebook | A4 `USD 198`, B5 `USD 168`, A5 `USD 148`, A6 `USD 118` |
| Rara-chan / Lala-chan Panda Doll | `USD 198` |
| Lucky Paw Leather Pendant | `USD 98`, with outer and inner color options |
| AI Accessories | Add `USD 300` for recording, chat, and AI notes |

Promotion code `LAZY` applies `12%` off through Stripe Payment Links. Handmade product lead time is about `1` to `1.5` months.

## Website

The public static site lives in [website/](website/) and deploys to GitHub Pages through [.github/workflows/deploy-website.yml](.github/workflows/deploy-website.yml).

- [website/index.html](website/index.html) - storefront markup and metadata
- [website/styles.css](website/styles.css) - responsive visual design
- [website/script.js](website/script.js) - product tabs, smart text wrapping, i18n, and checkout routing
- [website/stripe-config.js](website/stripe-config.js) - exported public Stripe Payment Link config
- [website/manifest.webmanifest](website/manifest.webmanifest) and [website/service-worker.js](website/service-worker.js) - PWA metadata and cache

## Multilingual i18n

The storefront supports English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Arabic, French, Spanish, German, and Russian. Translation keys live in [website/script.js](website/script.js). Smart heading copy uses phrase arrays so Chinese, Japanese, and long Latin-script headings wrap at better visual positions on mobile.

README translations live in [i18n/](i18n/) and mirror the language switcher used by the `lachlanchen` profile repository.

## Stripe Checkout

Stripe products, prices, promotion codes, and payment links are generated from the helper repo at `../Stripe`.

```bash
cd ../Stripe
npm run create:payment-link -- --force
npm run export:figurine
```

Secrets stay in `../Stripe/.env`. Product configuration stays in `../Stripe/config/patchwork-leather-notebook.json`. See [docs/stripe-checkout-and-smart-wrap.md](docs/stripe-checkout-and-smart-wrap.md) for live links and checkout behavior.

## Local Development

```bash
python3 -m http.server 4173 -d website
```

Then open `http://127.0.0.1:4173/`.

## Support

| Donate | GitHub Sponsors | PayPal | Stripe |
| --- | --- | --- | --- |
| [![Donate](https://img.shields.io/badge/Donate-LazyingArt-0EA5E9?style=for-the-badge&logo=kofi&logoColor=white)](https://chat.lazying.art/donate) | [![Sponsors](https://img.shields.io/badge/Sponsor-lachlanchen-EA4AAA?style=for-the-badge&logo=githubsponsors&logoColor=white)](https://github.com/sponsors/lachlanchen) | [![PayPal](https://img.shields.io/badge/PayPal-RongzhouChen-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/RongzhouChen) | [![Stripe](https://img.shields.io/badge/Stripe-Donate-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400) |

Built by **LazyingArt LLC**.
