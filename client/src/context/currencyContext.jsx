import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

// @ts-ignore
export const CurrencyContext = createContext()
export default CurrencyProvider

export function CurrencyProvider({ children }) {
    const [currency, setCurrency] = useState('USD')
    const [convertedAmount, setConvertedAmount] = useState(null)

    useEffect(() => {
        const res = async () => {
            const req = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=GhxNXqKJ5cnNLL8qhVhJZ13rmOn5KZ1a3H0o9a4s&currencies=${currency}`)

            setConvertedAmount(req.data.data[`${currency}`]);
        }

        res()


    }, [currency])

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2

    })

    const unitPrice = (amount) => {
        return currencyFormatter.format(amount * convertedAmount)
    }

    const convertedPrice = (amount) => {
        return (amount * convertedAmount).toFixed(2)
    }

    return (
        <CurrencyContext.Provider
            value={
                {
                    changeCurrency: setCurrency,
                    currency,
                    unitPrice,
                    convertedPrice
                }
            }
        >
            {children}
        </CurrencyContext.Provider>
    )
}
