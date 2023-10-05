import React, { useState } from 'react'
import {useGlobalContext} from "../context"
import {FiUsers} from "react-icons/fi"
import {BsFuelPump} from "react-icons/bs"
import {BsSpeedometer} from "react-icons/bs"
import {GiSteeringWheel} from "react-icons/gi"
import {GoHeart} from "react-icons/go"
import {BiLeftArrowAlt} from "react-icons/bi"
import {BiRightArrowAlt} from "react-icons/bi"

const Items = () => {


    const {services} = useGlobalContext();
    console.log(services)

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = services.slice(firstIndex, lastIndex)
    const npage = Math.ceil(services.length / recordsPerPage)


  return (
        <div>
        <section className='h-full bg-[#d3e6eb]'>
            <div className='w-11/12 mx-auto'>
            <div className='grid md:grid-cols-3 pb-7 gap-5 pt-4'>
                {
                    records.map((curElem)=>{
                        const{image, name, years, prople, fuel, mileage, drive, emi, id, link} = curElem
                        return <div key={id} className='h-[560px] shadow-xl rounded-2xl p-3 bg-[#e1eff2]'>
                                <span>
                                    <img src={image} alt=""  className='h-[300px] w-[470px] sm:w-[650px]  rounded-3xl'/>
                                </span>
                                    <div className='flex justify-between mt-5'>
                                    <p className='sm:text-2xl xl:text-2xl lg:text-xl md:text-lg font-semibold '>{name}</p>
                                    <p className='border-dashed border-2 rounded-2xl px-3 py-1 border-sky-300'>{years}</p>
                                    </div>
                                <div className='grid grid-cols-2 gap-4 place-content-between border-b border-gray-300 py-6'>
                                    <p className='flex flex-row gap-2 items-center'><FiUsers className='text-sky-500 sm:text-lg xl:text-lg lg:text-base md:text-sm'/>{prople}</p>
                                    <p className='flex flex-row gap-2 items-center'><BsFuelPump className='text-sky-500 sm:text-lg xl:text-lg lg:text-base md:text-sm'/>{fuel}</p>
                                    <p className='flex flex-row gap-2 items-center'><BsSpeedometer className='text-sky-500 sm:text-lg xl:text-lg lg:text-base md:text-sm'/>{mileage}</p>
                                    <p className='flex flex-row gap-2 items-center'><GiSteeringWheel className='text-sky-500 sm:text-lg xl:text-lg lg:text-base md:text-sm'/>{drive}</p>
                                </div>
                                <div className='flex justify-between mt-6 items-end '>
                                    <p className='flex flex-row align-bottom'> 
                                    <h1 className='sm:text-2xl xl:text-2xl lg:text-xl md:text-lg font-semibold'>{emi}</h1> 
                                    <h1 className='mt-1'> / month</h1>
                                    </p>
                                    <div className='flex justify-center gap-4'>
                                        <button className='bg-sky-200 p-2 rounded-xl hover:bg-sky-300 duration-300 '><GoHeart className='text-sky-500 h-5 w-5 hover:text-sky-600'/></button>
                                <a href={link} className='bg-sky-500 px-4 py-2 cursor-pointer rounded-xl hover:bg-sky-700 hover:font-bold duration-300 text-white sm:text-lg xl:text-lg lg:text-lg md:text-sm'>Read More</a>
                                </div>
                                </div>
                            </div>
                        
                    })
                }
            </div>
            </div>
        </section>


        <div className='bg-[#d3e6eb] h-[60px] pt-1'>
      <div className="h-[50px] items-center shadow-2xl py-2 px-3 justify-between bg-[#e1eff2] flex  w-11/12 rounded-xl mx-auto"> 
            <div>1 from 10</div>
            <div className='flex flex-row gap-2 sm:gap-6 items-center'>
                <a href='#' onClick={prePage} className='bg-slate-50 px-3 py-1 rounded-lg'><BiLeftArrowAlt className='h-5 w-5'/></a>
                <p className='bg-slate-50 px-3 py-[3px] rounded-lg'>1</p>
                <p className='bg-slate-50 px-3 py-[3px] rounded-lg '>..</p>
                <p className='bg-slate-50 px-3 py-[3px] rounded-lg '>10</p>
                <a href='#' onClick={nextPage} className='bg-slate-50 px-3 py-1 rounded-lg'><BiRightArrowAlt className='h-5 w-5'/></a>
            </div>
      </div>
    </div>



        </div>
  )

  function prePage (){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  }

  function nextPage (){
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
    }
  }

}

export default Items
