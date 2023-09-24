import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage/>}/>
                <Route exact path='/' element={<RegisterPage/>}/>
                <Route exact path='/user' element={<UserPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;