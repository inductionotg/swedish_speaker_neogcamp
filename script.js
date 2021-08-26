const output = document.querySelector('#output');
const texInput = document.querySelector('#input');
const btnTranslate = document.querySelector('.button');

var url="https://api.funtranslations.com/translate/chef.json";

function constructUrl(text){
    return url + "?" + "text=" + text;
}


function errorHandler(error){
    console.log("error is",error);
    alert("Server is Down !! Please try again after Sometime");
}

function apply(){
    var input = texInput.value;

    fetch(constructUrl(input))
    .then(response => response.json()
    .then(json=>{
        output.textContent = json.contents.translated;
        output.style.padding="20px";
        output.style.fontSize="1rem";
        output.style.color="red";
        console.log("json.contents.translated");
    })
    .catch(errorHandler))
};

btnTranslate.addEventListener('click',apply);
    
