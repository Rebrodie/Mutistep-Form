import nextPage from "./nextPage.js";
import getPlans from "./getPlan.js";

nextPage();
function handlePlanChange(newPlan) {
  console.log(`The current plan is now: ${newPlan}`);
  // Perform other actions with the new plan
}
function handlePriceChange(newPrice) {
  console.log(`The current price is now: ${newPrice}`);
  // Perform other actions with the new plan
}

getPlans(handlePlanChange, handlePriceChange);
