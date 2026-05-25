"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import { Copy, GitBranch, ExternalLink, Mail } from "lucide-react"

const About = () => {
    return (
        <section className="flex flex-col gap-6">
            <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    안녕하세요, 프론트엔드 개발자&nbsp;
                    <span className="text-primary">김영준</span>입니다.
                </h1>
            </div>
            <div className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <p>
                    작은 아이디어라도 빠르게 구현해 보고, 피드백을 통해 조금씩
                    개선해 나가는 과정을 좋아합니다.
                </p>
                <p>
                    유지보수가 쉽고, 확장 가능하며, 재사용 가능한 코드를
                    작성하기 위해 노력합니다."
                </p>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <p>이메일</p>
                    <Button
                        variant="ghost"
                        onClick={async () => {
                            try {
                                await navigator.clipboard.writeText(
                                    "ruyria@naver.com"
                                )

                                toast.success("이메일 주소가 복사되었습니다.")
                            } catch (err) {
                                toast.error("이메일 주소 복사에 실패했습니다.")
                            }
                        }}
                        className="text-primary"
                    >
                        <Copy />
                        복사하기
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <GitBranch className="size-4" />
                    <p>GitHub</p>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            window.open(
                                "https://github.com/DL-Berkey",
                                "_blank"
                            )
                        }}
                        className="text-primary"
                    >
                        <ExternalLink />
                        바로가기
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default About
