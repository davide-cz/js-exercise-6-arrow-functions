window.addEventListener("load", () => {
  const body = document.body;
  const div1 = document.createElement(`div`);
  body.appendChild(div1);
  div1.addEventListener(`click`, function () {
    if (this.classList.contains(`rosso`)) {
      this.classList.remove(`rosso`);
      this.classList.remove(`blu`);
    } else if (this.classList.contains(`blu`)) {
      this.classList.remove(`blu`);
      this.classList.add(`rosso`);
    } else {
      this.classList.add(`blu`);
    }
  });
});
