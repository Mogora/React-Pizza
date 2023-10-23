import './scss/app.scss'
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {createContext, useState} from "react";

export const MyContext = createContext('');

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <div className="wrapper">
                <MyContext.Provider value={{searchValue, setSearchValue}}>
                    <Header/>
                    <div className="content">
                        <Routes>
                            <Route
                                path="/" element={<Home/>}>
                            </Route>
                            <Route path="*" element={<NotFound/>}></Route>
                            <Route path="/cart" element={<Cart/>}></Route>
                        </Routes>
                    </div>
                </MyContext.Provider>
            </div>
        </div>
  );
}

export default App;
