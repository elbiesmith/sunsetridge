let data = [3,2,4,7,6,9];
let largest = 0;
let outputArray = [];

function checkArray(){
    for(let i = 0; i < data.length; i++){
        if (data[i] > largest){
            largest = data[i];
            outputArray.push(data[i]);
        }
    }

    displayArray();

}

function displayArray() {
    let numberDisplay = document.getElementById('numberDisplay');
    let result = document.getElementById('result');
    numberDisplay.innerHTML = '[';
    result.innerHTML = `${outputArray.length} => [`;

    for(let i = 0; i < data.length; i++ ){
        if (i == 0){
            numberDisplay.innerHTML += `${data[i]}`;  
        } else {
            numberDisplay.innerHTML += `, ${data[i]}`;  
        }
        
    }
    numberDisplay.innerHTML += `]`;  

    for(let i = 0; i < outputArray.length; i++ ){
        if(i == 0){
            result.innerHTML += `${outputArray[i]}`;
        } else {
            result.innerHTML += `, ${outputArray[i]}`;
        }
    }
    result.innerHTML += `]`;


}
