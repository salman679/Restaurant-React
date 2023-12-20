import { useContext } from "react"
import CardStructure from "./CardStructure"
import cardContext from "../../data/CardContext"

function CardData() {
    let cardCtx = useContext(cardContext)

    let addItemHandler = (item) => {
        cardCtx.addCard({
            ...item,
            amount: 1,
            total: function () {
                return this.price * this.amount
            }
        })


        let activeData = item.id

        let updateData = cardCtx.mainItem.map(updateItem => {
            if (updateItem.id == activeData) {
                return {
                    ...updateItem,
                    active: true
                }
            } else {
                return updateItem
            }
        })

        cardCtx.mainItemUpdate(updateData)
    }

    return (
        <>
            {cardCtx.mainItem.map((item, index) => < CardStructure
                key={index}
                id={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                price={item.price}
                ratting={item.ratting}
                onAddItem={() => addItemHandler(item)}
                active={item.active}
            />
            )
            }
        </>
    )
}

export default CardData