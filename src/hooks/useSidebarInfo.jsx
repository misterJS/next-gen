"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const useSidebarInfo = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const router = useRouter();

    const openInfoBar = () => {
        setIsInfoOpen(true);
        document.body.classList.add('on-sides');
    };

    const closeInfoBar = () => {
        setIsInfoOpen(false);
        document.body.classList.remove('on-sides');
    };

    useEffect(() => {
        const handleRouteChange = () => {
            console.log("Route changed");
            setIsInfoOpen(false);
            document.body.classList.remove('on-sides');
        };

        if (router.events) {
            router.events.on('routeChangeComplete', handleRouteChange);

            // Cleanup the event listener on component unmount
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router.events]);

    return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo;
