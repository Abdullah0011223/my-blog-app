import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to My Blogs!</h1>
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Let’s See the Blog
          </button>
        </Link>
      </div>
    </div>
  );
}
