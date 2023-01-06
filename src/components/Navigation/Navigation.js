import './Navigation.css'
import logo from './logo.png'
const Navigation = ({ onRouteChange, route }) => {
    return (
        <nav className="pa3 ph4" style={{ display: "flex", justifyContent: "space-between" }}>
            <img src={logo} alt="" className=" w3 " />
            {route === 'home'
                ?< button onClick={() => onRouteChange('signin')} className="f5 br2 ph3 pv2 mb2 dib white submitBtn" style={{ marginBottom: "35px", marginTop: "35px" }} >Log Out</button>
                :<p></p>
    }
        </nav >
    )
}

export default Navigation