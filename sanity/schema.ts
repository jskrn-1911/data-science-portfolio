import { type SchemaTypeDefinition } from 'sanity'
import navbar from './schema/navbar'
import hero from './schema/hero'
import aboutMe from './schema/aboutMe'
import project from './schema/project'
import blogPost from './schema/blogPost'
import service from './schema/service'
import faq from './schema/faq'
import experience from './schema/experience'
import education from './schema/education'
import homePage from './schema/homepage'
import portfolioPage from './schema/portfolioPage'
import blogsPage from './schema/blogsPage'
import contactPage from './schema/contactPage'
import footer from './schema/footer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navbar,
    hero,
    aboutMe,
    project,
    blogPost,
    service,
    faq,
    experience,
    education,
    homePage,
    portfolioPage,
    blogsPage,
    contactPage,
    footer,
  ],
}
