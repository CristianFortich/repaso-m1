// Ir pusheando el repo cada tanto por si surge algun problema con la computadora.
// Tomarse un tiempo de descanso entre cada ejercicio.
// Estar tranquilos es clave, tienen las homeworks como guia.
// Si se traban con uno, pasar al siguiente.
// Esto es un simulacro, puede que este repaso sea mas dificil o mas facil que el propio Checkpoint!!!
// Amigarse del console.log() es clave para saber que nos va devolviendo cada variable y/o funcion.
// Leer lo que nos llega por consola!! Tanto errores como console.log() para darse cuenta que esta bien o que esta mal.

// Importamos las clases:
const { Queue, LinkedList, BinarySearchTree } = require('./DataStructures.js');

// Se incluyen los siguientes metodos para las estructuras de datos importadas.
// QUEUE -- enqueue -- dequeue -- size -- isEmpty
// LINKED LIST -- add -- remove -- print
// BINARY SEARCH TREE -- insert -- size -- contains -- breadthFirstForEach

/*****************************************************************/
/************************** Linked List **************************/
/*****************************************************************/

// Ejercicio A.
// Implementar los siguientes metodos para una linked list ya implementada.
// Ejemplo: head -> 12 -> 15 -> 16 -> 10 -> 2 -> null
// getHead() ---> Devuelve el primer nodo de la linkd list.
// myLinkedList.getHead() ---> devuelve 12.
// getTail() ---> Devuelve el ultimo nodo de la linked list.
// myLinkedList.getTail() ---> devuelve 2.
// search(value) ---> Devuelve la posicion del nodo con el valor recibido por parametro, contando desde 0.
// myLinkedList.search(16) ---> devuelve 2.

LinkedList.prototype.getHead = function () {
    return this.head.value;
};

LinkedList.prototype.getTail = function () {
    let counter = this.head;
    if (!this.head) {
        return counter;
    }
    while(counter.next){
        counter = counter.next;        
    }
    return counter.value;
};

LinkedList.prototype.search = function (value) {
    let counter = this.head;
    let i = 0;
    if(!this.head){
        return i;
    }
    while(counter){
        if (counter.value == value) {
            return i;
        }else{
            counter = counter.next;
            i++;
        }
    }
    return null;
};

/*****************************************************************/
/*************************** Recursion ***************************/
/*****************************************************************/

// Ejercicio B.
// Implementar una funcion que retorne true o false si el numero pasado por parametro es palindromo.
// Controlar que el numero pasado por parametro tengas mas de tres cifras, si el nro pasado tiene 2 o menos cifras
// o es negativo devolver null.
// Palindromo es una expresion que se lee igual de derecha a izquierda o viceversa.
// Ejemplo de numeros palindromos: 1001, 252, 2001, 2222, 9889.

function isPalindrome(number) {
    if(number/100<1 || number<0){
        return null;
    }
    let num = number.toString();
    num = num.split('');
    if(!(num[0]==num[num.length-1])){
        return false;
    }else{
        num.pop();
        num.shift();
        if(num.length<3){
            return true;
        }else{
            num = num.join('');
            num = parseInt(num);
            if(num==0){
                return true;
            }
            return true && isPalindrome(num);
        }
    }
}

/*****************************************************************/
/*********************** Recursion y Stack ***********************/
/*****************************************************************/

// Ejercicio C.
// Implementar una funcion que revierta los valores de una stack (pila).
// Ejemplo:
// 1 <- TOP
// 2
// 3
// 4
//
// Resultado:
// 4 <- TOP
// 3
// 2
// 1

Queue.prototype.reverseStack = function () {
    let reverted = [];
    let size = this.size();
    for(let i = 0; i<size;i++){
        reverted.unshift(this.dequeue());
    }
    for(let i = size-1;i>=0;i--){
        this.enqueue(reverted[i]);
    }
    return reverted;
};

/*****************************************************************/
/**************************** Closures ***************************/
/*****************************************************************/

// Ejercicio D.

// Implementar una funcion usando closures
// Pepe tiene 28 años. Se quiere crear una funcion que incremente la edad de Pepe en un año
// y muestre por consola la nueva edad de Pepe.
// Por ejemplo, si llamo a la funcion growUp(), deberia devolver "Pepe tiene ahora 29 años."
// Si vuelvo a llamar a growUp(), deberia devolver "Pepe tiene ahora 30 años."
// Y asi consecutivamente...

function pepe(){
    let edad = 28;
    return function(){
        edad++;
        return "Pepe riene ahora "+edad+" años";
    }
}

let growUp = pepe();

/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// Ejercicio E.

