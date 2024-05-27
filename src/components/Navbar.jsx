import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [Open, setopen] = useState(false)
    return (
        <>
            <div className='container mx-auto px-3 max-w-[1164px]'>
                <div className='flex items-center gap-6 justify-between py-4'>
                    <div onClick={() => setopen(!Open)} className="w-[28px] h-[22px] flex flex-col justify-between z-10">
                        <div className="bg-black h-1 w-full rounded-sm"></div>
                        <div className="bg-black h-1 w-full rounded-sm"></div>
                        <div className="bg-black h-1 w-full rounded-sm"></div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Link to={'/'} className=''>Home</Link>
                        <Link to={'/Form'} className=''>Form</Link>
                        <Link to={'/Slider'} className=''>Slider</Link>
                        <Link to={'/Accordian'} className=''>Accordian</Link>
                        <Link to={'/Tabs'} className=''>Tabs</Link>
                    </div>
                </div>
                <div className={`fixed top-0 bottom-0 min-h-screen flex items-center z-50 justify-center gap-5 flex-col w-[400px] transition-all duration-300 ease-linear bg-white ${Open ? "left-0" : "left-[-400px]"}`}>
                    <Link to={'/'} className=''>Home</Link>
                    <Link to={'/Form'} className=''>Form</Link>
                    <Link to={'/Slider'} className=''>Slider</Link>
                    <Link to={'/Accordian'} className=''>Accordian</Link>
                    <Link to={'/Tabs'} className=''>Tabs</Link>
                </div>
            </div>
            <div onClick={()=>setopen(!Open)} className={`fixed top-0 bottom-0 transition-all duration-300 ease-linear w-full backdrop-blur-lg z-20 ${Open ? "right-0":"right-[-100%]"}`}>

            </div>
        </>
    )
}

export default Navbar