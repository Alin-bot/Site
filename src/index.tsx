import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { Layout } from './components'
import { Home } from './pages'
import { NotFound } from "./pages";
import { Projects } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>  
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)