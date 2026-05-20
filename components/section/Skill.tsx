import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

import SectionTitle from "./SectionTitle"

const skillData = [
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
            "recoil",
            "Zustand",
            "TanstackQuery",
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

const Skills = () => {
    return (
        <section className="flex flex-col gap-6">
            <SectionTitle
                title="기술"
                description=" 제가 주로 사용하고 익숙한 기술들입니다."
            />
            <div className="grid gap-4 md:grid-cols-2">
                {skillData.map((category, idx) => (
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{category.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-x-2">
                            {category.skillList.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="px-3 py-1 text-sm font-medium"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Skills
