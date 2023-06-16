import { getAllDocuments, getDocumentByPermalink } from '../../lib/contentlayer';
import { createElement } from "react";
import Page from '../../components/Page';
import Post from '../../components/Post'

export default function ({ params }) {
    const document = getDocumentByPermalink(params.permalink);

    if (!document) {
        return;
    }

    const components = { Page, Post };
    const pages = getAllDocuments({ types: ['Page'] });

    return createElement(components[document.type], { document: document, pages: pages })
}

export async function generateStaticParams() {
    return getAllDocuments({ excludedPermalinks: ['/'] }).map((document) => createStaticParams(document));
}

function createStaticParams(document) {
    return {
        permalink: document.permalink.split('/').slice(1)
    }
};
