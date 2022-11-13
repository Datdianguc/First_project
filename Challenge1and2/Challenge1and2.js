function SumOfPrimeNumbers() {
    const a = document.getElementById("start").value;
    const b = document.getElementById("end").value;
    let check = true;
    let i = 0;
    let j = 0;
    if (a < b) {
        if (a < 2) {
            console.log("So " + a + " khong phai so nguyen to");
        } if (b < 2) {
            console.log("So " + b + " khong phai so nguyen to");
        } else {
            let sum = 0;
            for (i = a; i <= b; i++) {
                for (j = 2; j < i; j++) {
                    if (i % j == 0) {
                        check = false;
                        break;
                    }
                }
                if (check == false) {
                    console.log(i + " khong phai so nguyen to ");
                } else {
                    sum += parseInt(i);
                    console.log("Tong = " + sum)
                }
                check = true;
            }
        }
    }
}

function numberOneTriangle() {
    const a = document.getElementById("star").value;
    for (i = 0; i < a; i++) {
        let s = ""
        for (j = 0; j <= i; j++) {
            s = s + "*"
        }
        console.log(s);
    }

}