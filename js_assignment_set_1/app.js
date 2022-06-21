// assignment Question revision
// Question-1
// Using a loop print all odd numbers up to and including n. Don’t include 0. 
for(let i=1; i<=20;i++){
    if(i%2!=0){
    console.log(i)
} 

}

// // Question-2
// // Print the sum of all even numbers in a range from a to b. (Including a,b)
let sum=0;
for(i=10;i<=30;i++){
     if(i%2==0){
    sum+=i
}  
}
console.log(sum)




// // Question-3
// // Write a program to read the first and last digit of a number

 num= 124356

let lastDigit=num%10
console.log("last digit",lastDigit)

let firstDigit

while(num>10){
       firstDigit=Math.floor(num/10)
        num/=10
 }
console.log("first digit",firstDigit)



// Question-4
// Check whether the given number is an armstrong number or not.

 num = 153;
 sum=0;
while(num>0){
   let  reminder=(num%10)
     sum=sum+reminder**3
     num = Math.floor(num/10)
}


if(num==sum){
    console.log(" The given number is an armstrong number")
}else {
    console.log(" The given number is an armstrong number")
}

// Question-5 
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even
let product=1

for(i=40; i<=50;i++){
    let x=Math.floor(i/10)
    if(x%10==4 && i%2==0){
        product*=i
    }

}
console.log(product)


// // Question-6
// // Take a number and return all the even digits of the number.
  num =1425289


  while(num>0){
     reminder = (num%10)
    if(reminder%2==0)console.log(reminder)
       num=Math.floor(num/10)

}
 




// Question-7
// Check whether the given number is equal to its reverse number or not

num=101
firstD=num%10
x=Math.floor(num/10)
secondD=(x%10)
lastD=Math.floor(x/10)

let reverse =firstD*100+secondD*10+lastD
if(num==reverse){
    console.log("The given number is equal to its reverse number")
}else{
    console.log("The given number is not equal to its reverse number")
}