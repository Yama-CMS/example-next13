import Link from "next/link";

function List({ documents }) {
    return (
        <>
            <ul>
                {documents?.map((document, index) => (
                    <li key={index}>
                        <img 
                            className="thumb" 
                            src={document?.media?.formats?.thumb?.url ?? "https://placehold.co/40x40"} 
                            alt={document?.media?.alt} 
                        />
                        <Link href={document.permalink}>{document.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default function Sidebar({ pages }) {
    return (
        <nav>
            <List documents={pages}/>
        </nav>
    );
}
