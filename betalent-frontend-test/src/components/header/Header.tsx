import logotipo from '../../assets/img/betalent-logo.svg';

const Header = () => {
    return (
        <header className="h-[60px] bg-white flex items-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]">
            <div className="p-[10px] pl-[20px]">
                <img src={logotipo} alt="Logotipo Betalent" className="h-[34px] w-[91.9px]" />
            </div>
        </header>
    );
};

export default Header;