import { getAllDocuments, getDocumentByPermalink } from '../lib/contentlayer';
import Home from '../components/Home';

export default function () {
    const document = getDocumentByPermalink('/');

    if (!document) {
        return;
    }

    const pages = getAllDocuments({ types: ['Page'] });
    const posts = getAllDocuments({ types: ['Post'] });

    return <Home document={document} pages={pages} posts={posts} />
}
