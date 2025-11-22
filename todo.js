const wind = document.getElementById('wind')
const temo = document.getElementById('temo')
const open = document.getElementById('open')
const bright = document.getElementsByClassName('bright')
const dark = document.getElementsByClassName('darki')
const white = document.getElementsByClassName('white')
const nit = document.getElementById('nit')
const closer = document.getElementById('closer')
const sun = document.getElementsByClassName('sun')
const darknit = document.getElementsByClassName('darknit')
const lightnit = document.getElementsByClassName('lightnit ')
const closedark = document.getElementsByClassName('closedark')
const whiteclose = document.getElementsByClassName('whiteclose')
const poisk2dark = document.getElementsByClassName('poisk2dark')
const klickday = document.getElementsByClassName('klick-day')
const klicknight = document.getElementsByClassName('klick-night')
const all = document.getElementById('all')
const not_all = document.getElementById('not_all')
const ended = document.getElementById('ended')
document.getElementById('klick') .addEventListener ('click', (event) => {
    event.preventDefault();
    const tip = document.body.className;
    if (tip === 'bright' ) {
        document.body.classList = 'darkt'
        wind.classList = 'darki'
        nit.classList = 'darknit'
        closer.classList = 'closedark'
       klick.classList = 'klick-night'



     
     

    } else {
            document.body.classList = 'bright'
             wind.classList = 'white'
             closer.classList = 'whiteclose'
             nit.classList = 'lightnit'
              klick.classList = 'klick-day'
            
    }
})
document.getElementById ('open').addEventListener ('click', (iviv) =>{
    iviv.preventDefault()
    wind.style.display  = 'flex'
    temo.style.display = 'block'
}) 
document.getElementById ('closer').addEventListener ('click', (ivive) =>{
    ivive.preventDefault()
    wind.style.display  = 'none'
    temo.style.display = 'none'
})


const notes = document.getElementById('poisk2');
const note_list = document.getElementById('note_list');
document.getElementById('add').addEventListener ('click', (evew) => {
    evew.preventDefault();
    const buts = document.createElement('div')
    buts.className = 'buts';
    const text_note = notes.value;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'note';
    const zas = document.createElement('label');
    const new_note = document.createElement('span');
    new_note.className = 'text';
    new_note.innerHTML = text_note;
    const redakt = document.createElement('button')
    redakt.className = 'pen'
    const deletes = document.createElement('button')
    deletes.className = 'deletes'
    if (notes.value.trim() !== ''){
    note_list.appendChild(zas);
    zas.appendChild(checkbox);
    zas.appendChild(new_note);
    zas.appendChild(buts)
    buts.appendChild(redakt)
      buts.appendChild(deletes)
    }
})
const search_input = document.getElementById('poisk');
search_input,addEventListener ("input" , () => {
    let listnotes = document.querySelectorAll ("#note_list > label > span.text");
    for (let i = 0; i < listnotes.length;i++) {
         listnotes[i].parentElement.style.display = 'flex'
        if (!listnotes[i].innerText.includes(search_input.value)) {
            listnotes[i].parentElement.style.display = 'none'
        }
    }
})

const selectr = document.getElementById('pem')
selectr.addEventListener('change', () => {
    let label = document.querySelectorAll('#note_list > label' );
    const sectr = selectr.selectedIndex;
    for (let u = 0; u < label.length;u++){
        label[u].style.display = 'flex';
        let checkbox = label[u].childNodes[0];
        if (sectr == 1 && checkbox.checked) {
            label[u].style.display = 'none';
        } else if (sectr == 2 && !checkbox.checked) {
            label[u].style.display = 'none';
        }
    }
})


document.getElementById('redact').addEventListener('click', function() {
    let note_redact = document.getElementById('poisk3');
    let new_note = note_redact.value;
    
    if (new_note != '' && currentEditingLabel !== null) {
        currentEditingLabel.childNodes[1].textContent = new_note;
        document.getElementById('temeo').style.display = 'none';
        document.getElementById('wind2').style.display = 'none';
        currentEditingLabel = null;
    }
});

document.getElementById('closesar').addEventListener('click', function() {
    document.getElementById('temeo').style.display = 'none';
    document.getElementById('wind2').style.display = 'none';
    currentEditingLabel = null;
});

let currentEditingLabel = null;

note_list.addEventListener('mouseover', () => {
    let buts = document.querySelectorAll('#note_list > label > .buts');
    let label = document.querySelectorAll('#note_list > label');
    
    for (let i = 0; i < buts.length; i++) {
        let deletesBtn = buts[i].childNodes[1];
        let redaktBtn = buts[i].childNodes[0];
        
        deletesBtn.addEventListener('click', () => {
            buts[i].parentElement.remove();
        });

        redaktBtn.addEventListener('click', () => {
            let redakt_note = document.getElementById('wind2');
            let note_redact = document.getElementById('poisk3');
            
            redakt_note.style.display = 'flex';
            temeo.style.display = 'block';
            note_redact.value = label[i].childNodes[1].textContent;
            
       
            currentEditingLabel = label[i];
        });
    } 
});