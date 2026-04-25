[English](../README.md) · [العربية](README.ar.md) · [Español](README.es.md) · [Français](README.fr.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Tiếng Việt](README.vi.md) · [中文 (简体)](README.zh-Hans.md) · [中文（繁體）](README.zh-Hant.md) · [Deutsch](README.de.md) · [Русский](README.ru.md)

[![LazyingArt banner](../figs/banner.png)](https://lazying.art)

# Figurine

LazyingArt 的多语言静态商店，用来展示和销售手作物件：百衲皮革手账、Rara-chan / Lala-chan 熊猫娃娃、Lucky Paw 皮革挂件，以及可选 AI 配件。

## 产品

| 产品 | 结账 |
| --- | --- |
| 百衲皮革手账 | A4 `USD 198`，B5 `USD 168`，A5 `USD 148`，A6 `USD 118` |
| Rara-chan / Lala-chan 熊猫娃娃 | `USD 198` |
| Lucky Paw 皮革挂件 | `USD 98`，可选内外颜色 |
| AI 配件 | 额外 `USD 300`，用于录音、聊天和 AI 笔记 |

优惠码 `LAZY` 在 Stripe 结账中提供 `12%` 折扣。手作商品交付周期约 `1` 到 `1.5` 个月。

## 网站与 i18n

静态网站位于 [website/](../website/)，并通过 GitHub Pages 部署到 `buy.lazying.art`。页面支持英语、简体中文、繁体中文、日语、韩语、越南语、阿拉伯语、法语、西班牙语、德语和俄语。翻译键与智能换行逻辑位于 [website/script.js](../website/script.js)。

## Stripe

Stripe 结账链接由 `../Stripe` 辅助仓库生成。密钥保存在 `../Stripe/.env`，公开配置导出到 [website/stripe-config.js](../website/stripe-config.js)。详情见 [docs/stripe-checkout-and-smart-wrap.md](../docs/stripe-checkout-and-smart-wrap.md)。

## 支持

[GitHub Sponsors](https://github.com/sponsors/lachlanchen) · [Donate](https://chat.lazying.art/donate) · [PayPal](https://paypal.me/RongzhouChen) · [Stripe](https://buy.stripe.com/aFadR8gIaflgfQV6T4fw400)
