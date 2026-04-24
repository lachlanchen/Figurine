const translations = {
  en: {
    navCraft: "Craft",
    navDetails: "Details",
    navBuy: "Buy",
    eyebrow: "One handmade notebook",
    heroTitle: ["Patchwork", "leather,", "made vivid."],
    heroText: [
      "Reclaimed leather",
      "scraps become",
      "a bright, hand-stitched",
      "notebook",
      "with the quiet confidence",
      "of a luxury object."
    ],
    ctaPrimary: "Buy now",
    ctaPrimaryFallback: "Reserve yours",
    ctaSecondary: "See details",
    statement: [
      "Built from humble",
      "offcuts,",
      "finished with",
      "visible stitches,",
      "and kept intentionally",
      "imperfect.",
      "Every mark is",
      "part of the object."
    ],
    detailEyebrow: "Material character",
    detailTitle: ["Luxury without", "sanding away", "the handmade soul."],
    detailOne: "Mixed leather patches with natural grain and tonal contrast.",
    detailTwo: "Visible hand stitching across every seam.",
    detailThree: "Made-to-order, each piece slightly different.",
    galleryEyebrow: "Color study",
    galleryTitle: ["Two views", "of the patchwork face."],
    buyEyebrow: "First release",
    buyTitle: ["One product.", "Small batch.", "Direct order."],
    buyText: "The first batch is prepared by request so the finish, paper, and binding can stay personal.",
    priceCurrent: "Launch price $888",
    priceOriginal: "Original $998",
    buyButton: "Buy for $888",
    buyButtonFallback: "Contact to order",
    footer: "Handmade by LazyingArt."
  },
  zh: {
    navCraft: "工艺",
    navDetails: "细节",
    navBuy: "购买",
    eyebrow: "第一款手作本",
    heroTitle: ["百衲皮革，", "鲜活成册。"],
    heroText: ["被重新拾起的皮革边角料，", "经过手缝成为一本明亮、", "有重量、像奢侈品一样", "安静的手账。"],
    ctaPrimary: "立即购买",
    ctaPrimaryFallback: "预约订购",
    ctaSecondary: "查看细节",
    statement: ["旧料、针脚、划痕和不完美", "都被保留下来。", "它不是工厂复制品，", "而是一件有来处的物。"],
    detailEyebrow: "材料性格",
    detailTitle: ["高级感，", "不必磨掉", "手作的灵魂。"],
    detailOne: "多色皮革拼接，保留天然纹理与色差。",
    detailTwo: "每一道接缝都能看见手缝痕迹。",
    detailThree: "按需小批制作，每一本都会有细微差异。",
    galleryEyebrow: "色彩研究",
    galleryTitle: ["两张正面图，", "看清拼接表情。"],
    buyEyebrow: "第一批",
    buyTitle: ["一款产品。", "小批制作。", "直接订购。"],
    buyText: "第一批按预约制作，封面、内页和装订都可以保持更个人化的选择。",
    priceCurrent: "首发价 $888",
    priceOriginal: "原价 $998",
    buyButton: "$888 购买",
    buyButtonFallback: "联系订购",
    footer: "LazyingArt 手作。"
  },
  ja: {
    navCraft: "クラフト",
    navDetails: "細部",
    navBuy: "購入",
    eyebrow: "最初の手仕事ノート",
    heroTitle: ["継ぎ革を、", "鮮やかな", "一冊へ。"],
    heroText:
      [
        "再生された革の端材を、",
        "手縫いで明るく",
        "力強いノートに。",
        "静かな高級感と",
        "手仕事の痕跡を",
        "そのまま残しました。"
      ],
    ctaPrimary: "購入する",
    ctaPrimaryFallback: "予約する",
    ctaSecondary: "細部を見る",
    statement: ["端材、縫い目、傷、", "不完全さを隠さず残す。", "量産品ではなく、", "背景を持った道具です。"],
    detailEyebrow: "素材の表情",
    detailTitle: ["手仕事の魂を", "削らない", "ラグジュアリー。"],
    detailOne: "色と質感の異なる革を組み合わせたパッチワーク。",
    detailTwo: "すべての継ぎ目に見える手縫いのステッチ。",
    detailThree: "受注制作のため、一冊ごとに少しずつ異なります。",
    galleryEyebrow: "色の表情",
    galleryTitle: ["正面から見る", "パッチワークの表情。"],
    buyEyebrow: "ファーストリリース",
    buyTitle: ["ひとつの商品。", "少量制作。", "直接注文。"],
    buyText: "最初のロットは予約制で制作し、仕上げ、紙、綴じ方をより個人的に調整できます。",
    priceCurrent: "発売価格 $888",
    priceOriginal: "通常価格 $998",
    buyButton: "$888 で購入",
    buyButtonFallback: "注文について相談",
    footer: "LazyingArt の手仕事。"
  }
};

