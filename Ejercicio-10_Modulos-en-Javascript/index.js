
import *as  modulo from './modulo/controller.js';
import chalk from 'chalk';

const sumatoria1 = modulo.suma(1,2)
console.log(sumatoria1)

const  sumatoria2= modulo.suma( 4,5)
console.log(sumatoria2)

const multiplicacion = modulo.multiplicar(sumatoria1, sumatoria2)

console.log(chalk.blue(multiplicacion)) ;

console.log(chalk.green(multiplicacion));