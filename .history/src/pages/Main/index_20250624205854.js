import React from "react";
import { FaGithub } from "react-icons/fa"
import { Container } from "./style";

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositórios
            </h1>
        </Container>

    )
}