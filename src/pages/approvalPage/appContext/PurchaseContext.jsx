import { createContext, useContext, useState } from 'react'

const PurchaseContext = createContext();

export const PurchaseContext = () => {
    return useContext(PurchaseContext);
};

export const PurchaseProvider = ({children}) => {
    const [data, setData] = useState({
        allowList: [],
        purchaseList: [],
        files: []
    });

    return (
        <PurchaseContext.Provider value={{data, setData}}>
            {children}
        </PurchaseContext.Provider>
    );
}