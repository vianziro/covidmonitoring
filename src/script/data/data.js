import axios from 'axios';


const urlApi = 'https://covid19.mathdro.id/api';

export const fetchData = async(negara)=> {
    let gantiUrl = urlApi;
    if (negara){
        gantiUrl = `${urlApi}/countries/${negara}`;
    }

    try {
        const {
            data: {confirmed,recovered,deaths,lastUpdate},
        } = await axios.get(gantiUrl);

        const modifData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
        return modifData;

    }catch (error) {}
};

export const fetchDataHarian = async () => {
    try{
        const {data} = await axios.get(`${urlApi/daily}`);
        const modifData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,
    
        })) ;
          return modifData;

    }catch (error){
        console.log(error);
    }
};


export const fetchCountries = async () => {
    try {
        const {
            data : {contries},
        } = await axios.get(`${urlApi}/countries`);
        return countries.map((country => country.name));
    }catch (error){
        console.log(error);
    }
}