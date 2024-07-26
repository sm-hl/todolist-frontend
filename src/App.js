import {BrowserRouter,Routes,Route} from "react-router-dom";
import React, { useEffect } from "react";
import Task from "./pages/Task";
import AddTask from "./pages/AddTask";
import ShowTask from "./pages/ShowTask";
import Header from "./components/Header";

export default function App() {
  
    return (
        <>
            <BrowserRouter>
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<AddTask/>}/>
                    <Route path="/tasks" element={<Task/>}/>
                    <Route path="/view-task/:id" element={<ShowTask/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
