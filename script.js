document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseenter", () => {
        btn.style.background = "#0056b3";
        btn.style.color = "white";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.background = "white";
        btn.style.color = "#007bff";
    });
});
