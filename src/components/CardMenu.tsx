
interface CardMenuProps{
    icon: string
    href?: string
    title: string
}

export function CardMenu({icon, href, title}:CardMenuProps) {
    console.log(href)
    return (
        <div className="bg-gray-color-purple rounded-xl p-4 color-text-gray font-medium max-w-[150px] flex flex-1 flex-col gap-2 cursor-pointer">
            <i className={`${icon} text-2xl color-text-purple`}/>
            <span className="text-xl">{title}</span>
        </div>
    )
}