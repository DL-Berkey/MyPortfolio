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
            "(주)주한원의 웹 서비스를 맡아 서비스 오픈 준비부터 신규 기능 개발, 서버 유지보수까지 전반적으로 담당했습니다.",
        content: [
            "캔실장은 오픈 전까지 외주 개발자가 개발을 진행하던 서비스였고, 회사가 오픈을 준비하는 시점에 채용되어 개발을 이어받았습니다. 가장 먼저 한 일은 추가 기능들의 요구사항과 실현 가능성을 확인하기 위해 기존 코드베이스를 검토하는 것이었습니다. 검토 결과 기존 Express 기반 프로젝트는 기능을 추가할수록 수정 범위가 커지고, 변경이 필요한 위치를 빠르게 파악하기 어려운 구조였습니다. 서비스 오픈 이후에도 지속적인 기능 개발이 예정되어 있었기 때문에 기존 구조를 유지하기보다 먼저 프로젝트 구조를 개선하는 것이 필요하다고 판단했습니다. 서비스 오픈 일정과 기술 숙련도를 고려해 Next.js를 선택했고, 기존 어플리케이션을 Next.js로 재구성했습니다.",
            "Next.js로 재구성하는 과정에서 React 컴포넌트 구조를 새롭게 설계하고 반복되는 로직을 Custom Hook과 공통 유틸리티로 추상화했습니다. 회원 시스템, 랭킹, 피드, AI 이미지 생성 등 대부분의 기능이 서버 상태 중심으로 동작했기 때문에 TanStack Query를 도입해 서버 상태를 관리했습니다. 또한 React Context API를 활용해 공유되는 UI 상태를 관리하고 Props Drilling을 최소화했습니다.",
            "서비스가 안정화된 이후에는 서비스의 핵심 비즈니스 흐름을 고려해 입찰 관리 시스템과 상담 관리 시스템을 우선 개발했습니다. 이후 관리자 페이지 실시간 통계 기능과 Telegram Bot 알림 기능을 구현해 운영자가 사용자 요청에 빠르게 대응할 수 있는 환경을 구축했으며, 서버 구조 개선과 유지보수도 함께 담당했습니다.",
            "개선된 구조 덕분에 서비스 오픈 이후에도 신규 기능을 빠르게 추가할 수 있었습니다. 서비스는 오픈 첫 달(2026년 6월)에 방문자 12,335명을 기록했습니다.",
        ],
        contributions: [
            "Express 프로젝트를 Next.js로 재구성 및 구조 개선",
            "React 컴포넌트 구조 설계 및 Custom Hook·공통 유틸리티를 활용한 로직 추상화",
            "TanStack Query를 활용한 서버 상태 관리 및 캐싱 적용",
            "React Context API를 활용한 UI 상태 관리 및 Props Drilling 최소화",
            "입찰 관리 시스템 및 상담 관리 시스템 개발",
            "관리자 페이지 실시간 통계 및 Telegram Bot 알림 기능 개발",
            "서버 구조 개선 및 유지보수",
        ],
        tags: ["TypeScript", "Next.js", "Axios", "TanStack Query", "Tailwind"],
        link: "https://www.cansiljang.co.kr/",
    },
    {
        title: "상세한장",
        description:
            "온라인 쇼핑몰 운영자가 상품 상세이미지를 제작하는 과정에서 발생하는 불편함을 개선하기 위한 운영툴을 개발했습니다.",
        content: [
            "기존에는 상품 상세이미지를 제작하기 위해 외부 디자인 툴을 사용해야 했지만, 운영자마다 숙련도가 달랐고 사람에 따라 결과물의 형태가 달라지는 문제가 있었습니다. 이를 개선하기 위해 상품 상세이미지의 구조를 섹션 단위로 정의하고 관리하는 방식을 설계했습니다.",
            "각 섹션은 이미지와 텍스트로 구성되며, 여러 섹션을 조합해 하나의 상세이미지를 생성할 수 있도록 구현했습니다. 덕분에 디자인 경험이 부족한 운영자도 정해진 구조 안에서 일관된 형태의 상세이미지를 제작할 수 있게 됐습니다.",
            "또한 운영 과정에서 발생하는 이미지 수정 작업을 효율화하기 위해 AI 기반 이미지 수정 및 변형 기능을 추가했습니다. 별도의 디자인 툴 없이 운영툴 내에서 생성된 이미지를 수정할 수 있도록 구현했으며, 프로젝트 단위로 작업을 관리하고 사용자가 작업 내용을 저장할 수 있는 버전 관리 기능을 더해 특정 시점의 작업 상태로 복원할 수 있게 했습니다.",
        ],
        contributions: [
            "상품 상세이미지 제작 과정 분석 및 섹션 단위 데이터 구조 설계",
            "이미지·텍스트 조합 상세이미지 생성 기능 개발",
            "AI 기반 이미지 수정 및 변형 기능 구현",
            "프로젝트 단위 작업 관리 구조 설계",
            "작업 저장 및 이전 상태 복원 기능 개발",
        ],
        tags: ["TypeScript", "Electron"],
    },
    {
        title: "바이북",
        description: "(주)엠에스이씨엠의 요청으로 제작한 웹 서비스입니다.",
        content: [
            "내부 개발 인력이 없는 클라이언트의 의뢰로, 혼자서 기획, 디자인, 개발, 배포한 서비스입니다.",
            "클라이언트 측이 구체적인 디자인·기능 방향을 제시하기 어려워, 기능 단위로 빠르게 개발하고 피드백을 받아 개선하는 방식으로 진행했습니다.",
        ],
        tags: [
            "TypeScript",
            "Next.js",
            "TanStack Query",
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
