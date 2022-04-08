/**
Desarrolle el siguiente algoritmo:
“El náufrago satisfecho” ofrece
hamburguesas sencillas, dobles y triples,las
cuales tienen un costo de $20.00, $25.00 y
$28.00 respectivamente. La empresa acepta
tarjetas de crédito con un cargo de 5 % sobre
la compra.
Suponiendo que los clientes adquieren sólo
un tipo de hamburguesa, realice un algoritmo
para determinar cuánto debe pagar una
persona por N hamburguesas.
TI: tipo de amburguesa
N: numero de amburguesas
TP: tipo de pago
PA: precio de la hamburguesa
CA: cargo por el uso de tarjeta
TO: total sin cargo
TOT: total con cargo
 */
let TI = prompt("Elija su tipo de amburguesa: Sencillas, Dobles y Triples");
let N = +prompt("Cuantas amburguesas quiere?");
slet PA = 0;
let CA = 0.05;
let TO = 0;
let TOT = 0;
let TP;
let salir = false;


do{
    TP=confirm("Desea pagar con tarjeta?");
    if(TP===true){
        switch(TI){
            case "sencillas": PA = 20; TOT = (1+CA)*(N*PA);
                break;
            case "dobles": PA = 25; TOT = (1+CA)*(N*PA);
                break;
            case "triples": PA = 28; TOT = (1+CA)*(N*PA);
                break;
        }
    }else{
        switch(TI){
            case "SENCILLAS": PA = 20; TO = N * PA;
                break;
            case "DOBLES": PA = 25; TO = N * PA;
                break;
            case "TRIPLES": PA = 28; TO = N * PA;
                break;
        }
    } 
    salir=true;
}while(salir === false);

if(TP === true){
    console.log(`Su total a pagar es de ${TOT} soles`);
    alert(`Su total a pagar es de ${TOT} soles`);
}else{
    console.log(`Su total a pagar es de ${TO} soles`);
    alert(`Su total a pagar es de ${TO} soles`);
}
