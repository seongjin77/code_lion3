function solution(arr)
{
   let answer = [];
    for(let i=1; i<arr.length; i++){
        
        if(arr[i-1]===arr[i]){
            arr.splice(i-1,1)
        }
        
    }
    answer = arr
    
    return answer;
} 