import { Badge } from "../ui/badge"

import SectionTitle from "./SectionTitle"

const skillDataList = [
    {
        title: "언어",
        skillList: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
        title: "프론트엔드",
        skillList: [
            "React",
            "Next.js",
            "Tailwind",
            "Recoil",
            "Zustand",
            "TanStack Query",
            "shadcn",
        ],
    },
    {
        title: "백엔드",
        skillList: ["Express", "Prisma"],
    },
    {
        title: "기타",
        skillList: ["Git", "GitHub", "Vercel", "Supabase"],
    },
]

const Skill = () => {
    return (
        <section id="skill" className="scroll-mt-24">
            <SectionTitle
                title="기술"
                description="제가 주로 사용하고 익숙한 기술들입니다."
            />
            <div className="mt-8 flex flex-col divide-y divide-border">
                {skillDataList.map((category, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col gap-3 py-5 first:pt-0 sm:flex-row sm:items-start sm:gap-8"
                    >
                        <div className="flex h-5 items-center gap-2 sm:w-32 sm:shrink-0">
                            <span className="size-1.5 rounded-full bg-primary" />
                            <h3 className="font-bold">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skillList.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="border border-border/60 px-3 py-1 text-sm font-semibold"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill
