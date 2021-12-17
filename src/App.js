import { Fragment } from 'react/cjs/react.production.min';
import classes from './App.module.css';
import Content from './Movies/Content';
import Header from './Layout/Header';

function App() {

  return (
    <Fragment>
    <Header />
      <main className={classes.container}>
        <Content />
      </main>
    </Fragment>
  );
}

export default App;
