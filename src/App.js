import pyth from '../src/media/pythagoras.png';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  // Attributes
  const [string, setString]= useState('');
  const [count, setCount]= useState(0);
  const [solve, setSolve]= useState(false);

  // Operation Arrays
  const nums = [0,1,2,3,4,5,6,7,8,9,'.'];
  const ops = ['+', '-', 'x', '/'];

  // Methods
  const updateString = (e) =>{
    setString(e.target.value);
  }
  // Vertical Operator Methods
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

  // Boolean (Control Methods)
  const setTrue = () => {
    setSolve(true);
    setCount((prev) => prev + 1);
  }

  // Horizontal Operator Methods
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

  // UseEffect Method
  const cond = solve === true;
  useEffect(() => {
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
    
    /* populate eList, tempLis, and opLis */
    let eList = [];
    for(let i = 0; i < expcount; i++){
      eList.push('');
    }
    let iterator = 0;
    for(let x = 0; x < strArr.length; x++){
      if(strArr[x] === '+' || strArr[x] === '-' || strArr[x] === 'x' || strArr[x] === '/'){
        iterator++;
        opLis.push(strArr[x]);
      } else if (strArr[x] !== '+'){
        let temp = strArr[x];
        eList[iterator] += temp;
      }
    }
    console.log(eList);
    let tempLis = [];
    for(let k = 0; k < eList.length; k++){
      tempLis[k] = parseInt(eList[k]);
    }
    console.log(tempLis);
    console.log(opLis);

    // calculate result value
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

    // handle multiple expressions
    if(tempLis.length > 2){
      let operations = opcount;
      let tempitr = 0;
      let result2 = tempLis[0];
      while(operations > 0){
        for(let i = 0; i < tempLis.length; i++){
          if(opLis[tempitr] === '+'){
              result2 += tempLis[i+1];
              tempitr++;
              operations--;
          } else if(opLis[tempitr] === '-'){
              result2 -= tempLis[i+1];
              tempitr++;
              operations--;
          } else if(opLis[tempitr] === 'x'){
              result2 *= tempLis[i+1];
              tempitr++;
              operations--;
          } else if(opLis[tempitr] === '/'){
              result2 /= tempLis[i+1];
              tempitr++;
              operations--;
          }
        }
      }
      result = result2;
      let strC = result.toString();
      setString(strC);
    }



    setSolve(false);
  }, [cond]);

  // Calculator Methods
  function type(){
    let x = (e) => setString(string + e.target.value);
    return x;
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
