import baseUrl from "./baseUrl";

const getAllNewsPath = `${baseUrl}v2/top-headlines`;
const getCategoryNewsPath = `${baseUrl}v2/top-headlines?category=`;
const getSearchNewsPath = `${baseUrl}v2/search?q=`;


export {getAllNewsPath, getCategoryNewsPath, getSearchNewsPath}