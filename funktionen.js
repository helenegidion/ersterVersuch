document.addEventListener('DOMContentLoaded', function(){
    let anzahl = 0;
    let bestand = 0;

    document.getElementsByClassName("add").addEventListener('click', gedrueckt);

    function gedrueckt(){
        anzahl = anzahl + 1;
        bestand = anzahl + 1;
        try {
            if(
            bestand < 20)
            anzahl++;
        
        }
        catch(Ecxeption) {
          
        }
        document.querySelector('output').innerText = text;
      }
     
    }); 
        
        
