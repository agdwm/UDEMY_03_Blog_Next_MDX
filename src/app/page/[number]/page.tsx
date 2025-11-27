import { notFound } from "next/navigation";

import PostList from "@components/post/PostList";
import PostPagination from "@components/post/PostPagination";
import Container from "@components/ui/Container";

import { getPagination } from "@utils/pagination";

import { allPosts, Post } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props {
  params: {
    number: string;
  };
}

export const metadata = {
  title: "List all posts",
  description: "Describe posts - Generate by create next app",
};

// Generate HTML static pages based on the number of posts
// Next.js pre-generates these HTML pages at build time - SSG (Static Site Generation)
export const generateStaticParams = () => {
  return Array.from({ length: posts.length }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let paginationData;

  try {
    paginationData = getPagination(posts, 2, params.number);
  } catch (error) {
    notFound();
  }

  const { currentPosts: arrayCurrentPosts, totalPages: totalPagesNumber } =
    paginationData;

  return (
    <Container>
      <div className="mt-8 grid gap-6">
        <PostList posts={arrayCurrentPosts} />
        {totalPagesNumber > 1 && (
          <PostPagination
            totalPages={totalPagesNumber}
            currentPage={parseInt(params.number, 10)}
          />
        )}
      </div>
    </Container>
  );
};

export default LayoutPages;
