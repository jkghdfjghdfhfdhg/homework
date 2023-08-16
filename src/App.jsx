import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './utils/actions'; 
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos.todos);

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="button" onClick={handleAddTodo}>
          ADD
        </button>
      </div>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.title}
            <button
              type="button"
              onClick={() => handleRemoveTodo(item.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



