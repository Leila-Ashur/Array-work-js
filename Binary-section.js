//given  array of unsorted no return the index of the following targetif the target exist in 
// the array , if the target is not found return null
let num = [45,12,6, 89, 2, 5]
let target =6
let sort = []
function merge(left,right){
while (Left.length && right.length){
    if (Left[0] < right[0]){
        sort.push(left.shift())
    }
    else{
        sort.push(right.shift())
    }

}
return [...sort,...left,...right]
}
function mergeSort(num){
    let middle = Math.floor(num.length/2)
    if (num.length < 2){
        return num
    }
    let left = mergeSort(num.slice(0,middle))
    let right = mergeSort(num.slice(middle))
    return merge (left,right)
    let num = [45,12,6,89,2,5]
     }

    function binary (arr1,targets){
        let left = 0
        let right = arr1.length -1;
        while(left <= right){
            let middle = Math.floor((left + right)/2);
            if(arr1[middle]===targets){
                return middle;
            }
            else if(arr1[middle]>targets){
                right = middle -1
            }
            else{
                left = middle +1
            }
        }
        return null
    }
    let targets =6
    console.log(num.indexOf(6));
    


    //2
    //given an unsorted array of numbers return the sorted array  in descending order
    let arr = [123,89,5,23,9,56]
    function merge(leftIndex,rightIndex){
        let sorted =[]
        while (leftIndex.length && rightIndex.length){
            if (leftIndex[0] > rightIndex[0]){
                sorted.push(leftIndex.shift())
            }
            else{
                sorted.push(rightIndex.shift())
            }

        }
        return[...sorted,...leftIndex,...rightIndex]
    }
    function mergeSort(arr){
        let mid = Math.floor(arr.length / 2)
        if (arr.length<2){
            return arr
        }
        let leftIndex = mergeSort(arr.slice(0,mid))
        let rightIndex = mergeSort(arr.slice(mid))
        return merge (leftIndex,rightIndex)
    }
    console.log(mergeSort(arr))
    //3
    //Given the following array , search for this target
    
    

    function merge(back,Front){
        let sort1=[]
        while (back.length && Front.length){
            if (back[0] < Front [0]){
                sort1.push(back.shift())
            }
            else{
                sort1.push(Front.shift)
            }

        }
        return [...sort1,...back,...Front]
    }
    function mergeSort(arr2){
        let middle = Math.floor(arr2.length / 2)
     if (arr2.length < 2){
        return arr2
     }  
     let back = mergeSort(arr2.slice(0,middle))
     let front = mergeSort(arr2.slice(middle))
     return merge (back, front)

    }
    let arr2 = [1,4,78,2,67,3]
    




    function binary(arr,target1){
        let back = 0;
        let Front = arr.length -1;
        while(back <= Front){
            let middle = Math.floor((back + Front)/2);
            if (arr[middle]===target1){
                return middle;
            }
            else if(arr[middle] > target1){
                back=middle -1
            }
           
            else{
                left=middle +1


            }
        }
        return -1
    }
    let target1 = 34
    console.log(binary(arr,target1));
    




 