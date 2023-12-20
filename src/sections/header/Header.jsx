import logo from "../../../public/image/logo.png"
import "./style.scss"
import { FaCartPlus } from "react-icons/fa";
import { listItems } from "./data";
import List from "./list";
import Modal from "../../Components/modal";
import { useContext } from "react";
import cardContext from "../../data/CardContext";

const Header = () => {
    let cardCtx = useContext(cardContext)
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <nav className="list ms-auto">
                            <ul className="d-flex m-0 p-0">
                                {listItems.map((item, index) => {
                                    return <List url={item.url} ami={item.label} key={index} />
                                })}
                            </ul>
                        </nav>
                        <div className="cart">
                            <div className="icon" data-bs-toggle="modal" data-bs-target="#cartModel">
                                <FaCartPlus />
                                <span id="card-status">{cardCtx.item.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Modal />
        </>


    );
}

export default Header;