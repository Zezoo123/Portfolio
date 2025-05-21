import Link from 'next/link';

const fakePosts = [
  { id: 'getting-started', title: 'Getting Started with My Projects', date: '2025-05-01' },
  { id: 'ai-in-finance', title: 'How I’m Using AI in DeFi Tools', date: '2025-04-20' },
  { id: 'portfolio-tips', title: 'Building a Tech Portfolio that Gets Noticed', date: '2025-04-10' },
];

export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-gray-400 mb-8 text-center">Coming soon — here’s a glimpse of what I might write about.</p>

        <ul className="space-y-6">
          {fakePosts.map((post) => (
            <li key={post.id} className="border-b border-gray-800 pb-4">
              <Link href={`/blog/${post.id}`} className="text-2xl font-semibold text-blue-400 hover:underline">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
