export function ProjectCard({name, image, description}) {
    return (
        <div className="bg-gray-400 rounded-2xl w-64 p-4">
            <img src={image} className=" rounded-xl" />
            <h1 className="font-semibold text-2xl py-2">{name}</h1>
            <p>{description}</p>
        </div>
    )
}