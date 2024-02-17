import AllNews from "./AllNews/AllNews";
import TrandingNews from "./TrandingNews/TrandingNews";

export default function NewsBoard() {
    return (
        <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                {/* left */}
                <AllNews />
                {/* right */}
                <TrandingNews />
            </div>
        </main>
    );
}