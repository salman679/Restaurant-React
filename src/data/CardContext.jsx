import { createContext } from "react";

const cardContext = createContext({
    item: [],
    mainItem: [],
    mainItemUpdate: (item) => { },
    updateCard: (item) => { },
    totalAmount: 0,
    addCard: (item) => { },
    removeCard: (item) => { },
    clearCard: (item) => { }
})

export default cardContext
