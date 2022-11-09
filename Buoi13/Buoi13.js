function getTwoNumber() {
    const a = document.getElementById("start").value;
    const b = document.getElementById("end").value;
    console.log(a);
    console.log(b);
    let mylist = document.getElementById("List");
    for (let i = a; i <= b; i++) {
        const t = checkSquareNumber(i);
        if (t != null) {
            console.log(t);
            let li = document.createElement("li");
            li.innerText = i;
            mylist.appendChild(li);
        }
    }

}
    function checkSquareNumber(n) {
        const i = Math.sqrt(n);
        if (Math.ceil(i) === i) {
            return n;
        }
    }