import React from 'react'
import Button from '@/components/ui/Button'
import { CgCoffee } from "react-icons/cg";

const NotFound = () => {
    return (
        <section className="outer-spacing min-h-[70vh] flex items-center">
            <div className="main-container w-full text-center flex flex-col items-center justify-center space-y-6">
                <h1 className="text-[32px] sm:text-[40px] xl:text-[60px] font-semibold text-black">
                    Oops! This page wandered off...
                </h1>
                <p className="text-lg sm:text-xl text-black max-w-xl">
                    Looks like the page you are looking for does not exist.
                </p>
                <p>
                    Maybe its sipping a latte somewhere? <CgCoffee className='h-6 w-6 inline' />
                </p>
                <p className="text-lg sm:text-xl text-black">
                    Dont worry, you can head back home and find your way from there.
                </p>
                <Button label="Go to Homepage" href="/" type="link" variant="primary2" />
            </div>
        </section>
    )
}

export default NotFound