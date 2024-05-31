import React, { createContext, useState } from 'react';

// Crear el contexto
export const AppContext = createContext();

// Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState([{ id: 1, userName: "Admin", userPass: "0000" }]);
    const [tasks, setTasks] = useState([{ id: 1, title: "Tarea de prueba", content: "Contenido de prueba" }])
    const [loged, setLoged] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)

    const handleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const handleUser = (newValue) => {
        setUser([...user, newValue])
    }

    const addTasks = (newTask) => {
        setTasks([...tasks, newTask])
        return true
    }

    const findUser = (userName, userPass) => {
        if (user?.some(account => account.userName === userName && account.userPass === userPass)) {
            setLoged(true)
            return true
        } else {
            return false
        }
    };

    const findTask = (id) => {
        const index = tasks?.findIndex(task => task.id == id);
        if (index !== -1) {
            return { tarea: tasks[index], indice: index };
        }
    };

    const editTask = (index, newContent) => {
        try {
            tasks[index].title = newContent.title
            tasks[index].content = newContent.content
            return true
        } catch (error) {
            console.log("Error detectado: ", error);
            return false
        }
    }

    const deleteTask = (id) => {
        try {
            tasks.splice(id, 1)
        } catch (error) {
            console.log("Error detectado: ", error);
        }
    }

    return (
        <AppContext.Provider value={{ user, handleUser, findUser, loged, tasks, addTasks, findTask, deleteTask, editTask, darkTheme, handleTheme }}>
            {children}
        </AppContext.Provider>
    );
};
