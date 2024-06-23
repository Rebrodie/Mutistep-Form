export default function getPlans(getPlan) {
  const plans = [...document.querySelectorAll("[data-plan]")];

  let currentPlanElement = null;

  const toggleSection = document.querySelector("[data-billingToggler]");
  const check = document.getElementById("billing");

  const monthly = toggleSection.querySelector("[data-billing='monthly']");
  const yearly = toggleSection.querySelector("[data-billing='yearly']");

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
  const updatePlan = () => {
    if (!check.checked) {
      Plans(0, 9, true);
      Plans(1, 12, true);
      Plans(2, 15, true);
    } else {
      Plans(0, 90, false);
      Plans(1, 120, false);
      Plans(2, 150, false);
    }
    if (currentPlanElement) {
      const price = parseInt(
        currentPlanElement.querySelector("[data-price]").dataset.price
      );
      logPlan(currentPlanElement.dataset.plan, price);
    }
  };
  function logPlan(plan, price) {
    if (currentPlanElement) {
      getPlan({
        plan: plan,
        price: price,
      });
    }
  }
  // Initial price update based on the default billing period
  updatePlan();

  check.addEventListener("change", updatePlan);

  plans.forEach((plan) => {
    plan.addEventListener("click", function () {
      plans.forEach((p) => p.classList.remove("plan-active"));
      currentPlanElement = plan;
      const price = parseInt(
        currentPlanElement.querySelector("[data-price]").dataset.price
      );
      const currentPlan = plan.dataset.plan;
      console.log("🚀 ~ currentPlan:", currentPlan);
      plan.classList.add("plan-active");
      logPlan(currentPlan, price);
    });
  });
}
