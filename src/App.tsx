import { Layout } from "./Layout"
import { Middle } from "./Middle"
import { BrowserRouter, Routes, Route } from "react-router"
import { NotFoundPage } from "./Pages/NotFoundPage/NotFoundPage"
import { CardPage } from "./Pages/CardPage/CardPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layout/>}>
          <Route index element={<Middle/>} />
        </Route>

        <Route path = "/cards" element= {<CardPage/>}/>

        <Route path ="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
