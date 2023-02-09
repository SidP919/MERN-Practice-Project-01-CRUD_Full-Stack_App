import './App.css';
import { Form } from './components/Form';
import { UserList } from './components/UserList';
import Provider from './services/userListData/Provider';

function App() {
  return (
    <div className='font-bold text-white'>
      <Provider>
        <Form/>
        <UserList/>
      </Provider>
    </div>
  );
}

export default App;
