interface ServiceDescriptionProps {
    description: string;
}
export default function ServiceDescription( {description}:ServiceDescriptionProps ) {
    return (
        <div>
            <p className="m-2 text-center leading-6 text-sm md:mx-36 lg:mx-52 lg:text-base">{description}</p>
        </div>
    )
}