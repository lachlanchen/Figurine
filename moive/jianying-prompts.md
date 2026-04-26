# Jianying / XYQ Generation Prompts

Use the panda product image as the main reference for every shot:

```text
../website/assets/products/lala-chan-panda-doll/lala-chan-panda-doll-product-v1.webp
```

Use the LazyingArt logo only for the final edit layer, not as generated text:

```text
../website/assets/brand/lazyingart-logo.png
```

## Global Style Prompt

```text
Premium short commercial for a handmade collectible panda doll named Rara-chan / Lala-chan. Preserve the exact panda doll identity from the reference image: round soft white head, black ears, black eye patches, tiny blush, stitched paws, gentle lovable expression, tactile handmade plush and leather-like details. Bright warm studio lighting, cream and soft pastel background, high-end product photography, cute but not childish, cinematic shallow depth of field, clean Apple-like clarity, playful micro-movements, no extra characters, no distorted face, no text, no watermark, no logo generated inside the scene.
```

## Negative Prompt

```text
Do not change the panda identity. No scary expression, no cheap plastic toy, no extra dolls, no people unless requested, no readable text, no fake logos, no watermark, no packaging, no price tag, no dark cyberpunk lighting, no clutter, no broken limbs, no warped ears, no cropped face, no flickering anatomy.
```

## Shot 1 - Wake

Chinese prompt:

```text
使用参考图中的 Rara-chan 熊猫娃娃作为唯一主角。清晨柔和阳光照在奶油色高级工作台上，熊猫娃娃安静坐着，眼睛里有一点温暖反光。镜头缓慢推进，熊猫轻轻歪头，耳朵有非常轻微的可爱弹动。高端手作玩具广告质感，干净明亮，浅景深，产品完整入镜，不要文字，不要水印，不要额外角色。
```

English prompt:

```text
Use the reference Rara-chan panda doll as the only subject. Soft morning light on a warm cream premium studio table. The panda sits quietly with a tiny warm reflection in its eyes. Slow camera push-in, subtle head tilt, tiny ear bounce. High-end handmade collectible toy commercial, clean bright lighting, shallow depth of field, full product visible, no text, no watermark, no extra characters.
```

## Shot 2 - Discover

Chinese prompt:

```text
保持参考图熊猫娃娃完全一致。桌面上出现一粒小小金色光点，像好运一样靠近熊猫。熊猫微微向前看，眼睛被金色光点点亮，表情温柔好奇。镜头轻微从左到右移动，背景干净温暖，产品主体清晰完整。不要生成文字、logo、水印。
```

English prompt:

```text
Preserve the exact panda doll from the reference. A tiny golden dot of light appears on the table like a small piece of luck. The panda leans forward slightly, eyes catching the warm glow, expression gentle and curious. Slow left-to-right camera drift, clean warm background, product sharp and fully visible. No text, no logo, no watermark.
```

## Shot 3 - Mission

Chinese prompt:

```text
Rara-chan 熊猫娃娃抱着一粒小小金色光点，在奶油色桌面上慢慢向镜头方向走来。动作可爱但真实，像柔软手作娃娃被赋予生命，不要夸张卡通。身体有轻微柔软弹性，脚步小而稳， stitched paws 清楚可见。高端产品广告，明亮、干净、温暖。
```

English prompt:

```text
Rara-chan panda doll carries a tiny golden light and gently waddles toward the camera on a cream tabletop. Cute but physically believable, like a soft handmade doll briefly coming alive, not exaggerated cartoon animation. Subtle plush squash, tiny steady steps, stitched paws visible. Premium product commercial, bright, clean, warm.
```

## Shot 4 - Gift

Chinese prompt:

```text
熊猫娃娃把小小金色光点放在桌面上，光点变成温暖的心形闪光。熊猫坐在旁边，像把好运送给观众。镜头轻微环绕，熊猫脸、黑白配色、缝线爪子和柔软材质都清楚可见。高级温暖，背景简洁，不要文字，不要logo。
```

English prompt:

```text
The panda doll places the tiny golden light on the table, and it becomes a warm heart-shaped sparkle. The panda sits beside it as if giving the viewer a little luck. Slight camera orbit, clear view of the panda face, black-and-white markings, stitched paws, and soft handmade texture. Premium warm mood, simple background, no text, no logo.
```

## Shot 5 - End Card Background

Chinese prompt:

```text
生成一个干净的结尾画面背景：Rara-chan 熊猫娃娃完整坐在温暖奶油色背景前，居中偏下，柔和阴影，高级产品摄影质感。顶部和右侧留出干净空白，方便后期放入真实 LazyingArt logo 和购买文字。不要在画面中生成任何文字或logo。
```

English prompt:

```text
Create a clean end-card background: the Rara-chan panda doll sits fully visible against a warm cream background, slightly lower center, soft grounding shadow, premium product photography. Leave clean empty space at the top and right for adding the real LazyingArt logo and purchase caption in editing. Do not generate any text or logo inside the image.
```

## Final Edit Text

Add these as real editor text layers, not generated image text:

```text
Rara-chan is available now.
buy.lazying.art
```
Optional Japanese end card:

```text
ララちゃん、販売中。
buy.lazying.art
```
