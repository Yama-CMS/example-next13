import Link from "next/link";

function Excerpt({document}) {
    return (
        <div className="excerpt-wrapper">
            <span className="excerpt">{document.excerpt}</span>
        </div>
    )
}

export default function List({ documents }) {
    return (
        <ul>
            {documents?.map((document, index) => (
                <li key={index}>
                    <img
                        className="thumb" 
                        src={document?.media?.formats?.thumb?.url ?? "https://placehold.co/600?text=No+media+found&font=roboto"} 
                        alt={document?.media?.alt} 
                    />
                    <div className="info">
                        <span className="title">{document.title}</span>
                        {document?.excerpt && 
                            <Excerpt document={document} />
                        }
                    </div>
                    <Link href={document.permalink} />
                </li>
            ))}
        </ul>
    );
}