import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { Layout } from './components'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Projects = React.lazy(() => import('./pages/Projects/Projects'))
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'))

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </React.Suspense>
        </Layout>  
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)