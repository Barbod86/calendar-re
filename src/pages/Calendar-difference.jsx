
export default function Calendar() {
        
    function Click() {
        let fd = document.getElementById("d").value;
        let fm = document.getElementById("m").value;
        let fy = document.getElementById("y").value;
        var jalaali = require('jalaali-js');
        let conversion = jalaali.toJalaali(fy, fm, fd)

        return alert(conversion)
    }

    return (
        <div>
        <input id="y" type="number" />
        <input id="m" type="number" />
        <input id="d" type="number" />
        <button onClick={Click}>submit</button>
            <h1>solar to miladi and miladi to solar</h1>
        </div>
    )
}