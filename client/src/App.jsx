import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Landing*/}
        <Route path="/" element={<div>Landing — en construcción</div>} />

        {/*Admin*/}
        <Route path="/admin/login" element={<div> Admin Login — en construcción</div>} />
        <Route path="/admin/*" element={<div> Admin Dashboard — en construcción</div>} />

        {/*404*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
