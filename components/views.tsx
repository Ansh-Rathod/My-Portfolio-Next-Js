function Views({ posts }: { posts: any }) {
  return (
    <div className="max-w-[1000px] m-auto grid grid-cols-2 gap-4">
      {posts
        .sort()
        .slice(1, 5)
        .map((post: any) => (
          <div
            key={post.frontmatter.title}
            className="p-6 border-[1px] border-gray-200 shadow rounded-lg"
          >
            <h1 className="font-normal font-poppins text-[20px] ">
              {post.frontmatter.title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
            <small className="text-gray-500 text-sm mt-2">
              {post.frontmatter.posted_at}
            </small>
          </div>
        ))}
    </div>
  );
}

export default Views;
