const repositoryName = 'nome do repositorio';

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>descrição</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>

                <li>
                    <strong>nome do repositorio</strong>
                    <p>descrição</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>

                <li>
                    <strong>nome do repositorio</strong>
                    <p>descrição</p>

                    <a href="#">
                        Acessar Repositório
                    </a>
                </li>
            </ul>
        </section>
    )
}