const buttons = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit");
const re_submit = document.querySelector(".rate-again");
const component1 = document.querySelector(".component-1");
const component2 = document.querySelector(".component-2");
const rating = document.querySelector(".notify");

buttons.forEach((btn, index) => {
  let idx = index + 1;

  btn.addEventListener("click", () => {
    rating.innerText = `You selected ${idx} out of ${buttons.length}`;
  });
});

submit.addEventListener("click", () => {
  component1.setAttribute("style", "display:none;");
  component2.setAttribute("style", "display:flex;");
});

re_submit.addEventListener("click", () => {
  component2.setAttribute("style", "display:none;");
  component1.setAttribute("style", "display:flex;");
});
