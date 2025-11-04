import React from 'react'
import tg from '../assets/img/tg.png'
import w from '../assets/img/w.png'
import p from '../assets/img/p.png'
import s from '../assets/img/s.png'
import fot from '../assets/img/fot.png'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center justify-center pt-20 bg-[#1a3d3d]'>
        <div className='pb-18 pt-18 pl-5 pr-5 flex items-start justify-center gap-20 max-[924px]:grid grid-cols-2 max-[600px]:grid-cols-1'>
            <div className='text-white'>
                <h3 className='text-[18px] pb-4 font-[600]'>Компания «РумТибет»</h3>
                <p className='text-[16px] max-w-[480px] pb-15'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.</p>
                <div className='flex gap-10 pb-8'>
                    <p className='underline cursor-pointer hover:underline hover:text-[#F2BE22]'>info@domain.com</p>
                    <p className='underline cursor-pointer hover:underline hover:text-[#F2BE22]'>+7 (123) 456-78-90</p>
                </div>
                <div className='flex items-center gap-5'>
                    <a href="#"><img src={tg} alt="" /></a>
                    <a href="#"><img src={w} alt="" /></a>
                    <a href="#"><img src={p} alt="" /></a>
                    <a href="#"><img src={s} alt="" /></a>
                </div>
            </div>
            <div>
                <h3 className='text-[18px] pb-4 font-[600] text-white'>Наши услуги</h3>
                <ul>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Прогулки в горы летом</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Зимние походы в горы</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Посещение храмов в горах</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Экстремальные виды туризма</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Походы в джунглях Амазонии</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Поездка в Африку</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-[18px] pb-4 font-[600] text-white'>Важно для путешествий</h3>
                <ul>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Как собрать в долгий поход?</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Жизненно важные предметы для похода</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Медицинская страховка, гарантии безопасности</a></li>
                    <li className='text-white pb-2.5 hover:underline hover:text-[#F2BE22]'><a href="#" className='flex gap-2 items-center'><img src={fot} alt="" />Если вы врач - загляните сюда</a></li>
                </ul>
            </div>
        </div>
        <div className='w-full p-4 bg-[#18121E] text-[15px]'>
            <div className='max-w-[1150px] m-auto flex items-center justify-between max-[600px]:flex-col gap-2'>
                <p className='text-white'>ИП Константинопольский К.К., 2023</p>
                <p className='text-white'>Политика обработки персональных данных</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer