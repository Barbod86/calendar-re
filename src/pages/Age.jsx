// import  { useState } from "react";

export default function Age() {

    function date_diff_indays(date1, date2) {

        const dt1 = new Date(date1);
        const dt2 = new Date(date2);
        return Math.floor(
          (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
            Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
        );
      }
    
      function Calculator() {
        let fd = document.getElementById("d").value;
        let fm = document.getElementById("m").value;
        let fy = document.getElementById("y").value;
        let Age = fm +"/"+fd+"/"+fy;
        let today = new Date(); 
        let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDay();
            
        return alert(date_diff_indays(date, Age)+" days")
      }
            
    return (
    <div>
        <input id="y" type="number" />
        <input id="m" type="number" />
        <input id="d" type="number" />

        <button onClick={Calculator}>submit</button>
        <h1 id="Age">found out?</h1>
    </div>
    )
}