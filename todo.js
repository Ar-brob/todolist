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
}
)