// Die Fibonacci-Folge ist eine unendliche Folge von Zahlen (den Fibonacci-Zahlen), bei der sich die jeweils folgende Zahl durch Addition ihrer beiden vorherigen Zahlen ergibt: 0, 1, 1, 2, 3, 5, 8, 13, … Benannt ist sie nach Leonardo Fibonacci, der damit 1202 das Wachstum einer Kaninchenpopulation beschrieb
function Fibonacci(num)
{
  if( num < 2 ) return  num ;
  return Fibonacci(num - 1) + Fibonacci(num -2);
}

let Zahl = Fibonacci(8) ;
console.log(Zahl); // 21
