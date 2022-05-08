import useInfiniteScroll from "@src/hooks/useInfiniteScroll";
import React, { FC } from "react";
import PostItem from "../PostItem/PostItem";

interface IProps {
	postList: any;
}

const PostList: FC<IProps> = ({ postList }) => {
	return (
		<div>
			{postList.map(({ node: { id, frontmatter } }: any) => (
				<PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
			))}
		</div>
	);
};

export default PostList;

// <section ref={containerRef} className="relative rounded-lg m-auto ">
// 	{postList.map((posting, idx: number) => {
// 		console.log("posting?", posting);
// 		return (
// 			<article
// 				className="bg-white cursor-pointer flex gap-4 border rounded shadow-sm p-4 my-4 transition hover:backdrop-opacity-10 "
// 				key={idx}
// 			>
// 				<GatsbyImage
// 					image={
// 						posting.node.frontmatter.thumbnail.childImageSharp
// 							.gatsbyImageData
// 					}
// 					alt="Gatsby Image"
// 					className="w-[30%] h-[200px] object-cover rounded-md"
// 				/>
// 				<div className="w-full">
// 					<div className="h-fit flex justify-between items-center">
// 						<h1 className=" text-2xl  font-bold">
// 							{posting.node.frontmatter.title}
// 						</h1>
// 						<p className="text-text-light">
// 							{posting.node.frontmatter.date}
// 						</p>
// 					</div>
// 					<div>
// 						<p className="text-sm my-2">
// 							{posting.node.frontmatter.summary}
// 						</p>
// 						<p
// 							// className="text-sm"
// 							dangerouslySetInnerHTML={{ __html: posting.node?.html }}
// 							//dangerouslySetInnerHTML 블로그 정리하기!
// 						/>
// 					</div>
// 				</div>
// 			</article>
// 		);
// 	})}
// 	{/* <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 absolute" /> */}
// </section>
