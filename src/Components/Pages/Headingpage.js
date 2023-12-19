import React from 'react'
const Headingpage = (props) => {

    return (
        <div>
            <section class="text-textcol bg-bgcol2 body-font">
                <div class="container px-5 py-16 mx-auto">
                    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <h1 class="leading-snug text-4xl lg:text-6xl font-bold font-Merriweather ">{props.title}</h1>
                        <h4 className='mt-3 text-center hover:text-red-800'>{props.gotoabout}</h4>
                        <span class="inline-block h-1 w-20 rounded bg-slate-300 mt-8 mb-6"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Headingpage