const languageSelect = document.getElementById("language");
const fallbackOrderHref = "mailto:hello@lazying.art?subject=Patchwork%20Leather%20Notebook";
const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language?.toLowerCase().startsWith("zh")
  ? "zh"
  : navigator.language?.toLowerCase().startsWith("ja")
    ? "ja"
    : "en";
let smartTextFrame = 0;

function renderLocalizedText(node, value, language) {
  node.style.fontSize = "";
  node.textContent = "";

  if (!Array.isArray(value)) {
    node.textContent = value;
    return;
  }

  const separator = language === "en" ? " " : "\u200b";
  value.forEach((chunk, index) => {
    const span = document.createElement("span");
    span.className = "text-chunk";
    span.textContent = chunk;
    node.append(span);

    if (separator && index < value.length - 1) {
      node.append(document.createTextNode(separator));
    }
  });
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) {
      renderLocalizedText(node, dictionary[key], language);
    }
  });
  localStorage.setItem("language", language);
  languageSelect.value = language;
  scheduleSmartTextFit();
}

function applyCheckoutLink() {
  const dictionary = translations[languageSelect.value] || translations.en;
  const paymentLink =
    typeof window.LAZYING_STRIPE_PAYMENT_LINK === "string"
      ? window.LAZYING_STRIPE_PAYMENT_LINK.trim()
      : "";
  const href = paymentLink.startsWith("https://") ? paymentLink : fallbackOrderHref;

  document.querySelectorAll("[data-checkout-link]").forEach((link) => {
    link.href = href;
    if (href === fallbackOrderHref) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
      const fallbackKey = link.getAttribute("data-i18n-fallback");
      if (fallbackKey && dictionary[fallbackKey]) {
        link.textContent = dictionary[fallbackKey];
      }
    } else {
      link.target = "_blank";
      link.rel = "noopener";
    }
  });
}

function fitSmartText() {
  document.querySelectorAll(".smart-text").forEach((node) => {
    node.style.fontSize = "";

    const chunks = [...node.querySelectorAll(".text-chunk")];
    if (!chunks.length) {
      return;
    }

    const availableWidth = node.clientWidth;
    const widestChunk = Math.max(...chunks.map((chunk) => chunk.scrollWidth));
    if (!availableWidth || widestChunk <= availableWidth) {
      return;
    }

    const currentSize = Number.parseFloat(getComputedStyle(node).fontSize);
    const scale = Math.max(0.56, (availableWidth - 2) / widestChunk);
    node.style.fontSize = `${Math.floor(currentSize * scale)}px`;
  });
}

function scheduleSmartTextFit() {
  window.cancelAnimationFrame(smartTextFrame);
  smartTextFrame = window.requestAnimationFrame(fitSmartText);
}

function initProductCarousel() {
  document.querySelectorAll("[data-product-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".carousel-slide")];
    const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    let activeIndex = 0;
    let touchStartX = 0;

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
    }

    prev?.addEventListener("click", () => showSlide(activeIndex - 1));
    next?.addEventListener("click", () => showSlide(activeIndex + 1));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => showSlide(Number(dot.dataset.carouselDot)));
    });
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        showSlide(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        showSlide(activeIndex + 1);
      }
    });
    carousel.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.touches[0]?.clientX || 0;
      },
      { passive: true }
    );
    carousel.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0]?.clientX || 0;
        const delta = touchEndX - touchStartX;
        if (Math.abs(delta) > 42) {
          showSlide(activeIndex + (delta < 0 ? 1 : -1));
        }
      },
      { passive: true }
    );

    carousel.tabIndex = 0;
    showSlide(0);
  });
}

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  applyCheckoutLink();
});

setLanguage(translations[urlLanguage] ? urlLanguage : savedLanguage || browserLanguage);
applyCheckoutLink();
initProductCarousel();
window.addEventListener("resize", scheduleSmartTextFit);
document.fonts?.ready.then(scheduleSmartTextFit);
