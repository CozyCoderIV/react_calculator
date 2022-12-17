import pyth from '../src/media/pythagoras.png';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  // Attributes
  const [string, setString]= useState('');
  const [count, setCount]= useState(0);

  // Operators
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const times = document.getElementById('times');
  const divide = document.getElementById('divide');

  // Operator Booleans
  const [plusB, setPlusB] = useState(false);
  const [minusB, setMinusB] = useState(false);
  const [timesB, setTimesB] = useState(false);
  const [quoteB, setQuoteB] = useState(false);

  // Operation Arrays
  const [expression, setExpression] = useState([]);
  const [sumExpression, setSumExpression] = useState([]);
  const [diffExpression, setDiffExpression] = useState([]);
  const [mulExpression, setMulExpression] = useState([]);
  const [quoExpression, setQuoExpression] = useState([]);
  const nums = [0,1,2,3,4,5,6,7,8,9,'.'];

  useEffect(
    ()=>{
      if(plusB){
        if(sumExpression.length === 0){
          setSumExpression([string]);
          setString('');
          setPlusB(false);
        }
         else if(sumExpression.length >= 2){
          let tempA = sumExpression.map((expression) => parseInt(expression));
          let sum = 0;
          for(let x = 0; x < tempA.length; x++){
            sum += tempA[x];
          }
          console.log('Integer Array: ' + tempA + ' Sum: ' + sum);
        }
        setSumExpression([...sumExpression, string]);
        setString('');
        setPlusB(false);
      }
      else if (minusB){
        if(diffExpression.length === 0){
          setDiffExpression([string]);
          setString('');
          setMinusB(false);
        }
        setDiffExpression([...diffExpression, string]);
        setString('');
        setMinusB(false);
      }
      else if (timesB){
        if(mulExpression.length === 0){
          setMulExpression([string]);
          setString('');
          setTimesB(false);
        }
        setMulExpression([...mulExpression, string]);
        setString('');
        setTimesB(false);
      }
      else if (quoteB){
        if(quoExpression.length === 0){
          setQuoExpression([string]);
          setString('');
          setQuoteB(false);
        }
        setQuoExpression([...quoExpression, string]);
        setString('');
        setQuoteB(false);
      }
    });

  // Methods
  const updateString = (e) =>{
    setString(e.target.value);
  }
  // Operator Methods
  const findSum = () => {}
  const findDifference = () => {}
  const findProduct = () => {}
  const findQuotient = () => {}
  const findSquare = () => {
    let temp = parseInt(string);
    let square = temp * temp;
    setString(square.toString());
    setCount((prev) => prev + 1);
  }
  // const addExpression = () => {
  //   if(expression === 0){
  //     setExpression([string]);
  //     setString('');
  //   }
  //   setExpression([...expression, string]);
  //   setString('');
  // }

  const z = () => {
    let temp = true;
    setPlusB(temp);
    console.log('plusB val:' + plusB);
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
    setExpression([]);
    setSumExpression([]);
    setDiffExpression([]);
    setMulExpression([]);
    setQuoExpression([]);
  }
  // Calculator Methods
  function type(digit, operator){
    let x;
    if(digit || operator){
      x = (e) => setString(string + e.target.value);
    }
    return x;
  }
  function calculate(){
    if(expression.length !== 0){
      setCount((prev) => prev + 1);
    }
    // addExpression();
  }

  // Debug Method
  console.log(string, sumExpression);
  
  // Render Method
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
              {nums.map((num) => <button value={num} className='c_buttons' onClick={type(true, false)}>{num}</button>)}
              <button onClick={calculate}>=</button>
            </div>
            <div className='ov_button_c'>
              <button onClick={z} id='plus'>+</button>
              <button id='minus'>-</button>
              <button id='times'>x</button>
              <button id='divide'>/</button>
              <button onClick={findSquare}>Sq</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
