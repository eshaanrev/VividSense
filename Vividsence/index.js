function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const container = document.querySelector(".container");

    sidebar.classList.toggle("open");
    container.classList.toggle("shift");
}
