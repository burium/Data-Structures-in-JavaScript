// Bei der rekursiven Programmierung ruft sich eine Prozedur, Funktion oder Methode in einem Computerprogramm selbst wieder auf (d. h. enthält eine Rekursion). Auch der gegenseitige Aufruf stellt eine Rekursion dar.
function Rekursive(n) 
{
    if (n <= 1) {
        return 1;
    }

    Rekursive(n - 1); // Rekursiver Aufruf 1
    console.log(n); // Ausgabe nach dem ersten rekursiven Aufruf
    Rekursive(n - 1); // Rekursiver Aufruf 2
}

Rekursive(3);
