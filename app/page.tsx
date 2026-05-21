import About from "@/components/section/About"
import Skill from "@/components/section/Skill"
import Project from "@/components/section/Project"

export default function Page() {
    return (
        <main className="space-y-8 py-10 md:space-y-12">
            <About />
            <Skill />
            <Project />
        </main>
    )
}
