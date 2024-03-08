import { useState, useEffect } from "react";

import API from "./API";

const useFetchNovel = (index) => {
    const [data, setData] = useState([]);
        const getData = async () => {
            const response = await API.server_novel(4);
            setData(response.data[index].data);
        };

    useEffect(() => {
        getData();
    }, []);
    return data;
};

export default useFetchNovel;

   