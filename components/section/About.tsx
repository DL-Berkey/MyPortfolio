import { Button } from "@/components/ui/button"

import { GitBranch, Mail } from "lucide-react"

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
            </div>
            <div className="flex gap-4">
                <Button variant="outline" className="gap-2">
                    <Mail className="size-4" />
                    이메일
                </Button>
                <Button variant="outline" className="gap-2">
                    <GitBranch className="size-4" />
                    GitHub
                </Button>
            </div>
        </section>
    )
}

export default About
