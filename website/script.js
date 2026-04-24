const translations = {
  en: {
    navCraft: "Craft",
    navDetails: "Details",
    navBuy: "Buy",
    eyebrow: "One handmade notebook",
    heroTitle: "Patchwork leather, made vivid.",
    heroText:
      "Reclaimed leather scraps become a bright, hand-stitched notebook with the quiet confidence of a luxury object.",
    ctaPrimary: "Reserve yours",
    ctaSecondary: "See details",
    statement:
      "Built from humble offcuts, finished with visible stitches, and kept intentionally imperfect. Every mark is part of the object.",
    detailEyebrow: "Material character",
    detailTitle: "Luxury without sanding away the handmade soul.",
    detailOne: "Mixed leather patches with natural grain and tonal contrast.",
    detailTwo: "Visible hand stitching across every seam.",
    detailThree: "Made-to-order, each piece slightly different.",
    buyEyebrow: "First release",
    buyTitle: "One product. Small batch. Direct order.",
    buyText: "The first batch is prepared by request so the finish, paper, and binding can stay personal.",
    buyButton: "Contact to order",
    footer: "Handmade by Lazying Art."
  },
  zh: {
    navCraft: "工艺",
    navDetails: "细节",
    navBuy: "购买",
    eyebrow: "第一款手作本",
    heroTitle: "百衲皮革，鲜活成册。",
    heroText: "被重新拾起的皮革边角料，经过手缝成为一本明亮、有重量、像奢侈品一样安静的手账。",
    ctaPrimary: "预约订购",
    ctaSecondary: "查看细节",
    statement: "旧料、针脚、划痕和不完美都被保留下来。它不是工厂复制品，而是一件有来处的物。",
    detailEyebrow: "材料性格",
    detailTitle: "高级感，不必磨掉手作的灵魂。",
    detailOne: "多色皮革拼接，保留天然纹理与色差。",
    detailTwo: "每一道接缝都能看见手缝痕迹。",
    detailThree: "按需小批制作，每一本都会有细微差异。",
    buyEyebrow: "第一批",
    buyTitle: "一款产品。小批制作。直接订购。",
    buyText: "第一批按预约制作，封面、内页和装订都可以保持更个人化的选择。",
    buyButton: "联系订购",
    footer: "Lazying Art 手作。"
  },
  ja: {
    navCraft: "クラフト",
    navDetails: "細部",
    navBuy: "購入",
    eyebrow: "最初の手仕事ノート",
    heroTitle: "継ぎ革を、鮮やかな一冊へ。",
    heroText:
      "再生された革の端材を、手縫いで明るく力強いノートに。静かな高級感と手仕事の痕跡をそのまま残しました。",
    ctaPrimary: "予約する",
    ctaSecondary: "細部を見る",
    statement:
      "端材、縫い目、傷、不完全さを隠さず残す。量産品ではなく、ひとつの背景を持った道具です。",
    detailEyebrow: "素材の表情",
    detailTitle: "手仕事の魂を削らないラグジュアリー。",
    detailOne: "色と質感の異なる革を組み合わせたパッチワーク。",
    detailTwo: "すべての継ぎ目に見える手縫いのステッチ。",
    detailThree: "受注制作のため、一冊ごとに少しずつ異なります。",
    buyEyebrow: "ファーストリリース",
    buyTitle: "ひとつの商品。少量制作。直接注文。",
    buyText: "最初のロットは予約制で制作し、仕上げ、紙、綴じ方をより個人的に調整できます。",
    buyButton: "注文について相談",
    footer: "Lazying Art の手仕事。"
  }
};

const languageSelect = document.getElementById("language");
const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language?.toLowerCase().startsWith("zh")
  ? "zh"
  : navigator.language?.toLowerCase().startsWith("ja")
    ? "ja"
    : "en";

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });
  localStorage.setItem("language", language);
  languageSelect.value = language;
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

setLanguage(savedLanguage || browserLanguage);
