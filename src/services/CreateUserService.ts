// Simulando conexao com o banco de dados
// Vai fazer a comunicação com o banco de dados

interface IUsuario{
    name: string,
    email: string,
    profissao: string
}

class CreateUserService{
    execute({name, email, profissao}:IUsuario){
        const data = [];

        data.push({name, email, profissao});

        return data;
    }

}

export { CreateUserService };