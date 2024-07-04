import nextPage from "./nextPage.js";
import getPlans from "./getPlan.js";
import validator from "./validator.js";

class User {
  constructor(name, email, password, plan) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.plan = plan;
  }
}

nextPage(validator);
getPlans();
