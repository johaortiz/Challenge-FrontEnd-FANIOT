import {createContext,useState} from 'react';

const Search = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export default Search;
export const AppContext = createContext();