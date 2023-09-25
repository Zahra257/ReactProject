
import { RouterProvider}from 'react-router-dom'
import { routers } from './routing';




function App() {

  return (
    <>
      <div className='container'>
    <RouterProvider router={routers} />
      </div>
    </>
  );
}

export default App;
