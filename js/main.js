const projects = document.querySelectorAll(".projectgallery img");
const activeproj = document.querySelector(".activeproject img");
projects.forEach(project => {
    project.addEventListener("click", changeProject);
});
function changeProject(e) {
    activeproj.src = e.target.src;
}
const nav = document.querySelector("nav");
window.onscroll = function() {
    if(pageYOffset > 50) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
}
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const mobilenav = document.querySelector(".mobilenav");
menuBtn.addEventListener("click", function() {
    mobilenav.classList.add("active");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
})
closeBtn.addEventListener("click", function() {
    mobilenav.classList.remove("active");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
})