// Dado un Binary Search Tree, devolver las hojas de ese arbol en un array
// ordenado de menor a mayor.
// Si se nos presenta un arbol como el que se encuentra en el archivo BST.png
// la funcion deberia retornar [1, 5, 14].

BinarySearchTree.prototype.getLeafs = function (array = []) {
    if(!this.left&&!this.right){
        array.push(this.value);
        return array;
    }
    if(this.left){
        array = this.left.getLeafs(array);
    }
    if (this.right) {
        array = this.right.getLeafs(array);
    }
    return array;
};

/*****************************************************************/
/***************************** QUEUE *****************************/
/*****************************************************************/

// Ejercicio F.

// Dada una Queue, implementar una funcion que vacie dicha queue.
// Es decir que remueva todos los elementos uno por uno de la queue.
// Por ejemplo: [1, 2, 3, 4, 5, 6] --> [];
// HINT: usar el metodo .isEmpty() de la clase Queue ya implementada.

Queue.prototype.clearAll = function () {
    while(!this.isEmpty()){
        this.dequeue();
    }
/*     s = this.size();
    for (let index = 0; index < s; index++) {
        this.dequeue();        
    } */
};

/*****************************************************************/
/***************************** SORT ******************************/
/*****************************************************************/

// Ejercicio G.

// Ordenar un array de objetos segun DNI de mayor a menor (descendente).
// Ejemplo:
// objetoPersonas = [
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
// ];

// Resultado: [
//     {
//         dni: 90919293,
//         nombre: 'Bartolomeo',
//         apellido: 'Simpson',
//         edad: 10,
//         email: 'bartsimpson@gmail.com',
//         username: 'elBarto',
//     },
//     {
//         dni: 76757473,
//         nombre: 'Doge',
//         apellido: 'De Hoz',
//         edad: 5,
//         email: 'soyelperrofavorito@yahoo.com.ar',
//         username: 'dogeOfficial',
//     },
//     {
//         dni: 40607080,
//         nombre: 'Carlitos',
//         apellido: 'Fulano',
//         edad: 22,
//         email: 'carlosfulano123@gmail.com',
//         username: 'xXElCrackXx',
//     },
//     {
//         dni: 23242526,
//         nombre: 'Maria',
//         apellido: 'Gonzalez',
//         edad: 48,
//         email: 'mary.gon@hotmail.com',
//         username: 'marymary321',
//     },
// ];

function sortByDni(obj) {
    let sorted = [];
    let auxReplace;
    let aux;
    obj.forEach((element) => {
        sorted.push(element);
    });
    for(let i = 0;i<sorted.length-1;i++){
        aux=i;
        for(let j = i+1;j<sorted.length;j++){
            if(sorted[aux].dni<sorted[j].dni){
                aux=j;
            }
        }
        auxReplace = sorted[i];
        sorted[i] = sorted[aux];
        sorted[aux] = auxReplace;
    }
    return sorted;
}

/*****************************************************************/
/**************************** DESAFIO ****************************/
/*****************************************************************/

// RESOLVER SI TIENEN TIEMPO.
// Implementar una funcion que convierta un numero de decimal a hexadecimal.
// Devolver el numero hexadecimal como String y separar con un espacio cada dos caracteres.
// Ademas verificar que el numero pasado sea entero y mayor que cero. No decimales, no negativos, no cero.
// Ejemplo: decToHex(156555) --> "26 38 B"
// decToHex(16777215) --> "FF FF FF"
// EXTRA:
// Si a la funcion ademas del numero se le pasa otro parametro que diga 'addHashtag' (#).
// Agregar el '#' al principio del string y quitar todos los espacios en blanco.
// Ejemplo: decToHex(16777215, 'addHashtag') --> #FFFFFF

// La base hexadecimal tiene 16 simbolos, como el decimal tiene diez, el binario tiene dos, el octal tiene ocho.
// Estos 16 simbolos van del 0 al 9 y contienen letras de la 'A' a la 'F' (en mayusculas para esta ocasion).
//
// Les dejo una tabla de decimal (DEC) a hexadecimal (HEX).
//
// Para investigar: https://bit.ly/3v8dRqX
//
//
// DEC -------- HEX
//  0            0
//  1            1
//  2            2
//  3            3
//  4            4
//  5            5
//  6            6
//  7            7
//  8            8
//  9            9
//  10           A
//  12           B
//  13           C
//  14           D
//  15           E
//  16           F

function decToHex(number) {}

// NO BORRAR NI TOCAR NI AGREGAR NADA DEBAJO DE ESTA LINEA!!!!!
module.exports = {
    Queue,
    LinkedList,
    BinarySearchTree,
    isPalindrome,
    growUp,
    sortByDni,
    decToHex,
};
