import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = `${title} || Assignment-12`;
	}, [title]);
};
export default useTitle;
