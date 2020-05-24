// Sorry, I know this is bad code.
// I also know that I could have used ScrollReveal or some other library for most of things, but I chose not. I've chosen to do it myself.
// I have little knowledge of JS and wrote this just to keep things going on my creative process.
// As soon as I learn more JS I will rewrite this mess.

const disappearTitle = () => {
    document.getElementsByClassName("title")[0].style.display = "none";
    document.getElementsByClassName("btn-down")[0].style.display = "block";
};


const animaFunctionMercury = function () {

    document.getElementById("spaceship").style.display = "block";
    document.getElementById("planet-mercury").style.display = "block";
    document.getElementsByClassName("text")[0].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[1].addEventListener('click', animaFunctionMercury);
document.getElementById("mercury").addEventListener('wheel', animaFunctionMercury);


const animaFunctionVenus = function () {

    document.getElementById("planet-venus").style.display = "block";
    document.getElementsByClassName("text")[1].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[2].addEventListener('click', animaFunctionVenus);
document.getElementById("venus").addEventListener('wheel', animaFunctionVenus);


const animaFunctionEarth = function () {

    document.getElementById("planet-earth").style.display = "block";
    document.getElementById("moon").style.display = "block";
    document.getElementById("satellite").style.display = "block";
    document.getElementsByClassName("text")[2].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[3].addEventListener('click', animaFunctionEarth);
document.getElementById("earth").addEventListener('wheel', animaFunctionEarth);


const animaFunctionMars = function () {

    document.getElementById("planet-mars").style.display = "block";
    document.getElementById("asteroid-belt").style.display = "block";
    document.getElementsByClassName("text")[3].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[4].addEventListener('click', animaFunctionMars);
document.getElementById("mars").addEventListener('wheel', animaFunctionMars);


const animaFunctionJupiter = function () {

    document.getElementById("planet-jupiter").style.display = "block";
    document.getElementsByClassName("text")[4].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[5].addEventListener('click', animaFunctionJupiter);
document.getElementById("jupiter").addEventListener('wheel', animaFunctionJupiter);


const animaFunctionSaturn = function () {

    document.getElementById("comet").style.display = "block";
    document.getElementById("planet-saturn").style.display = "block";
    document.getElementsByClassName("text")[5].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[6].addEventListener('click', animaFunctionSaturn);
document.getElementById("saturn").addEventListener('wheel', animaFunctionSaturn);


const animaFunctionUranus = function () {

    document.getElementById("planet-uranus").style.display = "block";
    document.getElementsByClassName("text")[6].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[7].addEventListener('click', animaFunctionUranus);
document.getElementById("uranus").addEventListener('wheel', animaFunctionUranus);


const animaFunctionNeptune = function () {

    document.getElementById("planet-neptune").style.display = "block";
    document.getElementsByClassName("text")[7].style.display = "flex";
    disappearTitle();
};

document.getElementsByClassName("btn")[8].addEventListener('click', animaFunctionNeptune);
document.getElementById("neptune").addEventListener('wheel', animaFunctionNeptune);


const animaFunctionPluto = function () {

    document.getElementById("planet-pluto").style.display = "block";
    document.getElementById("astronaut").style.display = "block";
    document.getElementsByClassName("text")[8].style.display = "flex";
    document.getElementsByClassName("btn-up")[0].style.display = "block";
    disappearTitle();
};

document.getElementsByClassName("btn")[9].addEventListener('click', animaFunctionPluto);
document.getElementById("pluto").addEventListener('wheel', animaFunctionPluto);


function refreshPage(reload){
  window.location.hash = '#welcome';
  window.location.reload(true);
}

document.getElementsByClassName("btn-up")[0].addEventListener('click', refreshPage);
document.getElementsByClassName("btn-down")[0].addEventListener('click', refreshPage);



const navSlide = () => {
  const burger = document.querySelector('.logo');
  const nav = document.querySelector('.nav-sc');
  //const navLinks = document.querySelector('.nav-item');

  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-activate');

    burger.classList.toggle('toggle');
  });
}
navSlide();
