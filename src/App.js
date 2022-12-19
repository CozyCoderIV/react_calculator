import pyth from '../src/media/pythagoras.png';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  // Attributes
  const [string, setString]= useState('');
  const [count, setCount]= useState(0);
  const [solve, setSolve]= useState(false);

  // Operators
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const times = document.getElementById('times');
  const divide = document.getElementById('divide');

  // Operation Arrays
  const nums = [0,1,2,3,4,5,6,7,8,9,'.'];
  const ops = ['+', '-', 'x', '/'];


  // Methods
  const updateString = (e) =>{
    setString(e.target.value);
  }
  // Operator Methods
  const findSum = (a, b) => {
    return a + b;
  }
  const findDifference = (a, b) => {
    return a - b;
  }
  const findProduct = (a, b) => {
    return a * b;
  }
  const findQuotient = (a, b) => {
    return a / b;
  }
  const findSquare = () => {
    let temp = parseInt(string);
    let square = temp * temp;
    setString(square.toString());
    setCount((prev) => prev + 1);
  }


  const setTrue = () => {
    let temp = true;
    console.log(temp);
    setSolve(temp);
    calculate();
  }
  const setNegative = () => {
    let temp = parseInt(string) * -1;
    setString(temp.toString());
  }
  const setPercent = () => {
    let temp = parseInt(string)/100;
    setString(temp.toString());
  }
  const clearExpression = () => {
    setString('');
  }
  const clearCalculation = () => {
    setString('');
  }
  // Calculator Methods
  function type(){
    let x = (e) => setString(string + e.target.value);
    return x;
  }

  function calculate (){
    if(solve === true){
      let strArr = string;                                       // '2 + 1'
      let strLis = [];                                           // ['2', '+', '1']
      let opLis = [];
      console.log('calculate array: ' + strArr);
      console.log('calculate array length: ' + strArr.length);
  
      for(let i = 0; i < string.length; i++){
        strLis.push(string[i]);
      }
      console.log(strLis);
  
      let tempLis = [];
      for(let i = 0; i < strLis.length; i++){
        if(strLis[i] !== '+'){
          tempLis.push(parseInt(strLis[i]));
        } else if (strLis[i] === '+'){
          opLis.push(strLis[i]);
        }
      }
      // deal with multiple digit nums
      if(tempLis.length > 3 && opLis.length === 1){
        // find index of +
        // split into separate arrays
        
      }
  
  
      console.log(tempLis);                                    // [2, 1]
      console.log(opLis);                                      // ['+']
  
      let result = 0;
      if(opLis.length === 1 && opLis[0] === '+'){
        result = findSum(tempLis[0], tempLis[1]);
        if(result !== NaN){
          console.log('result: ' + result);                      // 3
          let str = result.toString();
          setString(str);
        }
      }
      setSolve(false);
    }



    // Find Sum
    
    // find index(es) of an operator
    // for(let i = 0; i < strArr.length; i++){
    //   if(strArr[i] === '+' || strArr[i] === '-' || strArr[i] === 'x' || strArr[i] === '/'){
    //   }
    // }
    // console.log('op count: ' + operatorCount);
    
    // if(operatorCount === 1){
    //   let operatorIndex;
    //   for(let i = 0; i < ops.length; i++){
    //     if(strArr.includes(ops[i])){
    //       operatorIndex = strArr.indexOf(ops[i]);
    //     }
    //   }
    // }

    // while((strArr[i] !== '+' && strArr[i] !== '-' && strArr[i] !== 'x' && strArr[i] !== '/') && i < strArr.length){
    //   str += strArr[i];
    //   i++;
    // }
    // console.log('str val: ' + str);
    // let rv;
    // let newArrayB;
    // let newArrayA = a.slice(3);
    // for(let x = 0; x < a.length; x++){
    //   let tempA = parseInt(a[x]);
    //   let tempB = parseInt(a[x+2]);
    //   if(a[x] === '+' || a[x] === '-' || a[x] === 'x' || a[x] === '/'){
    //     continue;
    //   }
    //   if(a[x + 1] === '+'){
    //     rv = findSum(tempA, tempB);
    //     newArrayB = [rv.toString()];
    //     newArrayA = newArrayB.concat(newArrayA);
    //     // setString(newArrayA);
    //   }
    // }
  }
  // function calculate(){
  //   // setSumExpression([...sumExpression, string]); // add to expression list
  //   let tempa = sumExpression.map((i) => parseInt(i));
  //   let tempb = tempa.reduce((acc, curr) => acc + curr);
  //   if(sumExpression.length >= 2){
  //     setSumExpression([tempb.toString()]);
  //     setString(tempb.toString());
  //   }
  //   setString(tempb.toString());
  // }

  // Debug Method
  console.log(string, solve);

  return (
    <div className="App">
      <div id='content_container'>
        <div>
          <h1><i>React.js Calculator Application</i></h1>
          <img className='pythagoras' src={pyth}></img>
        </div>
        <div id='calculator'>
          <input value={string} id='input_box' onChange={updateString}/>
          <div id='button_box'>
            <div className='oh_button_c'>
              <button onClick={clearCalculation}>AC</button>
              <button onClick={clearExpression}>C</button>
              <button onClick={setNegative}>+/-</button>
              <button onClick={setPercent}>%</button>
            </div>
            <div id='calc_count'>{count}</div>
            <div className='c_button_c'>
              {nums.map((num) => <button value={num} className='c_buttons' onClick={type()}>{num}</button>)}
              <button onClick={setTrue}>=</button>
            </div>
            <div className='ov_button_c'>
              {ops.map((op)=> <button value={op} onClick={type()}>{op}</button>)}
              <button onClick={findSquare}>Sq</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
