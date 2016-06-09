//Make sure DOM is ready
$(document).ready(function() {
 console.log('DOM is ready....') 
//declare variables answer which is input from players
//player1wins and player2wins counts times each player got a question answered correctly 
var answer;
var player1wins = 0;
var player2wins = 0;
var qncontainer = $("#qn")
var qnchoices = $("#choices")
var p1score =$("#p1score")
var p2score =$("#p2score")
var reset =$("#restart")

//update players' score into scoreboard
function updatescore() {
p1score.text(player1wins)
p2score.text(player2wins)
}
//check whether p1 wins, p2 wins or draw
function checkWinner() {
    if (player1wins > player2wins) {
        alert("winner is player1")
    }
    else if (player2wins > player1wins) {
        alert("winner is player2")
    }
    else alert("It is a draw!")
}

updatescore()
qncontainer.text("Whoever loses have to buy the winner lunch!")
alert("Click to continue")

qncontainer.text("What is the first name of Russia's President Putin?")
qnchoices.text("1. Valentin 2. Valeriy 3. Vladimir 4. Vladivar")
answer = prompt("Player 1: Please key in your choice.")

if (answer === "3") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. Vladimir.")

qncontainer.text("Whom did George W. Bush defeat in the elections of November 2004?")
qnchoices.text("1. Al Gore 2. Arnold Schwarzenegger 3. John Kerry 4. Rudy Giuliani")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "3") {
    alert("Correct!") 
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. John Kerry.")

qncontainer.text("Which Stock Exchange's activity is reflected by the Nikkei index?")
qnchoices.text("1. Hong Kong 2. Manila 3. Singapore 4. Tokyo")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "4") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 4. Tokyo.")

qncontainer.text("The railway station of Marne-la-Vallee-Chessy is the terminus for travellers to which resort?")
qnchoices.text("1. Chamonix 2. Disneyland Resort Paris 3. Meribel 4. Val d'Isere")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. Disneyland Resort Paris.")
    
qncontainer.text("Which Italian city is served by Marco Polo International Airport?")
qnchoices.text("1. Bologna 2. Florence 3. Genoa 4. Venice")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "4") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 4. Venice.")

qncontainer.text("What would you find under the icing of a Christmas Cake?")
qnchoices.text("1. Buttercream 2. Jam 3. Marzipan 4. Pastry")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "3") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. Marzipan.")    
    
qncontainer.text("Pablo Picasso was born in 1881 in which Spanish city?")
qnchoices.text("1. Madrid 2. Malaga 3. Marbella 4. Murcia")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. Malaga.")
    
qncontainer.text("According to KFC, Colonel Sanders' 'secret recipe' contains how many herbs and spices?")
qnchoices.text("1. 9 2. 10 3. 11 4. 12")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "3") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. 11.")    
    
qncontainer.text("Madrid lost out to Rio de Janeiro in the bidding to host the 2016 Olympics. Which other European city was one of the seven original applicants?")
qnchoices.text("1. Berlin 2. Oslo 3. Prague 4. Vienna")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "3") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. Prague.")

qncontainer.text("Triton is the largest moon of which planet?")
qnchoices.text("1. Jupiter 2. Saturn 3. Uranus 4. Neptune")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "4") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 4. Neptune.")    
    
qncontainer.text("Which football club won the English First Division league in the 1960-61 season ?")
qnchoices.text("1. Manchester United 2. Arsenal 3. Liverpool 4. Tottenham")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "4") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 4. Tottenham.")
    
qncontainer.text("Quicksilver is the alternative name of which element?")
qnchoices.text("1. Magnesium 2. Manganese 3. Mercury 4. Molybdenum")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. Mercury.")
    
qncontainer.text("The lyrics 'When I was small and christmas trees were tall' come from which song?")
qnchoices.text("1. First of May 2. Green Door 3. Help! 4. Last Christmas")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "1") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 1. First of May.")
    
qncontainer.text("What is considered the 'king of herbs' by many cookery authors? ?")
qnchoices.text("1. Basil 2. Oregano 3. Rosemary 4. Thyme")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "1") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 1. Basil.")
    
qncontainer.text("Uber was founded by Garrett Camp and?")
qnchoices.text("1. Elon Musk 2. Travis Kalanick 3. Brian Chesky 4. Brian Acton")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. Travis Kalanick.")
    
qncontainer.text("Airbus A380 first commercial flight is operated by which airline?")
qnchoices.text("1. United 2. JAL 3. SIA 4. Emirates")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "3") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. SIA.")
    
qncontainer.text("Emir Sheikh Hamad ibn Khalifah al-Thani was head of state in 2006 of which country?")
qnchoices.text("1. Abu Dhabi 2. Bahrain 3. Qatar 4. Yemen")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "3") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 3. Qatar")
    
qncontainer.text("Which creature features in the 1991 work by Damien Hurst titled The Physical Impossibility of Death in the Mind of Someone Living?")
qnchoices.text("1. A pig 2. A shark 3. A sheep 4. A vole")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. A shark.")
    
qncontainer.text("Which is the largest of the terrier breeds?")
qnchoices.text("1. Airedale Terrier 2. Bedlington Terrier 3. Border Terrier 4. Welsh Terrier")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "1") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 1. Airedale Terrier.")
    
qncontainer.text("Which formula gives the energy stored in the cell of a battery?")
qnchoices.text("1. U=EV 2. U=IE 3. U=MR 4. U=QV")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "4") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 4. U=QV.")
    
qncontainer.text("Which fragrance for men and women was launched by Calvin Klein in 1989?")
qnchoices.text("1. Always 2. Eternity 3. Forever 4. Infinity")
answer = prompt("Player 1: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player1wins = player1wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. Eternity.")
    
qncontainer.text("Where was the Merlot wine grape originally used?")
qnchoices.text("1. Alsace 2. Bordeaux 3. Burgundy 4. Loire")
answer = prompt("Player 2: Please key in your choice.")
if (answer === "2") {
    alert("Correct!")
    player2wins = player2wins + 1
    updatescore()
    }
    else alert("Wrong. The correct answer is 2. Bordeaux.")
    
checkWinner()
    
});