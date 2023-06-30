/* eslint-disable no-undef */

import { Button } from "flowbite-react";


const Banner = () => {


    return (
        <div className="myContainer  " >
            <div className='bgY relative '>
                <div className="absolute  h-[700px] flex flex-col   items-center justify-center">
                    <div className="md:w-[650px] w-[400px] px-10 ">
                        <h2 className="text-2xl font-semibold text-gray-700">Enjoy Your Dudu</h2>
                        <h2 className="text-6xl font-semibold py-5 text-white">Career Goal Success</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam amet possimus distinctio eius dignissimos veritatis minus expedita natus laudantium, ipsa quae tenetur! Soluta voluptatem laudantium quibusdam eos mollitia illum odit.
                        </p>
                       <div className="pt-5">
                       <Button gradientMonochrome="failure">
                            Go Learning
                        </Button>
                       </div>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;