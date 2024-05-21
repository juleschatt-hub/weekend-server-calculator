console.log('client.js is sourced!');

//get data from server on page load
// function onReady() {
//     getResultHistoryList();
// }
// onReady();

//result history GET request
//display results in a list
//when i new calculation is made, update list
// function getResultHistoryList() {
//     console.log('something');

//     axios({
//         method: 'GET',
//         url: '/calculations'
//     }).then(function(res) {
//         console.log('sucess');

//     }).catch(function(error) {
//         console.log('Error getting results', error);
//         alert('sorry. something didnt work quite right;')
//     })
// }

// //renders history of calcualtions to DOM
// let resultHistory = document.getElementById('#resultHistory');
// resultHistory.innerHTML = '';
// function renderResultHistoryList() {
//     for(let calculation of calculations) {
//         resultHistory.innerHTML += `
//             <li></li>
//         `
//     }
// }
function getCalculation() {
    axios({
        method: 'GET',
        url: '/calculations'
    })
        .then(
            function(response){
                let data = response.data;
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
        firstNumber: numOne,
        secondnumber: numTwo,
        operator: operator
    };

    axios.post('/calculations', payload)
        .then(function(res){
            console.log(res.data);
            getCalculation();
        })
        .catch(function(error){
            console.log('failed to post calculation', error);
        })
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
    
}