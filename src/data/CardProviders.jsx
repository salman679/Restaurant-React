import { useContext, useState } from 'react';
import cardContext from './CardContext'
import { cardData } from '../sections/CardItem/data';

function CardProviders(props) {

    let [items, setItems] = useState([])
    let [mainItem, setMainItems] = useState(cardData)

    let addCard = (item) => {

        let updateData = items;

        let exist = items.find(data => {
            return data.id == item.id;
        })

        if (!exist) {
            updateData = [
                ...items,
                item
            ]
        }

        // if (exist) {
        //     updateData = [{
        //         ...item,
        //         active: false
        //     }]
        // }

        setItems(updateData)
    }

    let updateCard = (id, amount) => {
        let updateItem = items.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    amount: amount
                }
            } else {
                return item
            }
        })

        setItems(updateItem)
    }

    let removeCard = (item) => {
        let updateItems = items.filter((data) => {
            return data.id != item.id;
        })

        setItems(updateItems)
    }

    let mainItemUpdate = (items) => {
        setMainItems(items)
    }

    let totalAmount = () => {
        let priceList = items.map((item) => {
            return item.total()
        })

        let amountSum = priceList.reduce((total, number) => {
            return total + number
        }, 0)

        return amountSum
    }

    let clearCard = () => {
        setItems([])

        let updateMainItem = mainItem.map((items) => {
            return {
                ...items,
                active: false
            }
        })

        setMainItems(updateMainItem)
    }

    let cardContextValue = {
        item: items,
        mainItem: mainItem,
        mainItemUpdate: mainItemUpdate,
        updateCard: updateCard,
        totalAmount: totalAmount,
        addCard: addCard,
        removeCard: removeCard,
        clearCard: clearCard
    }

    return (
        <cardContext.Provider value={cardContextValue}>
            {props.children}
        </cardContext.Provider>
    )
}

export default CardProviders