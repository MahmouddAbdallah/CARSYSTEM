import React from 'react'
import { BellIcon, ComputerIcon } from './icons'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='px-8 py-3 w-full bg-white'>
            <div className='flex items-center justify-between '>
                <div className='flex items-center gap-3'>
                    <div className='bg-black/5 p-3 rounded-xl'>
                        <ComputerIcon className='stroke-[#00316B] size-10' />
                    </div>
                    <span>Administrativo</span>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='relative'>
                        <BellIcon className='size-6' />
                        <div className='absolute -top-2 -right-2 bg-[#AEDE00] size-5 flex justify-center items-center rounded-full text-sm'>
                            3
                        </div>
                    </div>
                    <div className='px-3 py-2 border rounded-xl flex items-center gap-3'>
                        <Image
                            src={'/person.jpg'}
                            alt='person'
                            className='size-10 rounded-xl'
                            height={300}
                            width={300}
                        />
                        <span className='text-textblue'>
                            Fabiana Lima
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar