import { HomePage } from "./pages/HomePage";
import { BackgroundProvider } from "./context/BackgroundContext";

function App() {
  

  return (
    <>
    <BackgroundProvider>
      <HomePage/>
    </BackgroundProvider>
    </>
  )
}

export default App
