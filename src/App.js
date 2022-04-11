import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import './style/dark.scss'
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { productInputs, userInput } from "./formsource";
import { useSelector } from "react-redux";

function App() {

const theme = useSelector((state)=>state.darkMode)

  return (
    <div className={theme ? "app dark" : 'app' }>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title='Add New User' />} />
            </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs}  title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
