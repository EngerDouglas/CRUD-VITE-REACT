
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../../test/src/components/home'
import Create from '../../test/src/components/Create'
import Update from '../../test/src/components/update'
import Read from '../../test/src/components/Read'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/create' element = {<Create/>}></Route>
        <Route path='/update/:id' element = {<Update/>}></Route>
        <Route path='/read/:id' element = {<Read/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
