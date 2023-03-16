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

//button click event
// ;

btnArr.forEach(function(el, i) {
    if (i === 0) {
        btn1.addEventListener('click', function() {
                btn1.style.background = 'hsl(25, 97%, 53%)';
                btn1.style.color = 'white';
                rating = i + 1;
                ratingText.innerHTML = `You selected ${rating} out of 5`;
          })
    } else if(i === 1) {
        btn2.addEventListener('click', function() {
            btn2.style.background = 'hsl(25, 97%, 53%)';
            btn2.style.color = 'white';
            rating = i + 1;
            ratingText.innerHTML = `You selected ${rating} out of 5`;
      })
    } else if(i === 2) {
        btn3.addEventListener('click', function() {
            btn3.style.background = 'hsl(25, 97%, 53%)';
            btn3.style.color = 'white';
            rating = i + 1;
            ratingText.innerHTML = `You selected ${rating} out of 5`;
      })
    } else if(i === 3) {
        btn4.addEventListener('click', function() {
            btn4.style.background = 'hsl(25, 97%, 53%)';
            btn4.style.color = 'white';
            rating = i + 1;
            ratingText.innerHTML = `You selected ${rating} out of 5`;
      })
    } else if(i === 4) {
        btn5.addEventListener('click', function() {
            btn5.style.background = 'hsl(25, 97%, 53%)';
            btn5.style.color = 'white';
            rating = i + 1;
            ratingText.innerHTML = `You selected ${rating} out of 5`;
      })
    }
});


//toggling states with the submit button
submitBtn.addEventListener('click', function() {
    thankYouState.style.display = 'flex';
    ratingState.style.display = 'none';
    submitBtn.style.color = 'hsl(25, 97%, 53%)';
    submitBtn.style.fontWeight = '200';
    submitBtn.style.background = 'white';
});

console.log();