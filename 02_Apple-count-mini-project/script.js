let basketOneApples = document.querySelector(".basket-1 span");
let basketTwoApples = document.querySelector(".basket-2 span");
let leftArrow = document.querySelector(".left-move");
let rightArrow = document.querySelector(".right-move");

const totalApples = 10;
let basketTwoApplesCount = 0;
let basketOneApplesCount = totalApples - basketTwoApplesCount;

basketOneApples.innerHTML = basketOneApplesCount;
basketTwoApples.innerHTML = basketTwoApplesCount;

rightArrow.addEventListener("click", () => {
  if (basketOneApplesCount > 0) {
    basketOneApplesCount--;
    basketOneApples.innerHTML = basketOneApplesCount;
    basketTwoApplesCount++;
    basketTwoApples.innerHTML = basketTwoApplesCount;
  }
});

leftArrow.addEventListener("click", () => {
  if (basketTwoApplesCount > 0) {
    basketOneApplesCount++;
    basketOneApples.innerHTML = basketOneApplesCount;
    basketTwoApplesCount--;
    basketTwoApples.innerHTML = basketTwoApplesCount;
  }
});