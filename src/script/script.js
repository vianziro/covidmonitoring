const confirm = document.getElementById('positif')
const deaths = document.getElementById('kematian')
const recovered = document.getElementById('sembuh')
const datas = document.querySelectorAll('.datas');
const map = document.getElementById('map');
const responUrl = "https://corona.lmao.ninja/v2/countries/Indonesia/";



let ctx = document.getElementById('chartKu').getContext('2d');
let DataCorona = {}
const tarikData = async() => {
         await fetch(responUrl) .then (async response => {
        DataCorona = await response.json()
        confirm.innerHTML = DataCorona.cases;
        deaths.innerHTML = DataCorona.deaths;
        recovered.innerHTML = DataCorona.recovered;
       
   })
   
   let chart = new Chart(ctx, {
        
    type: 'pie',
    data: {
        labels: ['Positif', 'Meninggal','Sembuh'],
        datasets: [{
            label: 'Covid Prosentase',
            backgroundColor:['#fec60d', '#dc3545', '#007bff'],
            data: [DataCorona.cases, DataCorona.deaths, DataCorona.recovered]
        }]
    },
    options: {}
});


}

(tarikData())









