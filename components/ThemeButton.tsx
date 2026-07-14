"use client"

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

const ThemeButton = ({ className }: { className?: string }) => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button
            type="button"
            aria-label="테마 전환"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className={cn(
                "inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-muted",
                className
            )}
        >
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
        </button>
    )
}

export default ThemeButton
