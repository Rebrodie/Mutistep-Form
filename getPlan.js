export default function getPlans() {
  const plans = document.querySelectorAll("[data-plan]");
  const arcade = plans[0];
  const advanced = plans[1];
  const Pro = plans[2];

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      console.log(plan);
      if (plan.dataset.plan === "Arcade") {
        plan.classList.remove("plan-active");
        plan.classList.add("plan-active");
        console.log("arcade");
      } else if (plan.dataset.plan === "Advanced") {
        plan.classList.remove("plan-active");
        plan.classList.add("plan-active");
        console.log("Advanced");
      } else if (plan.dataset.plan === "Pro") {
        plan.classList.remove("plan-active");
        plan.classList.add("plan-active");
        console.log("Pro");
      } else if (plan.classList.contains("plan-active")) {
        plan.classList.remove();
      }
    });
  });
}
