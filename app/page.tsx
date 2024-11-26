import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Howdy!
      </h1>
      <p className="mb-4">
        {`I'm a software developer, cat dad, and a nerd. Welcome! Feel free to check out my blog and leave any thoughts you have.`}
      </p>
      <p className="mb-4">
        {`I suck at communicating, so this site is a way for me to hopefully get better by actually blogging.`}
      </p>
      <p className="mb-4">
        {`I've had this for awhile, but have mostly focused on the code of the site, which helps no one. In the past, I used `}
        <a href="https://www.gatsbyjs.com/">gatsby.js</a>
        {` to create everything, but honestly that was `}
        <em>way</em>
        {` more complex than anything I needed. A static site created with `}
        <a href="https://jekyllrb.com/">jekyll</a>
        {` deployed on top of `}
        <a href="https://www.netlify.com/">netlify</a>
        {` covers everything I need. So, I can focus less on something that no one sees and more on something that people may actually read.`}
      </p>
      <div className="my-8">
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
          Blog Posts
        </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
