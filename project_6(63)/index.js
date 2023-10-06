// console.log('hii');

// initialize no of parameters 
let addedParamsCount = 0;

// utility function
//1. function to get DOM element from string 
function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return string.firstElementChild;
}

// hide the parameters box initially
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

// if the user clicks on params, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click' , ()=>{
    document.getElementById('jsonBox').style.display = 'none';
    document.getElementById('parameterBox').style.display = 'block';
})

// if the user clicks on json box ,hide the pramas box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click' , ()=>{
    document.getElementById('jsonBox').style.display = 'block';
    document.getElementById('parameterBox').style.display = 'none';
})

// if the user clicks on + button , add more parameters
let addParams = document.getElementById('addParams');
addParams.addEventListener('click', () => {
    let params = document.getElementById('params');

    let str = `
    <div class="row">
          <label for="input">Parameter ${addedParamsCount+2}</label>
          <div class="col-md-4">
            <input
              id="parameterKey${addedParamsCount+2}"
              type="text"
              class="form-control"
              placeholder="enter parameter ${addedParamsCount+2} key"
            />
          </div>
          <div class="col-md-4">
            <input
              id="parameterValue${addedParamsCount+2}"
              type="text"
              class="form-control"
              placeholder="enter parameter ${addedParamsCount+2} value"
            />
          </div>
        </div>
    `;

    addedParamsCount++;
});