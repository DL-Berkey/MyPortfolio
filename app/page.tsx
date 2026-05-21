import About from "@/components/section/About"
import Skills from "@/components/section/Skill"
import Projects from "@/components/section/Project"

export default function Page() {
    return (
        <div className="space-y-8 py-14 md:space-y-12">
            <About />
            <Skills />
            <Projects />
        </div>
    )
}
