import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {


    return (
        <Slide
            autoplay={true}
            duration={4500}
            transitionDuration={1200}
            infinite={true}
            easing="ease"
            onChange={function noRefCheck() { }}
            onStartChange={function noRefCheck() { }}
        >
            <div className="each-slide-effect">
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/FLMMPjPy/image-12.png)',
                        height: 'calc(100vh - 65px)',

                    }}
                >
                    {/* Black overlay with opacity */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // 0.5 = 50% opacity
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Content */}
                    <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="font-bold text-5xl">🌱 <Typewriter cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={25}
                            loop={0}
                            typeSpeed={75}
                            words={[
                                'Grow Together',
                                'Bloom Forever'
                            ]} /></h1>
                        
                        <p className='italic'>Join a community where every leaf tells a story.</p>
                        <div className=' mt-8'>
                            <div>
                                <span className='text-[20px]'>📅 Date & Time: March 22, 2025 | 10:00 AM – 4:00 PM</span>
                            </div>
                            <div>
                                <span className='text-[20px]'>📍 Location: Central Community Park</span>
                                <span className='text-[20px]'>👤 Hosted by: GardenGrowers Hub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/YB6nkT51/image-10.png)',
                        height: 'calc(100vh - 65px)',
                    }}
                >
                    {/* Black overlay with opacity */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // 0.5 = 50% opacity
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Content */}
                    <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="font-bold text-5xl">🌼
                            <Typewriter cursor
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Dig In',
                                    'Share Out'
                                ]} /></h1>
                        <p className='italic'>Your gardening wisdom helps others flourish.</p>
                        <div className=' mt-8'>
                            <div>
                                <span className='text-[20px]'>📅 Date & Time: March 22, 2025 | 10:00 AM – 4:00 PM</span>
                            </div>
                            <div>
                                <span className='text-[20px]'>📍 Location: Central Community Park</span>
                                <span className='text-[20px]'>👤 Hosted by: GardenGrowers Hub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/1GY0j9t2/image-9.png)',
                        height: 'calc(100vh - 65px)',
                    }}
                >
                    {/* Black overlay with opacity */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // 0.5 = 50% opacity
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Content */}
                    <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="font-bold text-5xl">🌿
                            <Typewriter cursor
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Plant Ideas',
                                    'Watch Them Thrive'
                                ]} />
                             
                        </h1>
                        <p className='italic'>Share your tips and discover something new every day.</p>
                        <div className=' mt-8'>
                            <div>
                                <span className='text-[20px]'>📅 Date & Time: March 22, 2025 | 10:00 AM – 4:00 PM</span>
                            </div>
                            <div>
                                <span className='text-[20px]'>📍 Location: Central Community Park</span>
                                <span className='text-[20px]'>👤 Hosted by: GardenGrowers Hub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    className="relative bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/8grfLz2y/image-8.png)',
                        height: 'calc(100vh - 65px)',
                    }}
                >
                    {/* Black overlay with opacity */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // 0.5 = 50% opacity
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Content */}
                    <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                        <h1 className="font-bold text-5xl">🌻
                            <Typewriter cursor
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Rooted in Passion',
                                    'Growing with Friends'
                                ]} />
                            
                        </h1>
                        <p className='italic'>Connect, cultivate, and celebrate gardening together.</p>

                        <div className=' mt-8'>
                            <div>
                                <span className='text-[20px]'>📅 Date & Time: March 22, 2025 | 10:00 AM – 4:00 PM</span>
                            </div>
                            <div>
                                <span className='text-[20px]'>📍 Location: Central Community Park</span>
                                <span className='text-[20px]'>👤 Hosted by: GardenGrowers Hub</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default Slider;