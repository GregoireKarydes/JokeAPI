// Séléctionner nos éléments

const header = window.document.getElementById('header');
const content = document.querySelector('#content');


// Faire une requête sur notre API

const newBlague = () => {

    const urlApi = 'https://api.blablagues.net/?rub=blagues';

    fetch(urlApi)
        .then(res => res.json())
        .then(res => {
    
            if(res.data.content.text_hidden !=="") {
                header.textContent = res.data.content.text_head;
                content.textContent = res.data.content.text_hidden;
            } else {
                content.textContent = '';
                header.textContent = res.data.content.text_head + res.data.content.text ;
            }
            
        })

}

newBlague();

document.body.addEventListener('click', newBlague);
    
