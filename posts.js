document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            "avatar": "https://images.pexels.com/photos/27375086/pexels-photo-27375086/free-photo-of-homme-ete-jeune-balle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "nom": "John",
            "photo": "https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-mer-gens-personnes-individus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "texte": "Lorem ipsum dolor sit amet."
        },
        {
            "avatar": "https://images.pexels.com/photos/27869817/pexels-photo-27869817/free-photo-of-mode-detente-relaxation-femmes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "nom": "Jane",
            "photo": "https://images.pexels.com/photos/29006818/pexels-photo-29006818/free-photo-of-feuilles-d-automne-dans-un-ruisseau-ondulant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "texte": "Consectetur adipiscing elit."
        },
        {
            "avatar": "https://images.pexels.com/photos/25244460/pexels-photo-25244460/free-photo-of-lunettes-de-soleil-femme-clairiere-terrain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "nom": "Alice",
            "photo": "https://images.pexels.com/photos/29009130/pexels-photo-29009130/free-photo-of-route-de-misty-mountain-a-madere-portugal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "texte": "Sed do eiusmod tempor incididunt."
        },
        {
            "avatar": "https://images.pexels.com/photos/28716776/pexels-photo-28716776/free-photo-of-portrait-elegant-avec-tissu-blanc-et-boucle-d-oreille-en-or.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "nom": "Bob",
            "photo": "https://images.pexels.com/photos/25032977/pexels-photo-25032977/free-photo-of-nature-rochers-cailloux-falaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "texte": "Ut labore et dolore magna aliqua."
        },
        {
            "avatar": "https://images.pexels.com/photos/28607267/pexels-photo-28607267/free-photo-of-portrait-en-noir-et-blanc-dans-la-rue-urbaine.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "nom": "Charlie",
            "photo": "https://images.pexels.com/photos/28824974/pexels-photo-28824974/free-photo-of-lierre-d-automne-sur-le-mur-de-la-maison-avec-des-volets-bleus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "texte": "Ut enim ad minim veniam."
        }
    ];


    
    const post = document.getElementById("post");

   

    data.forEach(person => {
        post.innerHTML += `
            
            <div class="post">
                <img src="${person.photo}" alt="${person.nom}" width="50">
                <div class="post-details">
                    <img src=${person.avatar} alt="" class="avatar">
                    <div class="post-personne">
                        <h3>${person.nom}</h3>
                        <p>"${person.texte}"</p>
                    </div>
                    <div class="post-actions">
                        <img src="Icons/Actions/aime.png" alt="">
                        <img src="Icons/Actions/aimePas.png" alt="">
                        <img src="Icons/Actions/commentaire.png" alt="" class="dropBtn">
                    </div>
                </div>
                <div class="drop" id="drop">
                    <div class="post-details-commentaire">
                        <img src=${person.avatar} alt="" class="avatar">
                        <div class="post-personne">
                            <h3>${person.nom}</h3>
                            <p>"${person.texte}"</p>
                        </div>
                        <div class="post-actions">
                            <img src="Icons/Actions/aime.png" alt="">
                            <img src="Icons/Actions/aimePas.png" alt="">
                            <img src="Icons/Actions/commentaire.png" alt="" id="dropBtn">
                        </div>
                    </div>
                    <div class="post-details-commentaire">
                        <img src=${person.avatar} alt="" class="avatar">
                        <div class="post-personne">
                            <h3>${person.nom}</h3>
                            <p>"${person.texte}"</p>
                        </div>
                        <div class="post-actions">
                            <img src="Icons/Actions/aime.png" alt="">
                            <img src="Icons/Actions/aimePas.png" alt="">
                            <img src="Icons/Actions/commentaire.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `;
    });



    post.addEventListener('click', function(event) {
        if (event.target.classList.contains('dropBtn')) {
            const drop = event.target.closest('.post').querySelector('.drop');
            if (drop) {
                drop.classList.toggle('show'); 
            }
        }
    });


});