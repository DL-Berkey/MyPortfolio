import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { pretendard } from "@/lib/font"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="ko"
            suppressHydrationWarning
            className={cn("antialiased", "font-sans", pretendard.className)}
        >
            <body>
                <ThemeProvider>
                    <div className="container mx-auto">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    )
}
