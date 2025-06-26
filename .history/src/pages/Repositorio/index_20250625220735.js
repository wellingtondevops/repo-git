
import React, { useState, useEffect } from "react"
import { Container, Owner, Loading, BackButtom } from "./styles"
import { FaArrowLeft } from "react-icons/fa"
import api from "../../services/api"

export default function Repositorio({ match }) {
    const [repositorio, setRepositorio] = useState({});
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${nomeRepo}`),
                api.get(`repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);
            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);

        }
        load();
    }, [match.params.repositorio])

    if (loading) {

        return (
            <Loading>Carregando...</Loading>
        )
    }

    return (
        <Container>
            <BackButtom to="/">
                <FaArrowLeft color="#FFF" size={30} />
            </BackButtom>
            <Owner>
                <img
                    src={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login}
                />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
            </Owner>
        </Container>
    )
}