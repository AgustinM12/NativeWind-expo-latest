import React, { createContext, useState } from 'react';

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
    const [list, setList] = useState([{ id: 1, userName: "admin", userPass: "0000" }]);
    const [loged, setLoged] = useState(false)

    const handleList = (newValue) => {
        setList([...list, newValue])
    }


    const findUser = (userName, userPass) => {
        if (list?.some(account => account.userName === userName && account.userPass === userPass)) {
            setLoged(!loged)
            return true
        }
    };


    const roleList = {
        dps: ["ashe", "bastion", "cassidy", "echo", "genji", "hanzo", "junkrat", "mei", "pharah", "reaper", "sojourn", "soldier-76", "sombra", "symmetra", "torbjorn", "tracer", "venture", "widowmaker"],
        tank: ["dva", "doomfist", "junker-queen", "mauga", "orisa", "ramattra", "reinhardt", "roadhog", "sigma", "winston", "wrecking-ball", "zarya"],
        supp: ["ana", "baptiste", "brigitte", "illari", "kiriko", "lifeweaver", "lucio", "mercy", "moira", "zenyatta"],
    }

    return (
        <AppContext.Provider value={{ list, handleList, roleList, findUser, loged }}>
            {children}
        </AppContext.Provider>
    );
};