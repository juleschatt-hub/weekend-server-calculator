console.log('client.js is sourced!');

//get data from server on page load
function onReady() {
    getResultHistoryList();
}
onReady();

//result history GET request
//display results in a list
//when i new calculation is made, update list
function getResultHistoryList() {
    console.log('something');

    axios({
        method: 'GET',
        url: '/calculations'
    }).then(function(res) {
        console.log('sucess');

    }).catch(function(error) {
        console.log('Error getting results', error);
        alert('sorry. something didnt work quite right;')
    })
}

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
