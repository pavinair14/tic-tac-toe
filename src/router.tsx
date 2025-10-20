import { Routes, Route, Navigate } from "react-router"
import { Home } from "./pages/home"
import { Game } from "./pages/game"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/game" element={<Game />}></Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}