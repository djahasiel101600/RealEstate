import { MainLayout } from "@/shared/layouts";
import { RouterProvider } from "./providers";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <MainLayout>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </MainLayout>
  );
}

export default App;
