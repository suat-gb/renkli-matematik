import chalk from "chalk";

function topla (a,b) {
    return a + b;
}

const sonuc = topla(12,23);
console.log(chalk.green.bold("tebrikler işlem başarılı"));
console.log("sayıların toplamı : " + chalk.blue.underline(sonuc));