let data = [3, 2, 4, 7, 6, 9];
let largest = 0;
let outputArray = [];
let darkArray = [];
let customData = [];
// let styledObj = new Map();


function checkArray() {
    outputArray = [];
    largest = 0;
    if (customData.length == 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] > largest) {
                largest = data[i];
                outputArray.push(data[i]);
                // styledObj.set(data[i], 'light')
            } else {
                darkArray.push(data[i]);
                // styledObj.set(data[i], 'dark')
            }
        }
    } else {
        for (let i = 0; i < customData.length; i++) {
            if (customData[i] > largest) {
                largest = customData[i];
                outputArray.push(customData[i]);
            } else {
                darkArray.push(customData[i]);
            }
        }
    }


    displayArray();

}

function displayArray() {
    let numberDisplay = document.getElementById('numberDisplay');
    let result = document.getElementById('result');
    let resultDark = document.getElementById('resultDark');
    let resultBtn = document.getElementById('btnResultModal')
    numberDisplay.innerHTML = '[';
    result.innerHTML = `${outputArray.length} can see the light:<br> [`;
    resultDark.innerHTML = `${darkArray.length} live in darkness:<br> [`;

    if (customData.length == 0) {
        for (let i = 0; i < data.length; i++) {
            if (i == 0) {
                numberDisplay.innerHTML += `${data[i]}`;
            } else {
                numberDisplay.innerHTML += `, ${data[i]}`;
            }

        }
    } else {
        for (let i = 0; i < customData.length; i++) {
            if (i == 0) {
                numberDisplay.innerHTML += `${customData[i]}`;
            } else {
                numberDisplay.innerHTML += `, ${customData[i]}`;
            }

        }
    }
    numberDisplay.innerHTML += `]`;

    // display light
    for (let i = 0; i < outputArray.length; i++) {
        if (i == 0) {
            result.innerHTML += `${outputArray[i]}`;
        } else {
            result.innerHTML += `, ${outputArray[i]}`;
        }
    }
    result.innerHTML += `]`;

    // display dark
    for (let i = 0; i < darkArray.length; i++) {
        if (i == 0) {
            resultDark.innerHTML += `${darkArray[i]}`;
        } else {
            resultDark.innerHTML += `, ${darkArray[i]}`;
        }
    }
    resultDark.innerHTML += `]`;

    resultBtn.click();
}

function addValue() {
    let number = parseInt(document.getElementById('newNumber').value);
    let customDataForm = document.getElementById('customData');
    if (isNaN(number) || number<1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a positive number greater than 0.'
        })
        resetForm();
    } else {
        // Add validation here
        customData.push(number);
        customDataForm.innerHTML += number + ",";
        resetForm();
    }
}

function resetData() {
    let customDataForm = document.getElementById('customData');
    customDataForm.innerHTML = '';
    customData = [];
}

function resetForm() {
    document.getElementById('arrayForm').reset();
}

function colorize() {
    for(let i = 0; i < data.length; i++){
        
    }
}

function undo(){
    //remove from array
    customData.pop();
    
    // update screen
    let newOutput = '';
    for (let i = 0; i < customData.length; i++){
        newOutput += `${customData[i]},`
    }

    let customDataOutput = document.getElementById('customData');
    customDataOutput.innerHTML = '';
    customDataOutput.innerHTML = newOutput;
}