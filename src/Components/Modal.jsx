import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import cardContext from "../data/CardContext";

function Modal() {
    let modalDiv = document.getElementById('modal');
    let cardCtx = useContext(cardContext)

    let price = (n) => {
        return n.toFixed(2)
    }

    let deleteHandler = (item) => {
        cardCtx.removeCard(item)

        let activeData = item.id

        let updateData = cardCtx.mainItem.map(updateItem => {
            if (updateItem.id == activeData) {
                return {
                    ...updateItem,
                    active: false
                }
            } else {
                return updateItem
            }
        })

        cardCtx.mainItemUpdate(updateData)
    }

    let plusHandler = (id, n) => {
        let amount = n + 1
        let amountNumber = amount <= 20 ? amount : 20
        cardCtx.updateCard(id, amountNumber)
    }

    let minusHandler = (id, n) => {
        let amount = n - 1
        let amountNumber = amount >= 1 ? amount : 1
        cardCtx.updateCard(id, amountNumber)
    }

    let clearHandler = () => {
        cardCtx.clearCard()
    }

    return (
        <>
            {createPortal(
                <div className="modal cartModel fade" id="cartModel" tabIndex="-1" aria-labelledby="cartModel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header pb-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body pt-0 border-0">
                                <h3 className="pb-4 text-center">Your Cart Items</h3>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tablebody">
                                        {
                                            cardCtx.item.length === 0 ?
                                                <tr>
                                                    <th colSpan="6">
                                                        <p className="text-center mb-0 p-2">NO Data Found</p>
                                                    </th>
                                                </tr>
                                                :
                                                cardCtx.item.map((item) => {
                                                    return <tr key={item.id}>
                                                        <td>
                                                            <img src={item.src} alt={item.alt} />
                                                        </td>
                                                        <td>
                                                            <span>{item.title}</span>
                                                        </td>
                                                        <td>
                                                            <span>${price(item.price)}</span>
                                                        </td>
                                                        <td>
                                                            <div className="amount-area">
                                                                <span className="amount me-1">{item.amount}</span>
                                                                <div className="plus">
                                                                    <span onClick={() => plusHandler(item.id, item.amount)}>
                                                                        <FaPlus />
                                                                    </span>
                                                                </div>
                                                                <div className="minus">
                                                                    <span onClick={() => minusHandler(item.id, item.amount)}>
                                                                        <FaMinus />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>${price(item.total())}</span>
                                                        </td>
                                                        <td>
                                                            <div className="action deletebtn">
                                                                <RiDeleteBin5Fill onClick={() => deleteHandler(item)} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <h3 className="w-100 text-end">Total Amount: $<span>{cardCtx.totalAmount()}</span></h3>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Checkout</button>
                                <button type="button" onClick={clearHandler} className="btn btn-primary">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>, modalDiv
            )}
        </>
    )
}

export default Modal