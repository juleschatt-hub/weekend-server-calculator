console.log('client.js is sourced!');


function getCalculation() {
    axios({
        method: 'GET',
        url: '/calculations'
    })
        .then(
            function(response){
                let data = response.data;
                renderCurrentResult(data);
                renderHistoryResult(data);
            })
        .catch(
            function(error) {
                console.log('error getting calculations', error)
            })
            
}
    //Get new calculation params from input fields

getCalculation();

function submitCalculationsForm(event, operator) {
    event.preventDefault();
    console.log('in submitCalcForm');

    //get operator and nums from form
    let numOne = document.querySelector('#numOne').value;
    let numTwo = document.querySelector('#numTwo').value;
    

    //data to be posted to server
    let payload = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
    };

    axios({
        method: 'POST',
        url: '/calculations',
        data: payload
    })
        .then(function(res){
            console.log(res.data);
            document.querySelector('#numOne').value = '';
            document.querySelector('#numTwo').value = '';
            getCalculation();
            
        })
        .catch(function(error){
            console.log('failed to post calculation', error);
        })

    return payload
} //end submitCalculationsForm

//Functions to set value of operator
let operator = '';
function addOperator() {
     operator = document.querySelector('#buttonPlus').value;
    console.log('value of operator', operator);
}

function subtractOperator() {
    operator = document.querySelector('#buttonMinus').value;
    console.log('value of operator', operator);
}

function multiplyOperator() {
    operator = document.querySelector('#buttonMultiply').value;
    console.log('value of operator', operator);
}

function divideOperator() {
    operator = document.querySelector('#buttonDivide').value;
    console.log('value of operator', operator);
}

//returns corret operator to pass into submitCalculationsForm function
function getOperator() {
    if (operator === '+') {
        console.log('in get operator function', operator);
        return operator
    } else if (operator === '-') {
        console.log('in get operator function', operator);
        return operator
    } else if(operator === '*') {
        console.log('in get operator function', operator); 
        return operator
    } else if(operator === '/') {
        console.log('in get operator function', operator);
        return operator
    }
    
} //end getOperator

function renderCurrentResult(payload) {
    let recentResult = document.getElementById('recentResult');
    recentResult.innerHTML = '';

    for(let i of payload) {
       
        
       if(payload.indexOf(i) === payload.length - 1){ 
        recentResult.innerHTML += `
            <ul>
                <li>${i.numOne} ${i.operator} ${i.numTwo} = ${i.result}</li>
            </ul>
            `
       }
       
    }
   
} //end renderCurrentResult

function renderHistoryResult(payload) {
    let recentResult = document.getElementById('resultHistory');
    recentResult.innerHTML = '';

    for(let i of payload) {
       
        
       
        recentResult.innerHTML += `
            <ul>
                <li>${i.numOne} ${i.operator} ${i.numTwo} = ${i.result}</li>
            </ul>
            `
       
       
    }
   
} //end render history

function clearInput() {
    document.querySelector('#numOne').value = '';
    document.querySelector('#numTwo').value = '';
}