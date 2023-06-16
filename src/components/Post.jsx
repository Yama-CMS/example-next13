import Sidebar from "./Base/Sidebar";

export default function Post({ document, pages }) {
    return (
        <>
        <Sidebar pages={pages} />
        <main>
            <h1>{document.title}</h1>
            <img
                className="media-desktop" 
                src={document.media?.formats?.desktop?.url ?? "https://placehold.co/800?text=No+media+found&font=roboto"} 
                alt={document.media?.alt}
            />
            {document.body?.html && 
                <div 
                    className="content"
                    dangerouslySetInnerHTML={{ __html: document.body.html }}
                />
            }
        </main>
        </>
    );
}