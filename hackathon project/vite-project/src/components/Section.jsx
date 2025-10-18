import React from 'react'

function Section() {
    return (
        <>
            <div className='w-full h-[50vh] flex justify-center text-3xl text-gray-300 bg-gray-900'>
                <h1 className='justify-center relative left-[690px]'>ჩვენს შესახებ</h1>
                <h2 className='justify-end relative left-[1160px] mt-[70px]'>ნავიგაცია</h2>
                <h2 className='left-[350px] relative mt-[70px]'>დახმარება</h2>
                <h2 className='right-[475px] relative mt-[70px]'>კატეგორიები</h2>
                <div className='text-center flex flex-col text-[25px] relative left-[555px] mt-[150px] gap-3'>

                    <p>ჩემი გვერდი</p>
                    <p>VIN-ის შემოწმება</p>
                    <p>ავტოსერვისი</p>
                    <p>დაშლილი ავტომობილები</p>
                    <p>ვიდეო ჯარიმები</p>
                    <p>თბილისის პარკინგი</p>
                    <p>მართვის მოწმობა</p>

                </div>
                
                
                <div className='flex flex-col relative text-[25px] mt-[150px] right-[440px] text-center gap-3'>
                    <p>ხშირად დასმული კითხვები</p>
                    <p>მესიჯის მიწერა</p>
                    <p>ზარის მოთხოვნა</p>
                    <p>ანონიმური უკუკავშირი</p>
                </div>

                
                <div className='flex flex-col relative text-[25px] right-[1325px] mt-[135px] gap-3'>
                    <p>სედანი</p>
                    <p>ჯიპი</p>
                    <p>კუპე</p>
                    <p>ჰეჩბექი</p>
                    <p>კაბრიოლეტი</p>
                    <p>ლიმუზინი</p>
                    <p>პიკაპი</p>
                </div>
            
            </div>

            
        </>
    )
}

export default Section