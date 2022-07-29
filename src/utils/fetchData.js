export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3d9fe4deafmshce6ff7d744cf74dp16038djsn2dbb266bb371',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

  export const youtubeOptions = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key':'3d9fe4deafmshce6ff7d744cf74dp16038djsn2dbb266bb371',
    }
  };
  
  export const fetchData = async (url , options) => {
    const res = await fetch(url , options);
    const data = await res.json();
  
    return data;
  };