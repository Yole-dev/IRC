'use strict';

const ratingState = document.querySelector('.ratingState');
const thankYouState = document.querySelector('.thankYouState');
const submitBtn = document.querySelector('.submit');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const ratingText = document.querySelector('.ratingText');
let rating;
//button arrays
const btnArr = [btn1, btn2, btn3, btn4, btn5]

//default setting for thankYouState to display none
thankYouState.style.display = 'none';

//button click function
//achieved by looping over the btnArr array using the forEach method
btnArr.forEach(function(el, i, arr) {
    const btnClick = el.addEventListener('click', function() {
        el.style.background = 'hsl(25, 97%, 53%)';
        el.style.color = 'white';
        rating = i + 1;
        ratingText.innerHTML = `You selected ${rating} out of 5`;
    });
    

    if (i >= 0+1) {
        btnClick 
    } else if(i === 0) {
        rating = 0;
        ratingText.innerHTML = `You selected ${rating} out of 5`;
    }

    console.log(btnClick === btnClick)
});


//toggling states with the submit button
submitBtn.addEventListener('click', function() {
    thankYouState.style.display = 'flex';
    ratingState.style.display = 'none';
    submitBtn.style.color = 'hsl(25, 97%, 53%)';
    submitBtn.style.fontWeight = '200';
    submitBtn.style.background = 'white';
});

