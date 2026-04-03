function stringChop(str, size) {
  // your code here
	if (!str) return []; // handle null or empty string
  if (size <= 0) return [];
	let arr = [];
	if(str.length<=size){
		return [str];
	}
	let n=str.length;
	let i=0;
	while(i<n){
		arr.push(str.slice(i,i+size));
		i+=size;
	}
	return arr;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
