import updatePrice from "./scripts/price.js";
import page from "./scripts/page.js";
import User from "./scripts/user.js";

const Valuables = {
  plans: {
    arcade: {
      name: "Arcade",
      price: 9,
    },
    advanced: {
      name: "advance",
      price: 12,
    },
    pro: {
      name: "pro",
      price: 15,
    },
  },
  addOns: {
    onlineService: {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: 1,
    },
    largerStorage: {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    customizableProfile: {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  },
};

const arcade = document.getElementById("arcade");
const advanced = document.getElementById("advanced");
const pro = document.getElementById("pro");

const online = document.getElementById("online");
const storage = document.getElementById("storage");
const custom = document.getElementById("custom");

let isMonthly = true;

const check = document.getElementById("billing");

check.addEventListener("change", updatePrice(isMonthly));
page();
