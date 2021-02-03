var invitados = ["el abulo" ,"mi compa el diego" ,"zurris" , "sergio", "batman" , "jon cena" , "superman" ,"mia kalifa" ,"pito perez" ,"la hermana de abuelo"];
var cervezas = 24;
var resultado = "";
var contador = 0;

for (let i = 0; cervezas >= 1; i++) {

    if( i == 9 ){
        i = 0;
    }
    cervezas--;
    console.log(invitados[i]);
}


