import React, {useState} from "react";
import { t } from "../../i18n";

export default function About() {

	const [activeImage, setActiveImage] = useState('src/components/About/Rectangle 15.png');

	const getImageClassName = (imageSrc) => {
        return `w-full h-full object-cover border-2 border-red-500 ${activeImage === imageSrc ? 'z-10 bg-20 bg-light_accent' : 'z-0'}`;
    };

	return (
		<>
			<div className="w-full bg-shade-9 justify-center items-center bg-square-svg bg-center bg-cover bg-no-repeat bg-fixed ">
				<div className="flex flex-col w-full h-full justify-center items-center gap-16 py-36 text-center">
					<div className="flex w-9/12 h-4/6 flex-row justify-between items-center flex-wrap xl:gap-16 xl:w-11/12">
					<div className="flex basis-6/12 justify-start items-center flex-wrap gap-8 xl:basis-full xl:justify-center">
						<div className=" text-left ">
						<h2 className=" w-5/6 text-3xl mb-12 px-6 py-2 font-italic font-medium ">It's more than just a hackathon</h2>
						<div className="w-6/7 text-pretty p-3 ">
							 
							<p className="">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
							</p>
							<p className="mb-5">molestiae quas vel sint commodi repudiandae.</p>
							<p className="mb-5">
								numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							</p>
							<p className="mb-5">optio, eaque rerum! Provident similique accusantium nemo autem.</p>
						</div>
						</div>
					</div>

					<div
						className="basis-6/12 h-gallery grid grid-rows-12 grid-cols-12 gap-2 xl:basis-full xs:flex xs:flex-col aos-frame aos-animate w-1/2"
						data-aos="zoom-in"
					>
						<div className="border-2 flex flex-col justify-between col-start-1 col-end-9 row-start-9 row-end-13">
						
							<img
								src="src/components/About/Rectangle 15.png"
								alt="Description"
								className={getImageClassName('src/components/About/Rectangle 15.png')}
                    			onClick={() => setActiveImage('src/components/About/Rectangle 15.png')}
							/>
						</div>
							{/* Middle box */}
							<div
								className="border-2 col-start-1 col-end-6 row-start-1 row-end-6 xs:h-36 aos-frame aos-animate"
								data-aos="zoom-in"
							>
								<img
									src="src/components/About/Rectangle 16.png"
									alt="Description"
									className={getImageClassName('src/components/About/Rectangle 16.png')}
									onClick={() => setActiveImage('src/components/About/Rectangle 16.png')}
								/>
							</div>

							{/* Bottom-Left box */}
							<div
								className="border-2 border-shade-3 rounded-sm col-start-5 col-end-13 row-start-4 row-end-10 xs:h-36 aos-frame aos-animate"
								data-aos="zoom-in"
							>
								<img
									src="src/components/About/Rectangle 17.png"
									alt="Description"
									className={getImageClassName('src/components/About/Rectangle 17.png')}
									onClick={() => setActiveImage('src/components/About/Rectangle 17.png')}
								/>
							</div>
						
					</div>
					</div>
					
					
				</div>
			</div>
		</>
	);
}
