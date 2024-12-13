interface FuncionarioProps {
    nome: string,
    setor: string,
    data_admissao: string,
    salario_base: number,
}

export default function Funcionario({nome,setor,data_admissao,salario_base}: FuncionarioProps){
    return (
        <div className="funcionario">
            <h1 className="nome">Nome: {nome}</h1>
            <p className="texto">Setor: {setor}</p>
            <p className="texto">Data de admissãoo: {data_admissao}</p>
            <p className="texto">Salario: R${salario_base.toLocaleString()}</p>
        </div>
    )
}