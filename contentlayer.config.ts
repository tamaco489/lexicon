import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      required: true,
      default: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    author: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath}`, // blog/[slug]
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => `${doc._raw.flattenedPath.split('/').splice(1)[0]}`, // [slug]
    },
  },
}));

const config = makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
});

export default config;
