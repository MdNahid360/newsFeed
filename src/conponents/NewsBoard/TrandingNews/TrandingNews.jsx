import { useContext } from "react";
import NewsContext from "../../../context";

const TrandingNews = () => {
    const { newsData, loading } = useContext(NewsContext);
    function getTimeAgo(timestamp, type) {
        let date = new Date(timestamp ? timestamp : 0);
        let now = new Date();
        let timeDiff = now - date;

        if (type === "time") {
            let hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
            return hoursAgo + " hours ago";
        } else if (type === "day") {
            let formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
            return formattedDate;
        } else {
            return "Invalid type";
        }
    }
    return (
        <>
            {
                !loading?.state && <div className="col-span-12  self-start xl:col-span-4">
                    <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                        {/* news item */}
                        {newsData.length >= 4 && <div key={newsData[4]?.source?.id} className="col-span-12 mb-6 md:col-span-8">
                            <img className="w-full" src={newsData[4]?.urlToImage} alt="thumb" />
                            {/* info */}
                            <div className="col-span-12 mt-6 md:col-span-4">
                                <a href={newsData[4]?.url}>
                                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                        {newsData[4]?.title}
                                    </h3>
                                </a>
                                <p className="text-base text-[#292219]">
                                    {newsData[4]?.description}
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">{getTimeAgo(newsData[4]?.publishedAt, "day")}</p>
                            </div>
                        </div>}

                        {
                            newsData.slice().reverse()?.map((news) => <div key={news?.source?.id} className="col-span-12 mb-6 md:col-span-8">
                                {/* info */}
                                <div className="col-span-12 mt-6 md:col-span-4">
                                    <a href={news?.url}>
                                        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                                            {news?.title}
                                        </h3>
                                    </a>
                                    <p className="text-base text-[#292219]">
                                        {news?.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#94908C]">{getTimeAgo(news?.publishedAt, "day")}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default TrandingNews;