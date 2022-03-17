import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/Home/Home";
import Weather from "./../pages/Weather/Weather";
import WeatherDaily from "./../pages/WeatherDaily/WeatherDaily";

const RouterGroup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/weather" element={<Weather />}></Route>
      <Route path="/weatherdaily" element={<WeatherDaily />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterGroup;
