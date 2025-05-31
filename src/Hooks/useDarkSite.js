import { useState, useEffect } from "react";

export default function useDarkSide() {
    // Initialize theme from localStorage or default to light
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove previous theme class if any
        root.classList.remove(theme === "dark" ? "light" : "dark");

        // Add current theme class
        root.classList.add(theme);

        // Update localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}
