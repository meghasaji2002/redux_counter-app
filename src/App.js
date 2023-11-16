
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    
    <div style={{height:'100vh'}} className=' w-100 bg-dark d-flex justify-content-center align-items-center'>
        <div style={{width:'400px'}} className=' bg-light p-5 rounded'>
          <h2 className='text-primary'>Counter Application</h2>
          <Counter/>
        </div>
    </div>
   
  );
}

export default App;
