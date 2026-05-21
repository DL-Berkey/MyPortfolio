import About from "@/components/section/About"
import Skill from "@/components/section/Skill"
import Project from "@/components/section/Project"

export default function Page() {
    return (
        <div className="space-y-8 py-14 md:space-y-12">
            <About />
            <Skill />
            <Project />
        </div>
    )
}
