module.exports = arrayAsString => arrayAsString.split(',').map(tech => tech.trim());
//cortando em strings onde tem virgula, percorrendo o array com o map e retiranto os espaços com o .trim
