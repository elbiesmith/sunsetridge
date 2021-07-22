let data = [3, 2, 4, 7, 6, 9];
let largest = 0;
let outputArray = [];
let customData = [];
let styledObj = {};


function checkArray() {
    outputArray = [];
    largest = 0;
    if (customData.length == 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] > largest) {
                largest = data[i];
                outputArray.push(data[i]);
                styledObj[data[i]] = `${i}light`;
            } else {
                styledObj[data[i]] = `${i}dark`;
            }
        }
    } else {
        for (let i = 0; i < customData.length; i++) {
            if (customData[i] > largest) {
                largest = customData[i];
                outputArray.push(customData[i]);
            }
        }
    }


    displayArray();

}

function displayArray() {
    let numberDisplay = document.getElementById('numberDisplay');
    let result = document.getElementById('result');
    numberDisplay.innerHTML = '[';
    result.innerHTML = `${outputArray.length} => [`;

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

    for (let i = 0; i < outputArray.length; i++) {
        if (i == 0) {
            result.innerHTML += `${outputArray[i]}`;
        } else {
            result.innerHTML += `, ${outputArray[i]}`;
        }
    }
    result.innerHTML += `]`;
}

function addValue() {
    let number = parseInt(document.getElementById('newNumber').value);
    let customDataForm = document.getElementById('customData');
    if (isNaN(number)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a number.'
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