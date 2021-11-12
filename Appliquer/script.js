let trips = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]
var clientList = [];

// extraire les voyages tout en les découpant pour en extraire chaque morceau ensuite
// création d'un objet client pour reprendre les différentes valeurs d'un voyage
function parseTrip(trips) {
    trips.forEach(trip => {
        let info = trip.split(" ");
        let client = {
            "client" : info[0],
            "start" : parseInt(info[1]),
            "duration" : parseInt(info[2]),
            "end": parseInt(info[1]) + parseInt(info[2]),
            "price" : parseInt(info[3])
         }
        clientList.push(client);
    });
    return clientList; 
};
var dayClients = parseTrip(trips);
console.log(dayClients);  

var dayGains = [];
var sumGains = 0;

// calcul du total des gains pour une journée en récupérant le prix facturé à chaque voyageur.
function getTripsPrice(dayClients) {
    dayClients.forEach(dayClient => {
        dayGains.push(dayClient.price);
    });
    for(let i = 0; i < dayClients.length; i++) {
        sumGains += dayClients[i].price;
    }
    return sumGains;
};

getTripsPrice(dayClients); 
console.log(sumGains);


// vérification de la compatibilité entre deux voyages (n'empiêtent pas l'un sur l'autre)
// en gros si end d'un voyage > start de l'autre 

let tripA = {client: 'Roger', start: 0, duration: 5, end: 5, price: 10};
let tripB = {client: 'Pongo', start: 3, duration: 7, end: 10, price: 14};
let tripC = {client: 'Perdita', start: 8, duration: 10, end: 18, price: 8};
let tripD = {client: 'Anita', start: 16, duration: 3, end: 19, price: 7};

function checkCompatibility(tripA, tripB) {
    return (tripA.end > tripB.start ? false : true)
};

console.log(checkCompatibility(tripA, tripB));

// utiliser clientList qui est formaté plutôt que trips
var compatibiliyTables = [];
function findCompatibility(clientList) {
    clientList.forEach(client1 => { 
        compatibiliyTables.push([client1]); 
        clientList.forEach(client2 => {
            if (checkCompatibility(client2, client1) == true) {
            compatibiliyTables.push([{client2}, {client1}]);
            };
        });
    });
};

findCompatibility(clientList);
console.log(compatibiliyTables);

var combos = [];

function findBestPrice(compatibiliyTables) {
    // pour chaque voyage de la liste afficher le total des gains 
    var tripNumber = 0;
    
    compatibiliyTables.forEach(trip => { 
        tripNumber ++;
        var totalTrip = 0;
        if(trip[1]) {
            totalTrip = trip[1].client1.price + trip[0].client2.price;
        } else {
            totalTrip = trip[0].price;
        }
        console.log(`Pour le trip ${tripNumber}, le revenu total est de ${totalTrip}`);
        combos.push({tripNumber, totalTrip});
    })
    // déterminer celui qui rapporte le plus
    // la combo pour laquelle combo.price > aux autres
    function findBestPrice(combos) {
        var bestPrice = combos[0]
        for (let i= 1; i < combos.length; i++) {
          if (combos[i].totalTrip > bestPrice.totalTrip) {
            bestPrice = combos[i]
          }
        }
        return bestPrice
      }
    console.log(findBestPrice(combos));
};

findBestPrice(compatibiliyTables);