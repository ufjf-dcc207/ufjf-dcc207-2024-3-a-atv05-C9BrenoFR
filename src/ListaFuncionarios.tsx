import "./ListaFuncionarios.css"
import Funcionario from "./Funcionario";
import json_info from "./funcionarios.json"

export default function ListaFuncionarios(){
    const funcionarios = json_info.funcionarios;
    return( 
        <section className="listaFuncionarios">
            {funcionarios.map((funcionario, index) => (
                <Funcionario
                    key={index}
                    nome={funcionario.nome_completo}
                    setor={funcionario.setor}
                    data_admissao={funcionario.data_admissao}
                    salario_base={funcionario.salario_base}
                />
            ))}
        </section>
    )
}