var text_doc1 = document.querySelector(".text1");
var text_doc2 = document.querySelector(".text2");
var result;

function convert(content) {
    for (let i = 0; i < text_doc1.value.length; i++) {
        result += "z"
    }

    text_doc2.value = result;
}