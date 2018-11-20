var button = document.getElementById('GetResultButton');
button.onclick = function() {
    var field_result = document.getElementById('field_after');
    var field = document.getElementById('field_before');
    var input = field.value;
    var ignor = ["?", "!", ":", ";", ",", ".", " ", "\t", "\r"];
    var letters = {},
        result;
    var layout = input.split(' ');

    layout.forEach(function(word) {
        word.split('').forEach(function(letter, i) {
            if (!letters[letter] && ignor.indexOf(letter) == -1 && -1 != word.indexOf(letter, i + 1)) {
                letters[letter] = 1;
            }
        });
    });

    result = input.split('').filter(function(v) {
        return !letters[v];
    }).join('');
    field_result.value = result;
}