const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "01ebb8e1af1ebcef9cd3efa88ab173a8";

export const fetchWeather = async(city) => {
  try {
    const response = await fetch(
      `${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`
    );

    if(!response.ok) {
        throw new Error('ошибка запроса')
    }

    const data = await response.json();
    return { success: true, data };
  } catch (err) {
    return { success: false, err };
  }
};
