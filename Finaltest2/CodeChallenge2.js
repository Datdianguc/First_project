const result = Math.floor(Math.random() * 10) + 1;
let lives = 3;
function GuessLuckyNumber() {
    const x = document.getElementById("Number").value;
    if (x > 10 || x < 1) {
        console.log(" Số " + x + " không nằm trong khoảng cho phép, mời nhập lại ");
    } else if (x != result) {
        console.log("Đoán lại đi");
        lives -= 1;
        console.log("Số lượt đoán còn lại = " + lives);
        if (lives == 0){
        console.log("Bạn thua");
        setTimeout(location.reload(),10000);
    }
    } else {
        console.log("Chúc mừng bạn đã trúng thưởng");
    }
}

