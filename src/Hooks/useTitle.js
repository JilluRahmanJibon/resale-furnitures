import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = `${title} || Resale Furniture`;
	}, [title]);
};
export default useTitle;
