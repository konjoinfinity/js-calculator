function App(){
  const [op, setOp] = React.useState('')
  const [num1, setNum1] = React.useState(0)
  const [num2, setNum2] = React.useState(null)

  // Handles numbers pressed
  function handleNum(pressed){
    if(op == ''){
   num1 == 0 && pressed !== '.' ? setNum1(String(pressed)) : !String(num1).includes('.') ? setNum1(String(num1) + String(pressed)) : pressed !== '.' ? setNum1(String(num1) + String(pressed)) : console.log('float')
    } else {
      num2 == null && pressed !== '.' ? setNum2(String(pressed)) : !String(num2).includes('.') ? setNum2(String(num2) + String(pressed)) : pressed !== '.' ? setNum2(String(num2) + String(pressed)) : console.log('float')
    }
  }

  // Handles operators pressed
  function handleOp(pressed) {
    if(pressed === 'AC') {
      setOp(''); 
      setNum1(0); 
      setNum2(null)
    }
    else if(op === '') {
      setOp(pressed)
    } 
    else if (pressed === '=' && num2 !== null){
      setOp(''); 
      setNum1(eval(Number(num1) + op + Number(num2))); 
      setNum2(null)
    } 
    else if(num2 !== null && op !== '' && num2 !== '-'){
      setNum1(eval(Number(num1) + op + Number(num2))); 
      setNum2(null); 
      setOp(pressed);
    } 
    else if(op !== '' && num2 === null){
      if(pressed === '-'){
        setNum2(pressed)
      } else {
        setOp(pressed)
      }
    } 
    else if(num2 !== null) {
      setNum2(null); 
      setOp(pressed)
    }
  }

  
  return(
  <div className='calculator' style={{display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
              flexDirection: 'row'}}>
      <div className='formulaScreen' style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', width: 400, height: 600, borderRadius: 8, padding: 25, margin:20}}>
    <div className='outputScreen' style={{height: 100, width: 398, backgroundColor: '#e5e5e5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderStyle: 'solid', borderWidth: 0.5}}><p id="display" style={{textAlign: 'right', fontSize: 50, paddingRight: 40}}>{num1}{op}{num2}</p></div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <button id='clear' className='button' style={{height: 100, width: 300, fontSize: 40}} onClick={()=>handleOp('AC')}>AC</button>
          <button id='divide' className='button' style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleOp('/')}>/</button>
      <button id="seven" className='button' style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(7)}>7</button>
      <button id="eight" className='button' style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(8)}>8</button>
      <button  id="nine" className='button' style={{ height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(9)}>9</button>
          <button id='multiply' className='button' style={{ height: 100, width: 100, fontSize: 40}} onClick={()=>handleOp('*')}>*</button>
      <button id="four" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(4)}>4</button>
          <button id="five" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(5)}>5</button>
          <button id="six" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(6)}>6</button>
          <button id='subtract' className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleOp('-')}>-</button>
          <button  id="one" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(1)}>1</button>
          <button id="two" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(2)}>2</button>
          <button  id="three" className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum(3)}>3</button>
           <button id='add' className='button'style={{height: 100, width: 100, fontSize: 40}} onClick={()=>handleOp('+')}>+</button>
          <button id="zero" className='button'style={{height: 100, width: 200, fontSize: 40}} onClick={()=>handleNum(0)}>0</button>
          <button id='decimal' className='button'style={{ height: 100, width: 100, fontSize: 40}} onClick={()=>handleNum('.')}>.</button>
          <button id='equals' className='button'style={{ height: 100, width: 100, fontSize: 40}} onClick={()=>handleOp('=')}>=</button>
        </div>
      </div>
  </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
