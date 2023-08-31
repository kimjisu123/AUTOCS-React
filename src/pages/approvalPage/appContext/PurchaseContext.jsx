import { createContext, useContext, useState } from 'react'

const PurchaseContext = createContext(null);

export const usePurchaseContext = () => {
    return useContext(PurchaseContext);
};

export const PurchaseProvider = ({children}) => {
    const [data, setData] = useState({
        allowList: [],
        docTitle: '',
        documentContent: [],
        files: []
    });

    return (
        <PurchaseContext.Provider value={{data, setData}}>
            {children}
        </PurchaseContext.Provider>
    );
}