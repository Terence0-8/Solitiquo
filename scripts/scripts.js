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

document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les données JSON
    fetch('assets/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Données récupérées :", data); // Vérifier les données dans la console

            // Sélection des conteneurs
            const articlesContainer = document.querySelector('.articles-container');
            const podcastsContainer = document.querySelector('.podcasts-container');

            if (!articlesContainer || !podcastsContainer) {
                console.error("Les conteneurs HTML ne sont pas trouvés !");
                return;
            }

            // Génération des articles
            if (data.articles && Array.isArray(data.articles)) {
                data.articles.forEach(article => {
                    const articleCard = document.createElement('div');
                    articleCard.classList.add('article-card');
                    articleCard.innerHTML = `
                        <img src="assets/images/${article.image}" alt="Image de l'article">
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                        <a href="${article.link}">Lire l'article</a>
                    `;
                    articlesContainer.appendChild(articleCard);
                });
            } else {
                console.warn("Aucun article trouvé dans data.json");
            }

            // Génération des podcasts
            if (data.podcasts && Array.isArray(data.podcasts)) {
                data.podcasts.forEach(podcast => {
                    const podcastCard = document.createElement('div');
                    podcastCard.classList.add('podcast-card');
                    podcastCard.innerHTML = `
                        <img src="assets/images/${podcast.image}" alt="Image du podcast">
                        <h3>${podcast.title}</h3>
                        <p>${podcast.summary}</p>
                        <a href="${podcast.link}">Écouter le podcast</a>
                    `;
                    podcastsContainer.appendChild(podcastCard);
                });
            } else {
                console.warn("Aucun podcast trouvé dans data.json");
            }
        })
        .catch(error => console.error('Erreur de récupération des données :', error));
});
