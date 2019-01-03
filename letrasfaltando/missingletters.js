// script que diz quais letras do alfabeto nao foram utilizadas

function missingLetters(text) {

    var alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    var quebratudo = alfabeto.split("");

    for (var i = 0; i < text.length ; i++) {
        var local = quebratudo.lastIndexOf(text[i]);
        if (local > -1) {
            quebratudo.splice(local, 1);
        }        
    }
    console.log(quebratudo.join(''));
}

missingLetters('obrigado meu deus');
