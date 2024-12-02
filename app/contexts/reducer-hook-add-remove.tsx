import React, { useReducer, useState } from 'react';

// Source tuto => https://blog.stackademic.com/using-reacts-usereducer-hook-with-typescript-31ebd990bc66

type Todo = { 
    id: number; 
    text:  string
};

type TodoAction = { type: 'add'; text: string; id: number } | { type: 'remove'; id: number };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {

console.log(state)

  switch (action.type) {
    case 'add':
      return [...state, { id: action.id, text: action.text }];
    case 'remove':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1 )
    dispatch({ type: 'add', text: text, id: count });
    setText("");
  };

  return (
    <div>
      <input type="text" className='bg-primary' value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>

        {
               todos?.map(todo => (
                <li key={todo.id}>
                  {todo.text} <button onClick={() => dispatch({ type: 'remove', id: todo.id })}>Remove</button>
                </li>
              ))
        }
     
      </ul>
    </div>
  );
};


export default TodoList