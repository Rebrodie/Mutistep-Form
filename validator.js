export default function validator() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phoneNumber = document.querySelector("#number");

  const emailRegex = new RegExp(
    "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );
  const phoneRegex = new RegExp("^[0-9]{10}$");

  function errorMessage(type, message) {
    const errorDiv = document.createElement("div");
    const typeParent = type.parentElement;
    const labels = typeParent.querySelectorAll("div")[0];
    errorDiv.classList.add("error");
    type.style.border = "1px solid hsl(354, 84%, 57%)";
    console.log("called");
    errorDiv.innerText = message;
    labels.appendChild(errorDiv);
  }

  function removeError(type) {
    const errorDiv = document.querySelector(".error");
    if (errorDiv) {
      errorDiv.remove();
      type.style.border = "none";
    }
  }

  function presenceCheck(type) {
    if (type.value === "" || type.value === null) {
      errorMessage(type, `This field is required.`);
      throw new Error(`Please enter your ${type.name}`);
    } else {
      removeError(type);
    }
  }

  function validCheck(test, type) {
    if (!test.test(type.value)) {
      errorMessage(type, `Enter a valid ${type.name}`);
      throw new Error(`Please enter a valid ${type.name}`);
    } else {
      removeError(type);
    }
  }

  try {
    presenceCheck(name);
    presenceCheck(email);
    validCheck(emailRegex, email);
    presenceCheck(phoneNumber);
    validCheck(phoneRegex, phoneNumber);
    return true;
  } catch (error) {
    console.error(error.message);
  }
}
