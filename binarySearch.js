// given an array of numbers search for the following and return -1 if not found else the index
// function binary(arr,target){
//     let leftindex=0;
//     let rightindex=arr.length -1;
//     console.log("right1",leftindex)
//     console.log("right1",rightindex)
//     while(leftindex<=rightindex){
//         console.log("left2",leftindex)
//         console.log("left2",rightindex)
//         let middle= Math.floor((leftindex+rightindex)/2);
//         if (arr[middle]===target) {
//             return middle;
//         }
//         else if (arr[middle]>target) {
//             rightindex=middle -1
//         }
//         else{
//             leftindex=middle+1
//         }
//     }
//     return -1;
//     }
//     let num=[1,3,6,8,9,56,89]
//     let target=9
//     console.log(binary(num,target))
    
   //
    // let num =[45,12,89,2,5]
    // let target = 6
function mergesort(arr){ 
    if (arr.length<= 1){ 
    return arr

    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return sorted(mergesort(left),mergesort(right))
}

function sorted(left,right){
    let emptyArray = []
    while (left.length && right.length){
        if (left[0]<right[0]){

            emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift()) 


        }
       
       

    }
 

    return[...emptyArray,...left,...right]


}


let arr = [2,5,12,45,89]
console.log(mergesort(arr))
    
    function search(array,targets){ 
    let leftindex = 0
    let rightindex = array.length -1

    while(leftindex<=rightindex){ 
        let middle = Math.floor((leftindex+rightindex)/2)
        if (targets===array[middle]){
            return middle
        }
        else if(targets<array[middle]){
            rightindex= middle -1        
        }
        else{
            leftindex = middle +1
        }



    }
    return null
    
}
let array = mergesort(arr)
let targets = 12
console.log(search(array,targets))


// let target = 34
// let arr2 = [1,4,78,2,67,3];
function sort(leila,target){ 
let  leftindex =0
let rightindex = leila.length -1
 while(leftindex <= rightindex){ 
    let middle=Math.floor(leftindex+rightindex/2)
   if(leila[middle]===target) { 
   return middle
   }
   else if
   (leila[middle]>target){
    rightindex=middle-1

   }
   else{ 
   leftindex=middle+1

   

     }


   }
    
 }  
 let leila= [1,2,3,4,5]
 let target =4
 console.log(sort(leila,target))
 




























































































































 
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    