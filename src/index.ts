/*
  Supported urls
  --------------
  /
  /posts
  /projects
  /events
  /resume
  /todos
  /lessons

  Url rewrites
  ------------
  Before getting called, paths are rewritten with the rewrite middleware.
  So, /jeswin/posts/hello -> /posts/hello
  with ctx.username = "jeswin"
*/

export default function(host: any) {
  host.register([
    ["/", "GET", home.index],
    /* posts */
    ["/posts", "GET", posts.index],
    ["/posts/date/:date", "GET", posts.getByDate],
    ["/posts/:slug", "GET", posts.get],
    ["/categories/:id", "GET", posts.getCategory],
    /* projects */
    ["/projects", "GET", projects.index],
    /* resume */
    ["/resume", "GET", resume.index]
  ]);
}
