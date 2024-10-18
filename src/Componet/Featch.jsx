import { useEffect, useState } from "react";

const api = {
  key: "456c9ed2b0ee017bc5caf5bcb34554f1",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
};

// eslint-disable-next-line react/prop-types
const Featch = ({ area, update }) => {
  const [data, setData] = useState(null); // Start with null

  useEffect(() => {
    const fetchData = async () => {
      if (!area) return; // Prevent fetching if area is empty

      try {
        const res = await fetch(
          `${api.baseUrl}q=${area}&appid=${api.key}&units=metric`
        );
        const resData = await res.json();
        setData(resData);
        update(resData); // Only call update when new data is fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData(); // Only fetch when area changes
  }, [area]); // Only run effect when 'area' or 'update' changes

  return null;
};

export default Featch;
