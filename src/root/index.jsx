import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import navbar from "../utils/navbar";
import Navbar from "../components/Navbar";
const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            if (element)
              return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
