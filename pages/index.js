import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Aboutinfo, Testimonial } from "@/components/About";
import { ServicesInfo } from "@/components/Services";
import { PizzaMeals, Products } from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Pizza</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<header className="relative z-10 bg-[url('/images/bg_1.JPG')] pt-18 bg-cover bg-center bg-no-repeat h-[750px]">
				<div className=" bg-[url('/images/bg_3.JPG')] bg-cover bg-center bg-no-repeat h-[750px] ">
					<div className="bg-black/70 h-full flex justify-center items-center">
						<div className="py-28 text-center text-white lg:w-2/4">
							<h3 className="text-[#fac564] font-nycd text-3xl font-light">
								Welcome
							</h3>
							<h1 className="tracking-[1px] leading-[1.5] font-normal uppercase py-10">
								we cooked your desired pizza recipe
							</h1>
							<p className="text-lg text-white leading-[1.5] font-light">
								A small river named Duden flows by their place and supplies it
								with the necessary regelialia.
							</p>
							<div className="space-x-4 py-10">
								<button className="text-black border border-[#fac564] bg-[#fac564] py-4 px-8 hover:bg-transparent hover:text-[#fac564]">
									Order Now
								</button>
								<button className="border border-white py-4 px-8 hover:border-[#fac564] hover:bg-[#fac564] hover:text-black">
									View Menu
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="bg-[url('/images/bg_4.JPG')] bg-cover bg-no-repeat bg-center bg-fixed text-white">
				<Aboutinfo />
			</div>
			<ServicesInfo />
			<div className="bg-menu text-white bg-no-repeat bg-fixed">
				<PizzaMeals heading="HOT PIZZA MEALS" />
			</div>
			<div className="md:flex">
				<div className="relative w-full bg-[url('/images/gallery-1.JPG')] bg-cover bg-center bg-no-repeat h-[300px]"></div>
				<div className="relative w-full bg-[url('/images/gallery-2.JPG')] bg-cover bg-center bg-no-repeat h-[300px]"></div>
				<div className="relative w-full bg-[url('/images/gallery-3.JPG')] bg-cover bg-center bg-no-repeat h-[300px]"></div>
				<div className="relative w-full bg-[url('/images/gallery-4.JPG')] bg-cover bg-center bg-no-repeat h-[300px]"></div>
			</div>
			<Testimonial />
			<div className="bg-menu text-white bg-no-repeat bg-fixed">
				<Products />
			</div>
			<Footer />
		</>
	);
}
