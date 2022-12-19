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
    setSolve(false);
  }
  // Calculator Methods
  function type(){
    let x = (e) => setString(string + e.target.value);
    return x;
  }

  function calculate (){
    if(solve === true){
      let strArr = string;                                      // '2+1'
      let strLis = [];                                        
      let opLis = [];
      let opIndexLis = [];
      console.log('calculate array: ' + strArr);
      console.log('calculate array length: ' + strArr.length);
  
      /* populate strArr & opIndexLis */
      for(let i = 0; i < string.length; i++){
        strLis.push(string[i]);
      }
      for(let x = 0; x < strArr.length; x++){
        if(strArr[x] === '+' || strArr[x] === '-' || strArr[x] === 'x' || strArr[x] === '/'){
          opIndexLis.push(x);
        }
      }
      console.log('string: ' + strLis);                        // ['2', '+', '1']
      console.log('opIndexList: ' + opIndexLis);               // [1]
  

      /* deal with multiple digit nums */
      let opcount = 0;                                         // get operator count and expression count
      let expcount = 0;
      for(let k = 0; k < strLis.length; k++){
        if(strLis[k] === '+' || strLis[k] === '-' || strLis[k] === 'x' || strLis[k] === '/'){
          opcount++;
        }
      }
      expcount = opcount + 1;
      console.log('operators: ' + opcount);                 // 1
      console.log('expressions: ' + expcount);              // 2

      // if(tempLis.length > 3 && opLis.length === 1){
      //   // find index of +
      //   // split into separate arrays
        
      // }
      
      /* populate tempLis and opLis */
      let tempLis = [];
      for(let i = 0; i < strLis.length; i++){
        if(strLis[i] !== '+' && strLis[i] !== '-' && strLis[i] !== 'x' && strLis[i] !== '/'){
          tempLis.push(parseInt(strLis[i]));
        } else if (strLis[i] === '+' || strLis[i] === '-' || strLis[i] === 'x' || strLis[i] === '/'){
          opLis.push(strLis[i]);
        }
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
      } else if(opLis.length === 1 && opLis[0] === '-'){
        result = findDifference(tempLis[0], tempLis[1]);
        if(result !== NaN){
          console.log('result: ' + result);                      // 3
          let str = result.toString();
          setString(str);
        }
      }else if(opLis.length === 1 && opLis[0] === 'x'){
        result = findProduct(tempLis[0], tempLis[1]);
        if(result !== NaN){
          console.log('result: ' + result);                      // 3
          let str = result.toString();
          setString(str);
        }
      }else if(opLis.length === 1 && opLis[0] === '/'){
        result = findQuotient(tempLis[0], tempLis[1]);
        if(result !== NaN){
          console.log('result: ' + result);                      // 3
          let str = result.toString();
          setString(str);
        }
      }
      setSolve(false);
    }
  }

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
