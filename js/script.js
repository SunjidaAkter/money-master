// input_getting_function
function getInput(inputId) {
    const amount = document.getElementById(inputId).value;
    return amount;
}
//function for setting output in the required field
function setOutput(outputId, totalResult) {
    document.getElementById(outputId).innerText = totalResult;
}
//function for cleaing values for the saving part when clicking the calculate button
function clearingSavingPart() {
    setOutput('saving-amount', 0);
    setOutput('remaining-balance', 0);
    document.getElementById('save').value = '';
    document.getElementById('error2').style.display = 'none';
}
//function for updating the expenses & balance
function updateExpenses() {
    //input type error handling condition 
    if (getInput('food-expenses') >= 0 && getInput('rent-expenses') >= 0 && getInput('clothes-expenses') >= 0 && getInput('income') >= 0) {
        const totalExpenses = parseFloat(getInput('food-expenses')) + parseFloat(getInput('rent-expenses')) + parseFloat(getInput('clothes-expenses'));
        setOutput('total-expenses', totalExpenses);
        //mathematical error handling condition
        if (getInput('income') >= totalExpenses) {
            const balance = parseFloat(getInput('income')) - totalExpenses;
            setOutput('balance', balance);
            document.getElementById('error1').style.display = 'none';
            clearingSavingPart();
        }
        else {
            setOutput('balance', "");
            document.getElementById('error1').style.display = 'block';
            clearingSavingPart();
        }
    }
    else {
        alert('Please Enter A Valid Amount')
    }
}
//function for updating the savings & remaining balance
function updateSavings() {
    //input type error handling condition 
    if (getInput('income') > 0 && getInput('save') > 0) {
        const savingAmount = parseFloat(getInput('income')) * parseFloat(getInput('save')) / 100;
        setOutput('saving-amount', savingAmount);
        //mathematical error handling condition
        if (document.getElementById('balance').innerText >= savingAmount) {
            const remainingBalance = document.getElementById('balance').innerText - savingAmount;
            setOutput('remaining-balance', remainingBalance);
            document.getElementById('error2').style.display = 'none';
        }
        else {
            setOutput('remaining-balance', '');
            document.getElementById('error2').style.display = 'block';
        }
    }
    else {
        alert('Please Enter A Valid Amount')
    }
}
//click event handling for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    // console.log('calculate button clicked');
    updateExpenses();

})
//click event handling for save button
document.getElementById('save-btn').addEventListener('click', function () {
    // console.log('save button clicked');
    updateSavings();
})