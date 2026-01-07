
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".expand-title").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;

      document.querySelectorAll(".expand-item").forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});