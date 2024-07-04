export default function nextStep(validator) {
  const multiStepForm = document.querySelector("[data-multistepForm]");
  const mainForm = multiStepForm.firstElementChild;
  const formSteps = [...mainForm.querySelectorAll("[data-step]")];
  const nextButton = document.querySelector(".next");
  const backButton = document.querySelector(".back");

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
    if (currentStepIndex === 0) {
      backButton.parentElement.style.justifyContent = "flex-end";
      backButton.classList.toggle("hidden");
    } else {
      backButton.parentElement.style.justifyContent = "space-between";
      backButton.classList.remove("hidden");
    }
  };

  const next = (action) => {
    return function next() {
      if (action === "next") {
        if (validator() === true) {
          updateFormState();
          currentStepIndex++;
          currentFormNumberIndex++;
          updateFormState();
          checkCurrentStep();
        }
      } else if (action === "back") {
        updateFormState();
        currentStepIndex--;
        currentFormNumberIndex--;
        updateFormState();
        checkCurrentStep();
      }
    };
  };

  nextButton.addEventListener("click", next("next"));
  backButton.addEventListener("click", next("back"));
}
