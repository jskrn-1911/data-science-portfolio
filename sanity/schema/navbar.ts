import { defineField, defineType } from "sanity";

const navbar = defineType({
    name: "navbar",
    title: "Navbar",
    type: "document",
    fields: [
        defineField({
            name: "logoText",
            title: "Logo Text",
            type: "string",
            description: "Text or heading for logo",
        }),
        defineField({
            name: "menuLinks",
            title: "Menu Links",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "menuLink",
                    fields: [
                        defineField({
                            name: "text",
                            title: "Link Text",
                            type: "string",
                        }),
                        defineField({
                            name: "url",
                            title: "Link URL",
                            type: "string",
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "socialLink",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            description: "Example: Twitter, LinkedIn, Github",
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "string",
                            description: "Enter icon name to use on frontend (e.g. github, linkedin)",
                        }),
                        defineField({
                            name: "href",
                            title: "Social Link URL",
                            type: "url",
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "hireMeLink",
            title: "Hire Me Button",
            type: "object",
            fields: [
                defineField({
                    name: "text",
                    title: "Button Text",
                    type: "string",
                    description: "Text displayed on the button (e.g. 'Hire Me')",
                }),
                defineField({
                    name: "link",
                    title: "Link URL",
                    type: "string",
                    description: "URL to scroll to or navigate (e.g. #contact or /contact)",
                }),
            ],
        }),

    ],
});

export default navbar;