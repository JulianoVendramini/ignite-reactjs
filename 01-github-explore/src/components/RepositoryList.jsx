import { useState, useEffect } from "react";
import '../styles/repositories.scss';

import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'nome',
    description: 'descrição',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){

const [repositories, setRepositories] = useState([]);

useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
}, []);

    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
                
            </ul>
        </section>
    )
}