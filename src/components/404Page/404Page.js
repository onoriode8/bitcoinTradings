import Logo from '../../assests/Logo.jpg';
import Navigation from '../Navigation/Navigation';

const wrongPage = () => {
    return (
        <div>
            <Navigation />
            <header style={{textAlign: "center"}}>
                <img style={{
                    width: "7em",
                    height: "5em",
                    marginTop: "20px"
                    }} src={Logo} alt="logo" />
                <p>page not found!</p>
            </header>
        </div>
    );
}

export default wrongPage;