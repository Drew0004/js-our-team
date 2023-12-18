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

    // ciclo per le key degli Object
    for (let key in team[i]){
        console.log (key + ':', team[i][key]);
        teamContainer.append(team[i][key]);
    }
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