import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter, Routes, Route, Navigate } from "react-router";
import DesignerView from './design/DesignerView.tsx';
import ProgrammerView from './programming/ProgrammerView.tsx'

const root = createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<p>There's nothing here!</p>} />
            <Route path='/' element={<App />}>
                <Route path='/' element={<Navigate to={'/designer'} />} />
                <Route path='designer' element={<DesignerView />}></Route>
                <Route path='programmer' element={<ProgrammerView />}></Route>
            </Route>
        </Routes>
    </HashRouter>
);
