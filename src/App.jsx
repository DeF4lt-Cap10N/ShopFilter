import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Product/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import products from "./db/data"


function App() {

  const [selectCategory, setSelectCategory] = useState(null);


  // ----------------input filter-----------------
  const [query, setQuery] = useState("");

  const handleInputChange = e => {
    setQuery(e.target.value);
  }

  const filterItems = products.filter((p) =>
    p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );


  // ----------------Radio filter-----------------
  const handleChange = (e) => {
    setSelectCategory(e.target.value)
  }


  // ----------------Buttons filter-----------------
  const handlelick = (e) => {
    setSelectCategory(e.target.value)
  }

  function filterData(products, selected, query) {
    let filterProducts = products;

    //filtering input item
    if (query) {
      filterProducts = filterItems;
    }

    // selector filter
    if (selected) {
      filterProducts = filterProducts.filter(({ category, color, company }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }

    return filterProducts.map(({ img, title, reviews,newPrice, prevPrice }) =>
      <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    )
  }

  return (
    <>
      <div>
        <Sidebar handleChange={handleChange}/>
        <Nav />
        <Recommended />
        <Product />
      </div>
    </>
  )
}

export default App
