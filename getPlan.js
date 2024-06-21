export default function getPlans(onPlanChange, onPriceChange) {
  const plans = [...document.querySelectorAll("[data-plan]")];

  const arcade = plans[0];
  const arcadePrice = arcade.querySelector("[data-price]");

  const advanced = plans[1];
  const advancedPrice = advanced.querySelector("[data-price]");

  const pro = plans[2];
  const proPrice = pro.querySelector("[data-price]");

  const toggleSection = document.querySelector("[data-billingToggler]");
  const check = document.getElementById("billing");

  // Set initial billing state
  check.checked = true;

  const monthly = toggleSection.querySelector("[data-billing='monthly']");
  const yearly = toggleSection.querySelector("[data-billing='yearly']");

  let currentPlanElement = null;

  // Function to update prices based on the current billing period
  const updatePrices = () => {
    if (check.checked) {
      arcadePrice.dataset.price = 9;
      arcadePrice.textContent = `$${arcadePrice.dataset.price}/mo`;
      advancedPrice.dataset.price = 15;
      advancedPrice.textContent = `$${advancedPrice.dataset.price}/mo`;
      proPrice.dataset.price = 12;
      proPrice.textContent = `$${proPrice.dataset.price}/mo`;
      monthly.classList.add("selectedPlan");
      yearly.classList.remove("selectedPlan");
      console.log("Billing Monthly");
    } else {
      arcadePrice.dataset.price = 90;
      arcadePrice.textContent = `$${arcadePrice.dataset.price}/yr`;
      advancedPrice.dataset.price = 120;
      advancedPrice.textContent = `$${advancedPrice.dataset.price}/yr`;
      proPrice.dataset.price = 150;
      proPrice.textContent = `$${proPrice.dataset.price}/yr`;
      monthly.classList.remove("selectedPlan");
      yearly.classList.add("selectedPlan");
      console.log("Billing Yearly");
    }

    if (currentPlanElement) {
      const price = parseInt(
        currentPlanElement.querySelector("[data-price]").dataset.price
      );
      if (onPriceChange) {
        onPriceChange(price);
      }
    }
  };

  // Initial price update based on the default billing period
  updatePrices();

  check.addEventListener("change", updatePrices);

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((p) => p.classList.remove("plan-active"));
      currentPlanElement = plan;
      const currentPlan = plan.dataset.plan;
      plan.classList.add("plan-active");

      const price = parseInt(plan.querySelector("[data-price]").dataset.price);
      if (onPlanChange) {
        onPlanChange(currentPlan);
      }
      if (onPriceChange) {
        onPriceChange(price);
      }
    });
  });
}
