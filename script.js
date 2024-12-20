window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    const header = document.querySelector("#main-header");
    const hiddenHeader = document.querySelector("#hiddenHeader");
  
    if (scrollY >= 50) {
      // Cache le header principal
      header.style.transform = "translateY(-100%)";
      header.style.opacity = "0";
  
      // Affiche le header caché
      hiddenHeader.style.visibility = "visible";
      hiddenHeader.style.opacity = "1";
      hiddenHeader.style.height = "auto";
    } else {
      // Restaure le header principal
      header.style.transform = "translateY(0)";
      header.style.opacity = "1";
  
      // Cache le header caché
      hiddenHeader.style.visibility = "hidden";
      hiddenHeader.style.opacity = "0";
      hiddenHeader.style.height = "0";
    }
  });
  