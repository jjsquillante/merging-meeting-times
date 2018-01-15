function mergeRanges (array) {
 var sortedArray = array.sort((a,b)=> {
	return a.startTime > b.startTime ? 1 : -1;
 }).slice();
 
 var currentTime = sortedArray[0].startTime;
 var currentEndTime = sortedArray[0].endTime;
 var finalArray = sortedArray.slice(0,1);
 
 for (var i = 1; i < sortedArray.length; i++) {
	if(sortedArray[i].startTime <= currentEndTime) {
		// get the final Array element - 1
		// find max value of end times and update element.
		var prevFinalArray = finalArray[finalArray.length-1];
		var maxEndValue = Math.max(sortedArray[i].endTime, prevFinalArray.endTime);
		prevFinalArray.endTime = maxEndValue;
    } else {
		finalArray.push(sortedArray[i]);
		currentEndTime = sortedArray[i].endTime;
	}
 }
return finalArray;
}
