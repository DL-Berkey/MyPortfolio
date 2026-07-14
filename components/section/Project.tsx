import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"

import { ExternalLink, GitBranchIcon } from "lucide-react"

import SectionTitle from "./SectionTitle"

type ProjectList = {
    title: string
    description: string
    content: string[]
    contributions?: string[]
    tags: string[]
    github?: string
    link?: string
}[]

const projectList: ProjectList = [
    {
        title: "캔실장",
        description:
            "(주)주한원의 웹 서비스 개발을 담당하며 서비스 오픈 준비부터 신규 기능 개발, 서버 유지보수까지 전반적인 개발을 진행했습니다.",
        content: [
            "가장 먼저 한 일은 추가 기능들의 요구사항과 실현 가능성을 확인하기 위해 기존 코드베이스를 검토하는 것이었습니다. 검토 결과 기존 Express 기반 프로젝트는 기능을 추가할수록 수정 범위가 커지고, 변경이 필요한 위치를 빠르게 파악하기 어려운 구조였습니다. 서비스 오픈 이후에도 지속적인 기능 개발이 예정되어 있었기 때문에 기존 구조를 유지하기보다 먼저 프로젝트 구조를 개선하는 것이 필요하다고 판단했습니다. 서비스 오픈 일정과 기술 숙련도를 고려해 Next.js를 선택했고, 기존 애플리케이션을 Next.js 기반으로 재구성했습니다.",
            "Next.js 기반으로 재구성하는 과정에서 React 기반 컴포넌트 구조를 새롭게 설계하고 반복되는 로직을 Custom Hook과 공통 유틸리티로 추상화했습니다. 회원 시스템, 랭킹, 피드, AI 이미지 생성 등 대부분의 기능이 서버 상태를 기반으로 동작했기 때문에 TanStack Query를 도입해 서버 상태를 관리하고 클라이언트 캐싱을 적용했습니다. 또한 React Context API를 활용해 공유되는 UI 상태를 관리하고 Props Drilling을 최소화했습니다.",
            "서비스가 안정화된 이후에는 서비스의 핵심 비즈니스 흐름을 고려해 입찰 관리 시스템과 상담 관리 시스템을 우선 개발했습니다. 이후 관리자 페이지 실시간 통계 기능과 Telegram Bot 기반 알림 기능을 구현해 운영자가 사용자 요청에 빠르게 대응할 수 있는 환경을 구축했으며, 서버 구조 개선과 유지보수도 함께 담당했습니다.",
            "개선된 구조를 기반으로 서비스 오픈 이후에도 신규 기능을 빠르게 추가하고 개선할 수 있었으며, 서비스 오픈 첫 달(2026년 6월)에는 누적 방문자 수 12,335명을 기록했습니다.",
        ],
        contributions: [
            "Express 기반 SSR 프로젝트를 Next.js 기반으로 재구성 및 구조 개선",
            "React 기반 컴포넌트 구조 설계 및 Custom Hook·공통 유틸리티를 활용한 로직 추상화",
            "TanStack Query 기반 서버 상태 관리 및 클라이언트 캐싱 적용",
            "React Context API를 활용한 UI 상태 관리 및 Props Drilling 최소화",
            "입찰 관리 시스템 및 상담 관리 시스템 개발",
            "관리자 페이지 실시간 통계 및 Telegram Bot 기반 알림 기능 개발",
            "서버 구조 개선 및 유지보수",
        ],
        tags: ["TypeScript", "Next.js", "Axios", "React Query", "Tailwind"],
    },
    {
        title: "바이북",
        description: "(주) 엠에스이씨엠의 요청으로 제작한 웹 서비스입니다.",
        content: [
            "내부 개발 인력이 없는 클라이언트의 의뢰로, 혼자서 기획, 디자인, 개발, 배포한 서비스입니다.",
            "클라이언트 측이 구체적인 디자인·기능 방향을 제시하기 어려워, 기능 단위로 빠르게 개발하고 피드백을 받아 개선하는 방식으로 개발을 진행했습니다.",
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
        <section id="project" className="scroll-mt-24">
            <SectionTitle
                title="프로젝트"
                description="지금까지 진행해온 주요 프로젝트들입니다."
            />
            <div className="mt-8 flex flex-col gap-6">
                {projectList.map((project, idx) => (
                    <Card key={idx} className="border shadow-sm ring-0">
                        <CardHeader>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="leading-relaxed font-medium text-foreground/80">
                                        {project.description}
                                    </p>
                                </div>
                                {(project.github || project.link) && (
                                    <div className="flex shrink-0 gap-2">
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
                                            <Button
                                                size="sm"
                                                className="gap-2"
                                                asChild
                                            >
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
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-foreground">
                                {project.content.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                            {project.contributions && (
                                <div className="flex flex-col gap-3 border-t pt-4">
                                    <p className="text-base font-bold text-foreground">
                                        주요 기여 사항
                                    </p>
                                    <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px] leading-relaxed text-foreground marker:text-primary">
                                        {project.contributions.map(
                                            (item, i) => (
                                                <li key={i}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                            <div className="flex flex-wrap gap-2 border-t pt-4">
                                {project.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="border border-border/60 px-2.5 py-1 text-xs font-semibold"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Project
