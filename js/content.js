let ptry1 = "ptry1.txt"
let ptry2 = "ptry2.txt"
let ptry3 = "ptry3.txt"
let ptry4 = "ptry4.txt"
let ptry5 = "ptry5.txt"
let ptry6 = "ptry6.txt"
let ptry7 = "ptry7.txt"

fetch (ptry1)
.then(x => x.text())
.then(y => document.getElementById("ptry7").innerHTML = y);

fetch (ptry2)
.then(x => x.text())
.then(y => document.getElementById("ptry6").innerHTML = y);

fetch (ptry3)
.then(x => x.text())
.then(y => document.getElementById("ptry5").innerHTML = y);

fetch (ptry4)
.then(x => x.text())
.then(y => document.getElementById("ptry4").innerHTML = y);

fetch (ptry5)
.then(x => x.text())
.then(y => document.getElementById("ptry3").innerHTML = y);

fetch (ptry5)
.then(x => x.text())
.then(y => document.getElementById("ptry2").innerHTML = y);

fetch (ptry7)
.then(x => x.text())
.then(y => document.getElementById("ptry1").innerHTML = y);