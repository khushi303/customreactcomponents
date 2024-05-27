import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [Open, setopen] = useState(false)
       if (Open === true) {
        document.body.classList.add("overflow-hidden")
    } else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <>
            <div className='bg-orange-100'>
                <div className='container mx-auto px-3 max-w-[1164px]'>
                    <div className='flex items-center gap-6 justify-between py-4'>
                        <div onClick={() => setopen(!Open)} className="w-[28px] h-[22px] flex flex-col justify-between z-10 cursor-pointer">
                            <div className="bg-black h-1 w-full rounded-sm"></div>
                            <div className="bg-black h-1 w-full rounded-sm"></div>
                            <div className="bg-black h-1 w-full rounded-sm"></div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <Link to={'/'} className=' text-lg font-medium text-black tracking-wide'>Home</Link>
                            <Link to={'/Form'} className=' text-lg font-medium text-black tracking-wide'>Form</Link>
                            <Link to={'/Slider'} className=' text-lg font-medium text-black tracking-wide'>Slider</Link>
                            <Link to={'/Accordian'} className=' text-lg font-medium text-black tracking-wide'>Accordian</Link>
                            <Link to={'/Tabs'} className=' text-lg font-medium text-black tracking-wide'>Tabs</Link>
                        </div>
                    </div>
                    <div className={`fixed top-0 bottom-0 min-h-screen z-50 w-[400px] transition-all duration-300 ease-linear bg-orange-100 ${Open ? "left-0" : "left-[-400px]"}`}>
                        <div className='flex items-center justify-center gap-5 flex-col w-full h-full relative z-50'>
                            <Link to={'/'} className='text-lg font-medium text-black tracking-wide'>Home</Link>
                            <Link to={'/Form'} className='text-lg font-medium text-black tracking-wide'>Form</Link>
                            <Link to={'/Slider'} className='text-lg font-medium text-black tracking-wide'>Slider</Link>
                            <Link to={'/Accordian'} className='text-lg font-medium text-black tracking-wide'>Accordian</Link>
                            <Link to={'/Tabs'} className='text-lg font-medium text-black tracking-wide'>Tabs</Link>
                            <div onClick={() => setopen(!Open)} className='w-7 h-5 cursor-pointer flex items-center justify-center absolute top-7 right-6'>
                                <span className='h-1 w-full rounded-md bg-black rotate-[52deg] relative after:absolute after:h-1 after:left-0 right-0 after:top-0 after:bottom-0 after:my-auto after:bg-black after:w-full after:rotate-[79deg] after:rounded-md'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setopen(!Open)} className={`fixed top-0 bottom-0 transition-all duration-300 ease-linear w-full backdrop-blur-md  z-20 right-0 ${Open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            </div>
        </>
    )
}

export default Navbar