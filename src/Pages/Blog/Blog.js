import React, { useState } from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
	useTitle("Blog");
	const Item = ({ title, children }) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div className="border rounded shadow-sm">
				<button
					type="button"
					aria-label="Open item"
					title="Open item"
					className="flex items-center justify-between w-full p-4 focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}>
					<p className="text-lg font-medium">{title}</p>
					<div className="flex items-center justify-center w-8 h-8 border rounded-full">
						<svg
							viewBox="0 0 24 24"
							className={`w-3 text-gray-400 transition-transform duration-200 ${
								isOpen ? "transform rotate-180" : ""
							}`}>
							<polyline
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeMiterlimit="10"
								points="2,7 12,17 22,7"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</button>
				{isOpen && (
					<div className="p-4 pt-0">
						<p className="text-gray-400">{children}</p>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div className="flex flex-col mb-16 sm:text-center">
					<div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none text-center tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
							<span className="relative inline-block">
								<svg
									viewBox="0 0 52 24"
									fill="currentColor"
									className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20   lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
									<defs>
										<pattern
											id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
											x="0"
											y="0"
											width=".135"
											height=".30">
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
										width="52"
										height="24"
									/>
								</svg>
								<span className="relative">Here</span>
							</span>{" "}
							is some questions
						</h2>
					</div>
				</div>
				<div className="space-y-4">
					<Item title="Difference between SQL and NoSQL">
						SQL is the programming language used to interface with relational
						databases. (Relational databases model data as records in rows and
						tables with logical links between them). NoSQL is a class of DBMs
						that are non-relational and generally do not use SQL.
					</Item>
					<Item title="What is JWT, and how does it work?">
						What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
						standard (RFC 7519) for securely transmitting information between
						parties as JSON object. It is compact, readable and digitally signed
						using a private key/ or a public key pair by the Identity
						Provider(IdP).
					</Item>
					<Item title="What is the difference between javascript and NodeJS?">
						JavaScript is a simple programming language that can be used with
						any browser that has the JavaScript Engine installed. Node. js, on
						the other hand, is an interpreter or execution environment for the
						JavaScript programming language.
					</Item>
					<Item title="How does NodeJS handle multiple requests at the same time?">
						How NodeJS handle multiple client requests? NodeJS receives multiple
						client requests and places them into EventQueue. NodeJS is built
						with the concept of event-driven architecture. NodeJS has its own
						EventLoop which is an infinite loop that receives requests and
						processes them.
					</Item>
				</div>
			</div>
		</div>
	);
};

export default Blog;
