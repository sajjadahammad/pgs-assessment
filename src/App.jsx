import { createBrowserRouter, RouterProvider } from "react-router"
import { routes } from "./routes"
import { Toaster } from "sonner"


function App() {
  const router = createBrowserRouter(routes)

  return (
    <>
      <Toaster position="top-center"/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
