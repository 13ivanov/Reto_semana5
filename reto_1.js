/**Desarrolle el siguiente algoritmo:
Un productor de leche lleva el registro de lo
que produce en litros, pero cuando entrega le
pagan en galones. Realice un algoritmo, y
represéntelo en JS, que ayude al productor
a saber cuánto recibirá por la entrega de su
producción de un día (1 galón
= 3.785 litros).
Si se analiza el problema se puede establecer
que los datos que se necesitan para resolver el problema son los que
se muestran en la tabla 
L:cantidad de litros que produce
PG: precio del galon
TG: cantidad de galones que produe
GA: ganancia por la entrega de leche*/
let L = +prompt("Ingrese la cantidad de litros que produce:");
let galones = L / 3.785;

let PG = prompt("El precio del galon es:");
let GA = galones * PG;

console.log(`Su produccion del dia es de ${galones} galones y su ganancia del dia seria de ${GA} soles`)