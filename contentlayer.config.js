import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype/lib/index.js'
import rehypeStringify from 'rehype-stringify'
import rehypeRaw from 'rehype-raw'
import remarkDefinitionList, { defListHastHandlers } from 'remark-definition-list'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const fields = {
    locale: {
        type: 'string',
        required: true,
    },
    slug: {
        type: 'string',
        required: true,
    },
    permalink: {
        type: 'string',
        required: true,
    },
    reference: {
        type: 'string',
        required: true
    },
    parent: {
        type: 'string',
        default: null,
        required: false,
    },
    date: {
        type: 'date',
        required: true,
    },
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        default: null,
        required: false,
    },
    excerpt: {
        type: 'string',
        default: null,
        required: false,
    },
    tags: {
        type: 'list',
        of: { type: 'string' },
        default: [],
        required: false,
    },
    media: {
        type: 'json',
        default: null,
        required: false,
    },
    catalogs: {
        type: 'json',
        default: null,
        required: false,
    }
}

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: `pages/**/*.md`,
    fields: fields,
}))

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `posts/**/*.md`,
    fields: {
        ...fields,
        category: {
            type: 'list',
            of: { type: 'string' },
            default: [],
            required: false,
        }
    }
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Page, Post],
    markdown: (builder) => {
        builder.use(remarkParse)
        builder.use(remarkDefinitionList)
        builder.use(remarkRehype, { allowDangerousHtml: true, handlers: { ...defListHastHandlers } })
        builder.use(rehypeRaw)
        builder.use(rehypeStringify)
        builder.use(remarkGfm)
        builder.use(remarkFrontmatter)
    }
})
