import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: ' Uniform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
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