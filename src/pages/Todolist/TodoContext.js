import React, { createContext, useState , useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <UserContext.Provider value={{ todos, setTodos }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export const useUserContext = () => {
    return useContext(UserContext);
};