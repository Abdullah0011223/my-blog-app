const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side (Image) */}
        <div className="flex-1">
          <img
            src="https://dynamic-blog-gamma.vercel.app/_next/image?url=%2Fdesk.webp&w=828&q=75"  // Replace with your image path
            alt="About Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (Content) */}
        <div className="flex-1 md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg font-medium mb-4">
            Hey, I&apos;m a Senior Student at GIAIC. I&apos;m learning and enjoy working with Next.js-15, 
            TypeScript or Tailwind and crafting beautiful front-end experiences.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-4">
            This Dynamic Blog is built with Dive deeper into React and Next.js components, 
            focusing on state management, props, and routing.
          </p>

          {/* Bullet Points Section */}
          <ul className="list-disc pl-6 text-gray-600 text-lg">
            <li>Advanced component concepts (state, props)</li>
            <li>Conditional rendering</li>
            <li>Working with lists and keys</li>
            <li>Dynamic routing in Next.js</li>
            <li>Static vs. dynamic pages</li>
            <li>API routes in Next.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
