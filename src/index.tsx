import { ColorModeScript, Spinner, HStack, VStack } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { Layout } from "./components";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Projects = React.lazy(() => import("./pages/Projects/Projects"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const More = React.lazy(() => import("./pages/More/More"));

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback={<VStack h='100vh' justify='center' align='center'><HStack justify='center' align='center'><Spinner thickness='4px' emptyColor='gray.200' size='xl'/></HStack></VStack>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/more" element={<More />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
