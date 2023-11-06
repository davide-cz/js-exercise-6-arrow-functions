window.addEventListener("load", () => {
  const body = document.body;
  const div1 = document.createElement(`div`);
  body.appendChild(div1);
  div1.addEventListener("mouseover", function () {
    div1.classList.add(`blu`);
  });
  div1.addEventListener("mouseout", function () {
    div1.classList.add(`rosso`);
    div1.classList.remove(`blu`);
  });
  div1.addEventListener("click", function () {
    div1.classList.remove(`blu`);
    div1.classList.remove(`rosso`);
  });
});
