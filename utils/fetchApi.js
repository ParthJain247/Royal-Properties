import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url)=> {
const {data} = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': '693022cf70mshc8bce6872fb13cdp1b46c4jsne6004cf2b05d',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
});
return data;
}