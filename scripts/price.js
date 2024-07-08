export default function updatePrice(isMonthly) {
  return function updatePrice() {
    const plans = [...document.querySelectorAll("[data-plan]")];

    const monthly = document.querySelector("[data-billing='monthly']");
    const yearly = document.querySelector("[data-billing='yearly']");
    isMonthly = !isMonthly;

    const Plans = (planIndex, price) => {
      const planInput = document.querySelectorAll("[data-price]")[planIndex];
      console.log("🚀 ~ Plans ~ planInput:", planInput);
      const planParent = planInput.parentElement;
      console.log("🚀 ~ Plans ~ planParent:", planParent);
      const priceTag = planParent.querySelectorAll(".price")[0];
      console.log("🚀 ~ Plans ~ priceTag:", priceTag);
      if (isMonthly) {
        planInput.value = price;
        priceTag.textContent = `$${price}/mo`;
      } else {
        planInput.value = price;
        priceTag.textContent = `$${price}/yr`;
      }
      monthly.classList.toggle("selectedPricing");
      yearly.classList.toggle("selectedPricing");
    };

    const Addons = (planIndex, price) => {
      const addonInput = document
        .querySelectorAll("[data-addOn]")
        [planIndex].querySelectorAll("input")[0];
      console.log("🚀 ~ Addons ~ addonInput:", addonInput);
      const addonParent = addonInput.parentElement;
      console.log("🚀 ~ Addons ~ addonParent:", addonParent);
      const priceTag = addonParent.querySelectorAll(".price")[0];
      console.log("🚀 ~ Addons ~ priceTag:", priceTag);
      if (isMonthly) {
        addonInput.value = price;
        priceTag.textContent = `$${price}/mo`;
      } else {
        addonInput.value = price;
        priceTag.textContent = `$${price}/yr`;
      }
    };

    const updatePrice = () => {
      if (isMonthly) {
        Plans(0, 9);
        Plans(1, 12);
        Plans(2, 15);
        Addons(0, 1);
        Addons(1, 2);
        Addons(2, 2);
      } else {
        Plans(0, 90);
        Plans(1, 120);
        Plans(2, 150);
        Addons(0, 10);
        Addons(1, 20);
        Addons(2, 20);
      }
    };

    updatePrice();
  };
}
