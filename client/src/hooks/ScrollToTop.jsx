import { useEffect } from 'react';
// function ScrollToTop({ history }) {
//     useEffect(() => {
//         const unlisten = history.listen(() => {
//             window.scrollTo(0, 0);
//         });
//         return () => {
//             unlisten();
//         }
//     }, []);

//     return (null);
// }

// export default withRouter(ScrollToTop);

import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Scrolled");
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
