import React, {useState} from 'react'
import './Calcu.css'

function Calcu() {

    const [display, setDisplay] = useState('');

  return (
    <div className='calc-container'>
        <div className="display">
            <input type="text" value={display}/>
        </div>
        <div className="buttons">
            <div className="four-btn">
                <input type="button" value="7" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="8" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="9" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="del" className='same-clr' onClick={e => setDisplay(display.slice(0, -1))}/>
            </div>
            <div className="four-btn">
                <input type="button" value="4" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="5" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="6" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="+" onClick={e => setDisplay(display + e.target.value)}/>
            </div>
            <div className="four-btn">
                <input type="button" value="1" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="2" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="3" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="-" onClick={e => setDisplay(display + e.target.value)}/>
            </div>
            <div className="four-btn">
                <input type="button" value="." onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="0" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="/" onClick={e => setDisplay(display + e.target.value)}/>
                <input type="button" value="*" onClick={e => setDisplay(display + e.target.value)}/>
            </div>
            <div className="two-btn">
                <input type="button" value="C" className='same-clr' onClick={e => setDisplay("")}/>
                <input type="button" value="=" className='equal-btn'onClick={e => setDisplay(eval(display))}/>
            </div>
        </div>
    </div>
  )
}

export default Calcu
