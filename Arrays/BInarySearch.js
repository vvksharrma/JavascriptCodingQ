
function Binarysearch(arr,target){
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let middle=Math.floor((start+end)/2);
        if(target===arr[middle]){
            return `target found at index ${middle}`
        }
        else if(arr[middle]<target){
            middle=start+1
        }
        else 
        middle=end-1
}
return -1
}
