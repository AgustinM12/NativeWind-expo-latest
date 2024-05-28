import React, { createContext, useState } from 'react';

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState([{ id: 1, userName: "admin", userPass: "0000" }]);
    const [tasks, setTasks] = useState([])
    const [loged, setLoged] = useState(false)

    const handleUser = (newValue) => {
        setUser([...user, newValue])
    }

    const addTasks = (newTask) => {
        setTasks([...tasks, newTask])
        return true
    }

    const findUser = (userName, userPass) => {
        if (user?.some(account => account.userName === userName && account.userPass === userPass)) {
            setLoged(!loged)
        }
    };

    const roleList = {
        dps: ["ashe", "bastion", "cassidy", "echo", "genji", "hanzo", "junkrat", "mei", "pharah", "reaper", "sojourn", "soldier-76", "sombra", "symmetra", "torbjorn", "tracer", "venture", "widowmaker"],
        tank: ["dva", "doomfist", "junker-queen", "mauga", "orisa", "ramattra", "reinhardt", "roadhog", "sigma", "winston", "wrecking-ball", "zarya"],
        supp: ["ana", "baptiste", "brigitte", "illari", "kiriko", "lifeweaver", "lucio", "mercy", "moira", "zenyatta"],
    }

    return (
        <AppContext.Provider value={{ user, handleUser, roleList, findUser, loged, tasks, addTasks }}>
            {children}
        </AppContext.Provider>
    );
};