import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Task from "./pages/Task";
import AddTask from "./pages/AddTask";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AddTask/>}/>
                    <Route path="/tasks" element={<Task/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
