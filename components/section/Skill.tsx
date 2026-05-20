import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

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
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    기술
                </h2>
                <p className="text-muted-foreground">
                    제가 주로 사용하고 익숙한 기술들입니다.
                </p>
            </div>
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
