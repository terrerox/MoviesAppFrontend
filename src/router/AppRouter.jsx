import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { AdminScreen } from '../components/admin/AdminScreen';
import { MovieScreen } from '../components/movie/MovieScreen';
import { MoviesFormScreen } from '../components/admin/movies/MoviesFormScreen';
import { AppContext } from '../context';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useLocalStorage } from '../hooks/useLocalStorage';
import MenuScreen from '../components/layout/MenuScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {} 
}

export const AppRouter = () => {
    const [user, setUser] = useLocalStorage('user', DEFAULT_STATE)

    const saveUser = (values) => {
        setUser(values)
    }

    const { isAuthenticated } = user
    return (
        <AppContext.Provider value={{user: user, saveUser }}> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <MenuScreen/>
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
                    <Route path="/admin/movie" element={
                        <PrivateRoute 
                            element={MoviesFormScreen} 
                            isAuthenticated={isAuthenticated}
                        />} 
                    />
                    <Route path='/movie/:movieId' element={
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