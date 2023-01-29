import React, {useState, useEffect} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import TableEmplNarushenie from "./table-empl-narushenie";


const ListEmplNarushenie = () => {
    const [student, setStudents] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4041/api")
            .then(({data}) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const DataTable = () => {
        return student.map((res, i) => {
            return <TableEmplNarushenie obj={res} key={i}/>;
        });
    };
    return (

        <div className="card">
		
            <Table    responsive style={{wordBreak: 'break-word'}}  >

                <thead  >

                <tr>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Фамилия</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Исм шариф</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Булим</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Койда бузилган цех</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Койда</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Бузилган койда</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Койда бузилган сана</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Таклиф</th>
                    <th style={{fontSize:'15px',textAlign:'center',border: '1px solid black'}}>Фотосурат</th>
                    {/*<th>imgfullname</th>*/}
                    {/*<th>imgtype</th>*/}

                </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table >
        </div>
    );
};
export default ListEmplNarushenie;

