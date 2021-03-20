function sumIntervals (intervals){
  let sum = 0;
  function duble (arr, el1, j) {
    arr.map((el, i) =>{
      if(i != j){
        
        if (el[0] >= el1[0] && el[1] <= el1[1] ){
          intervals.splice(i, 1);
        }
        // if (el1[0] >= el[0] && el1[1] <= el[1] ){
        //   intervals.splice(j, 1);
        // }
        if (intervals.length > 1){
          if (el[0] >= el1 [0] && el[0] <= el1[1]) {
            intervals.push([el1[0], el[1]]);
            if (i<j){ 
            intervals.splice(i, 1)
            intervals.splice(j, 1)}
            else { intervals.splice(j, 1)
              intervals.splice(i, 1)}
          }}
        
        
      }
    });
   }
   if (intervals.length > 1){
   intervals.map((el, j) =>{
    duble (intervals, el, j)});
  }
    intervals.map(el=> {
   sum += (el[1] - el[0]); 
 })
console.log(intervals);
 console.log(sum);
 return(sum);
}

  sumIntervals(
    [[1,7], [3,6]]
  )

 