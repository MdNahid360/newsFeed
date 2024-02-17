import { useContext } from "react";
import NewsContext from "../../../context";

const AllNews = () => {
    const { newsData } = useContext(NewsContext);
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
                newsData.length > 1 ?
                    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
                        {
                            newsData.length > 0 &&
                            <>
                                {/* news item */}
                                <div className="col-span-12 grid grid-cols-12 gap-4">
                                    {/* info */}
                                    <div className="col-span-12 lg:col-span-4">
                                        <a href={newsData[0]?.url}>
                                            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                                {newsData[1]?.title}
                                            </h3>
                                        </a>
                                        <p className="text-base text-[#5C5955]">
                                            {newsData[1]?.description}
                                        </p>
                                        <p className="mt-5 text-base text-[#5C5955]">{getTimeAgo(newsData[1]?.publishedAt, "time")}</p>
                                    </div>
                                    {/* thumb */}
                                    <div className="col-span-12 lg:col-span-8">
                                        <img className="w-full" src={newsData[1]?.urlToImage} alt="thumb" />
                                        <p className="mt-5 text-base text-[#5C5955]">
                                            {newsData[1]?.author}
                                        </p>
                                    </div>
                                </div>
                                {/* news item ends */}
                                {/* news item with pic */}
                                <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                                    {/* info */}
                                    <div className="col-span-12 md:col-span-6">
                                        <a href={newsData[0]?.url}>
                                            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                                {newsData[0]?.title}
                                            </h3>
                                        </a>
                                        <p className="text-base text-[#292219]">
                                            {newsData[0]?.description}
                                        </p>
                                        <p className="mt-5 text-base text-[#5C5955]">{getTimeAgo(newsData[1]?.publishedAt, "time")}</p>

                                    </div>
                                    {/* thumb */}
                                    <div className="col-span-12 md:col-span-6">
                                        <img className="w-full" src={newsData[0]?.urlToImage} alt="thumb" />
                                    </div>
                                </div>
                                {/* news item ends */}
                                {/* news item */}
                                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                                    {/* info */}
                                    <div className="col-span-12 md:col-span-4">
                                        <a href={newsData[2].url}>
                                            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                                {newsData[2]?.title}
                                            </h3>
                                        </a>
                                        <p className="text-base text-[#292219]">
                                            {newsData[2]?.description}
                                        </p>
                                        <p className="mt-5 text-base text-[#5C5955]">{getTimeAgo(newsData[2]?.publishedAt, "time")}</p>

                                    </div>
                                </div>
                            </>

                        }
                        {
                            newsData.slice(4)?.map((news) => <div key={news?.source?.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                                {/* info */}
                                <div className="col-span-12 md:col-span-4">
                                    <a href={news?.url}>
                                        <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                            {news?.title}
                                        </h3>
                                    </a>
                                    <p className="text-base text-[#292219]">
                                        {news?.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#5C5955]">{getTimeAgo(newsData[1]?.publishedAt, "day")}</p>
                                </div>
                            </div>)
                        }
                    </div> :

                    <div className="modal col-span-12 grid grid-cols-12">
                        News Not Found!!!
                    </div>
            }
        </>
    );
};

export default AllNews;