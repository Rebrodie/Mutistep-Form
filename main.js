import nextPage from "./nextPage.js";
import getPlans from "./getPlan.js";

nextPage();
function getPlan(newPlan) {
  console.log(`The current plan is now: ${newPlan.plan} and the price is: ${newPlan.price}`);
}
getPlans(getPlan);
