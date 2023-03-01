// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const popup = document.querySelector(".pop-up");

let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY <= 25) {
    navbar.style.height = "90px";
  } else {
    navbar.style.height = "50px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    // if (window.scrollY > 280) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //popup

  if (scrollValue < 0.85 && playOnce) {
    // if (window.scrollY <= 1330) {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(300px)";
  } else {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
