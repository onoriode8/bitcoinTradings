import { GiConqueror } from 'react-icons/gi';


const error = () => (
    <header style={{marginTop: "200px", textAlign: "center"}}>
        <GiConqueror style={{fontSize: "200px", color: "white"}} />
        <div style={{fontSize: "30px", color: "#fff"}}>404</div>
        <h1 style={{color: "#fff"}}>Page not Found!</h1>
    </header>  
);

export default error;