import { FaStar } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
// import { AiFillStar } from "react-icons/ai";

const Card = ({ img, title, reviews,newPrice, prevPrice }) => {
  return (
    <>
      <section className='card'>
        <img className='card-img' src={img} alt="shoe" />
        <div className="card-details">
          <h3 className='card-title'>{title}</h3>
          <section className='card-review'>
            <FaStar className='rating-star' /> <FaStar className='rating-star' /> <FaStar className='rating-star' /> <FaStar className='rating-star' />
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
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