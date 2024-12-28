import InputFile from "@/components/form"
import { ThemeProvider } from "@/components/dark-mode/theme-provider"
import Navbar from "./components/navbar"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="px-10">
          <div className="flex justify-center items-center">
            <InputFile />
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
