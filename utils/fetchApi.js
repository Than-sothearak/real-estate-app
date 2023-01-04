import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '52d0adcacbmsh7804d021475d5e3p1e7afcjsna5f43600b951',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;

}
