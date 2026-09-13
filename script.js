/* ================= CURSOR GLOW ================= */

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.querySelector(".menu-button");

const navigation =
    document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


/* ================= CLOSE MOBILE MENU ================= */

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove(
            "active"
        );

    });

});


/* ================= SUBTLE PHOTO PARALLAX ================= */

const photoCards =
    document.querySelectorAll(
        ".photo-card, .about-photo-frame, .experience-photo"
    );


window.addEventListener("scroll", () => {

    const scrollY =
        window.scrollY;

    photoCards.forEach((photo, index) => {

        if (window.innerWidth > 700) {

            const movement =
                (scrollY * 0.015) *
                (index % 2 === 0 ? 1 : -1);

            photo.style.translate =
                `0 ${movement}px`;

        }

    });

});