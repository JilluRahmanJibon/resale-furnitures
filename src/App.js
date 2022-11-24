import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import "aos/dist/aos.css";
function App() {
	return (
		<div>
			{" "}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
