`use strict`;

const ratingState = document.querySelector(`.ratingState`);
const thankYouState = document.querySelector(`.thankYouState`);
const submitBtn = document.querySelector(`.submit`);
const btn = document.querySelectorAll(`.btn`);

//setting the thankYouState to display none
thankYouState.style.display = `none`;

//button click event
btn.addEventListener('click', function() {
    btn.style.background = `hsl(25, 97%, 53%)`;
    btn.style.color = `white`;
});

//toggling states with the submit button
submitBtn.addEventListener('click', function() {
    thankYouState.style.display = `flex`;
    ratingState.style.display = `none`;
    submitBtn.style.color = `hsl(25, 97%, 53%)`;
    submitBtn.style.fontWeight = `200`;
    submitBtn.style.background = `white`;
});

console.log(btn);