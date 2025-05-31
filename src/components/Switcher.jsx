'use client';

import { useContext, useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSite";
import { ThemeContext } from "../Contexts/ThemeContext"; // make sure this is correct

export default function Switcher() {
    const { toggleTheme } = useContext(ThemeContext); // ✅ ONLY change here

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "dark");

    const toggleDarkMode = (checked) => {
        toggleTheme?.(); // avoids crash if undefined
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    useEffect(() => {
        setDarkSide(colorTheme === "dark");
    }, [colorTheme]);

    return (
        <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    );
}
