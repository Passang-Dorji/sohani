"use client";

import FeaturesScroll from "./components/Feature";
import { useState, useEffect } from "react";
import ContactPage from "./components/Contact";
export default function Page() {
	// const [isAtBottom, setIsAtBottom] = useState(false);

	// useEffect(() => {
	// 	if (typeof window === "undefined") return;

	// 	const handleScroll = () => {
	// 		const scrollHeight = document.documentElement.scrollHeight;
	// 		const scrollPosition = window.innerHeight + window.scrollY;
	// 		setIsAtBottom(scrollPosition >= scrollHeight - 100);
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen overflow-y-auto ">
			<FeaturesScroll />
			<div className=" min-h-screen bg-gradient-to-br from-purple-500 via-indigo-400 to-pink-300 opacity-75 p-6">
				<header className="text-center py-8">
					<h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4">
						My Amazing Products
					</h1>
					<p className="text-lg md:text-xl text-blue-600">
						Showcasing Products
					</p>
				</header>

				<section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({ length: 6 }).map((_, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg  transform hover:scale-105 transition duration-300"
						>
							<div className="h-48  bg-gradient-to-br from-pink-500 via-purple-400 to-indigo-500 opacity-75 flex items-center justify-center">
								<span className="text-3xl font-bold text-white">
									Product {index + 1}
								</span>
							</div>
							<div className="p-4">
								<h2 className="text-2xl font-semibold text-blue-800 mb-2">
									Products {index + 1}
								</h2>
								<p className="text-blue-600 mb-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque vehicula.
								</p>
								<button className="bg-gradient-to-br from-pink-500 via-purple-400 to-indigo-300 opacity-75 text-black px-4 py-2 rounded hover:bg-blue-700 transition">
									Learn More
								</button>
							</div>
						</div>
					))}
				</section>

				<footer className="mt-16 text-center">
					<h2 className="text-3xl font-bold text-blue-800 mb-4">
						Want to Collaborate?
					</h2>
					<p className="text-blue-600 mb-6">
						Feel free to reach out and let&apos;s create something amazing
						together!
					</p>
					<button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition">
						Contact Me
					</button>
				</footer>
			</div>
			{/* <Products /> */}
			<ContactPage />
			{/* <button
				onClick={scrollToTop}
				className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-2 bg-indigo-700 rounded-full text-white hover:bg-indigo-800 transition duration-300 ease-in-out"
			> */}
			{/* {isAtBottom ? (
					<ArrowUpCircleIcon className="animate-bounce w-12 h-12" />
				) : (
					<ArrowDownCircleIcon className="animate-bounce w-12 h-12" />
				)} */}
			{/* </button> */}
		</div>
	);
}
