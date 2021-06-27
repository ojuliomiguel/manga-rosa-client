import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navbar from '../../components/navbar';
import ColaboradorFormSchema from './colaboradorFormSchema';
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

const values = {
    nome: '',
    email: '',
    cpf: '',
    celular: ''
};

const ColaboradorForm = () => {
    const [conhecimentos, setConhecimentos] = useState([]);
    const [idsConhecimentos, setIdsConhecimentos] = useState([])

    useEffect(() => {
        api.get('conhecimentos/registros')
            .then((res) => {
                setConhecimentos(res.data);
                console.log(conhecimentos);
            })
    }, [])

    function onSelectConhecimentos(selectedList, selectedItem) {
        setIdsConhecimentos(selectedList.map( c => c.id))
    }

    function onSubmit(formValues) {
        const {nome, email, cpf, celular} = formValues;
        
        const data = {
            nome,
            email,
            cpf,
            celular,
            idsConhecimentos
        }
        
        api.post('colaboradores/registrar', data)
    }

    return (
        <div>
            <Navbar/>
            
            <Formik
                initialValues={values}
                validationSchema={ColaboradorFormSchema}   
                onSubmit={onSubmit} 
            >
                <Form className="w3-container w3-display-middle" style={{width: "60vw"}}>
                    <h2 className="w3-margin-bottom"> Cadastro de Colaboradores</h2>
                    <label>Nome</label>
                    <Field className="w3-input w3-border" type="text" name="nome" />
                    <ErrorMessage name="nome" component="div" className="w3-text-red" />
                    <label>Email</label>
                    <Field className="w3-input w3-border" type="email" name="email" />
                    <ErrorMessage name="email" component="div" className="w3-text-red"/>
                    <label>CPF</label>
                    <Field className="w3-input w3-border" type="text" name="cpf" />
                    <ErrorMessage name="cpf" component="div" className="w3-text-red"/>
                    <label>Celular</label>
                    <Field className="w3-input w3-border" type="text" name="celular" />
                    <ErrorMessage name="celular" component="div" className="w3-text-red"/>
                    <label>Conhecimentos</label>
                    <Multiselect
                    options={conhecimentos} 
                    selectedValues={conhecimentos.selectedValue}
                    selectionLimit={3}
                    onSelect={onSelectConhecimentos} 
                    displayValue="nome" 
                    />
                    <button type="submit"  >
                        Cadastrar
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default ColaboradorForm;