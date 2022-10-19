import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository{
    name: string;
    description: string;
    html_url: string;
}
export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/FL3U1Z/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
//useEffect recebe 2 parametros: função que eu vou executar e o segundo é quando.
//caso o segundo parametro estiver vazio ela executa uma vez quando exibir na tela
    return ( 
        <section className="respository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository= {repository} />
                })}
            </ul>
        </section>
    );
}