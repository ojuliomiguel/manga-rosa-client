import * as Yup from 'yup';
import {cpfRegex, telefoneRegex} from '../../utils/regex'

const ColaboradorFormSchema = Yup.object().shape({
    nome: Yup.string()
      .max(100, 'O nome informado é muito longo')
      .required('Campo Obrigatório'),
    email: Yup.string().email('O email informado está inválido').required('Campo Obrigatório'),
    cpf: Yup.string().matches(cpfRegex, {message: 'Cpf inválido'}).required('Campo Obrigatório'),
    celular: Yup.string().matches(telefoneRegex, {message: 'Telefone inválido'}).required('Campo Obrigatório')
  });

  export default ColaboradorFormSchema;