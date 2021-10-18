let bar = document.getElementById('bar');
let listItem = document.getElementById('list-item');

bar.onclick = function () {
    listItem.classList.toggle('active');
    if (bar.classList.contains('fa-bars')) {
        bar.classList.replace('fa-bars', 'fa-times');
    } else {
        bar.classList.replace('fa-times', 'fa-bars');
    }
}

let nav = document.querySelector('nav')

document.body.onscroll = () => {
    if (scrollY >= 80) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

let items = document.querySelectorAll('.items .item');

let currentSlide = 1;

let countSlide = items.length;

let leftSlide = document.getElementById('left');

let rightSlide = document.getElementById('right');

leftSlide.onclick = prevSlide;

function prevSlide() {
    if (currentSlide === 1) {
        return false;
    } else {
        currentSlide--;
    }
    theChecker();
}

rightSlide.onclick = nextSlide;

function nextSlide() {
    if (currentSlide === countSlide) {
        return false;
    } else {
        currentSlide++;
    }
    theChecker();
}

// Function To check
function theChecker() {
    removeActive();
    items[currentSlide - 1].classList.add('active');
}
function removeActive() {
    items.forEach(item => {
        item.classList.remove('active');
    });
}

setInterval(() => {
    if (currentSlide === countSlide) {
        currentSlide--;
    }
    else {
        currentSlide++;
    }
    theChecker();
}, 5000);


// remove And Aad active class 
let smallImgs = document.querySelectorAll('.small-imgs img');

let mainImg = document.getElementById('main-img');

smallImgs.forEach((img) => {
    img.addEventListener('click', removeAndAdd);
});

function removeAndAdd() {
    smallImgs.forEach((img) => {
        img.classList.remove('active');
        this.classList.add('active');
    });
}

smallImgs.forEach((active) => {
    active.addEventListener('click', () => {
        let src = active.getAttribute('src');
        mainImg.src = src;
    })
})

// Remove And Add active To Bullets
let bulltsLi = document.querySelectorAll('.bullts li');

bulltsLi.forEach((li) => {
    li.addEventListener('click', bulletsAdd);
    li.addEventListener('click', filterImg);
})

function bulletsAdd() {
    bulltsLi.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    })
}

// Filter Imgs
let gallery = document.querySelectorAll('.gallery-container .box');

function filterImg() {
    gallery.forEach((img) => {
        img.style.display = 'none';
    })
    document.querySelectorAll(this.dataset.tech).forEach((el) => {
        el.style.display = 'flex';
    })
}