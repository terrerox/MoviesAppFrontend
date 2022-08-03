import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { AdminScreen } from '../components/admin/AdminScreen';
import { MovieScreen } from '../components/movie/MovieScreen';
import { UserContext } from '../context';

export const AppRouter = () => {
    const [user, setUser] = useState("francis")
    return (
        <UserContext.Provider value={user}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<HomeScreen />} />
                    <Route path="/admin" element={<AdminScreen />} />
                    <Route path="/:movie" element={<MovieScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}