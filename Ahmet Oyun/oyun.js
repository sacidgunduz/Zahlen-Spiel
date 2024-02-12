var geheimZahl;
var gerateneZahl;
var oberGrenze = 10;
var unterGrenze = 1;
var anzahlVersuche;

geheimZahl = (Math.random() * oberGrenze) + unterGrenze;
geheimZahl = Math.floor(geheimZahl);

gerateneZahl = prompt("In welchem Wagon befindet sich Ahmet");

do{
    gerateneZahl = prompt("In welchem Wagon befindet sich Ahmet");
    anzahlVersuche++;

    if(geheimZahl ==gerateneZahl) {
        alert("Du hast richtig geraten")
    }
    else if(geheimZahl>gerateneZahl){
        alert("Ahmet befindet sich in einem hinteren Wagon" + gerateneZahl);
    }
    else{
        alert("Ahmet befindet sich in einem vorderen Wagon" + gerateneZahl);
    }
}   while(gerateneZahl!=geheimZahl) (anzahlVersuche=4);