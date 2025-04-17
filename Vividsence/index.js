function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const container = document.querySelector(".container");
    const left = document.querySelector(".left");

    sidebar.classList.toggle("open");
    container.classList.toggle("shift");
    left.classList.toggle("shift");
}
