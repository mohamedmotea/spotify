

export default function Slidebar() {
  const effOpacity = 'opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer';
  const boxList = [
    {title:'Create your first playlist',sub:"It's easy, we'll help you" ,btn : 'Create playlist'},
    {title:"Let's find some podcasts to follow",sub:"We'll keep you updated on new episodes" ,btn : 'Browse podcasts'}

  ]
  return (
    <section className="max-h-screen" >

        <ul className='bg-[--subColor] p-5 rounded-xl'>
          <li className='mb-5' role='button'>
          <i className='fas fa-home mr-3'></i>
          <span className='font-bold '>Home</span>

          </li>

          <li className={effOpacity}>
          <i className='fas fa-search mr-3'></i>
          <span className='font-bold'>Search</span>

          </li>
        </ul>

    {/* Box 2 */}
        <div className='my-3 rounded-xl bg-[--subColor] py-3'>
          {/* List Header */}
          <div className='flex justify-between items-center p-5 flex-wrap'>
              <div className={`${effOpacity}`}>
              <i className="fa-solid fa-lines-leaning"></i>
              <span className='font-bold ms-2'>Your Library</span>
              </div>


              <div>
              <i className={`${effOpacity}  fa-solid fa-plus p-2 hover:bg-[--mainColor] rounded-full`}></i>
              <i className={`${effOpacity} fa-solid fa-arrow-right p-2 hover:bg-[--mainColor] rounded-full ml-2`}></i>
              </div>

          </div>

          <ul className='md:overflow-y-scroll md:h-[300px] md:py-[20px] lg:overflow-hidden lg:h-screen'>
                {boxList.map((box,index)=>{
                  return <li className='p-5 bg-[--mainColor] rounded-xl mx-2 mb-3' key={index}>
                    <h4 className='font-semibold'>{box.title}</h4>
                    <p className='my-1 opacity-60 text-sm'>{box.sub}</p>
                    <button className='bg-white text-[--mainColor] font-semibold rounded-lg px-3 py-1 mt-3 text-sm hover:scale-[1.02]'>{box.btn}</button>
                  </li>
                })}      
          </ul>
        </div>
    </section>
  )
}
