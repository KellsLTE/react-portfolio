import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const encodeData = data => {
        return Object.keys(data).map(key => {
           return encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        }).join("&")
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/", 
        { 
            method: "POST", 
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
             },
             body: encodeData({"form-name":"contact", name, email, message}),
        })
        .then(() => alert("Message sent!"))
        .catch(err => alert(err))
    }


    return (
        <section id="contact" className='relative'>
            <div className='container flex flex-wrap px-5 mx-auto oy-10 sm:flex-nowrap'>
                <div className='relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10'>
                    <iframe
                    width='100%'
                    height='100%'
                    title='map'
                    className='absolute inset-0'
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    style={{ filter: 'opacity(0.7)' }}
                    src="https://www.google.com/maps/embed/v1/place?q=11+Aniekwenagbu+St.+City+Layout+Abakp+Enugu+41001&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className='relative flex flex-wrap py-6 bg-gray-900 rounded shadow-md'>
                        <div className='px-6 lg:w-1/2'>
                            <h2 className='text-xs font-semibold tracking-widest text-white title-font'>
                                ADDRESS
                            </h2>
                            <p className='mt-1'>
                                11 Aniekwenagbu St. <br/>
                                City Layout, Abakpa Enugu 41001
                            </p>
                        </div>
                        <div className='px-6 mt-4 lg:w-1/2 lg:mt-0'>
                            <h2 className='text-xs font-semibold tracking-widest text-white title-font'>
                                EMAIL
                            </h2>
                            <a href='mailto:maxotif@gmail.com?subject=Hello' className='leading-relaxed text-indigo-400'>
                                maxotif@gmail.com
                            </a>
                            <h2 className='mt-4 text-xs font-semibold tracking-widest text-white title-font'>
                                PHONE
                            </h2>
                            <p className='leading-relaxed'>
                                <a href='tel:+2348105612094'
                                className='text-indigo-400'
                                >
                                    +234-810-561-2094
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <form netlify='true' name="contact" className='flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0' onSubmit={handleSubmit}>
                    <h2 className='mb-1 text-3xl font-medium text-white sm:text-4xl title-font'>
                        Hire Me
                    </h2>
                    <p className='mb-5 leading-relaxed'>
                        I am available to work! I am excited to start that new project you want and even if it's just a quick hello, send me a message, I'll reply!
                    </p>
                    <div className='relative mb-4'>
                        <label htmlFor='name' className='text-sm text-gray-400 leadin-7'>
                            Name
                        </label>
                        <input type='text' id='name' name='name' className='w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='email' className='text-sm leading-7 text-gray-400'>
                            Email
                        </label>
                        <input type='email' id='email' name='email' className='w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor='message' className='leading-7 text-sm text-gray-400'>
                            Message
                        </label>
                        <textarea id='message' name='message' className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' onChange={e => setMessage(e.target.value)} />   
                    </div>
                    <button type='submit' className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                        Submit
                    </button>       
                </form>
            </div>
        </section>
    )
}

export default Contact
