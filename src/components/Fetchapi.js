import axios from "axios";
import { useEffect, useState } from "react";
function Fetchapi() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.id} </td>
                                    <td> {value.title}</td>
                                    <td>{String(value.completed)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Fetchapi;