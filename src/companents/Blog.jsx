import React from 'react'
import blogimg from '../assets/img/blogimg1.png'
import blogimg2 from '../assets/img/blogimg2.png'
import blogimg3 from '../assets/img/blogimg3.png'
import blogimg4 from '../assets/img/blogimg4.png'

const Blog = () => {
  return (
    <div className='w-full pt-15 pb-15 flex items-center justify-center bg-[#f2f5f4]'>
        <div>
            <p className='text-[#F2BE22] text-[22px] text-center'>делимся впечатлениями</p>
            <h1 className='text-[#18121E] text-[30px] text-center font-bold leading-[1.1] pb-9'>Блог о путешествиях</h1>
            <div className='grid grid-cols-2 gap-5 items-center justify-center w-[90%] m-auto max-[555px]:grid-cols-1'>
                <div className='itemblo p-3.5 rounded-[8px] flex items-center justify-center gap-6 bg-white hover:shadow-2xl cursor-pointer transition-all max-[1200px]:flex-col'>
                    <div><img className='w-70 max-[555px]:w-[90vw]' src={blogimg} alt="" /></div>
                    <div>
                        <h3 className='text-[26px] font-[600] pb-6 max-w-[300px] max-[1200px]:text-[20px]'>Красивая Италия, какая она в реальности?</h3>
                        <p className='max-w-[300px] text-[15px] pb-10'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#F2BE22] font-[600]'>01/04/2023</p>
                            <p className='font-[600] text-[#1A3E3E]'>читать статью</p>
                        </div>
                    </div>
                </div>
                 <div className='itemblo p-3.5 rounded-[8px] flex items-center justify-center gap-6 bg-white hover:shadow-2xl cursor-pointer transition-all max-[1200px]:flex-col'>
                    <div><img className='w-70 max-[555px]:w-[90vw]' src={blogimg2} alt="" /></div>
                    <div>
                        <h3 className='text-[26px] font-[600] pb-6 max-w-[300px] max-[1200px]:text-[20px]'>Долой сомнения! Весь мир открыт для вас!</h3>
                        <p className='max-w-[300px] text-[15px] pb-7'>Для современного обы реализации соответствующих условий активизации ... независимые способы реализации соответствующих ус...</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#F2BE22] font-[600]'>01/04/2023</p>
                            <p className='font-[600] text-[#1A3E3E]'>читать статью</p>
                        </div>
                    </div>
                </div>
                 <div className='itemblo p-3.5 rounded-[8px] flex items-center justify-center gap-6 bg-white hover:shadow-2xl cursor-pointer transition-all max-[1200px]:flex-col'>
                    <div><img className='w-70 max-[555px]:w-[90vw]' src={blogimg3} alt="" /></div>
                    <div>
                        <h3 className='text-[26px] font-[600] pb-6 max-w-[300px] max-[1200px]:text-[20px]'>Как подготовиться к путешествию в одиночку? </h3>
                        <p className='max-w-[300px] text-[15px] pb-25'>Для современного мира базовый вектор развития предполагает.</p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#F2BE22] font-[600]'>01/04/2023</p>
                            <p className='font-[600] text-[#1A3E3E]'>читать статью</p>
                        </div>
                    </div>
                </div>
                 <div className='itemblo p-3.5 rounded-[8px] flex items-center justify-center gap-6 bg-white hover:shadow-2xl cursor-pointer transition-all max-[1200px]:flex-col'>
                    <div><img className='w-70 max-[555px]:w-[90vw]' src={blogimg4} alt="" /></div>
                    <div>
                        <h3 className='text-[26px] font-[600] pb-6 max-w-[300px] max-[1200px]:text-[20px]'>Индия ... летим?</h3>
                        <p className='max-w-[300px] text-[15px] pb-35'>Для современного мираного мира базовый.</p>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-[#F2BE22] font-[600]'>01/04/2023</p>
                            <p className='font-[600] text-[#1A3E3E]'>читать статью</p>
                        </div>
                    </div>
                </div>
            </div>
                <div className='w-full pt-6 flex justify-center'>
                    <button className='bg-[#1A3E3E] text-white pt-3 pb-3 pl-7 pr-7 rounded-[5px] text-[15px]'>Стоимость программ</button>
                </div>
        </div>
    </div>
  )
}

export default Blog