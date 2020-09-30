console.log('Hello World')

const paramBox = document.getElementById('param-box');
const jsonReqBox = document.getElementById('jsonReqBox');
let addBtn = document.getElementById('addKeyValueBtn');
const keyValueContainer = document.getElementById('keyValueContainer');
//Function stringToDomElement
function stringToDomElement(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
// By default ->Initially
paramBox.style.display = 'none';
// If Json radio is selected the Json req box will be visible
const jsonRadio = document.getElementById('jsonRadio');

jsonRadio.addEventListener('click',()=>{
    jsonReqBox.style.display = 'block';
    paramBox.style.display = 'none';
})
// If custom radio is selected the Json req box will be visible
const customRadio = document.getElementById('customRadio');
customRadio.addEventListener('click',()=>{
    paramBox.style.display = 'block';
    jsonReqBox.style.display = 'none';
})

// It will add more input fields for adding new key and value
let addedParams = document.getElementById('addedParams');
addBtn.addEventListener('click',()=>{
    let string = `<form class="mx-4 my-4">
                                    <label for="exampleInputEmail1" style="color: white;">Parameters: </label>
                                    <div class="row" id="keyValueContainer">
                                    <div class="col" >
                                        <input type="text" id="param-key" class="form-control" placeholder="Key">
                                    </div>
                                    <div class="col">
                                        <input type="text" id="param-value" class="form-control"  placeholder="Value">
                                    </div>
                                    <button class="btn" id="addKeyValueBtn" style="background-color: orange;">+</button>
                                    </div>
                                </form>
                                `;
                        
    let convertedString = stringToDomElement(string);
    addedParams.appendChild(convertedString);
    console.log(convertedString);
})

const form = document.getElementById('form');
const apiURL = document.getElementById('apiURL');
const resTextArea = document.getElementById('resTextArea');

//When someone will submit the form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let url = apiURL.value;
    fetchData(url);
})

//Fuction for fecting data from API
async function fetchData(url){
    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onload = function(){
        if(this.status === 200){
            let data = this.responseText;
            // data = JSON.parse(data);
            resTextArea.innerHTML = data;
        }else{
            console.log("Error")
        }
    }

    xhr.send()
}