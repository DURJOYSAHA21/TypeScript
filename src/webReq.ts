import axios from "axios";
import type { AxiosResponse } from "axios";

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(response =>{console.log(response.data);});

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error) {
        if(axios.isAxiosError(error))
        {
            console.log(error.message);
            if(error.response)
            {
                console.log(error.response.data);
            }
        }
       
    }
}