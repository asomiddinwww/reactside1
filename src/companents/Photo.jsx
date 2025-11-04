import React from 'react'
import photo1 from '../assets/img/Rectangle 20.png'
import photo2 from '../assets/img/Rectangle 21.png'
import photo3 from '../assets/img/Rectangle 22.png'
import photo4 from '../assets/img/Rectangle 23.png'
import photo5 from '../assets/img/Rectangle 24.png'
import photo6 from '../assets/img/Rectangle 25.png'


const Photo = () => {
  return (
    <div className='w-full pt-15 pb-35 flex items-center justify-center bg-white'>
        <div>
            <p className='text-[#F2BE22] text-[22px] text-center'>фото-отчет</p>
            <h1 className='text-[#18121E] text-[30px] text-center font-bold leading-[1.1] pb-9'>Делимся впечатлениями</h1>
            <div className='w-[80%] m-auto items-center justify-center flex flex-wrap gap-3'>
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo6} alt="" />
                <img src={photo5} alt="" />
                <img src={photo4} alt="" />
                <img src={photo3} alt="" />
            </div>
             <div className='w-full pt-10 flex justify-center'>
                    <button className='bg-[#1A3E3E] text-white pt-3 pb-3 pl-7 pr-7 rounded-[5px] text-[15px]'>Стоимость программ</button>
                </div>
        </div>
    </div>
  )
}

export default Photo