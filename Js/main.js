//----------------------------- Select Elements -----------------------------------------------
let arrow = document.getElementById("arrowUp");
let skills = document.querySelector(".our-skills");
let skillSpans = document.querySelectorAll(".our-skills .skills .skill span");
let skillSpansCount = document.querySelectorAll(
    ".our-skills .skills .skill .count"
);
let stats = document.querySelector(".stats");
let statSpans = document.querySelectorAll(".stats .box .count");
let started = false;
let startSkills = false;

//----------------------------- Scroll To Top -------------------------------------------------
window.onscroll = function () {
    window.scrollY >= 600
        ? (arrow.style.right = "10px")
        : (arrow.style.right = "-1000px");
    //----------------------------- Animation  -------------------------------------------------
    if (window.scrollY >= skills.offsetTop) {
        skillSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
        if (!startSkills) {
            skillSpansCount.forEach((num) => startCount(num));
        }
        startSkills = true;
    }

    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            statSpans.forEach((num) => startCount(num));
        }
        started = true;
    }
};
arrow.onclick = () => window.scrollTo({ top: 0 });

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
