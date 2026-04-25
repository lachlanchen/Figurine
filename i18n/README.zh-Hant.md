[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](../figs/banner.png)](https://lazying.art)

# Figurine

LazyingArt 的多語言靜態商店，用來展示和銷售手作物件：百衲皮革手帳、Rara-chan / Lala-chan 熊貓娃娃、Lucky Paw 皮革掛件，以及可選 AI 配件。

## 產品

| 產品 | 結帳 |
| --- | --- |
| 百衲皮革手帳 | A4 `USD 198`，B5 `USD 168`，A5 `USD 148`，A6 `USD 118` |
| Rara-chan / Lala-chan 熊貓娃娃 | `USD 198` |
| Lucky Paw 皮革掛件 | `USD 98`，可選內外顏色 |
| AI 配件 | 額外 `USD 300`，用於錄音、聊天和 AI 筆記 |

優惠碼 `LAZY` 在 Stripe 結帳中提供 `12%` 折扣。手作商品交付週期約 `1` 到 `1.5` 個月。

## 網站與 i18n

靜態網站位於 [website/](../website/)，並透過 GitHub Pages 部署到 `buy.lazying.art`。頁面支援英語、簡體中文、繁體中文、日語、韓語、越南語、阿拉伯語、法語、西班牙語、德語和俄語。翻譯鍵與智慧換行邏輯位於 [website/script.js](../website/script.js)。

## Stripe

Stripe 結帳連結由 `../Stripe` 輔助倉庫生成。密鑰保存在 `../Stripe/.env`，公開配置匯出到 [website/stripe-config.js](../website/stripe-config.js)。詳情見 [docs/stripe-checkout-and-smart-wrap.md](../docs/stripe-checkout-and-smart-wrap.md)。

## 支持

[GitHub Sponsors](https://github.com/sponsors/lachlanchen) · [Donate](https://chat.lazying.art/donate) · [PayPal](https://paypal.me/RongzhouChen) · [Stripe](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400)
