//  let x: number = 1;
// //  x = "dfsdfs";
//  console.log(x)

// Hellow world program
// const hellowFun = (firstName: string) => {
//     console.log("Hellow", firstName);
// }

// hellowFun("Sultan");


// Sum of two numbers
const sum = (num1: number, num2: number): number => {
    const ans = num1+num2;
    console.log(ans)
    return num1+num2;
}

sum(3,3);

function reapply (sum: Function): void {
    setTimeout(sum, 1*1000);
}
const fun = (): number => sum(4, 6);
reapply(fun);