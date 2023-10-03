function craps()
{
    //Debug used to view each phase of craps
    var debug=false;
    if(debug) debugOutput("Initializing Debug Mode");
    if (debug) {
        //alert("Debug Enabled. Note the debug field");
    }

    function randomNum()
        {
            //Used to generate dice number
            min=1
            max=6
            return Math.floor(Math.random() * (max-min)+min);
        }
    if (debug) debugOutput("Attempting Dice 1 roll");
    var die1=randomNum();
    if (debug) debugOutput("Dice 1 Rolled: " + die1);
    if (debug) debugOutput("Attempting Dice 2 roll");
    var die2=randomNum();
    if (debug) debugOutput("Dice 2 attempted to roll " + die2);
    document.getElementById("die1Spot").innerHTML = "Dice 1 rolled: " + die1;
    document.getElementById("die2Spot").innerHTML = "Dice 2 rolled: " + die2;

    function dieSum(die1,die2) 
    {
        if (debug) debugOutput("Attempting to add dice together")
        total = die1+die2;
        if (debug) debugOutput("Dice added. " + total)
        return total;
    }
    var total=dieSum(die1,die2);
    document.getElementById("dieSum").innerHTML = "Total of dice: " + total;

    function debugOutput(reason)
    {
        console.log(reason)
        document.getElementById("debugSpot").innerHTML = "Debug Output: " + reason;
    }
    if(debug) debugOutput("Attempting to calculate win with " + die1 + ", " + die2 + ", " + total);

    function dieWin(die1,die2,total)
    {
        if (debug) debugOutput("Running through each win scenario")
        var win="You pushed, try again!";
        if (debug) debugOutput(win);
        else if (die1==die2) {
            win="You won due to doubles!";
            if (debug) debugOutput(win);
        }
        if ((die1 % 2 == 0) && (die2 % 2 == 0)) {
            win="You won due to double evens";
            if (debug) debugOutput(win);
        }
        if ((total==3)) win= "You won Deuce Ace [a 3 was rolled]";
        if ((total==7) || (total==11))
        {
            win="Ah Craps! You got a 7 or 11!! Try again!";
            if (debug) debugOutput(win);
        }
        //else win="You pushed, try again!";
        if (debug) debugOutput ("Winning output: " + win);
        return win;
    }
    var win=dieWin(die1,die2,total);
    document.getElementById("dieWin").innerHTML = win;
}
