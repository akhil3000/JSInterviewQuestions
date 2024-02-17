const x=10;
function foo(){
    const y=20;
    function bar(){
        const z=25;
        const output=x+y+z;
        return output;
    }
    return bar();
}
const a=foo();
console.log(a);