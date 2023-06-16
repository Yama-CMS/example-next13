import { isType, allDocuments } from 'contentlayer/generated';

export function getAllDocuments({ types, excludedPermalinks, sort } = {}) {
    types = types ?? ['Page', 'Post'];
    excludedPermalinks = excludedPermalinks ?? [];
    sort = sort ?? sortByDate;

    return allDocuments
        .filter(isType(types))
        .filter((document) => !excludedPermalinks.includes(document.permalink))
        .sort(sort)
        ;
}

export function getDocumentByPermalink(permalink) {
    if (Array.isArray(permalink)) {
        permalink = permalink.join('/');
    }

    if (permalink.charAt(0) != '/') {
        permalink = `/${permalink}`;
    }

    return allDocuments.find(document => document.permalink === permalink);
}

export function sortByDate(a, b) {
    return a?.date > b?.date ? 1 : -1;
}