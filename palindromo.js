//  Palíndromo: Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de 
//  adelante hacia atrás que de atrás hacia adelante).

    // Ejemplo: Sí es un palindromo
    const cadena = "anitalavalatina";
    let cadenaInversa = "";
    let palindromo = false;

    // split descompone la cadena en un arreglo
    // reverse invierte el nombre del arreglo
    // join concatena todos los elementos del arrglo
    cadenaInversa = cadena.split('').reverse().join('');
    comprobarPalindromo(cadena, cadenaInversa);
    
    // Ejemplo: No es palindromo
    const cadenaNoPalindromo = "Arjona";
    let cadenaNoPalindromoInverso = "";
    
    // Lógica
    cadenaNoPalindromoInverso = cadenaNoPalindromo.split('').reverse().join('');
    comprobarPalindromo(cadenaNoPalindromo, cadenaNoPalindromoInverso);
    

    function comprobarPalindromo(cadenaOriginal, cadenaInversa)
    {    
        if (cadenaOriginal === cadenaInversa){
            palindromo = true
        }else{
            palindromo = false
        }

        console.log("Palindromo: " + palindromo);
        console.log("La cadena original es: " + cadenaOriginal);
        console.log("La cadena en orden inverso es: " + cadenaInversa + "\n");
    }

    


    