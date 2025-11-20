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
