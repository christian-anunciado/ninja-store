import { useEffect, useState } from "react";


export const useOnTabFocused = () => {
    const [isTabFocused, setIsTabFocused] = useState(false)

    const onFocus = () => {
        console.log("Tab is in focus");
        setIsTabFocused(true)
    };

    const onBlur = () => {
        console.log("Tab is blurred");
        setIsTabFocused(false)
    }
    useEffect(() => {
        window.addEventListener("focus", onFocus);
        window.addEventListener("blur", onBlur);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("focus", onFocus);
            window.removeEventListener("blur", onBlur);
        };
    }, []);

    return isTabFocused;
};
