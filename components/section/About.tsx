"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"
import { toast } from "sonner"

import { Copy, GitBranch } from "lucide-react"

const About = () => {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(siteConfig.email)
            toast.success("이메일 주소가 복사되었습니다.")
        } catch {
            toast.error("이메일 주소 복사에 실패했습니다.")
        }
    }

    return (
        <section id="about" className="flex scroll-mt-20 flex-col gap-8">
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl leading-[1.15] font-extrabold tracking-tight break-keep sm:text-6xl">
                    안녕하세요,
                    <br />
                    프론트엔드 개발자
                    <br />
                    <span className="text-primary">{siteConfig.name}</span>
                    입니다.
                </h1>
                <div className="flex max-w-xl flex-col gap-3 text-base leading-relaxed break-keep text-foreground sm:text-lg">
                    <p>
                        작은 아이디어라도 빠르게 구현해 보고, 피드백을 받아
                        조금씩 개선해 나가는 과정을 좋아합니다.
                    </p>
                    <p>
                        코드는 간단하게, 구조는 명확하게 만들려고 노력합니다.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
                <Button onClick={copyEmail} className="gap-2">
                    <Copy className="size-4" />
                    이메일 복사
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                    <a
                        href={siteConfig.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitBranch className="size-4" />
                        GitHub
                    </a>
                </Button>
            </div>
        </section>
    )
}

export default About
