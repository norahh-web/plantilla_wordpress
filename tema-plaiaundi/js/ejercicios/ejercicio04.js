/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 4 · ¿const o let?
 */
let litros = 100;
const retirada = 7;

for (let i = 1; i <= 5; i++) {
    litros = litros - retirada;
    console.log("operacion", i, "- litros:", litros);
}