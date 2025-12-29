// ================= REVEAL ON SCROLL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ================= MENU FILTER =================
const filterButtons = document.querySelectorAll(".menu-filter button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // aktif button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    menuCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
