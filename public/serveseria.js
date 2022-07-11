class breweryQuerier {
  _locations = {};

  getBrewery = function (l) {
    return {}
  };

  createBrewery = function ({ name, country, city, street }) {
  };

  constructor(locations) {
    this._locations = locations;

    for (let location in this._locations) {
      this.createBrewery(this.getBrewery(this._locations[location]));
    }
  }
}

var coordenadasCervecerias = new breweryQuerier({
  guadalajara: {
    lat: 40.634595,
    lng: -3.16871,
  },
  caracas: {
    lat: 10.4806,
    lng: -66.8983,
  },
  munich: {
    lat: 48.1351,
    lng: 11.582,
  },
});

var ciudadesCoordenadas = Object.values(coordenadasCervecerias._locations)

for (let localidad of ciudadesCoordenadas){
  urlLocalidad = `${localidad.lat},${localidad.lng}`
  fetch(`https://api.openbrewerydb.org/breweries?by_dist=${urlLocalidad}&per_page=1`)

  .then(response => response.json())
  .then(data =>{
    const rate = document.getElementById("breweries");
    dataParseada = Object.values(data)[0]
    datosCerveceria = `nombre: ${dataParseada.name} - ciudad: ${dataParseada.city} - pais:${dataParseada.country} - calle:${dataParseada.street}`
    rate.textContent  = datosCerveceria
  });
};
