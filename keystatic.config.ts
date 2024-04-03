import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "github",
        repo: {
            owner: "rahmatardiansyah",
            name: "test",
        },
    },
    collections: {
        blog: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/blog/*",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
                pubDate: fields.date({
                    label: "Event date",
                    description: "The date of the event",
                }),
                description: fields.text({
                    label: "Description",
                    multiline: true,
                }),
                heroImage: fields.url({
                    label: "Image Url",
                    description: "The website URL",
                }),
                content: fields.mdx({
                    label: "Rich text",
                }),
            },
        }),
    },
});
