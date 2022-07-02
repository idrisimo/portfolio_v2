import axios from 'axios';
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1)

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
            console.log(params)
        } catch (error) {
            setError(error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, [reload]);
    // }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;
