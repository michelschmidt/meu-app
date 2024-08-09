import { useState } from "react";
const TodoForm = ({onAdd}) => {    
    const [montePizzaText, setMontePizza] = useState('');  
    
    const handleChange = (event) => {
        setMontePizza(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(montePizzaText);
        setMontePizza('');
    }

    return(
        <form className='todo-register' onSubmit={handleSubmit}>
            <label htmlFor='pizza'>Digite os Ingredientes:</label>
            <input type='text' id='pizza' placeholder='Monte a sua Pizza' value={montePizzaText} onChange={handleChange}/>
            <button type='submit'>Enviar</button>
        </form>
    )
}
export default TodoForm;