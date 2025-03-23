import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('')
    const [listaTareas, setListaTarea] = useState<string[]>([])

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return
        setListaTarea(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        setNuevaTarea('')
    }

    const handleBorrarTarea = (index: number) => {
        setListaTarea(tareas => tareas.filter((_, i) => i != index))
    }

    return (
        <div>
            <h1>
                Lista Tareas
            </h1>
            <div>
                <input type="text"
                    value={nuevaTarea}
                    onChange={e => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea" />
                <button onClick={handleAddTask}>Agregar</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div >
    )
}