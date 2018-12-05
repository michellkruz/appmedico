var pesodoencas = [];

function calcPesoGeral(doencas){
	for(var j = 0; j < doencas.length; j++){
		pesodoencas[j] = 13;
		for(var i = 8; i < psoma_nodular.length - 7; i++){
			if(doencas[j][i] === 1) pesodoencas[j] += psoma_nodular[i];		
		}
		
		console.log("doenca "+ j, pesodoencas[j]);
	}
}


var pesop = [];
function calcPeso(previs, doencas){
	pesop = [];

	for(var j = 0; j < doencas.length; j++){
		pesop[j] = new Array(2);
		
		pesop[j][0] = 0;
		pesop[j][1] = j;	
		for(var i = 0; i < previs.length; i++){
			if(i <= 7 || i == 105){ //caracteristicas e sexo
				if(previs[i] === doencas[j][i]){
					pesop[j][0] += psoma_nodular[i];
				}else{
					pesop[j][0] += psub_nodular[i];
				}
			}else if(i > 7 && i <= 104){ //local, assoc, achados
				if(previs[i] === 1){
					pesop[j][0] += psoma_nodular[i];
				}else{
					pesop[j][0] += psub_nodular[i];
				}
			}else{  //idade
				if(previs[i] === doencas[j][i]){
					pesop[j][0] += psoma_nodular[i];
//					break;
//					console.log("break");
					i = previs.length;
				}else{
					pesop[j][0] += psub_nodular[i];
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



var pesos = false;
function resultado_peso(resul){
	pesos = true
	
	for(var i=0;i<resul.lenght;i++){				
//		$("knn"+resul[i][2]).show();
		console.log("for" + resul[i][0] + " - " +resul[i][1])
				
	}
	
	var id, i=0;
	
	for (var j=0; j<resul.length;j++){
		id = resul[j][1];
		console.log("id= "+id)
		console.log('perc-knn'+ ( id+1) + " - " +resul[j][0].toFixed(2) + "%")
		document.getElementById('perc-knn'+ ( id+1) ).innerHTML = resul[j][0].toFixed(2) + "%";
		$('#perc-knn'+ ( id+1)).val(resul[j][0].toFixed(2))		
		
		console.log("resul")
		console.log(resul[j][0] + " - " +resul[j][1])		
		console.log("id "+ "#knn" + (id+1) )		
		
		if(resul[j][0]>50){
			$("#knn"+ ( id+1) ).click();
			$("#knn"+ ( id+1)   ).show();
			
		}else{
			$("#knn"+ ( id+1)   ).hide();
		}
	}	
	
}