

function wordReverse(word){
 //console.log(word)
 let wordSplit = word.split(" ")
 let wordReverse = wordSplit.reverse()
 let wordJoin = wordReverse.join()
 
 return wordJoin
 
}

 
// console.log(wordReverse("Abraham Lincoln"))
// console.log(wordReverse("Hank Aaron"))



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12 , 13 , 14 , 15]


function evenOnly(numbers){
let numbers2 = []
for(var i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0){
        numbers2.push(numbers[i])
    }
}

 return numbers2
}

//console.log(evenOnly(numbers))




function  even_Only(number){
  //  console.log(number)
  let number2 = number.filter((num) => num % 2 === 0 )
  
  return number2

}

//console.log(even_Only(numbers))



function repeatString(str , num){
    let car = str;
for(var i = 1 ; i < num ; i++){
    car += str
    
}
return car
}


// console.log(repeatString("car" , 4))
// console.log(repeatString("bar", 3))


function repeat_String(str , num){
    let i = 1
    let car = str
    while(i < num){
        car += str
        i++
    }

    return car
}

//console.log(repeat_String("car", 6))




// function longestWordLength(str){
//     let arr = str.split(" ")
//     for(var i = 0; i < arr.length; i++ ){
//          if(arr[i] )
//     }
    
// }

// longestWordLength("my name is hasnain")


function alphaOrder(str){
 let arr = str.split("")
let arr2 = arr.reverse()
let arr3 = arr2.join("")
 console.log(arr3)

 
}


//alphaOrder("hello")





function wordEdit(str){
    let arr = str.split("")
   for(var i = 0 ; i < str.length ; i++){
        if(str[1]){
       // let word = unshift(str[1])
        break
        
   }
   console.log(arr)
}
}

//wordEdit("hellow")




function wordReverse(str){
let arr = str.split("")
let arr2 = arr.reverse().join("")
return arr2
}

//console.log(wordReverse("car"))


function word_Reverse(str){
    for(var i = str.lenght ; i <= str.length; i--){
        console.log(str[i])
    }
}


word_Reverse("car")
