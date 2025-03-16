import { FaStar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <section className='card'>
        <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
        <div className="card-details">
          <h3 className='card-title'>shoe</h3>
          <section className='card-review'>
            <FaStar className='rating-star' /> <FaStar className='rating-star' /> <FaStar className='rating-star' /> <FaStar className='rating-star' />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del>200
            </div>
            <div className="bag">
              <IoBagHandleSharp className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Card