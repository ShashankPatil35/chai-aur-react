import { useState } from 'react'
import React from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)
  const [amount,Setamount] = useState(0)
  const [from,setfrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setconvertedAmount] = useState(0)
  
  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)
  const swap = ()=>{
    setfrom(to)
    setTo(from)
    setconvertedAmount(amount)
    Setamount(convertedAmount)
  }
  const convert = ()=>{
    setconvertedAmount(amount*CurrencyInfo[to])
  }

  return (
   
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=sph')`,
        }}
    > 
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>Setamount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>Setamount(amount)}
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
                           label="to"
                           amount={convertedAmount}
                           currencyOptions={options}
                           onCurrencyChange={(currency)=>setTo(currency)}
                           selectCurrency={from}
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
);
}

export default App
