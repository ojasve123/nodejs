function createCounter(initVal,delta)
{
    let val = initVal;
    function counter()
    {
        val += delta;
        return val;
    }
    return counter;
}

let fiveCount=createCounter(5,5);
let anotherCount = createCounter(18,4);
fiveCount();
console.log(fiveCount());
console.log(fiveCount());
console.log(anotherCount());
console.log(anotherCount());
console.log(anotherCount());