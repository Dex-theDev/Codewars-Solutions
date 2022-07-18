/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/
function toCamelCase(str){
    let arr = sanitizeString(str)
    
    //check if the first character is uppercase
    if(arr[0].charAt(0).toUpperCase() === arr[0].charAt(0)){
      arr[0].charAt(0)
    } else {
      arr[0].charAt(0).toUpperCase()
    }
    
    //loop through rest of array
      for(i = 1; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
    
    
    function sanitizeString(str){
          let newStr = ''
      //sanitize string
      if(!str.includes('-')){
        newStr = str.split('_')
      } else {
        newStr = str.split('-')
      }
      return newStr
        }
      return arr.join('')
    }
    
    
    console.log(toCamelCase("the-stealth-warrior"))