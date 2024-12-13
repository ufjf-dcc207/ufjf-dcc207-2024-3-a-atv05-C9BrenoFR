import "./Funcionario.css"

interface Dependentes{
    nome: string,
    data_nascimento: string,
    abono_salarial: number,
}
interface FuncionarioProps {
    nome: string,
    setor: string,
    data_admissao: string,
    salario_base: number,
    dependentes: Dependentes[],
}

export default function Funcionario({nome,setor,data_admissao,salario_base, dependentes}: FuncionarioProps){
    dependentes.forEach((dependente) => {
        salario_base -= dependente.abono_salarial;
    })
    return (
        <div className="funcionario">
            <h1 className="nome">Nome: {nome}</h1>
            <p className="texto">Setor: {setor}</p>
            <p className="texto">Data de admissãoo: {data_admissao}</p>
            <p className="texto">Salario: R${salario_base.toLocaleString()}</p>
        </div>
    )
}