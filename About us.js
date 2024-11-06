document.addEventListener("DOMContentLoaded", function() {
    // Scroll Animation for values section
    const valueItems = document.querySelectorAll(".value-item");
    window.addEventListener("scroll", () => {
      valueItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("animate");
        }
      });
    });
  });
  