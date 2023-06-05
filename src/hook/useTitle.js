import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Mohite tax`;
    }, [title])
};

export default useTitle;