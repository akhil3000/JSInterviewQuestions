function myCalculator(num1,num2,mycallback)
{
    let sum=num1+num2;
    mycallback(sum);

}

function displaySum(sum)
{
    console.log(sum);
}

myCalculator(5,6,displaySum);
//Callback is a function whis is passed as argument to another function it is also called as higher order function
