const team = [];

team.push(addTeamMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'));
team.push(addTeamMember('Angela Caroll', 'Chief Editor' , 'angela-caroll-chief-editor.jpg'));
team.push(addTeamMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'));
team.push(addTeamMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'));
team.push(addTeamMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'));
team.push(addTeamMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'));

console.log(team);
// Funzione

function addTeamMember (name, role, image){
    
    const newTeamMember = {
        nome: name,
        ruolo: role,
        immagine: image,
    }

    return newTeamMember;
}