interface HeadingTextProps {
    header: string;
}

export default function Heading({header} : HeadingTextProps) {
    return(
        <>
            <h1 className="font-bold text-center uppercase m-3 text-4xl leading-12 md:leading-18 md:text-6xl">{header}</h1>
        </>
    )
}