import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubit = (e) => {
        e.preventDefault();
        createTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubit} className="bg-slate-700 p-10 mb-4">
                <h1 className="font-bold pb-3 text-white">Añadir tareas</h1>
                <input
                    placeholder="Escribe un titulo"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    className="bg-slate-200 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea
                    placeholder="Escribe una descripcion"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                    className="bg-slate-200 p-3 w-full mb-2"
                />
                <button 
                className="bg-emerald-600 text-white rounded-md px-1.5"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
