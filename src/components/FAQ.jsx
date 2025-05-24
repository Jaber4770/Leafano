import React from 'react';

const FAQ = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl font-semibold text-center pb-4 bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent'>Frequently Asked Questions</h1>
            </div>
            <div className='lg:flex justify-center items-center'>
                <div className='flex-1'>
                    <img className='w-full' src="https://i.ibb.co/0yhSwDnZ/woman-15256349.png" alt="" />
                </div>
                <div className='flex-1'>
                    <div className="join join-vertical bg-base-100">
                        <div className="collapse collapse-arrow join-item border-base-300 ">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-[20px] font-semibold">Q: What’s the best time of day to water my plants?</div>
                            <div className="collapse-content text-sm">A: Early morning is ideal as it allows water to soak in before the sun evaporates it and prevents fungal growth overnight.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-[20px] font-semibold">Q: How often should I fertilize my garden?</div>
                            <div className="collapse-content text-sm">A: Most plants benefit from fertilizing every 4–6 weeks during the growing season, but always follow the instructions on your fertilizer.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-[20px] font-semibold">Q: Can I grow vegetables in containers?</div>
                            <div className="collapse-content text-sm">A: Absolutely! Many vegetables like tomatoes, lettuce, and peppers thrive in pots with proper soil and drainage.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-[20px] font-semibold">Q: What is companion planting and why is it helpful?</div>
                            <div className="collapse-content text-sm">A: Companion planting is growing different plants together that support each other’s growth or repel pests — like planting basil near tomatoes.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-[20px] font-semibold">Q: How can I naturally keep pests away from my garden?</div>
                            <div className="collapse-content text-sm">A: Use companion plants, homemade sprays (like neem oil), and invite beneficial insects like ladybugs to control pests naturally.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;