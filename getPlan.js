export default function getPlans(onPlanChange, onPriceChange) {
  const plans = [...document.querySelectorAll("[data-plan]")];

  const toggleSection = document.querySelector("[data-billingToggler]");
  const check = document.getElementById("billing");

  const monthly = toggleSection.querySelector("[data-billing='monthly']");
  const yearly = toggleSection.querySelector("[data-billing='yearly']");

  let currentPlanElement = null;

  function Plans(planIndex, price, isMonthly) {
    const priceElement = plans[planIndex].querySelector("[data-price]");
    priceElement.dataset.price = price;
    if (isMonthly) {
      priceElement.textContent = `$${price}/mo`;
    } else {
      priceElement.textContent = `$${price}/yr`;
    }
    monthly.classList.toggle("selectedPlan");
    yearly.classList.toggle("selectedPlan");
  }

  // Function to update prices based on the current billing period
  const updatePrices = () => {
    if (!check.checked) {
      Plans(0, 9, true);
      Plans(1, 12, true);
      Plans(2, 15, true);

      console.log("Billing Monthly");
    } else {
      Plans(0, 90, false);
      Plans(1, 120, false);
      Plans(2, 150, false);

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
