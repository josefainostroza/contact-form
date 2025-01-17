import { Route, Routes } from "react-router-dom"
import Home from "../components/pages/home/Home"
import About from "../components/pages/about/About"
import User from "../components/pages/user/User";
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/hola' element={<User name='hola' />} />
            <Route path='/adios' element={<User name='adios' />} />
            <Route path='/josefa' element={<User name='josefa' />} />

        </Routes>
    );
};

export default Router;
