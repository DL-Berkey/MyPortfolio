import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"

import { pretendard } from "@/lib/font"
import Header from "@/components/Header"

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
            className={cn("antialiased", "font-sans", pretendard.className)}
        >
            <body>
                <ThemeProvider>
                    <div className="container mx-auto px-16">
                        <Toaster />
                        <Header />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
