/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getAllNewsPath, getCategoryNewsPath, getSearchNewsPath } from "../utils/Network/apiPath";

const useNewsQuery = (value, categoryValue) => {
    const [newsData, setNewsData] = useState([]);

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null);

    // const fetchData = async (searchValue) => {
    //     try {
    //         if (searchValue === "") {
    //             setLoading({ state: true, message: "News data is Loading..." })
    //             const response = await fetch(getAllNewsPath);
    //             const data = await response.json();
    //             setNewsData(data);
    //             setLoading({ state: false, message: "" })
    //         } else {
    //             setLoading({ state: true, message: "Loading..." })
    //             const response = await fetch(`${getSearchNewsPath + searchValue}`);
    //             const data = await response.json();
    //             setNewsData(data?.result);

    //             setLoading({ state: false, message: "" })
    //         }

    //     } catch (error) {
    //         setError(error);
    //     } finally {
    //         setLoading({ state: false, message: "" })
    //     }
    // }

    const fetchData = async (searchValue, category) => {
        console.log(category);
    try {
        setLoading({ state: true, message: "News Loading..." });

        let path = getAllNewsPath; // Default path

        if (searchValue !== "") {
            path = getSearchNewsPath + searchValue;
        }else if(category !== ""){
            path = getCategoryNewsPath + category;
        }

        const response = await fetch(path);
        const data = await response.json();
      
        setNewsData(searchValue !== "" ? data?.result : data?.articles);

        setLoading({ state: false, message: "" });
    } catch (error) {
        setError(error);
        setLoading({ state: false, message: "" });
    }
};


    useEffect(() => {
        fetchData(value, categoryValue);
    }, [value, categoryValue])

    return { newsData, loading, error }
};


export default useNewsQuery;

