import React from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import AdminAddItem from "./components/AdminInput/AdminAddItem";
import Adv from "./components/AdvCentral/Adv";
import { AppContainer } from './AppStyles.ts'

function App() {

    const Context = React.createContext({});
    return (
        <Context.Provider value={context}>
            <AppContainer>
                <Header/>
                <AdminAddItem />
                <Posts title = 'Список товаров 1'/>
                <Adv/>
            </AppContainer>
        </Context.Provider>
    );
}

export default App;
