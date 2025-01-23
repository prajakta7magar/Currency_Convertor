import { useState } from 'react'
import { InputBox } from './components';
import usecurrencyinfo from './hooks/usecurrencyinfo';
import React from "react";


function App() {
  const [amount, setamount] = useState(0)
  const[from,setfrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setconvertedAmount]=useState(0)

const currencyInfo=usecurrencyinfo(from)

const Options = Object.keys(currencyInfo)

const swap=()=>
{
  setfrom(to)
  setTo(from)
  setamount(convertedAmount)
  setconvertedAmount(amount)

}

const convert=()=>
{
  setconvertedAmount(amount * currencyInfo[to])
}


return (
  <>
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/12955697/pexels-photo-12955697.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
    
      <div className="w-full">
        <h1 className='text-4xl text-white text-center pb-8 font-bold'>Currency Convertor</h1>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={Options}
                          onCurrencyChange={(currency) => setfrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setamount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={Options}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
  </>
);
}
export default App
