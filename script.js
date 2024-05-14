const wrapperTag = document.getElementsByClassName("wrapper")[0];
const paraTag = document.getElementsByClassName("para-text")[0];
// const yesBtnTag = document.getElementsByClassName('yes-btn')[0];
// const noBtnTag = document.getElementsById('no-btn') ;
const noBtnTag = document.querySelector("#no-btn");
const yesBtnTag = document.getElementById("yes-btn");

const wrapperRact = wrapperTag.getBoundingClientRect();
const noBtnRact = noBtnTag.getBoundingClientRect();


yesBtnTag.addEventListener("click", () => {
  paraTag.innerHTML = "Sure!";
});

// noBtnTag.addEventListener("click", () => {
//   paraTag.innerHTML = "Why?";
// });

noBtnTag.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRact.width - noBtnRact.width)) + 1;

  const j =
    Math.floor(Math.random() * (wrapperRact.height - noBtnRact.height)) + 1;
  noBtnTag.style.left = i + "px";
  noBtnTag.style.top = j + "px";
});


// noBtnTag.addEventListener("click", () => {
//   paraTag.innerHTML = 'Really!';
// })

// yesBtnTag.addEventListener("mouseover", () => {
//   // console.log('hello')
//   const i = Math.floor(Math.random() * 100) +1;
//   const j = Math.floor(Math.random() * 100) +1;

//   yesBtnTag.style.top = j + "px";
//   yesBtnTag.style.left = i + "px";
// })