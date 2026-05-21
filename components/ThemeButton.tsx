"use client"

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <label className="relative flex cursor-pointer gap-1 rounded-2xl bg-slate-500 p-1">
            <input
                type="checkbox"
                name="theme input"
                checked={resolvedTheme === "dark"}
                onChange={() =>
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
                className="peer sr-only"
            />

            <Moon className="size-5 text-yellow-400" />
            <Sun className="size-5 text-orange-400" />
            <div className="peer absolute size-5 translate-x-0 rounded-full bg-white transition-all duration-300 peer-checked:ml-1 peer-checked:translate-x-full"></div>
        </label>
    )
}

export default ThemeButton
