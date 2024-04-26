'use client'
import Image from "next/image";
import logo from "../../public/Assets/logo.svg"
import "./globals.css";
import dollar from '../../public/Assets/icon-dollar.svg'
import person from '../../public/Assets/icon-person.svg'
import { useEffect, useRef, useState } from "react";
import TipBtnComponent from "./Components/TipBtnComponent";


export default function Home() {

  const billRef = useRef<HTMLInputElement>(null);
  const percentRef = useRef<HTMLInputElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState<boolean>(true)
  const [bill, setBill] = useState<number>();
  const [people, setPeople] = useState<number>();
  const [tipPercent, setTipPercent] = useState<number>();
  const handlePercent = (percent: number) => {
    setTipPercent(percent)

  }
  const [total, setTotal] = useState<number>(0.00)
  const [totalTip, setTotalTip] = useState<number>(0.00)
  const [btnBg, setBtnBg] = useState<string>("bg-[#0D686D]")
  const [btnFocus, setbtnFocus] = useState<string>("")



  useEffect(() => {
    if (bill && bill <= 0) {
      setTotal(0.00)
      setTotalTip(0.00)
      setBtnBg("bg-[#0D686D]")
    }
    if (people && people <= 0) {
      setTotal(0.00)
      setTotalTip(0.00)
      setBtnBg("bg-[#0D686D]")
      setbtnFocus("focus:ring-[#e76d57]")
      setToggle(false)
    } else {
      setbtnFocus("focus:ring-[#26c0ab]")
      setToggle(true)
    }
    if (tipPercent && tipPercent < 0) {

      setTotal(0.00)
      setTotalTip(0.00)
      setBtnBg("bg-[#0D686D]")
    }
    if (tipPercent && people && people > 0 && bill && bill > 0) {

      setBtnBg("bg-[#26c0ab]")
      let tipNum = Number(tipPercent)
      let billNum = Number(bill)
      let peopleNum = Number(people)
      let TotalBill: number = (billNum + (billNum * tipNum / 100)) / peopleNum
      let TotalTip: number = (billNum * tipNum / 100) / peopleNum
      setTotal(Number(TotalBill.toFixed(2)))
      setTotalTip(Number(TotalTip.toFixed(2)))

    }




  }, [bill, people, tipPercent])

  // Thank you marcos for help with the above section 

  const reset = () => {
    if (billRef.current !== null) {
      billRef.current.value = ''; // Clear the first input field
      setBill(undefined)
    }
    if (percentRef.current !== null) {
      percentRef.current.value = ''; // Clear the second input field
      setTipPercent(undefined)
    }
    if (peopleRef.current !== null) {
      peopleRef.current.value = ''; // Clear the third input field
      setPeople(undefined)
    }
    setBtnBg("bg-[#0D686D]")
    setTotal(0.00)
    setTotalTip(0.00)

  }

  return (
    <div className="h-screen">
      <div className="flex justify-center mb-[12%] sm:mb-[5%] lg:mb-[5%] mt-[12%]">
        <Image src={logo} alt="Splitter Logo" />
      </div>
      <div className="flex justify-center items-center h-fit">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] max-w-[1000px] bg-white rounded-[20px] p-8">
          {/* Left Side */}
          <div className="px-3 py-4 flex flex-col justify-between ">
            {/* Start Bill Input */}
            <div>

              <p className="text-[#5e7a7d]  mb-[12px] tracking-wider">Bill</p>
              <div className="relative ">
                <input type="number" inputMode="numeric" required ref={billRef} onChange={(e: any) => setBill(e.target.value)} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} className="focus:ring-[#26c0ab] border-none focus:ring-2  focus:outline-none text-[24px] placeholder-[#7f9c9f] text-[#00494d] border-gray-300 rounded-md py-2 px-4 pl-10 h-[48px] bg-[#f4fafa] w-full text-right" placeholder="0" />
                <Image src={dollar} className="absolute left-3 top-4 w-3 h-4" alt="Dollar Sign" />
              </div>
            </div>
            {/* End Bill Input */}
            {/* Start Btn Section */}
            <div className=" mt-9">
              <p className="text-[#5e7a7d] mb-5 tracking-wider" >Select Tip %</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px]">
                <TipBtnComponent percent={5} setPercent={handlePercent}></TipBtnComponent>
                <TipBtnComponent percent={10} setPercent={handlePercent}></TipBtnComponent>
                <TipBtnComponent percent={15} setPercent={handlePercent}></TipBtnComponent>
                <TipBtnComponent percent={25} setPercent={handlePercent}></TipBtnComponent>
                <TipBtnComponent percent={50} setPercent={handlePercent}></TipBtnComponent>
                <input type="number" ref={percentRef} onChange={(e: any) => setTipPercent(e.target.value)} onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} placeholder="Custom" className="text-right focus:ring-[#26c0ab] border-none focus:ring-2  focus:outline-none  cursor-pointer px-2 rounded-[5px] text-[24px] bg-[#f4fafa] placeholder-[#5e7a7d] text-[#5e7a7d]" />
              </div>
            </div>
            {/* End Btn Section */}
            {/* Start Number Of People Section */}
            <div className="mt-9">
              <div className=" mb-2 flex justify-between">
                <p className="text-[#5e7a7d] tracking-wider">Number of People</p>
                <p className=" text-red-300">{toggle == false ? "Can't be zero" : ""}</p>
              </div>
              <div className="relative">
                <input type="number" inputMode="numeric" title="Can't be zero" onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} onChange={(e: any) => setPeople(e.target.value)} required ref={peopleRef} className={`border-none focus:ring-2  focus:outline-none text-[24px] placeholder-[#7f9c9f] text-[#00494d] border-gray-300 rounded-md py-2 px-4 pl-10 h-12 bg-[#f4fafa] w-full text-right ${btnFocus}`} placeholder="0" />
                <Image src={person} className="absolute left-3 top-4 w-4 h-5 opacity-70" alt="People" />
              </div>
            </div>
            {/* End Number Of People Section */}
          </div>
          {/* End Left Side */}
          {/* Right Side */}
          <div>
            <div className='bg-[#00494d] rounded-xl h-[257px]  lg:h-[417px] lg:py-10 px-5 lg:px-14 py-9  relative'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-white  mb-[5px]'>Tip Amount</p>
                  <p className='text-[#5e7a7d] text-[14px]  '>/ person</p>
                </div>
                <p className='text-[#26c0ab]  text-[32px] lg:text-[46px]'>${totalTip.toFixed(2)}</p>
              </div>
              <div className='mt-[25px] lg:mt-[30px] flex items-center justify-between'>
                <div className=''>
                  <p className=' text-white  mb-1'>Total</p>
                  <p className='text-[14px] text-[#5e7a7d]'>/ person</p>
                </div>

                <p className='text-[#26c0ab] text-[32px] lg:text-[46px]'>${total.toFixed(2)}</p>
              </div>


              <div className='flex justify-center'>
                <button onClick={reset} className={`absolute mb-7 lg:h-12 ${btnBg} bottom-0 lg:mb-[40px] min-w-[280px] lg:w-[335px] cursor-pointer hover:bg-[#A0E8Df] text-[#00494d] text-xl rounded-md`}> RESET </button>
              </div>


            </div>
          </div>
          {/* End Right Side */}
        </div>

      </div>












    </div>
  );
}
