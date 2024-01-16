import React from 'react';
import styles from '../styles/styles.module.css';

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li>
      {todo.text}
      <button className={styles.btn} onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
