function startCountAnimation(targetElementById, endValue, duration) {
  let currentCount = 0;
  let countElement = document.getElementById(targetElementById);
  let interval = duration / endValue;

  function updateCount() {
    countElement.textContent = currentCount;
    if (currentCount < endValue) {
      if (targetElementById == "students") {
        if (endValue - currentCount < 18) {
          currentCount = endValue;
        } else {
            currentCount+=18
        }
      } else if (targetElementById == "publications") {
        if (endValue - currentCount < 25) {
            currentCount = endValue;
          } else {
              currentCount+=25
          }
      } else {
        currentCount++;
      }
      setTimeout(updateCount, interval);
    }
  }
  updateCount();
}

let statsAnimated = false;

window.addEventListener("scroll", () => {
  const counting = document.getElementsByClassName("counting")[0];
  const departments = document.getElementById("departments");
  const students = document.getElementById("students");
  const faculties = document.getElementById("faculties");
  const publications = document.getElementById("publications");
  const patents = document.getElementById("patents");

  if (!statsAnimated && isInViewport(counting)) {
    startCountAnimation("departments", 15, 1500);
    startCountAnimation("students", 4512, 2000);
    startCountAnimation("faculties", 274, 1500);
    startCountAnimation("publications", 8974, 2000);
    startCountAnimation("patents", 223, 1500);
    statsAnimated=true
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
