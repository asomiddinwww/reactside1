import progimg1 from '../assets/img/progimg1.png'
import progimg2 from '../assets/img/progimg2.png'
import progimg3 from '../assets/img/progimg3.png'
import progimg from '../assets/img/prog.png'

const Program = () => {
  return (
    <div className='bg-[#F3F5F4] w-full pt-15 pb-15 flex items-center justify-center gap-15 pl-5 pr-5'>
        <div className="progtext">
            <p className='text-[#F2BE22] text-[22px]'>наше предложение</p>
            <h1 className='text-[#18121E] text-[30px] font-bold max-w-[480px] leading-[1.1] pb-9'>Лучшие программы для тебя</h1>
            <p className='max-w-[540px] text-[18px] pb-10'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>

            <div className="liks-prog flex flex-col gap-7.5 pb-10">
                <div className="pro-item flex items-center gap-5">
                    <div><img className='max-[450px]:w-22' src={progimg1} alt="" /></div>
                    <div>
                        <p className='text-[16px] font-[700]'>Опытный гид</p>
                        <p className='text-[13px] font-[500] max-w-[470px]'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                    </div>
                </div>
                <div className="pro-item flex items-center gap-5">
                    <div><img className='max-[450px]:w-22' src={progimg2} alt="" /></div>
                    <div>
                        <p className='text-[16px] font-[700]'>Безопасный поход</p>
                        <p className='text-[13px] font-[500] max-w-[470px]'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                    </div>
                </div>
                <div className="pro-item flex items-center gap-5">
                    <div><img className='max-[450px]:w-22' src={progimg3} alt="" /></div>
                    <div>
                        <p className='text-[16px] font-[700]'>Лояльные цены</p>
                        <p className='text-[13px] font-[500] max-w-[470px]'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                    </div>
                </div>
            </div>
            <div className='max-[680px]:flex justify-center'>
            <button className='bg-[#1A3E3E] text-white pt-3 pb-3 pl-7 pr-7 rounded-[5px] text-[15px]'>Стоимость программ</button>
            </div>
        </div>
        <div className="progimg max-[700px]:hidden"><img src={progimg} alt="" /></div>
    </div>
  )
}

export default Program