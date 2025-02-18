import { Route, Routes } from "react-router-dom";
import { App } from '../pages/home/App'

export const AppRoutes = () => {
  return (

    <div style={{backgroundColor: "#fafafa"}}>

        <Routes>

            <Route path="/" element={<App />} />

        </Routes>


    </div>
  )
}
