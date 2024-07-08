import validator from "./validator.js";

export default function skipPage() {
  const multiStepForm = document.querySelector("[data-multistepForm]");
  const mainForm = multiStepForm.firstElementChild;
  const formSteps = [...mainForm.querySelectorAll("[data-step]")];
  const nextButton = document.querySelector(".next");
  const backButton = document.querySelector(".back");
  const submitButton = document.querySelector(".submit");

  let currentStepIndex = formSteps.findIndex((step) =>
    step.classList.contains("active")
  );

  let formNumbers = [...document.querySelectorAll("[data-page]")];
  let currentFormNumberIndex = formNumbers.findIndex((step) =>
    step.classList.contains("pg-active")
  );

  if (currentStepIndex === -1 && currentFormNumberIndex === -1) {
    currentStepIndex = 0;
    currentFormNumberIndex = 0;
    formSteps[currentStepIndex].classList.toggle("active");
    formNumbers[currentFormNumberIndex].classList.toggle("pg-active");
  }

  const updateFormState = () => {
    formSteps[currentStepIndex].classList.toggle("active");
    formNumbers[currentFormNumberIndex].classList.toggle("pg-active");
  };

  const checkCurrentStep = () => {
    switch (currentStepIndex) {
      case 0:
        backButton.parentElement.style.justifyContent = "flex-end";
        backButton.classList.add("hidden");
        break;
      case 1:
        console.log("page 2");
        backButton.parentElement.style.justifyContent = "space-between";
        backButton.classList.remove("hidden");
        break;
      case 2:
        submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
        break;
      case 3:
        nextButton.classList.add("hidden");
        submitButton.classList.remove("hidden");
        break;
      default:
        break;
    }
  };

  checkCurrentStep();

  function skipPage(action) {
    return function Page() {
      const skip = () => {
        switch (action) {
          case "next":
            updateFormState();
            currentStepIndex++;
            currentFormNumberIndex++;
            updateFormState();
            checkCurrentStep();
            break;
          case "back":
            updateFormState();
            currentStepIndex--;
            currentFormNumberIndex--;
            updateFormState();
            checkCurrentStep();
            break;
        }
      };

      switch (currentStepIndex) {
        case 0:
          if (validator(1)) {
            skip();
          }
          break;
        case 1:
          if (validator(2)) {
            skip();
          }
          break;
        case 2:
          if (validator(3)) {
            skip();
          }
          break;
        case 3:
          if (validator()) {
            skip();
          }
          break;
      }
    };
  }

  nextButton.addEventListener("click", skipPage("next"));
  backButton.addEventListener("click", skipPage("back"));
  submitButton.addEventListener("click", skipPage("submit"));
}
