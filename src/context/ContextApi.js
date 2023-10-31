import React , {useEffect , useState , createContext} from 'react';
import { getApi } from '../api/api';


export const ApiContext = createContext();

const ContextApi = ({children}) => {

    const [products , setProducts] = useState([]);
    useEffect(()=>{
        const fetchApi = async () =>{
            setProducts(await getApi());
        }
        fetchApi();
    } , []);
    

    

    return (
        <ApiContext.Provider value={products}>
            {children}
        </ApiContext.Provider>
    );
};

export default ContextApi;