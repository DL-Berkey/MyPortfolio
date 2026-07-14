import About from "@/components/section/About"
import Skill from "@/components/section/Skill"
import Project from "@/components/section/Project"

export default function Page() {
    return (
        <div className="flex flex-col gap-24 py-10 md:gap-28">
            <About />
            <Skill />
            <Project />
        </div>
    )
}
