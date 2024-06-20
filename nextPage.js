export default function nextStep() {
  const multiStepForm = document.querySelector("[data-multistepForm]");
  const mainForm = multiStepForm.firstElementChild;
  const form = [...mainForm.querySelectorAll("[data-step]")];
  const nextBtn = [...document.querySelectorAll(".next")][0];
  const back = [...document.querySelectorAll(".back")][0];
  let currentForm =
    form[form.findIndex((step) => step.classList.contains("active"))];
  let formNumber = [...document.querySelectorAll("[data-page]")];
  let currentFormNumber =
    formNumber[
      formNumber.findIndex((step) => step.classList.contains("pg-active"))
    ];
  if (currentForm === undefined && currentFormNumber === undefined) {
    currentFormNumber = formNumber[0];
    currentFormNumber.classList.toggle("pg-active");
    currentForm = form[0];
    currentForm.classList.toggle("active");
  }
  const next = () => {
    currentForm.classList.remove("active");
    currentFormNumber.classList.remove("pg-active");
    currentForm = form[form.indexOf(currentForm) + 1];
    currentFormNumber = formNumber[formNumber.indexOf(currentFormNumber) + 1];
    currentForm.classList.toggle("active");
    currentFormNumber.classList.toggle("pg-active");
  };
  if (!currentForm === form[0]) {
    back.style.display = "block";
  }
  nextBtn.addEventListener("click", () => {
    next();
  });
}