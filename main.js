/* cria uma variavel de nome 'textos' e referencia ela a classe que contem '.aba-conteudo'*/
const  textos  =  document.querySelectorAll(".aba-conteudo");
/* cria uma variavel de 'contadores' e referencia ela a classe que contem '.contador'*/
const  contadores  =  document.querySelectorAll(".contador");
/* cria uma variavel de 'tempoObjetivo1' e adiciona nela a data de 01/01/2030 */
const  tempoObjetivo1  =  new  Date("2030-01-01T00:00:00");
/* cria uma variavel de nome 'tempo' e referencia ela a variavel tempoObjetivo1 poderia ser um array*/
const  tempo  =  tempoObjetivo1 ;

/* Função que fara todo o calculo matematico para retornar a quantidade de dias horas minutos e segundos
retirando do dia atual - data definida na variavel tempo*/
function  calculaTempo(tempoObjetivo) {
	let  tempoAtual  =  new  Date();
		let  tempoFinal  =  tempoObjetivo  -  tempoAtual;
		let  segundos  =  Math.floor(tempoFinal  /  1000);
		let  minutos  =  Math.floor(segundos  /  60);
		let  horas  =  Math.floor(minutos  /  60);
		let  dias  =  Math.floor(horas  /  24);
		segundos  %=  60;
		minutos  %=  60;
		horas  %=  24;
	if (tempoFinal  >  0) {
		return [dias, horas, minutos, segundos];
	} else {
		return [0, 0, 0, 0];
	}
}
  
/*função que pega o retorno da função 'calculaTempo()' e injeta ou seja escreve dentro do html
o resultado do processamento feito*/
function  atualizaCronometro() {
	document.getElementById("dias0").textContent  =  calculaTempo(tempo)[0];
	document.getElementById("horas0").textContent  =  calculaTempo(tempo)[1];
	document.getElementById("min0").textContent  =  calculaTempo(tempo)[2];
	document.getElementById("seg0").textContent  =  calculaTempo(tempo)[3];
}

/* essa função atualiza os dados de 1 em 1 segundo definidos pelo setInterval(atualizaCronometro, 1000);
isso da o efeito que esta mudando sozinho como um relogio mesmo
*/
function  comecaCronometro() {
	atualizaCronometro();
	setInterval(atualizaCronometro, 1000);
}

/* Por fim esse trecho que e uma função inicia tudo*/
comecaCronometro();