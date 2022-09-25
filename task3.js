let countryNameData = document.querySelector(".country-name-data");
let casesData = document.querySelector(".cases-data");
let deathsData = document.querySelector(".deaths-data");
let recover = document.querySelector(".recover-data");
let active = document.querySelector(".active-data");
const options = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': '42f8da5bc8msh7b99250d3029246p1d0fe4jsnd53a8d9fc18b',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
  }
};
fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api',options)
.then(response => response.json())
    .then(data => {
        console.log(data);
        const nameOfFirstCountry = data.countries_stat[0].country_name;
        console.log(nameOfFirstCountry);
        const totalCases = data.world_total.total_cases;
        console.log(totalCases);
        let tableData;
        data.countries_stat.map(object => {
          tableData += `<tr>
          <td class = "country-name-data">${object.country_name}</td>
          <td class = "cases-data">${object.cases}</td>
          <td class = "deaths-data">${object.deaths}</td>
		  <td class = "recover-data">${object.recover}</td>
		  <td class = "active-data">${object.recover}</td>
       </tr>`;
        })
        let tableBody = document.querySelector(".table-body");
        tableBody.innerHTML = tableData
    })
    .catch(err => console.error(err));