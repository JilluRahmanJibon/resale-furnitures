import React from "react";
import useTitle from "../../Hooks/useTitle";
import { AiFillQuestionCircle } from "react-icons/ai";
const Blog = () => {
	useTitle("Blog");

	return (
		<div>
			<div className="space-y-4 mx-10 my-16">
				<details
					className="group border-l-4 border-teal-600 shadow-lg shadow-slate-900 bg-gray-50 p-6"
					open
				>
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
							<div className="text-lg">
								<AiFillQuestionCircle></AiFillQuestionCircle>
							</div>
							What are the different ways to manage a state in a React
							application?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						There are four main types of state you need to properly manage in
						your React apps:
						<br />
						<b>1) Type – </b>Local state
						<br />
						<b>2) Type – </b>Global state
						<br />
						<b>3) Type – </b>Server state
						<br />
						<b>4) Type – </b>URL state
						<br />
						Local (UI) state – Local state is data we manage in one or another
						component.
						<br />
						Global (UI) state – Global state is data we manage across multiple
						components.
						<br />
						Server state – Data that comes from an external server that must be
						integrated with our UI state.
						<br />
						URL state – Data that exists on our URLs, including the pathname and
						query parameters..
						<br />
					</p>
				</details>

				<details className="group border-l-4 border-teal-600 shadow-lg shadow-slate-900 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
							<div className="text-lg">
								<AiFillQuestionCircle></AiFillQuestionCircle>
							</div>
							How does prototypical inheritance work?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						The Prototypal Inheritance is a feature in javascript used to add
						methods and properties in objects. It is a method by which an object
						can inherit the properties and methods of another object.
						Traditionally, in order to get and set the [[Prototype]] of an
						object, we use Object. getPrototypeOf and Object.
					</p>
				</details>
				<details className="group border-l-4 border-teal-600 shadow-lg shadow-slate-900 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
							<div className="text-lg">
								<AiFillQuestionCircle></AiFillQuestionCircle>
							</div>
							What is a unit test? Why should we write unit tests?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						Unit testing is a software development process in which the smallest
						testable parts of an application, called units, are individually and
						independently scrutinized for proper operation. This testing
						methodology is done during the development process by the software
						developers and sometimes QA staff. The main objective of unit
						testing is to isolate written code to test and determine if it works
						as intended.
						<br />
						The main objective of unit testing is to isolate written code to
						test and determine if it works as intended. Unit testing is an
						important step in the development process, because if done
						correctly, it can help detect early flaws in code which may be more
						difficult to find in later testing stages.
					</p>
				</details>
				<details className="group border-l-4 border-teal-600 shadow-lg shadow-slate-900 bg-gray-50 p-6">
					<summary className="flex cursor-pointer items-center justify-between">
						<h2 className=" gap-2 text-lg font-medium text-gray-900 flex items-center justify-center">
							<div className="text-lg">
								<AiFillQuestionCircle></AiFillQuestionCircle>
							</div>
							React vs. Angular vs. Vue?
						</h2>

						<span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>

					<p className="mt-4 leading-relaxed text-gray-700">
						<b> React JS-</b> <br />
						React can be used as a UI library to render elements, without
						enforcing a specific project structure, and that’s why it’s not
						strictly a framework. React Elements are the smallest building
						blocks of React apps. They are more powerful than DOM elements
						because the React DOM makes sure to update them efficiently whenever
						something changes. Components are larger building blocks that define
						independent and reusable pieces to be used throughout the
						application. They accept inputs called props and produce elements
						that are then displayed to the user. React is based on JavaScript,
						but it’s mostly combined with JSX (JavaScript XML), a syntax
						extension that allows you to create elements that contain HTML and
						JavaScript at the same time.
						<br /> <b> Vue JS-</b> <br /> The Vue.js core library focuses on the
						View layer only. It’s called a progressive framework because you can
						extend its functionality with official and third-party packages,
						such as Vue Router or Vuex, to turn it into an actual framework.
						Although Vue is not strictly associated with the MVVM
						(Model-View-ViewModel) pattern, its design was partly inspired by
						it. With Vue, you’ll be working mostly on the ViewModel layer, to
						make sure that the application data is processed in a way that
						allows the framework to render an up-to-date View. Vue’s templating
						syntax lets you create View components, and it combines familiar
						HTML with special directives and features. This templating syntax is
						preferred, even though raw JavaScript and JSX are also supported.
						<br />
						<b> Angular JS-</b> <br />
						AngularJS, the original framework, is an MVC
						(Model-View-Controller)) framework. But in Angular 2, there’s no
						strict association with MV*-patterns as it is also component-based.
						Projects in Angular are structured into Modules, Components, and
						Services. Each Angular application has at least one root component
						and one root module. Each component in Angular contains a Template,
						a Class that defines the application logic, and MetaData
						(Decorators). The metadata for a component tells Angular where to
						find the building blocks that it needs to create and present its
						view.
					</p>
				</details>
			</div>
		</div>
	);
};

export default Blog