const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = []


// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('request for calculations made');
  res.send(calculations);
})
// POST /calculations
app.post('/calculations', (req, res) => {
  let newCalculation = req.body;
  let numOne = newCalculation.numOne;
  let numTwo = newCalculation.numTwo;
  let operator = newCalculation.operator;
  let result = 0;
  console.log('POST /calculations received a request');
  console.log('request body: ', req.body);
  console.log('calculations array', calculations);
  
  console.log('calculations array again', calculations);
  if(operator === '+') {
    console.log('in plus logic', newCalculation.operator);
    console.log(newCalculation);
    result = Number(numOne) + Number(numTwo);
    console.log('addition result', result);
    
  } else if(operator === '-') { 
    result = Number(numOne) - Number(numTwo);
    console.log('subtraction result', result);
  } else if(operator === '*') {
    result = Number(numOne) * Number(numTwo);
    console.log('multiplication result', result);
  } else if(operator === '/') {
    result = Number(numOne) / Number(numTwo);
    console.log('division result', result);
  }

  let calcObjectResult = {
    numOne: numOne,
    numTwo: numTwo,
    operator: operator,
    result: result
  };

  calculations.push(calcObjectResult);
  res.sendStatus(201);
})

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
