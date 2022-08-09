import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { AdminScreen } from '../components/admin/AdminScreen';
import { MovieScreen } from '../components/movie/MovieScreen';
import { AppContext } from '../context';

export const AppRouter = () => {
    const [user, setUser] = useState({
        isAuthenticated: false,
        user: {}
    })

    const saveUser = (values) => {
        setUser(values)
        localStorage.setItem("user", JSON.stringify(values))
    }

    const { isAuthenticated } = user
    return (
        <AppContext.Provider value={{user: user, saveUser }}> 
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={
                        <PublicRoute 
                            element={HomeScreen} 
                            isAuthenticated={isAuthenticated}
                        />}
                    />
                    <Route path="/admin" element={
                        <PrivateRoute 
                            element={AdminScreen} 
                            isAuthenticated={isAuthenticated}
                        />} 
                    />
                    <Route path="/:movie" element={
                        <PublicRoute 
                            element={MovieScreen} 
                            isAuthenticated={isAuthenticated}
                        />}
                    />
                    <Route path="/login" element={
                        <PublicRoute 
                            element={LoginScreen} 
                            isAuthenticated={isAuthenticated}
                        />}
                    />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}