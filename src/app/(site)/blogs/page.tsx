// COMMENTED OUT - Page not being used
// import SingleBlog from "@/components/Blog/SingleBlog";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import { getAllPosts } from "@/utils/markdown";
// import { generateMetadata, pageSEOConfigs } from "@/utils/metadata";

// export const metadata = generateMetadata(pageSEOConfigs.blog);

// const BlogPage = () => {
//   const posts = getAllPosts([
//     "title",
//     "date",
//     "excerpt",
//     "coverImage",
//     "slug",
//   ]);

//   return (
//     <main>
//       <Breadcrumb pageName="Blog Grids" />

//       <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap justify-center">
//             {posts.map((post, i) => (
//               <SingleBlog key={i} blog={post} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BlogPage;
