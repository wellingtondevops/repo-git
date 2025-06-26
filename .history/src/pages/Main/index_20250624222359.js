import React, { useState, useCallback } from "react";
import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa"
import { Container, Form, SubmitButton, List ,DeleteButton} from "./style";

import api from "../../services/api";

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true);

            try {

                const response = await api.get(`repos/${newRepo}`);
                const data = {
                    name: response.data.full_name,
                };
                setRepositorios([...repositorios, data]);
                setNewRepo('');

            } catch (error) {
                console.log(error);

            } finally {
                setLoading(false);
            }


        }
        submit()

    }, [newRepo, repositorios])

    function handleInputChange(e) {
        setNewRepo(e.target.value);
    }




    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositórios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adiconar Repositório"
                    value={newRepo}
                    onChange={handleInputChange}
                />
                <SubmitButton type="submit" disabled={loading} loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}

                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        {/* <DeleteButton onClick={()=>{}} >
                            <FaTrash size={14} />
                        </DeleteButton> */}
                        <span>{repo.name}</span>
                        <a href="http">
                        <FaBars size={20} />
                        </a>
                    </li>
                ))}

            </List>
        </Container>

    )
}