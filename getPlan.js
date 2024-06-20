export default function getPlans(onPlanChange) {
  const plans = [...document.querySelectorAll("[data-plan]")];
  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      console.log(plan);
      plans.forEach((p) => {
        p.classList.remove("plan-active");
      });
      let currentPlan = "";
      if (plan.dataset.plan === "Arcade") {
        plan.classList.toggle("plan-active");
        currentPlan = "Arcade";
        console.log(currentPlan);
      } else if (plan.dataset.plan === "Advanced") {
        plan.classList.toggle("plan-active");
        currentPlan = "Advanced";
        console.log(currentPlan);
      } else if (plan.dataset.plan === "Pro") {
        plan.classList.toggle("plan-active");
        currentPlan = "Pro";
        console.log(currentPlan);
      }
      if (onPlanChange) {
        console.log("called");
        onPlanChange(currentPlan);
      } else {
        console.log("not called");
      }
    });
  });
}
