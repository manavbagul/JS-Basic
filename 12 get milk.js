function getmilk(money, price)
    {
        var a = Math.floor(money / price);
        console.log("total " + ((a))+ " bottles of milk bought");
        return money % price;
    }
console.log("$" + getmilk(10, 3) + " remain");