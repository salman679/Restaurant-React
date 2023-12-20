import { FaRegStar, FaStar } from "react-icons/fa";

function CardStructure(props) {

    const addToCard = (e) => {
        e.preventDefault()
        // e.target.classList.add('added')
        // e.target.innerHTML = 'Already Added'
        props.onAddItem()
    }

    return (
        <div className="col-lg-3">
            <div className="food-items">
                <img src={props.src} alt={props.alt} />
                <div className="food-information">
                    <div className="name">
                        <span>{props.title}</span>
                    </div>
                    <div className="rating d-flex mt-3 mb-3">

                        {new Array(5).fill(null).map((_, index) => {
                            if (props.ratting > index) {
                                return <FaStar key={index} className="active" />
                            }
                            else {
                                return <FaRegStar key={index} />
                            }
                        })
                        }
                        <div className="price ms-auto">
                            <span>${(props.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="food-btn">
                        <a
                            data-id="01"
                            id="cngText"
                            className={`add-to-cart-btn ${props.active ? "added" : ''}`}
                            // className={`add-to-cart-btn ${props.active ? "added" && "#cngText.innerHTML" + "=" + 'Already Added' : '' && "#cngText.innerHTML" + "=" + 'Add To Card'}`}
                            href="#"
                            onClick={addToCard}
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStructure