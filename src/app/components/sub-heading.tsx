interface SubHeadingTextProps {
    subheader: string;
}

export default function SubHeading({subheader} : SubHeadingTextProps) {
    return(
        <>
            <h1 className="font-bold text-center uppercase m-1 text-3xl md:text-4xl leading-12">{subheader}</h1>
        </>
    )
}