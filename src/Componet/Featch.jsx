import { useEffect, useState } from "react";

const api = {
  key: import.meta.env.VITE_API_KEY, // Accessing environment variable
  baseUrl: import.meta.env.VITE_API_URL,
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
