import React from 'react'
import pagoimg from '../assets/img/pagode.png'
import mediapag from '../assets/img/mediapag.png'

const Pagode = () => {
  return (
    <div className='w-full pt-50 pb-25 pl-5 pr-5 flex items-center justify-center gap-15 max-[917px]:flex-col-reverse pt-1 gap-10'>
        <div className="pagoimg"><a href="#"><img className='max-w-[400px] max-[500px]:hidden' src={pagoimg} alt="" /></a></div>
        <div className="pagoimg"><a href="#"><img className='max-w-[400px] min-[500px]:hidden w-[90vw]' src={mediapag} alt="" /></a></div>
        <div className="pagotext p-3">
            <p className='text-[#F2BE22] text-[22px]'>о нашем походе</p>
            <h1 className='text-[#18121E] text-[30px] font-bold max-w-[480px] leading-[1.1] pb-9'>Исследуйте все горные массивы мира вместе с нами</h1>
            <p className='max-w-[540px] text-[18px] pb-10'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
            <button className='bg-[#1A3E3E] text-white pt-3 pb-3 pl-7 pr-7 rounded-[5px] text-[15px]'>Программа тура</button>
        </div>
    </div>
  )
}

export default Pagode