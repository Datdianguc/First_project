var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    },
    {
        name: 'Khóa học Expressjs tutorial',
        price: 540000
    },
    {
        name: 'Khóa học Database relationship Pro',
        price: 1200000
    }
]
let sum = 0;
for (let index = 0; index < orders.length; index++) {
    const element = orders[index].price;
    sum += element;
}
console.log(sum);



const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
console.log("Most liked sports: ");
let mostliked = sports.filter(sports => sports.like > 5);

console.log(mostliked);



