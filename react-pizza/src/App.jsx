import './scss/app.scss'
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {useState} from "react";

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <div className="wrapper">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <div className="content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home searchValue={searchValue}
                                           setSearchValue={setSearchValue}/>}>
                        </Route>
                        <Route path="*" element={<NotFound/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
  );
}

export default App;
