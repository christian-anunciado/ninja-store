import { useEffect } from "react";

function useOutsideClick(ref, setToggle, handlerRef) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (handlerRef.current && handlerRef.current.contains(event.target)) {
                    return
                }
                setToggle(prev => !prev)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideClick
