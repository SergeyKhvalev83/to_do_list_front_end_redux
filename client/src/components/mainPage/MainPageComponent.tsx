import { useEffect, useState } from 'react';
import './styles.css';
import { ToDoInterface } from '../../interfaces/interface';
import ListOfToDoesComponent from '../ListOfToDoes/ListOfToDoesComponent';

const MainPageComponent = () => {
  const [toDoTitle, setToDoTitle] = useState<string>('');
  const [toDoesList, setTodoesList] = useState([]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDoTitle(event.target.value);
    console.log(toDoTitle);
  };

  const addToDoHandler = async () => {
    const newToDo: ToDoInterface = {
      title: toDoTitle,
      // todo_id: Math.floor(Math.random() * 1000) + 1,
      status: false,
    };
    console.log('new todo: ', newToDo);

    try {
      await fetch('http://localhost:3000/api/add-new-Todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify(newToDo),
      })
        .then((res) => res.json())
        .then((data) => setTodoesList([...toDoesList, data]));
      console.log(toDoesList);
      setToDoTitle('');
    } catch (error) {
      console.log('ERROR WHEN SEND TO SERVER NEW TODO FRONT: ', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/get-all-toDoes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setTodoesList([...data]));
      console.log(toDoesList)
  }, []);

  return (
    <div id="container">
      <div id="to-does-container">
        <input
          id="input"
          type="text"
          placeholder="task to be done"
          onChange={inputHandler}
          value={toDoTitle}
        ></input>
        <button id="add-toDo-btn" onClick={addToDoHandler}>
          {' '}
          add task{' '}
        </button>
      </div>
      <ListOfToDoesComponent
        listOfToDoes={toDoesList}
        toDolistSetter={setTodoesList}
      />
    </div>
  );
};

export default MainPageComponent;
