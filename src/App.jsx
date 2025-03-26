import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Product/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import products from "./db/data"
import Card from "./components/Card"
import "./index.css";

function App() {

  const [selectCategory, setSelectCategory] = useState(null);


  // ----------------input filter-----------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filterItems = products.filter((p) =>
    p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  

  // ----------------Radio filter-----------------
  const handleChange = (e) => {
    setSelectCategory(e.target.value)
  }


  // ----------------Buttons filter-----------------
  const handleClick = (e) => {
    setSelectCategory(e.target.value)
  }

  ///filter data
  function filterData(products, selected, query) {
    let filterProducts = products;

    //filtering input item
    if (query) {
      filterProducts = filterItems;
    }

    // selector filter
    if (selected) {
      filterProducts = filterProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
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

  const result = filterData(products, selectCategory, query);


  return (
    <>
      <div>
        <Sidebar handleChange={handleChange}/>
        <Nav query={query} handleInputChange={handleInputChange}/>
        <Recommended handleClick={handleClick}/>
        <Product result={result}/>
      </div>
    </>
  )
}

export default App
