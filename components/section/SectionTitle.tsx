type Props = {
    title: string
    description: string
}

const SectionTitle = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
                <span className="h-7 w-1.5 rounded-full bg-primary" />
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {title}
                </h2>
            </div>
            <p className="text-base text-muted-foreground">{description}</p>
        </div>
    )
}

export default SectionTitle
