import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';
const TodoList = () => {
    const [montePizza, setMontePizzas] = useState([]); 
    
    const addTodo = (montePizzaTextChildren) => {
        console.log('Funcao disparada');
        setMontePizzas([...montePizza, montePizzaTextChildren]);
    }  

    return(
        <section className="todoList">
            <h2 className="todo-title">Lista de Montagem da Minha Pizza</h2>
            <TodoForm onAdd={addTodo}/>
            <ol className="todos">
                {montePizza.map((pizza, index) => (
                    <TodoItem pizza={pizza} key={index}/>
                ))}
            </ol>           
        </section>
    )
}
export default TodoList;