import React from 'react'

const Home = () => {
  return <>
    {/* Hero Section */}
    <>
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* Content */}
            <div>
              <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
              md:leading-[70px]'>We help patients live a healthy, longer life.</h1>
              <p>Exercitation fugiat cillum sint consectetur ipsum ex aliquip non cupidatat magna quis. Velit enim esse est cillum Lorem voluptate aliquip mollit eu cillum. Adipisicing sit ut commodo esse. Aute qui id amet eiusmod aliqua duis sint.</p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  </>
}

export default Home
