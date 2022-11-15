
// Exercise 1:
// Write a JavaScript program to extract the first half of a given array and show the output in new
// variable &quot;categories_firsthalf&quot;
// let categories = [&quot;Health&quot;, &quot;Fashion&quot;, &quot;Toys&quot;, &quot;Electronic&quot;, &quot;TV&quot;, &quot;Sports&quot;, &quot;Watches&quot;, &quot;Motorbike&quot;,
// &quot;Home and Lifestyle&quot;, &quot;Devices&quot;]

let categories = ['Health', 'Fashion', 'Toys', 'Electronic', 'TV', 'Sports', 'Watches', 'Motorbike','Home and Lifestyle','Device'];
let categories_firsthalf = categories.slice(0,5);
console.log(categories_firsthalf);

// Exercise 2:
// Write a JavaScript program to concatenate two array except their first index.
//const str1 = [&quot;Apple&quot;, &quot;Bananna&quot;, &quot;Orange&quot;, &quot;Grapes&quot;]
//const str2 = [&quot;abc&quot; , &quot;def&quot;, &quot;ghi&quot;, &quot;jkl&quot;]

// Merhod 1

const str1 = ['apple' , 'banana' , 'orange', 'grapes'];
const str2 = ['abc', 'def', 'ghi', 'jkl'];
str1.splice(0,1);
str2.splice(0,1);
const str = str1.concat(str2);
console.log(str);

//Method 2

// const str3 = ['apple' , 'banana' , 'orange', 'grapes'];
//  const str4 = ['abc', 'def', 'ghi', 'jkl'];
// //  const myconcat = str3.concat(str4).splice(1,3);
// const myconcat = str3[str4].splice(0,1).str3.concat(str4);

// //  const myconcat = str5.concat(str3.slice(1,4),str4.slice(1,4));
// //  str4.shift();
// //  const str5 = str3.concat(str4);
//  console.log(myconcat);
 

//  const str3 = ['apple' , 'banana' , 'orange', 'grapes'];
//  const str4 = ['abc', 'def', 'ghi', 'jkl'];
//  str3.shift();
//  str4.shift();
//  const str5 = str3.concat(str4);
//  console.log(str5);

// Method 3

// const str1 = ['apple' , 'banana' , 'orange', 'grapes'];
// const str2 = ['abc', 'def', 'ghi', 'jkl'];
// const str3 = str1.splice(1,3);
// const str4 = str2.splice(1,3);
// const str = str3.concat(str4);
// //  const str =  str1.concat(str2).splice(1,3);
// // const str =str1.splice(1,4);
// console.log(str);

// Exercise 3:
// Write a JavaScript program to sort the given array in ascending and descending order.
// const NumericArray = [&#39;80&#39;, &#39;9&#39;, &#39;700&#39;, 40, 1, 5, 200];

//---------------------Ascending----------------------
const ascen = (a,b) =>{
    return a-b;
}
const NumericArray = [80, 9, 700, 40, 1, 5, 200];
 NumericArray.sort(ascen);
 console.log(NumericArray);

 //---------------------descending order----------------
 const descen = (a,b) => {
    return b-a;
 }
const NumericArray2 = [80, 9, 700, 40, 1, 5, 200];
NumericArray2.sort(descen);
console.log(NumericArray2);

// Exercise 4:
// Write a JavaScript program to add &quot;Feb&quot; at the index 1.
// const months = [&quot;Jan&quot;, &quot;March&quot;, &quot;April&quot;, &quot;Dec&quot;];
// Now remove &quot;Dec&quot; from the array and add &quot;May&quot;, &quot;June&quot; in the replacement of &quot;Dec&quot;

const months = ['jan', 'march', 'april', 'dec'];
months.splice(1,0,'feb');
months.pop();
months.push('may', 'june');
console.log(months);


// Exercise 5:
// Write a JavaScript program to join given array with &quot; and &quot;
// let joinarr = [&quot;Me&quot;, &quot;my family&quot;]

let joinarr = ['Me ', 'my family'];
joinarr.splice(1,0,'and');
console.log(joinarr)

// Exercise 6:
// Write JS Condition for the following conditions:
// 1. number greater than 2 and less than 10 then result should be &quot;Number is between 2 and 10&quot;
// 2. number greater than 10 and less than 19 then reult should be &quot;Number is between 10 and 19&quot;
// 3. number greater than 19 and less than 30 then reult should be &quot;Number is between 19 and 29&quot;
// 4. If selection is not in these values then result should be &quot;Sorry try again&quot;

let greater1 = 20;

    if (greater1 >= 2 && greater1 <= 10) {
        console.log(' Num is between 2 and 10');        
    }
    else if (greater1 >= 10 && greater1 <= 19) {
        console.log(' Num is between 10 and 19');
    }
    else if (greater1 >= 19 && greater1 <= 29) {
        console.log(' Num is between 19 and 29');
    }
    else {
        console.log('Sorry try again');
       }



const greater = 30;
switch (true) {
    case (greater >= 2 && greater <= 10):
        console.log('Num is between 2 and 10');        
        break;
        case (greater >= 10 && greater <= 19):
        console.log('Num is between 10 and 19');        
        break;
        case (greater >= 19 && greater <= 29):
        console.log('Num is between 19 and 29');        
        break;
    default:
        console.log('Sorry try again!');
        break;
}
    
