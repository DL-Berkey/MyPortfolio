"use client"

import { useEffect, useState } from "react"

import ThemeButton from "./ThemeButton"
import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"

const { navList, name } = siteConfig

const Navbar = () => {
    const [active, setActive] = useState<string>(navList[0].id)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: "-45% 0px -50% 0px" }
        )

        navList.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
                <a
                    href="#about"
                    className="text-base font-bold tracking-tight transition-colors hover:text-primary"
                >
                    {name}
                </a>
                <div className="flex items-center gap-1 sm:gap-2">
                    <nav className="hidden sm:block">
                        <ul className="flex items-center gap-1">
                            {navList.map(({ id, label }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className={cn(
                                            "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                            active === id
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ThemeButton />
                </div>
            </div>
        </header>
    )
}

export default Navbar
