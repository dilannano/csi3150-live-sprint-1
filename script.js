document.addEventListener("DOMContentLoaded", function () {
  var revealButtons = document.querySelectorAll(".btn--reveal");
  var hideButtons = document.querySelectorAll(".btn--hide");

  revealButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var animal = button.dataset.animal;
      var result = document.getElementById(animal + "-result");
      result.hidden = false;
    });
  });

  hideButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var animal = button.dataset.animal;
      var result = document.getElementById(animal + "-result");
      result.hidden = true;
    });
  });
});
