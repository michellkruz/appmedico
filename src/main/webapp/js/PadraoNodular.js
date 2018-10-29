/**
 * 
 */
//import KNN from './knn.js';
//
//import euclidean from './euclidean.js';

//var dataset = [[0, 0, 0], [0, 1, 1], [1, 1, 0], [2, 2, 2], [1, 2, 2], [2, 1, 2]];
//var predictions = [0, 0, 0, 1, 1, 1];


/*var cincodoencas = [[0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0],
[0,1,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
[1,1,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,0,0,0,0,0,1],
[0,0,0,0,4,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,1,0],
[0,1,2,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,2,0,0,0,1,0,0]
];*/

//var cincodoencas = [[0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0],
//	[0,1,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
//	[1,1,1,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,2,0,0,0,0,0,1],
//	[0,0,0,0,4,0,0,2,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,1,0],
//	[0,1,2,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,2,0,0,0,1,0,0]
//];

var cincodoencas = [
	[0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0],
	[0,1,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
	[0,0,0,0,2,0,0,2,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,1,0],
	[0,1,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0]
];

//var classes = [0,1,2,3,4];

/*var predict = [
	[0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0],
	[0,1,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
	[1,1,1,0,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,1],
	[0,0,0,0,4,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0],
	[0,1,2,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0]

];*/

var predict = [
	[0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0],
	[0,1,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
	[1,1,1,0,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,1],
	[0,0,0,0,4,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0],
	[0,1,2,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0]
];

var pesosoma = [1,1,1,1,1,1,3,3,3,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.5,0.5,0.5,0.5,0.5,0.5,0.5];
var pesosub = [-1,-1,-1,-1,-1,-1,-3,-3,-3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var pesodoencas = [17.599999999999994, 18.199999999999992, 16.999999999999996, 17.199999999999996, 16.999999999999996];

var pesop = [];
var distancias = [];

//var knn = new KNN(dataset, predictions);
//var knn = new KNN(cincodoencas, classes, {k: 1});
//var dataset = [[0, 0, 0], [2, 2, 2]];

//var ans = knn.predict(dataset);
//var ans = knn.predict(predict);  // resutado correto [ 0,1,2,3,4]

//console.log(ans);

//for(var j = 0; j < cincodoencas.length; j++){
//	pesodoencas[j] = 16;
//	for(var i = 9; i < 103; i++){
//		if(cincodoencas[j][i] === 1) pesodoencas[j] += pesosoma[i];		
//	}
//	
//	console.log("doenca "+ j, pesodoencas[j]);
//}

function calcEuclid(previs){	
//	var knn = new KNN(cincodoencas, classes, {k: 1});//
//	var ans = knn.predict(previs);
	
	console.log("Teste com a distancia Euclidiana");
	for(var i = 0; i<cincodoencas.length;i++){
		distancias[i] = new Array(2);
		distancias[i][1] = i;
		
		//for(var j = 0; j<previs.length;j++){
			var e  = euclidean(previs, cincodoencas[i] );
			console.log("doença: " + i + " pred: 1 distancia: "+e);
			distancias[i][0] = e;
		//}
		
		console.log("");	
	}
	
	distancias.sort(sortFunction);
	console.log(distancias);
}

function calcPeso(previs){
	var pesop = [];

	for(var j = 0; j < cincodoencas.length; j++){
		pesop[j] = new Array(2);
		
		pesop[j][0] = 0;
		pesop[j][1] = j;	
		for(var i = 0; i < previs.length; i++){
			if(i <= 8 || i == 109){ //caracteristicas e sexo
				if(previs[i] === cincodoencas[j][i]){
					pesop[j][0] += pesosoma[i];
				}else{
					pesop[j][0] += pesosub[i];
				}
			}else if(i > 8 && i <= 108){ //local, assoc, achados
				if(previs[i] === 1){
					pesop[j][0] += pesosoma[i];
				}else{
					pesop[j][0] += pesosub[i];
				}
			}else{  //idade
				if(previs[i] === cincodoencas[j][i]){
					pesop[j][0] += pesosoma[i];
					break;
				}else{
					pesop[j][0] += pesosub[i];
				}
			}
		}
		
		console.log("predict "+ pesop[j][1], pesop[j][0]);
		
		pesop[j][0] = pesop[j][0] * 100 / pesodoencas[j];
		
		console.log("porcent "+ pesop[j][1], pesop[j][0]);
	}
	
	pesop.sort(sortFunction);
	console.log("pesop")
	console.log(pesop);
	
	resultado_peso(pesop)
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function resultado_peso(resul){
	
	for(var i=0;i<resul.lenght;i--){
				
//		$("knn"+resul[i][2]).show();
		console.log("for" + resul[i][0] + " - " +resul[i][1])
				
	}
	
	
	
	var id;
	
	var i=0
	
	for (var j=0; j<resul.length;j++){
		id = resul[j][1];
		
		document.getElementById('perc-knn'+ ( id+1) ).innerHTML = resul[j][0].toFixed(2) + "%";
		console.log('perc-knn'+ ( id+1) + " - " +resul[j][0].toFixed(2) + "%")
		
		console.log("resul")
		console.log(resul[j][0] + " - " +resul[j][1])
		
		
		console.log("id "+ "#knn" + (id+1) )
		
		
		
		if(resul[j][0]>50){
			$("#knn"+ ( id+1) ).click();
			$("#knn"+ ( id+1)   ).show();
			
		}
	}
	
	
}
//abrir a aba do resultado a parti do id

//$('#ui-id-1').click();

function distanciaManhattan(previs){
	//var previs = [0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0];
	console.log(previs.length);
	for(var i = 0; i < cincodoencas.length; i++){
		var dm = 0;
		for(var j = 0; j < previs.length; j++){
			dm += Math.abs(cincodoencas[i][j] - previs[j]);
		}		
		console.log("Doenca "+i+" Distancia "+dm);
	}
	
//	Doenca 0 Distancia 20
//	Doenca 1 Distancia 16
//	Doenca 2 Distancia 10 
//	Doenca 3 Distancia 15 
//	Doenca 4 Distancia 3
	
//	Doenca 0 Distancia 18 
//	Doenca 1 Distancia 18 
//	Doenca 2 Distancia 10 
//	Doenca 3 Distancia 5 
//	Doenca 4 Distancia 13
	
//	Doenca 0 Distancia 20 
//	Doenca 1 Distancia 18 
//	Doenca 2 Distancia 2 
//	Doenca 3 Distancia 13 
//	Doenca 4 Distancia 11
	
//	Doenca 0 Distancia 19 
//	Doenca 1 Distancia 9 
//	Doenca 2 Distancia 13 
//	Doenca 3 Distancia 16 
//	Doenca 4 Distancia 8
	
//	Doenca 0 Distancia 3 
//	Doenca 1 Distancia 23 
//	Doenca 2 Distancia 19 
//	Doenca 3 Distancia 18 
//	Doenca 4 Distancia 18
}

function nth_root(value, n_root){
	var root_value = 1/n_root.toFixed(2);
	return Math.round (Math.pow(value.toFixed(4), root_value.toFixed(4)) * 100) / 100;
}

function minkowski_distance(previs, p_value){
	//var previs = [0,1,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0];
	console.log("minkowski_distance");
	
	for(var i = 0; i < cincodoencas.length; i++){
		var soma = 0;
		for(var j = 0; j < previs.length; j++){
			soma += Math.pow(Math.abs(cincodoencas[i][j] - previs[j]), p_value);
		}
		console.log(nth_root(soma, p_value));
	}
	
//	1.44 
//	3.76 
//	3.5 
//	3.48 
//	3.63
	
//	3.66 
//	2.08 
//	2.67 
//	3.04 
//	2.71
	
//	3.53 
//	2.88 
//	1.26 
//	2.67 
//	2.22
	
//	3.48 
//	2.88 
//	2.15 
//	1.71 
//	2.67	
	
//	3.68 
//	3.04 
//	2.15 
//	3 
//	1.44
} 


function square_rooted(x){
	var soma = 0;
	for(var a in x){
		//console.log(a);
		soma += (x[a] * x[a]);
	}
//	console.log("soma "+Math.sqrt(soma));
	return Math.round(Math.sqrt(soma) * 100) / 100;
}	     
 
function cosine_similarity(previs){
	console.log("cosine similarity");
	//var previs = [0,1,0,1,4,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0];
	
	for(var i = 0; i < cincodoencas.length; i++){
		var numerator = 0;
		for(var j = 0; j < previs.length; j++){
			numerator += (cincodoencas[i][j] * previs[j]);
		}
		var denominator = square_rooted(cincodoencas[i])*square_rooted(previs);
		console.log("Doenca "+i+ " "+numerator/denominator.toFixed(4));
	}
	
//	Doenca 0 0.4052812651980474 
//	Doenca 1 0.6661714792004609 
//	Doenca 2 0.8261020717951543 
//	Doenca 3 0.6883575788169428
//	Doenca 4 0.9505890374138734
	
//	Doenca 0 0.47171429551614125 
//	Doenca 1 0.6026733320222545
//	Doenca 2 0.7539154434661755 
//	Doenca 3 0.9988887362808875 
//	Doenca 4 0.6867360061931101
	
//	Doenca 0 0.45031251688671936 
//	Doenca 1 0.6661714792004609 
//	Doenca 2 0.96378575042768 
//	Doenca 3 0.7539154434661755
//	Doenca 4 0.8194733081154081
	
//	Doenca 0 0.3105140041815886 
//	Doenca 1 0.8421600640041649 
//	Doenca 2 0.7120506663607487 
//	Doenca 3 0.6404122748197427
//	Doenca 4 0.7910975159537998
	
//	Doenca 0 0.9085717252479103 
//	Doenca 1 0.33602473142023254
//	Doenca 2 0.4464595755657635
//	Doenca 3 0.5196424859696529 
//	Doenca 4 0.47240225997241175
}
 
    
    
