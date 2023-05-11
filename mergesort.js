// function divideArray(arr){
//     if (arr.length<=1) {
//         return arr;
//     }
//     let middle=Math.floor(arr.length/2)
//     let left=arr.slice(0,middle)
//     let right=arr.slice(middle)
//     return sortedArray(divideArray(left),divideArray(right))
// }
// function sortedArray(left,right) {
//     let emptyArray=[]
//         while (left.length && right.length) {
//             if (left[0] < right[0]) {
//                 emptyArray.push(left.shift())
//             }
//             else{
//                 emptyArray.push(right.shift())
//             }
//         }
//         console.log(emptyArray)
//         return[...emptyArray,...left,...right]
//     }
// let arr=[3,10,2,26,15,11,4]
// console.log(divideArray(arr))


// let arr=[123,89,5,23,9,56]
// in descending
function unsorted(array){
    if(array.length<=1){
        return array
     }
     let middle=Math.floor(array.length/2);
     let left=array.slice(0,middle)
     let right=array.slice(middle)
     return mergesort(unsorted(left),unsorted(right))
}


function mergesort(left,right){ 
    let emptyArray= []
 while(left.length && right.length){
    
    if(left[0]<(right[0])){
        emptyArray.push(left.shift())
    }
    else{(emptyArray.push(right.shift()))

    }
 }
 console.log(emptyArray)
    
    return [...emptyArray,...left,...right]

}    
 let array = [123,89,5,23,9,56]
    console.log(unsorted(array))

    // const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ];
    // 
function merging(arr){ 
    if(arr.length<1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle) 
    return mergings(merging(left),merging(right))
}


    function mergings(left,right){ 
    let emptyArray=[]
    while(left.length && right.length){
        if (left[0]<right[0]){ 
        emptyArray.push(left.shift())
        }
       else{  emptyArray.push(right.shift())
        
         }
    }
 return [emptyArray,...left,...right]
}
    let arr=[ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ];
    console.log(merging (array))


    //   revesion 1
    function merge(arr) {
        
        if (arr.length<=1) {
            return arr
        }
        let middle=Math.floor(arr.length/2)  
        let left =arr.slice(0,middle)
        let right=arr.slice(middle) 

        return divided(merge(left),merge(right))
     }
     function divided(left,right) {
         let emptyArray= []
         while(left.leghth && right.length){
             if (left[0]<right[0]){ 
             emptyArray.push(left.shift())
         }
         else{
             emptyArray.push(right.shift())
         }
         
         }
         console.log(emptyArray) 
         return [...emptyArray,...left,...right]
     }
     arr=[1,2,32,3,4]
     console.log(merge(arr))
     
    



    








