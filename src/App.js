import "./assets/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { DefaultLayout } from "./components/layouts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
