import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { AdminScreen } from '../components/admin/AdminScreen';
import { MovieScreen } from '../components/movie/MovieScreen';
import { AppContext } from '../context';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {} 
}

export const AppRouter = () => {
    const [user, setUser] = useState(DEFAULT_STATE)

    const saveUser = (values) => {
        setUser(values)
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