document.addEventListener('DOMContentLoaded', function(){
    let anzahl = 0;
    text = '';

    document.getElementsByClassName("add").addEventListener('click', gedrueckt);

    function gedrueckt(){
        anzahl = anzahl + 1;
        if (anzahl < 20){
            text = 'Sie haben den Button ' + anzahl +'mal gedrückt!';
        }
        else if (anzahl < 15) {
          text = 'Sie haben jetzt bereits ' + anzahl + 'mal geklickt.\n' +
                 'Wollen Sie sich nicht einen Kaffee gönnen?';
        }
        else {
          text = 'Jetzt haben Sie schon ' + anzahl + 'mal geklickt - mir wird langweilig.';
        }
        document.querySelector('output').innerText = text;
      }
     
    }); 
        
