/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!

Dati:
Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg

Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg

Walter Gordon
Office Manager
walter-gordon-office-manager.jpg

Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg

Scott Estrada	
Developer	
scott-estrada-developer.jpg

Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg */

// Tools:
// Const Objects array
// Loop for / in 
// Console.log()
// Add HTML 
// Create const domEl
// Const markup
// insertAdjacentHTML

// Selezione elemento della DOM in cui vuoi stampare le informazioni
const containerEl = document.querySelector('.container');
// Selezione elemento della DOM in cui voglio mettere le photo
const photoEl = document.querySelector('.cardHead');
// Selezione elemento della DOM in cui voglio stampare name e position
const textEl = document.querySelector('.cardBody');

const workTeam = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',	
        photo: './assets/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',	
        position: 'Chief Editor',	
        photo: './assets/img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',	
        position: 'Office Manager',	
        photo: './assets/img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',	
        position: 'Social Media Manager',	
        photo: './assets/img/angela-lopez-social-media-manager.jpg' 
    },

    {
        name: 'Scott Estrada',	
        position: 'Developer',	
        photo: './assets/img/scott-estrada-developer.jpg' 
    },

    {
        name: 'Barbara Ramos',	
        position: 'Graphic Designer',	
        photo: './assets/img/barbara-ramos-graphic-designer.jpg' 
    },

];

/* // Ciclo for in per stampare tutti gli oggetti dell'array nella console
for (const key in workTeam) {
    const value = workTeam[key]
    console.log(value);
    }

  */

// Ciclo for in per stampare tutti gli oggetti dell'array nella DOM
for (const key in workTeam) {
    const team = workTeam[key];

    console.log(team.name);
    console.log(team.position);
    console.log(team.photo);

    const markup = `
                        <div class="card">
                          
                            <div class="cardHead">
                               <img src='${team.photo}'>
                            </div>

                            <div class="cardBody">
                               <h3>${team.name}</h3>
                               <p>${team.position}</p>
                            </div>
                        </div>
                        `
    console.log(markup);
    containerEl.insertAdjacentHTML("beforebegin", markup);
}
 


/* // Ciclo for in per vedere le photo nella DOM
for (const key in workTeam) {
    const keyPhoto = workTeam[key];
    const photoImg = document.createElement('img');
    photoImg.src = keyPhoto.photo;
    photoEl.appendChild(photoImg);  
}



// Ciclo for in per vedere name e position nella DOM
for (const key in workTeam) {
    const keyText = workTeam[key];
    const nameEl = document.createElement('h3');
    nameEl.textContent = keyText.name;
    const positionEl = document.createElement('p');
    positionEl.textContent = keyText.position
    textEl.appendChild(nameEl);
    textEl.appendChild(positionEl);
}
 */
