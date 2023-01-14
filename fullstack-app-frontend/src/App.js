import './App.css';
import { Form } from './components/Form';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className='font-bold text-white'>
      <Form/>
      <UserList/>
    </div>
  );
}

export default App;
