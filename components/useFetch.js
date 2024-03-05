import { useState, useEffect } from "react";

import API from "./API";

const useFetch = (index) => {
    const [data, setData] = useState([]);
        const getData = async () => {
            const response = await API.server(1);
            setData(response.data[index].data);
        };

    useEffect(() => {
        getData();
    }, []);
    return data;
};

export default useFetch;

   