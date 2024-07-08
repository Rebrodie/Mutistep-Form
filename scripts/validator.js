export default function validator(page) {
  const steps = [...document.querySelectorAll("[data-step]")];
  let type;
  let typeChecked;

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
    errorDiv.innerText = message;
    labels.appendChild(errorDiv);
  }

  function removeError(type) {
    const errorDiv = document.querySelector(".error");
    if (errorDiv) {
      errorDiv.remove();
    }
    type.style.border = "none";
  }

  function presenceCheck(type) {
    if (type.value === "" || type.value === null) {
      errorMessage(type, `This field is required.`);
      throw new Error(`Please enter your ${type.name}`);
    } else {
      removeError(type);
    }
  }

  function isSelected(type, typeChecked) {
    if (typeChecked.length <= 0) {
      type.forEach((e) => {
        e.parentElement.style.border = "1px solid hsl(354, 84%, 57%)";
      });
      throw new Error("Please select one");
    } else {
      type.forEach((e) => {
        removeError(e.parentElement);
      });
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
    console.log(page);
    switch (page) {
      case 1:
        type = [...steps[0].querySelectorAll("input")];
        type.forEach((type) => {
          presenceCheck(type);
        });
        validCheck(emailRegex, type[1]);
        validCheck(phoneRegex, type[2]);
        return true;
      case 2:
        type = steps[1].querySelectorAll("input[type=radio]");
        typeChecked = steps[1].querySelectorAll("input[type=radio]:checked");
        isSelected(type, typeChecked);
        return true;
      case 3:
        type = steps[2].querySelectorAll("input[type=checkbox]");
        typeChecked = steps[2].querySelectorAll("input[type=checkbox]:checked");
        isSelected(type, typeChecked);
        return true;
      default:
        return true;
        break;
    }
  } catch (error) {
    console.error(error.message);
  }
}
