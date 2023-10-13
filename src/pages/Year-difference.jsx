export default function Year() {

  function date_diff_indays(date1, date2) {

    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
    );
  }

  function Calt() {
    let fd = document.getElementById("d").value;
    let fm = document.getElementById("m").value;
    let fy = document.getElementById("y").value;
    let first = fm +"/"+fd+"/"+fy;
  
    let ld = document.getElementById("da").value;
    let lm = document.getElementById("mo").value;
    let ly = document.getElementById("ye").value;
    let second =  lm +"/"+ld+"/"+ly;
  
    return alert(date_diff_indays(first, second)+" days")
  }

  return (
    <div>
      <h1 id="p">Year</h1>
      <input id="y" type="number" />
      <input id="m" type="number" />
      <input id="d" type="number" />
      <input id="ye" type="number" />
      <input id="mo" type="number" />
      <input id="da" type="number" />
      <button onClick={Calt}>submit</button>      
    </div>
  );
}