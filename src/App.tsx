import { RouterProvider } from "react-router-dom";
// import { DashboardLayout } from './layouts'
import { Providers } from "./components/Providers";
import { router } from "./routes";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
