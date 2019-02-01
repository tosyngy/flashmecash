import React from "react"
import ReactBankCard from "react-bank-card"
 
const ATMTemplate = () =>
  <ReactBankCard
    cvc="123"
    expiryMonth={10}
    expiryYear={19}
    number="5609487847898334"
    name="XuopleD"
    highlighted={{
      number: false,
      name: false,
      cvc: true,
      expiryMonth: false,
      expiryYear: false,
    }}
  />

  export default ATMTemplate;