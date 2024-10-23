const enTete = document.createElement('header');

enTete.innerHTML=`
        <nav>
            <ul>
                <li><a href=""> <img src="Icons/accueil.png" alt="" class="icon-header"> </a></li>
                <li><a href=""> <img src="Icons/message.png" alt="" class="icon-header"> </a></li>
                <li><a href=""> <img src="Icons/amis.png" alt="" class="icon-header"> </a></li>
            </ul>
        </nav>
`;

document.body.appendChild(enTete);