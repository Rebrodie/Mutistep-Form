export default function getPlans(log) {
  const plans = [...document.querySelectorAll("[data-plan]")];

  let currentPlanElement = null;

  const toggleSection = document.querySelector("[data-billingToggler]");
  const check = document.getElementById("billing");

  const monthly = toggleSection.querySelector("[data-billing='monthly']");
  const yearly = toggleSection.querySelector("[data-billing='yearly']");
  let isMonthly = true;

  function logPlan(plan, price, isMonthly) {
    this.plan = plan;
    this.price = price;
    this.isMonthly = isMonthly;
  }

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

  const updatePlan = () => {
    if (!check.checked) {
      Plans(0, 9, true);
      Plans(1, 12, true);
      Plans(2, 15, true);
      isMonthly = true;
    } else {
      Plans(0, 90, false);
      Plans(1, 120, false);
      Plans(2, 150, false);
      isMonthly = false;
    }
    if (currentPlanElement) {
      const price = parseInt(
        currentPlanElement.querySelector("[data-price]").dataset.price
      );
      log = new logPlan(currentPlanElement.dataset.plan, price, isMonthly);
    }
  };

  check.addEventListener("change", updatePlan);

  plans.forEach((plan) => {
    plan.addEventListener("click", function () {
      plans.forEach((p) => p.classList.remove("plan-active"));
      currentPlanElement = plan;
      const price = parseInt(
        currentPlanElement.querySelector("[data-price]").dataset.price
      );
      plan.classList.add("plan-active");
      log = new logPlan(currentPlanElement.dataset.plan, price, isMonthly);
    });
  });

  updatePlan();
}
