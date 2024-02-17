 import Footer from "./conponents/Footer/Footer"
import Header from "./conponents/Header/Header"
import NewsBoard from "./conponents/NewsBoard/NewsBoard"
import NewsProvider from "./provider/NewsProvider"
 

function App() {

  return (
    <NewsProvider>
      <Header />
      <NewsBoard />
      <Footer />
    </NewsProvider>
  )
}

export default App
