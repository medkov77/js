function limit_intersection(limit, person) {
	var arrayLength = person.length;
  var intersections = 0;
  var intersectionsum = 0;
  var min, max = 0;
  var tmp;
  var intervals = [];
  for (var i = 0; i < arrayLength-1; i++) {
  	if(person[i][0] > person[i][1]) {
    	tmp = person[i][1];
      person[i][1] = person[i][0];
      person[i][0] = tmp;
    }
    for (var j = i+1; j < arrayLength; j++) {
    	if(person[j][0] > person[j][1]) {
        tmp = person[j][1];
        person[j][1] = person[j][0];
        person[j][0] = tmp;
      }
    
    	min = 0;
      max = 0;
    	if(person[i][1] <=  person[j][0] || person[i][0] >= person[j][1]){
      	// no intersection
        continue;
      }
        intersections +=1;
      	if(person[i][0] >= person[j][0]) {
        	min = person[i][0]; 
        } else {
        	min = person[j][0];
        }
        
        if(person[i][1] >= person[j][1]) {
        	max = person[j][1]; 
        } else {
        	max = person[i][1];
        }
        intervals.push([min,max]);
        intersectionsum += max-min;
      
    }
	}
  return {'n' : intersections, 'sum' : intersectionsum, 'intervals' : intervals};
}

var result = limit_intersection(4,person);