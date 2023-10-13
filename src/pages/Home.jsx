import { useState, useEffect } from "react";

export default function Home() {
    let today = new Date();
    let date = today.getHours() + 'hours' + (today.getMinutes() + 1) + 'minutes' + today.getSeconds() + 'seconds';
    let day = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDay();

  const [count, setCount] = useState(date);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => date);
    }, 1000);
  });

    
      
    return(
        <div>
            <h1>welcome</h1>
            <br />
            <h1>{count}</h1>
            <h2>{day}</h2>
            
        </div>
    );
}