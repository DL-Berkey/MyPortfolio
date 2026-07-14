import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

import { pretendard } from "@/lib/font"
import Navbar from "@/components/Navbar"

export const metadata = {
    title: "김영준 | 프론트엔드 개발자",
    description: "김영준의 포트폴리오",
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html
            lang="ko"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                "font-sans",
                pretendard.variable,
                pretendard.className
            )}
        >
            <body>
                <ThemeProvider>
                    <Toaster />
                    <Navbar />
                    <main className="mx-auto max-w-3xl px-6">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
