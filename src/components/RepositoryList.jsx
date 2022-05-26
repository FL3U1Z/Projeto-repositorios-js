import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

const repository = {
    name: ' Uniform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

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
                <RepositoryItem repository= {repository} />
                
                <RepositoryItem repository= {repository} />
                
                <RepositoryItem repository= {repository} />
                
                <RepositoryItem repository= {repository} />

            </ul>
        </section>
    );
}