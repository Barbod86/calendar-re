import { useState, useEffect } from "react";
import './pageCss/home.css'

export default function Home() {
    let today = new Date();
    let date = today.getHours() + 'h:' + today.getMinutes() + 'm:' + today.getSeconds() + 's';
    let day = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDay();

  const [time, setCount] = useState(date);

  useEffect(() => {
    setTimeout(() => {
      setCount((time) => date);
    }, 1000);
  });
          
    return(
        <div>
            <h1>welcome</h1>
            <br />
            <h1 className="time">{time}</h1>
            <h2 className="day">{day}</h2>
            
        </div>
    );
}