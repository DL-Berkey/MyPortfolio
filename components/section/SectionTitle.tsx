type Props = {
    title: string
    description: string
}

const SectionTitle = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

export default SectionTitle
