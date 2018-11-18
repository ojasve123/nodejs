function createGreeter(name)
{
    let firstName = name.split(" ")[0];
    function greeter()
    {
        console.log("hello "+ firstName);
    }
    return greeter;
}
 
let johngreeter = createGreeter("john doe");
let harrygreeter = createGreeter("harry potter");
johngreeter();
harrygreeter();