import React from "react";
import { FaGithub, FaPlus } from "react-icons/fa"
import { Container, Form, SubmitButton } from "./style";

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositórios
            </h1>
            <Form onSubmit={() => { }}>
                <input type="text" placeholder="Adiconar Repositório"></input>
                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>
        </Container>

    )
}