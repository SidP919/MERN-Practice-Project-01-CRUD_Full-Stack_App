import React from 'react'

export const Form = () => {
    return (
        <div>
            <form className="body-font relative">
                <div className="container px-5 pt-12 pb-6 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold title-font mb-4 underline underline-offset-4">Create&nbsp;User</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Share your name &amp; email so we can add you to our User-List</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-lg">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-white focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-cyan-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-lg">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-white focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-cyan-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type='submit' className="flex mx-auto bg-white text-cyan-300 border-2 py-2 px-8 focus:outline-none hover:bg-cyan-300 hover:border-white hover:text-white rounded text-lg">Submit</button>
                            </div>
                            <div className="p-2 w-full py-4 mt-8 border-y border-gray-200 text-center">
                                <p>My Name: Sidharth Pandey</p>
                                <a className="text-white" href='mailto:sidp0008@gmail.com'>My Email Id: sidp0008@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}