export default function updatePrice() {
  const plans = [...document.querySelectorAll("[data-plan]")];

  const monthly = document.querySelector("[data-billing='monthly']");
  const yearly = document.querySelector("[data-billing='yearly']");
  let isMonthly = true;

  if (isMonthly) {
    monthly.classList.add("selectedPlan");
  }

  function Plans(planIndex, price) {
    const planInput = document.querySelectorAll("[data-price]")[planIndex];
    const planParent = planInput.parentElement;
    const priceTag = planParent.querySelectorAll(".price")[0];
    console.log("🚀 ~ Plans ~ priceTag:", priceTag);
    if (isMonthly) {
      priceTag.textContent = `$${price}/mo`;
    } else {
      priceTag.textContent = `$${price}/yr`;
    }
    monthly.classList.toggle("selectedPlan");
    yearly.classList.toggle("selectedPlan");
  }
  return function () {
    isMonthly = !isMonthly;
    if (isMonthly) {
      Plans(0, 9);
      Plans(1, 12);
      Plans(2, 15);
    } else {
      Plans(0, 90);
      Plans(1, 120);
      Plans(2, 150);
    }
  };
}
