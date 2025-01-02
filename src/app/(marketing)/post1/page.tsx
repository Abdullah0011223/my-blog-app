"use client"

import { useState } from 'react';

export default function PostPage() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Post Content */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://dynamic-blog-gamma.vercel.app/_next/image?url=%2Fvirtual-tour.webp&w=640&q=75" // Replace with your image URL
              alt="Post Image"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Photography</h1>
            <p className="text-lg text-gray-700 mb-4">
            Photographs are often the best souvenir of your travels. But the worst thing is when they come out blurry, blown out, or just not all that exciting to look at. If you want to learn how to take better pictures on your travels around the world, this article is packed with everything you need to improve your photography skills..
            </p>
            
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>

          <div className="mb-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Write your comment here..."
            ></textarea>
          </div>
          <button
            onClick={handleCommentSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Post Comment
          </button>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div key={index} className="border-b py-2">
                <p className="text-gray-700">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
