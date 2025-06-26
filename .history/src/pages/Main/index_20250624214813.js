import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus } from "react-icons/fa"
import { Container, Form, SubmitButton } from "./style";

import api from "../../services/api";

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);


    const handleSubmit = useCallback((e) => {
        e.preventDefault();


        async function submit() {
            const response = await api.get(`repos/${newRepo}`);
            const data = {
                name: response.data.full_name,
            };
            setRepositorios([...repositorios, data]);
            setNewRepo('');
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
                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>

    )
}