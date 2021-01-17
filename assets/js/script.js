let imgs = document.querySelectorAll(".container .img-box img");
let imgs2 = document.querySelectorAll(".container2 .img-box img");
let modal = document.querySelector("#modal");
let nextBtn = document.querySelector("#modal .next-btn");
let prevBtn = document.querySelector("#modal .prev-btn");
let nextSlide = document.querySelector(".slider .next-btn");
let prevSlide = document.querySelector(".slider .prev-btn");
let index = 0;

modal.addEventListener("click", (e) => {
    if (e.target == modal) modal.classList.remove("modal");
    pid = setInterval(intervalSlider, 2000);
})

imgs.forEach((e, i) => {
    let srcLink = e.getAttribute("src");
    e.addEventListener("click", () => {
        modal.classList.add("modal");
        clearInterval(pid);
        modal.querySelector("img").setAttribute("src", srcLink);
        index = i;
    })
})

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index == imgs.length - 1) index = 0;
    else index++;
    let srcLink = imgs[index].getAttribute("src");
    modal.querySelector("img").setAttribute("src", srcLink);
    console.log(index);
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (index == 0) index = imgs.length - 1;
    else index--;
    let srcLink = imgs[index].getAttribute("src");
    modal.querySelector("img").setAttribute("src", srcLink);
});


imgs2.forEach((e) => {
    let srcLink = e.getAttribute("src");
    e.addEventListener("click", () => {
        document.querySelector(".container2 .slide-box img").setAttribute("src", srcLink);
    })
})



// ================== SLIDER ==================

let imgs3 = document.querySelectorAll(".slider .img-container img");
let imgEl = document.querySelector(".img-container .active");

nextSlide.addEventListener("click", (e) => {
    e.preventDefault();
    imgEl = document.querySelector(".img-container .active");
    let prev = document.querySelector(".prev");
    if (prev != null) prev.classList.remove("prev");
    let next = document.querySelector(".next");
    if (next != null) next.classList.remove("next");

    imgEl.classList.add("next");
    imgEl.classList.remove("active");
    imgEl = imgEl.nextElementSibling;
    if (imgEl == null) imgEl = imgs3[0];
    imgEl.classList.add("active");
});

prevSlide.addEventListener("click", (e) => {
    e.preventDefault();
    imgEl = document.querySelector(".img-container .active");
    let next = document.querySelector(".next");
    if (next != null) next.classList.remove("next");

    let prev = document.querySelector(".prev");
    if (prev != null) prev.classList.remove("prev");

    imgEl.classList.add("prev");
    imgEl.classList.remove("active");
    imgEl = imgEl.previousElementSibling;
    if (imgEl == null) imgEl = imgs3[imgs3.length - 1];
    imgEl.classList.add("active");
})

let intervalSlider=() => {
    let next = document.querySelector(".next");
    if (next != null) next.classList.remove("next");
    let prev = document.querySelector(".prev");
    if (prev != null) prev.classList.remove("prev");
    imgEl.classList.remove("active");
    imgEl = imgEl.nextElementSibling;
    if (imgEl == null) imgEl = imgs3[0];
    imgEl.classList.add("active");
}

let pid = setInterval(intervalSlider, 2000);

document.querySelector(".slider").addEventListener("mouseout", () => {
    pid = setInterval(intervalSlider, 2000);
})

document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(pid);
})