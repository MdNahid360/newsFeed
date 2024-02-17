import DatePicker from './DatePicker';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Search from './Search';
export default function Header() {
    return (
        <nav className="border-b border-black py-6 md:py-8" >
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <DatePicker />
                <Logo />
                <Search />
            </div>
            <NavMenu />
        </nav>
    );
}