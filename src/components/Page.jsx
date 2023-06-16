import Sidebar from "./Base/Sidebar";

export default function Page({ document, pages }) {
    return (
        <>
        <Sidebar pages={pages} />
        <main>
            <h1>{document.title}</h1>
            {document?.excerpt && 
                <p>{document.excerpt}</p>
            }
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
