document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       ELEMENTS
    ========================== */

    const openBtn =
        document.getElementById("openBtn");

    const scene1 =
        document.getElementById("scene1");

    const scene2 =
        document.getElementById("scene2");

    const scene3 =
        document.getElementById("scene3");

    const letter =
        document.getElementById("letter");

    const plane =
        document.getElementById("plane");

    const board =
        document.getElementById("board");


    /* =========================
       CHANGE SCENE
    ========================== */

    function changeScene(scene) {

        document
            .querySelectorAll(".scene")
            .forEach(function(section) {

                section.classList.remove("active");

            });


        scene.classList.add("active");
    }


    /* =========================
       OPEN BUTTON
    ========================== */

    openBtn.addEventListener("click", function () {


        /* Disable button */

        openBtn.disabled = true;

        openBtn.style.opacity = "0";

        openBtn.style.pointerEvents = "none";


        /* =========================
           LETTER APPEARS
        ========================== */

        letter.classList.add("show");


        /* =========================
           MOVE TO SKY
        ========================== */

        setTimeout(function () {


            changeScene(scene2);


            /* Plane starts */

            setTimeout(function () {

                plane.classList.add("fly");

            }, 400);


        }, 2300);


        /* =========================
           ARRIVE AT SCHOOL
        ========================== */

        setTimeout(function () {

            changeScene(scene3);

        }, 6800);


        /* =========================
           REVEAL TEACHER'S DAY
        ========================== */

        setTimeout(function () {

            board.classList.add("show");

        }, 7900);


    });

});
