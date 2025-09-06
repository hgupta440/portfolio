	import React, { useState } from "react";
	import Lightbox from "yet-another-react-lightbox";
	import "yet-another-react-lightbox/styles.css";
	import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
	import "yet-another-react-lightbox/plugins/thumbnails.css";

	// Direct glob imports (static paths, no error)
	const Portfolio1 = Object.values(
	import.meta.glob("../assets/Hitesh-Portfolio/SAAS-eCommerce-solution/*.{png,jpg,jpeg,svg}", {
		eager: true,
		import: "default",
	})
	);
	const Portfolio2 = Object.values(
	import.meta.glob("../assets/Hitesh-Portfolio/SAAS-services-management/*.{png,jpg,jpeg,svg}", {
		eager: true,
		import: "default",
	})
	);
	const Portfolio3 = Object.values(
	import.meta.glob("../assets/Hitesh-Portfolio/Transportation-CRM/*.{png,jpg,jpeg,svg}", {
		eager: true,
		import: "default",
	})
	);
	const Portfolio4 = Object.values(
	import.meta.glob("../assets/Hitesh-Portfolio/Transport-CRM/*.{png,jpg,jpeg,svg}", {
		eager: true,
		import: "default",
	})
	);

	const Photocard = () => {
	const projects = [
		{ title: "SaaS eCommerce", images: Portfolio1 },
		{ title: "SaaS Services Mgmt", images: Portfolio2 },
		{ title: "Transportation CRM", images: Portfolio3 },
		{ title: "Transport CRM", images: Portfolio4 },
	];

	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [slides, setSlides] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openLightbox = (projectIndex, imageIndex = 0) => {
		const imgs = projects[projectIndex]?.images || [];
		if (!imgs.length) return;

		setSlides(imgs.map((src) => ({ src })));
		setCurrentIndex(imageIndex);
		setLightboxOpen(true);
	};

  	return (
		<section className="py-20 px-4 max-w-7xl mx-auto">
			<h2 className="text-4xl font-bold mb-4 animate-slideInLeft">Portfolio</h2>
			<p className="text-gray-600 mb-10 max-w-xl animate-slideInUp">
			Some of the recent freelance and professional projects I've worked on:
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideInUp">
			{/* Portfolio 1 */}
			<div className="overflow-hidden rounded shadow-md">
				<img
				src={Portfolio1[0]}
				alt="SaaS eCommerce"
				className="w-full h-72 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300"
				onClick={() => openLightbox(0)}
				/>
			</div>

			{/* Portfolio 2 */}
			<div className="overflow-hidden rounded shadow-md">
				<img
				src={Portfolio2[0]}
				alt="SaaS Services Management"
				className="w-full h-72 object-cover rounded shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
				onClick={() => openLightbox(1)}
				/>
			</div>

			{/* Portfolio 3 */}
			<div className="overflow-hidden rounded shadow-md">
				<img
				src={Portfolio3[0]}
				alt="Transportation CRM"
				className="w-full h-72 object-cover rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
				onClick={() => openLightbox(2)}
				/>
			</div>

			{/* Portfolio 4 */}
			<div className="overflow-hidden rounded shadow-md">
				<img
				src={Portfolio4[0]}
				alt="Transport CRM"
				className="w-full h-72 object-cover rounded shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
				onClick={() => openLightbox(3)}
				/>
			</div>
			</div>

			{/* Lightbox */}
			<Lightbox
			open={lightboxOpen}
			close={() => setLightboxOpen(false)}
			slides={slides}
			index={currentIndex}
			plugins={[Thumbnails]}
			carousel={{ finite: false }}
			controller={{ closeOnBackdropClick: true }}
			/>
		</section>
	);

};

export default Photocard;
