import './pageCss/calendar.css'
import gregorian_to_jalali from './date covert/converter.js'

export default function Calendar() {
        
    
        function Click() {
        let d = document.getElementById("d").value;
        let m = document.getElementById("m").value;
        let y = document.getElementById("y").value;

        return alert(gregorian_to_jalali(y, m, d,));
    }

    return (
      <div>
        <h1>Calendar conversion</h1>
        <h2>gregorian to solar</h2>
        <div className='main'>
        year:<input id="y" type="number" />
        month:<input id="m" type="number" />
        day:<input id="d" type="number" /> 
        </div>
        <button className='button' onClick={Click}>submit</button>
      </div>
    )
}