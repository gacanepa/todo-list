import React from 'react';
import TodoList from '../components/TodoList';
import styles from '../styles/styles.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default Home;
