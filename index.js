import chalk from "chalk";

function topla (a,b) {
    return a + b;
}

function cikar (a,b) {
    return a - b;
}
const toplamaSonuc = topla(12,23);
const cikarmaSonuc = cikar(114,111);
console.log(chalk.green.bold("tebrikler işlem başarılı"));
console.log("sayıların toplamı : " + chalk.blue.underline(toplamaSonuc));
console.log("sayilarin farkı : " + chalk.red.bold.underline(cikarmaSonuc));

