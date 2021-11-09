let trips = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]
var clientList = [];

function parseTrip(trips) {
    trips.forEach(trip => {
        let info = trip.split(" ");
        let client = {
            "client" : info[0],
            "start" : info[1],
            "duration" : info[2],
            "price" : info[3]
         }
        clientList.push(client);
    });
    return clientList; 
};
var dayClients = parseTrip(trips);
console.log(dayClients);  

var dayGains = [];
var sumGains = 0;

function getTripsPrice(dayClients) {
    dayClients.forEach(dayClient => {
        dayGains.push(parseInt(dayClient.price));
    });
    for(let i = 0; i < dayClients.length; i++) {
        sumGains += parseInt(dayClients[i].price);
    }
    return sumGains;
};

getTripsPrice(dayClients); 
console.log(sumGains);
