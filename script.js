// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const popup = document.querySelector(".pop-up");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 25) {
    navbar.style.height = "90px";
  } else {
    navbar.style.height = "50px";
  }
  if (window.scrollY > 280) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0px)";
  }

  if (window.scrollY <= 1330) {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(300px)";
  } else {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
