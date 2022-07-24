var en = [];
var a = 5 ;
if(a === 1) en = [0];
else if (a=== 2) en = [0,1];
else 
{
        en = [0,1];
    for (let index = 2; index < a; index++) {
        en.push(en[en.length - 2] + en[en.length - 1]);
    }
}

console.log(en);