import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { DisclaimerPage, Fun, Home, More, NotFound, Projects } from "./pages";


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/more" element={<More />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
