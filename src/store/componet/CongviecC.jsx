import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DD.css'

export default function CongviecC() {
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState({ index: null, value: '' });
  const dispatch = useDispatch();
  const litData = useSelector((state) => state.litData);

  const handleAddTask = () => {
    dispatch({ type: 'addTask', payload: newTask });
    setNewTask('');
  };

  const handleEditTask = (index) => {
    setEditTask({ index, value: litData[index] });
  };

  const handleUpdateTask = () => {
    dispatch({
      type: 'updateTask',
      payload: { index: editTask.index, value: editTask.value },
    });
    setEditTask({ index: null, value: '' });
  };

  const handleDeleteTask = (index) => {
    dispatch({ type: 'deleteTask', payload: index });
  };

  return (
    <>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {litData.map((task, index) => (
          <li key={index}>
            {index === editTask.index ? (
              <>
                <input
                  type="text"
                  value={editTask.value}
                  onChange={(e) =>
                    setEditTask({ ...editTask, value: e.target.value })
                  }
                />
                <button onClick={handleUpdateTask}>Update</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => handleEditTask(index)}>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
