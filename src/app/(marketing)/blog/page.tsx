import Link from 'next/link';
import { posts } from '../../utils/api/post';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Blog</h1>
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Center Image (Huge, Prominent) */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 md:w-2/3 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800">{posts[2].title}</h2>
          <img
            src={posts[1].image}
            alt={posts[1].title}
            className="mt-4 rounded-lg"
            width={1200}
            height={800}
          />
          <p className="mt-4 text-gray-600">{posts[2].content}</p>
          <div className="mt-4"></div>
          <div className="mt-4">
            <Link
              href={`/about`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Left Post (Larger, same size as center) */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 md:w-2/3 lg:w-2/3">
          <Link href={`/post1`}>
            <h2 className="text-2xl font-semibold text-gray-800">{posts[0].title}</h2>
            <img
              src={posts[0].image}
              alt={posts[0].title}
              className="mt-4 rounded-lg"
              width={1200}
              height={800}
            />
          </Link>
          <p className="mt-4 text-gray-600">{posts[0].content}</p>
          <div className="mt-4">
            <Link
              href={`/post1`} // Make sure this matches the post route
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Right Post (Larger, same size as center) */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 md:w-2/3 lg:w-2/3">
          <Link href={`/post2`}>
            <h2 className="text-2xl font-semibold text-gray-800">{posts[1].title}</h2>
            <img
              src={posts[2].image}
              alt={posts[2].title}
              className="mt-4 rounded-lg"
              width={1200}
              height={800}
            />
          </Link>
          <p className="mt-4 text-gray-600">{posts[1].content}</p>
          <div className="mt-4">
            <Link
              href={`/post2`} // Make sure this matches the post route
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
