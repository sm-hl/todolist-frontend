import { Container } from "@mui/material";

export default function showTask(params) {
    return (
        <>
        <Container>
            <h1>Task</h1>
            <h2>{params.task}</h2>
        </Container>
        
        </>
    );
}