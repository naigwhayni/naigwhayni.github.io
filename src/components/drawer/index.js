import React, { useState } from "react";
import { drawer, drawerContent, open } from "./index.module.css"

const Drawer = ({ children, visible, onChange }) => {
    const [isOpen, setIsOpen] = useState(visible);

    const openDrawer = () => {
        setIsOpen(true);
        onChange(true)
    };

    const closeDrawer = () => {
        setIsOpen(false);
        onChange(false);
    };

    return (
        <div
            className={`${drawer} ${isOpen || visible ? open : ""}`}
            onClick={closeDrawer}
        >
            <div
                className={drawerContent}
                onClick={($event) => {
                    $event.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Drawer;
