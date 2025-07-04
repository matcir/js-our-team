const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Seleziono gli elementi di cui ho bisogno
const rowEl = document.querySelector(".card-row");
const nameEl = document.getElementById("nome");
const roleEl = document.getElementById("ruolo");
const imgEl = document.getElementById("url");
const emailEl = document.getElementById("email");
const formEl = document.querySelector(".form");

//aggiungo l'event listener sul form in attesa del submit
formEl.addEventListener("submit", (e) => {
 
  //prevengo la perdita dei dati una volta che l'utente invia i dati cliccando submit
  e.preventDefault()

  //prendo i dati inseriti dall'utente e me li salvo in una variabile
  const name = nameEl.value;
  const role = roleEl.value; 
  const email = emailEl.value; 
  const img = imgEl.value; 

  //creo un nuovo elemento formato da 4 oggetti che sono le informazioni di ogni membro del team
  const newMember = {
    name,
    role, 
    email,
    img
  }

  //inserisco il nuovo membro all'interno dell'array di partenza, e procedo con l'inserire i membri in pagina
  // teamMembers.push(newMember);

  renderMembers([newMember], rowEl);
})

//invoco la funzione che prende come parametri in ingresso il mio array e il nodo html a cui aggiungere il markup
renderMembers(teamMembers, rowEl);

//dichiaro la funzione 
function renderMembers(teamMembers, htmlNode) {
  
  //inizializzo la stringa che conterrà il linguaggio di markup da aggiungere dei singoli membri
  htmlNode.innerHTMl = "";
  

  //inizio a ciclare nell'array fornito
  for(let i=0; i < teamMembers.length; i++) {
    
    //salvo il membro dell'iterazione corrente in una variabile
    const member = teamMembers[i];

    //sfrutto un'altra funzione che riceverà in ingresso i dati del membro corrente, e ritornerà la stringa contente il markup, che salvo in una costante
    const memberHtml = membersMarkup(member);
    
    //utilizzo il metodo insertAdjacentHTML con "beforeend" per inserire il valore fornito di ogni membro alla fine del nodo, in modo tale da far apparire i membri in ordine di inserimento
    htmlNode.insertAdjacentHTML("beforeend", memberHtml);

  }

  //dichiaro la funzione che mi genera il markup
function membersMarkup(member) {
  
  //tramite il deconstructing prendo le informazioni (oggetti) di ciascun membro dall'elemento member fornito
  const {name, role, email, img} = member;

  //scrivo il markup come se fossi nel file index, sfruttando l'interpolazione e accedendo alle informazioni tramite la relativa notazione ${value}
  const markup = `<div class="col">
                    <div class="card">
                      
                    <img src= ./assets/${img} class=" card-img-top " alt="member.png">
                    
                    <div class="card-body">
                        <h3 id="nome">${name}</h3>
                        <div>${role}</div>
                        <div>${email}</div>
                      </div>
                    </div>
                  </div> `

  //ritorno la stringa di html completa
  return markup;

}

}