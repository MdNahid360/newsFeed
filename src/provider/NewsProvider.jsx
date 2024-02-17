/* eslint-disable react/prop-types */
import { useState } from "react";
import NewsContext from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
    const [test, setTest] = useState("testing......");
    const [searchValue, setSearchValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const { newsData, loading, error } = useNewsQuery(searchValue, categoryValue);

     const info = {
        test,
        setTest,
        setSearchValue,
         categoryValue, 
         setCategoryValue,
        newsData,
        loading,
        error
    };

    return (
        <NewsContext.Provider value={info}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
