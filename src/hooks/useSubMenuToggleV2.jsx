"use client"

import { useEffect } from "react";

const useSubMenuToggleV2 = () => {

        useEffect(() => {
            const subMenus = document.querySelectorAll('ul.sub-menu');
            subMenus.forEach(subMenu => {
                subMenu.style.display = 'none';
            });
        }, []);

    const toggleSubMenu2 = (e) => {
        e.preventDefault();
        const listItem = e.target.parentElement;
        const subMenu = listItem.querySelector('ul.sub-menu');

        if (subMenu) {
            listItem.classList.toggle('on');
            subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
        }
    };

    return toggleSubMenu2;
};

export default useSubMenuToggleV2;