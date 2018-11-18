let arr = [1,2,3,5,4,98,76,5,12,23,87]
console.log(arr.sort());

function compare(a,b)
{
    return b-a;
}


let sortedArr = arr.sort(compare);
console.log(sortedArr);