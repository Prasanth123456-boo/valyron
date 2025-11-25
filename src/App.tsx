import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import { useSelector } from "react-redux";
import Layout from "./app/layout";
import allRoutes from "./routes/routes";
interface RootState {
  name: { value: string };
}

function App() {
  // const name = useSelector((state: RootState) => state.name.value);

  return (
    <Router>
      <Layout>
        {/* Suspense wrapper for lazy components */}
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            {allRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
