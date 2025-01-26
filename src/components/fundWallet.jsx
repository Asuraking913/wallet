import React, { useRef, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { MdCallReceived } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import pay from "../assets/flut.png"
import verve from "../assets/verve.png"
import master from "../assets/master.png"
import visa from "../assets/visa.png"
import Axios from '../utils/axios';
import {useInterval} from "react-use"


function FundWallet() {

  // states
  const [charge, setCharge] = useState(0)
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState("")
  const [redirectUrl, setRedirectUrl] = useState("")

  // refs
  const amountRef = useRef()
  const emailRef = useRef()

  

  useInterval(() => {

    if(redirectUrl) {
      amountRef.current.value = "";
      emailRef.current.value = "";

      setAmount((prev) => "");
      setEmail((prev) => "");

      window.location.href = redirectUrl
    }

  }, 3000, [redirectUrl])


  const handleAuthUrl = async (e) => {

    e.preventDefault()

    let data = {
      email : email, 
      amount: amount
    }

    

    if(data.email && data.amount) {

      try {
        
        const response = await Axios.post("/api/auth_url/", data);

        if(response.status === 200) {
          setRedirectUrl(prev => response.data.data.data.link)
          console.log(response.data)
          return
        }
        
      } catch (error) {
        
      }
    
      return
    }


  }

  return (
    <section className="flex gap-[30px] p-[20px] flex-col">
      <div className="flex gap-[20px]">
        <div className="w-[100%] bg-black h-[250px] rounded-[20px] p-[20px] text-[--white] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[1.5rem]">
            <h3 className=" pop font-semibold">
              Fund your wallet with paystack payment gateway
            </h3>
            <i className="">
              <AiOutlineSend />
            </i>
          </div>
          <p className="text-[0.8rem] pop">
            Unlock the potential of your projects with a hassle-free funding
            experience powered by Paystack.
          </p>
        </div>
        <div className="w-[100%] bg-[--gray] h-[250px] rounded-[20px] p-[20px] text-[--black] flex flex-col justify-between">
          <div className="flex justify-between items-center text-[1.5rem]">
            <h3 className=" pop font-semibold">Receive</h3>
            <i className="">
              <MdCallReceived />
            </i>
          </div>
          <p className="text-[0.8rem] pop">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            necessitatibus totam id aliquam magnam quasi corporis ea quod
            maiores laborum facilis
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-[10px] relative">
        <h2 className="text-center urba text-[1.2rem] font-semibold capitalize">
          Fund Your Account with paystack payment Gateway
        </h2>

        <form
          action=""
          className="p-[20px]  rounded-[5px] bg-[--gray] flex flex-col gap-[20px] w-full"
        >
          <p>
            <label htmlFor="amount" className="urba">
              Amount*
            </label>
            <input
            ref={amountRef}
              className="outline-none border-[--gray] rounded-[5px] border-[1px] block p-[10px] w-[60%] pop"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              min={0}
              step={1}
              name="amount"
              id="amount"
            />
          </p>
          <p>
            <label htmlFor="email" className="urba">
              Email*
            </label>
            <input
            ref={emailRef}
              className="outline-none border-[--gray] rounded-[5px] border-[1px] block p-[10px] w-[60%] pop"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              min={0}
              step={1}
              name="email"
              id="email"
            />
          </p>
          <div className="flex items-center justify-between w-[60%]">
            <p htmlFor="amount" className="urba">
              Transaction Charge
            </p>
            <p className="pop text-[--black] flex items-center opacity-60">
              <span>
                <TbCurrencyNaira />
              </span>
              <span>{charge}</span>
            </p>
          </div>
          <div className="border-[1px] border-[--white] w-[60%]"></div>
          <div className="flex items-center justify-between w-[60%]">
            <p htmlFor="amount" className="urba">
              Total
            </p>
            <p className="pop text-[--black] flex items-center ">
              <span>
                <TbCurrencyNaira />
              </span>
              <span>{charge}</span>
            </p>
          </div>
          <button onClick={(e) => handleAuthUrl(e) } className="w-[60%] pop text-[--white] p-[10px] bg-[--black] rounded-[2px] hover:opacity-90">
            Continue To Funding
          </button>
          <div className="w-[60%] flex items-center justify-center">
            <img src={pay} className="w-[150px]" alt="" />
          </div>
        </form>

        <div className="absolute top-[15%] right-[10%] flex flex-col justify-center">
          <h2 className="urba font-semibold text-center">Accepted Cards</h2>

          <div className="flex w-[250px] flex-wrap gap-[10px] justify-center">
            <img src={verve} className="w-[100px] object-cover" alt="" />
            <img src={master} className="w-[100px] object-cover " alt="" />
            <img src={visa} className="w-[100px] object-cover" alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default FundWallet