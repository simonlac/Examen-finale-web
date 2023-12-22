//java file sert pour lorsque tu ajoute une recette en appuyent sur le bouton ajout
//on prend le form de l'index
document.addEventListener("DOMContentLoaded", function () {
    const ajouterForm = document.getElementById('ajouter-form');
//Ajout d'un listener pour lorsqu'on appuie sur le bouton ajouter
    ajouterForm.addEventListener('submit', function (e) {
        e.preventDefault();
//ici on prend les éléments du form pour les mettres en constante
        const nom = document.getElementById('nom').value;
        const ingredient1= document.getElementById('ingrédient-1').value+" "+document.getElementById('quantite-1').value;
        const ingredient2= document.getElementById('ingrédient-2').value+" "+document.getElementById('quantite-2').value;
        const ingredient3= document.getElementById('ingrédient-3').value+" "+document.getElementById('quantite-3').value;
        const ingredient4= document.getElementById('ingrédient-4').value+" "+document.getElementById('quantite-4').value;
        const ingredient5= document.getElementById('ingrédient-5').value+" "+document.getElementById('quantite-5').value;
        const instruction = document.getElementById('instruction').value;
        ajouterRecette({ nom, ingredient1,ingredient2,ingredient3,ingredient4,ingredient5, instruction });
    });
//ici on transforme en jason dans mockapi l'objet pour ensuite pouvoir l'afficher dans l'index
    async function ajouterRecette(objet) {
        try {
            const response = await fetch('https://65833e264d1ee97c6bcdb89e.mockapi.io/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objet)
            });

            if (response.ok) {
                chargerObjets(); // Actualiser la liste après l'ajout
            } else {
                console.error('Erreur lors de l\'ajout de l\'objet.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'objet:', error);
        }
    }
});
