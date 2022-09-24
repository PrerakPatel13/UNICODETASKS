const ps = require("prompt-sync"); 
const prompt = ps();
let n = prompt('How many words do you want to input: ');   
let array = new Array(50);               
let different = new Array(50);
for (var i = 0; i < n; i++)
{     
    array[i] = prompt('Enter Element '+ (i + 1) + ":" );
}
let c, d = 0;
for (let i = 0; i < n ; i++) 
{        
   c= 0;
    for (let j = i + 1; j < n; j++) 
    {         
        if (array[i] == array[j])
        {
            c++;
        }
    }
    if (c == 0) 
    {                            
        different[d] = array[i];
        d++;
    }
}
console.log("Distinct Words in your array: " + d);
let a = new Array(50);                   
for (var i = 0; i < d; i++) 
{
    a[i] = 0;
    for (var j = 0; j < n ; j++) 
    {         
        if (different[i] == array[j]) 
        {
            a[i] = a[i] + 1;
        }
    }
}
let temp1, temp2;
for (let i = 0; i < d; i++) 
{
    for (let j = 0; j < d; j++) 
    {        
        if (a[j] < a[j + 1]) 
        {
            temp1 = a[j];
            a[j] = a[j+1];
            a[j+1] = temp1;
            temp2 = different[j];
            different[j] = different[j+1];
            different[j+1] = temp2;
        }
    }
}
console.log("Words in Desending Order:")
for (let i = 0; i < d; i++) {
    console.log(different[i] + "  " + a[i]);
}