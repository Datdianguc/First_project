function findOppositeNumber() {
    const n = document.getElementById("start").value;
    const inputNumber = document.getElementById("end").value;
    let x = n / 2;
    let y = inputNumber;
    if (n % 2 != 0) {
        console.log("n khong thoa man dieu kien");
    } else if (x > y) {
        console.log(parseInt(x) + parseInt(y));
    } else {
        console.log(y - x);
    }
}

function merge2string() {
    const s1 = document.getElementById("StringStart").value;
    const s2 = document.getElementById("StringEnd").value;
    let MergeString = ""
    if (s1.length > s2.length) {
        for (let i = 0; i < s2.length; i++) {
            MergeString += s1[i] + s2[i];
            console.log(MergeString);
        }
        for (let i = s2.length; i < s1.length; i++) {
            MergeString += s1[i];
            console.log(MergeString);
        }
    } else if (s2.length > s1.length) {
        for (let i = 0; i < s1.length; i++) {
            MergeString += s1[i] + s2[i];
            console.log(MergeString);
        }
        for (let i = s1.length; i < s2.length; i++){
            MergeString += s2[i];
            console.log(MergeString);
        }
    } else if (s1.length = s2.length) {
        for (let i = 0; i < s1.length; i++){ 
            MergeString += s1[i] + s2[i];
            console.log(MergeString);
        }
    } 
}



