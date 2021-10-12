function percentagecalculator() {
    




    let a2 = document.getElementById("t").value;
    let b2 = document.getElementById("o").value;

    let a = parseInt(a2);
    let b = parseInt(b2);

    console.log(a + ' ' + b)
    if ( a2 == '' || b2 == '') {
        alert("Please Enter a Value");
        window.location.reload();
    }else if ( a < b ) {
        alert("total marks should be greator than or equal to obtained marks");
        window.location.reload();
    }else {
        let x,z;
        document.getElementById("buttonsubmit").disabled = true;
        x = b*100/a;

        if (x >= 80) {
            z = 'A+';
        }else if (x >= 70) {
            z = 'A';
        }else if (x >= 60) {
            z = 'B';
        }else if (x >= 50) {
            z = 'C';
        }else if (x >= 40) {
            z = 'D';
        }else{
            z = 'FAIL';
        };

        let node1 = document.createElement("td");
        var textnode1 = document.createTextNode("Grade = " +  z);
        node1.appendChild(textnode1);
        document.getElementById("result1").appendChild(node1);

        let node2 = document.createElement("td");
        var textnode2 = document.createTextNode("Percentage = " + x.toFixed(3));
        node2.appendChild(textnode2);
        document.getElementById("result2").appendChild(node2);

        let btn1 = document.createElement("button");
        btn1.id = "buttonreload";
        btn1.appendChild(document.createTextNode("Reset"));
        document.getElementById("btn1col").appendChild(btn1);
    
        btn1.onclick = () => {
            window.location.reload();
        }
        

    }



}