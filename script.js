const openDrawer = document.getElementById("openDrawer");
const closeDrawer = document.getElementById("closeDrawer");
const drawer = document.getElementById("drawer");

openDrawer.addEventListener("click", () => {
    drawer.style.right = "0";
});

closeDrawer.addEventListener("click", () => {
    drawer.style.right = "-260px";
});
