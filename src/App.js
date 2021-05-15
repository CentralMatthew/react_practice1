
import './App.css';
import Characters from "./components/Characters";
import Inventory from "./components/Inventory";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DetailsAboutChars from "./components/DetailsAboutChars";
import DetailsAboutInventory from "./components/DetailsAboutInventory";


function App() {
    return (
        <div>
            <Router>
                <Link to={'/character'}>Characters</Link>
                <br/>
                <Link to={'/inventory'}>Inventory</Link>
                <Switch>
                    <Route exact={true} path={'/character'} render={(props) => {
                        return <Characters {...props}/>
                    }}/>
                    <Route exact={true} path={'/inventory'} render={(props) => {
                        return <Inventory {...props}/>
                    }}/>
                    <Route exact={true} path={'/character/:id'} render={(props) => {
                        let {match:{params:{id}}} = props
                        return <DetailsAboutChars charId = {id}/>
                    }}/>
                    <Route exact={true} path={'/inventory/:id'} render={(props) => {
                        let {match:{params:{id}}} = props
                        return <DetailsAboutInventory inventoryId = {id}/>
                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
