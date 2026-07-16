import About from "@/components/section/About"
import Interest from "@/components/section/Interest"
import Skill from "@/components/section/Skill"
import Project from "@/components/section/Project"

export default function Page() {
    return (
        <div className="flex flex-col gap-24 py-10 md:gap-28">
            <About />
            <Interest />
            <Skill />
            <Project />
        </div>
    )
}
