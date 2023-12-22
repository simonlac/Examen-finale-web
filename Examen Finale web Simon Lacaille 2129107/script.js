document.addEventListener("DOMContentLoaded", function () {
    const objetsContainer = document.getElementById('objets-container');

    // Charger les objets au chargement de la page
    chargerObjets();

    async function chargerObjets() {
        try {
            const response = await fetch('https://65833e264d1ee97c6bcdb89e.mockapi.io/todo');
            const objets = await response.json();

            objetsContainer.innerHTML = '';

            objets.forEach(objet => {
                ajouterObjetALaListe(objet);
            });
        } catch (error) {
            console.error('Erreur de chargement des objets:', error);
        }
    }

//ici on créer les cartes de recette retrouvée dans l'index
    function ajouterObjetALaListe(objet) {
        const objetDiv = document.createElement('div');
        objetDiv.classList.add('card', 'm-7', 'col-lg-25');
        objetDiv.innerHTML = `
           <h1>${objet.nom}</h1>
            <div class="card-body">
                <h5 class="card-text">ingrédients :</h5>
                <p class="card-text">. ${objet.ingredient1}</p>
                <p class="card-text">. ${objet.ingredient2}</p>
                <p class="card-text">. ${objet.ingredient3}</p>
                <p class="card-text">. ${objet.ingredient4}</p>
                <p class="card-text">. ${objet.ingredient5}</p>
                <p class="card-text">  ${objet.instruction}</p>
                <button class="btn btn-danger" onclick="demanderConfirmation(${objet.id})">Supprimer</button>
            </div>
        `;

        objetsContainer.appendChild(objetDiv);
    }
// demande une confirmation avant de supprimer la carte et le jason pour la recette
    window.demanderConfirmation = function (id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet objet?')) {
            supprimerObjet(id);
        }
    };
//fonction pour supprimer l'objet
    async function supprimerObjet(id) {
        try {
            await fetch(`https://65833e264d1ee97c6bcdb89e.mockapi.io/todo/${id}`, {method: 'DELETE'});
            chargerObjets(); // Actualiser la liste après la suppression
        } catch (error) {
            console.error('Erreur de suppression de l\'objet:', error);
        }
    }
})

