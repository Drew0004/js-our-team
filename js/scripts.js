// Creo array vuoto
const team = [];
let teamContainer = document.querySelector('.team');


// Pushati membri del team nell'array
team.push(addTeamMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));
team.push(addTeamMember('Angela Caroll', 'Chief Editor' , 'angela-caroll-chief-editor.jpg'));
team.push(addTeamMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'));
team.push(addTeamMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'));
team.push(addTeamMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'));
team.push(addTeamMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));

// console.log(team);

// Ciclo sull'array
for (let i = 0; i < team.length; i++){
    console.log(team[i]);

    let myCard = document.createElement('div');
    myCard.classList.add('card', 'col-3', 'm-3');
    teamContainer.append(myCard);

    // ciclo per le key degli Object
    for (let key in team[i]){
        console.log (key + ':', team[i][key]);
        // teamContainer.append(key + ':', team[i][key]);
        // teamContainer.innerHTML += '<br>'
    }
    
    myCard.innerHTML+=`<img class="w-100" src="img/${team[i]['immagine']}" alt="">`;
    let name = myCard.innerHTML +=`<h2 class="fs-4"> Nome: ${team[i]['nome']}`;
    let role = myCard.innerHTML +=`<h2 class="fs-4"> Ruolo: ${team[i]['ruolo']}`;
    let img = myCard.innerHTML +=`<h2 class="fs-5 fw-light"> Immagine: ${team[i]['immagine']}`;
    // myCard.innerHTML += '<br>'

}




// Funzione

function addTeamMember (name, role, image){
    
    const newTeamMember = {
        nome: name,
        ruolo: role,
        immagine: image,
    }

    return newTeamMember;
}