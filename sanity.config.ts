import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schema } from "./sanity/schema";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { structureTool } from "sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'nzqdutte'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    visionTool(),
    simplerColorInput(),
  ],
});
