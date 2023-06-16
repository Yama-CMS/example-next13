import List from './Home/List';
import Sidebar from './Base/Sidebar';

export default function Home({ document, pages, posts }) {
    return (
        <>
            <Sidebar pages={pages} />
            <main>
                <h1>{document.title}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: document.body?.html }} />
                <section className="wrapper posts">
                    <h2>List of posts</h2>
                    <List documents={posts} />
                </section>
            </main>
        </>
    );
}
