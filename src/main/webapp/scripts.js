//const KNN = require('ml-knn');
//const csv = require('csvtojson');
//let knn;

	var csvFilePath = '5 doencas.csv'; // Data

	csv().fromFile(csvFilePath).then((jsonObj)=>{
		console.log(jsonObj);
		/**
		 * [
		 * 	{a:"1", b:"2", c:"3"},
		 * 	{a:"4", b:"5". c:"6"}
		 * ]
		 */ 
	});



//csv({
//	output: "csv"
//})
//.fromString("a,b,c\n1,2,3")
//.then(function(result){
//	console.log(result);
//})

//csv()
//.fromFile(csvFilePath)
//.on('json', (jsonObj) => {
//   // data.push(jsonObj); // Push each object to data Array
//	console.log(jsonObj);
//});