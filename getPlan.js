export default function getPlans() {
  const plans = [...document.querySelectorAll("[data-plan]")];

  const toggleSection = document.querySelector("[data-billingToggler]");
  const check = document.getElementById("billing");

  const monthly = toggleSection.querySelector("[data-billing='monthly']");
  const yearly = toggleSection.querySelector("[data-billing='yearly']");
  let isMonthly = true;

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
  };

  plans.forEach((plan) => {
    plan.addEventListener("click", function () {
      plans.forEach((p) => p.classList.remove("plan-active"));
      plan.classList.add("plan-active");
    });
  });

  check.addEventListener("change", updatePlan);

  updatePlan();
}
