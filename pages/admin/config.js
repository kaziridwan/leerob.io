export default {
  "backend": {
    "name": "github",
    "repo": "kaziridwan/leerob-io"
  },
  "media_folder": "public/static/images",
  "public_folder": "public",
  "collections": [
    {
      "name": "blog",
      "label": "Blogs",
      "folder": "data/blog",
      "fields": [
        {
          "label": "Title",
          "name": "title",
          "widget": "string"
        },
        {
          "label": "Publish Date",
          "name": "publishedAt",
          "widget": "datetime"
        },
        {
          "label": "Summary",
          "name": "summary",
          "widget": "string"
        },
        {
          "label": "Featured Image",
          "name": "image",
          "widget": "image"
        },
        {
          "label": "Body",
          "name": "body",
          "widget": "markdown"
        }
      ]
    }
  ]
}