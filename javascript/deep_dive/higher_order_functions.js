function getFirstName(fullname)
{
    return fullname.split(" ")[0];
}
function greeter(findName,fullname)
{
let firstName = findName(fullname);
console.log("hello "+firstName);

}
greeter(getFirstName,"ojasve garg")