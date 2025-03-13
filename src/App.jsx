import Nav from "./Navigation/Nav"
import Product from "./Product/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"

function App() {

  return (
    <>
      <div>
        <Sidebar/>
        <Nav />
        <Recommended />
        <Product />
      </div>
    </>
  )
}

export default App
