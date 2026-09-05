const openBtn = document.getElementById("openBtn");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const letter = document.getElementById("letter");
const plane = document.getElementById("plane");
const board = document.getElementById("board");

function changeScene(scene) {

    document.querySelectorAll(".scene").forEach(section => {
        section.classList.remove("active");
    });

    scene.classList.add("active");
}

openBtn.addEventListener("click", () => {

    openBtn.style.pointerEvents = "none";
    openBtn.style.opacity = "0";

    letter.classList.add("show");

    setTimeout(() => {
        changeScene(scene2);

        setTimeout(() => {
            plane.classList.add("fly");
        }, 400);

    }, 2300);

    setTimeout(() => {
        changeScene(scene3);
    }, 6800);

    setTimeout(() => {
        board.classList.add("show");
    }, 7900);

    setTimeout(() => {
        changeScene(scene4);
    }, 11200);

});
openBtn.addEventListener("click", () => {

    openBtn.style.pointerEvents = "none";
    openBtn.style.opacity = "0";

    letter.classList.add("show");

    setTimeout(() => {
        changeScene(scene2);

        setTimeout(() => {
            plane.classList.add("fly");
        }, 400);

    }, 2300);

    setTimeout(() => {
        changeScene(scene3);
    }, 6800);

    setTimeout(() => {
        board.classList.add("show");
    }, 7900);

    setTimeout(() => {
        changeScene(scene4);
    }, 11200);

});
