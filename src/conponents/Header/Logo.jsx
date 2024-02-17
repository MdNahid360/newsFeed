import logo from '../../assets/logo.png';
export default function Logo() {
    return (
        <a href="/">
            <img
                className="max-w-[100px] md:max-w-[165px]"
                src={logo}
                alt="Lws"
            />
        </a>
    );
}