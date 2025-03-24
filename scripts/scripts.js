document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le menu
    const menuItems = document.querySelectorAll("nav ul li");

    // Ajouter un événement sur chaque élément du menu
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.color = "#ffcc00"; // Change la couleur au survol
        });

        item.addEventListener("mouseout", function() {
            this.style.color = ""; // Rétablit la couleur d'origine
        });
    });
});
