function verificaPalindromo(string) {
    let reverse = string.split('').reverse().join('');
    return reverse === string;
}