import axios from 'axios';
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => {
        prev + 1;
        setLoading(true);
    })

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);

    }, [reload]);


    return { response, error, loading, refetch };
};

export default useAxios;
