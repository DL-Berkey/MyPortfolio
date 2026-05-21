import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"

import { ExternalLink, GitBranchIcon } from "lucide-react"

import SectionTitle from "./SectionTitle"

type ProjectList = {
    title: string
    description: string
    content: string[]
    tags: string[]
    github?: string
    link?: string
}[]

const projectList: ProjectList = [
    {
        title: "바이북",
        description: "(주) 엠에스이씨엠의 요청으로 제작한 웹 서비스입니다.",
        content: [
            "내부 개발 인력이 없는 클라이언트의 의뢰로, 혼자서 기획, 디자인, 개발, 배포한 서비스입니다.",
            "클라이언트 측이 구체적인 디자인·기능 방향을 제시하기 어려워, 기능 단위로 빠르게 개발하고 피드백을 받아 개선하는 방식으로 개발을 진행했습니다.",
            "현재 서비스 런칭을 앞두고 최종 조정 중입니다.",
        ],
        tags: [
            "TypeScript",
            "Next.js",
            "React Query",
            "Tailwind",
            "React Hook Form",
            "Zod",
            "Shadcn",
        ],
        link: "https://bybook.kr/",
    },
]

const Project = () => {
    return (
        <section className="flex flex-col gap-6">
            <SectionTitle
                title="프로젝트"
                description="지금까지 진행해온 주요 프로젝트들입니다."
            />
            <div className="grid gap-6 sm:grid-cols-2">
                {projectList.map((project, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            {project.content && (
                                <div className="text-lg">
                                    {project.content.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="text-xs"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        {(project.github || project.link) && (
                            <CardFooter>
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-2"
                                        asChild
                                    >
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <GitBranchIcon className="h-4 w-4" />
                                            Code
                                        </a>
                                    </Button>
                                )}
                                {project.link && (
                                    <Button size="sm" className="gap-2" asChild>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            바로가기
                                        </a>
                                    </Button>
                                )}
                            </CardFooter>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Project
