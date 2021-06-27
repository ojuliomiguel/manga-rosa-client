import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import  { useHistory  } from 'react-router-dom';
import api from '../../utils/api';

const List = () => {
    const [colaboradores, setColaboradores] = useState([]);
    useEffect(() => {
        api.get('colaboradores/registros')
            .then((res) => {
                setColaboradores(res.data);
            })
    }, [])

    return (
        <div>
            <Navbar/>
            <h2>Listagem de colaboradores</h2>
            <table className="w3-table w3-striped" style={{width: "50vw"}}>
                <thead>
                    <tr>
                        <th>Colaborador</th>
                        <th>Status</th>
                        <th>Mais detalhes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       colaboradores.map((c) => (
                           <tr  key={c.id}>
                               <td >{c.nome}</td>
                               <td>{c.validado ?  'Validado' : 'Não validado'}</td>
                               <td><a href={`${c.nome.replace(/\s/g, '')}/validar`}>Link</a></td>
                           </tr>
                       )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default List;