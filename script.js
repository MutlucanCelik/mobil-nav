const btnBurger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");

btnBurger.addEventListener("click", function () {
  navigation.classList.toggle("navigation--active");
  this.classList.toggle("close");
});
