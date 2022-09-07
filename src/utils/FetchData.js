export const exerciseOptions ={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f9b7ebf51cmsh8e8ccdb1d7ef808p1b06bbjsnee8b8fc96ccd',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'f9b7ebf51cmsh8e8ccdb1d7ef808p1b06bbjsnee8b8fc96ccd',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
  


export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}