import { useContext } from "react";
import NewsContext from "../../context";

export default function NavMenu() {
    const { setCategoryValue } = useContext(NewsContext);
    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                <li>
                    <a onClick={() => setCategoryValue("general")} href="#">General</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("business")} href="#">Business</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("entertainment")} href="#">Entertainment</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("health")} href="#">Health</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("science")} href="#">Science</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("sports")} href="#">Sports</a>
                </li>
                <li>
                    <a onClick={() => setCategoryValue("technology")} href="#">Technology</a>
                </li>
            </ul>
        </div>
    );
}