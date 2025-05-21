import { notFound } from 'next/navigation';

const fakePosts: Record<string, { title: string; content: string }> = {
  'getting-started': {
    title: 'Getting Started with My Projects',
    content: 'This is a placeholder post. Soon you’ll see real content about how I plan, build, and deploy my work.',
  },
  'ai-in-finance': {
    title: 'How I’m Using AI in DeFi Tools',
    content: 'Placeholder text about AI, LSTMs, price prediction models, and trading bots.',
  },
  'portfolio-tips': {
    title: 'Building a Tech Portfolio that Gets Noticed',
    content: 'Some placeholder advice on showing off your skills through clean UI, real projects, and good writing.',
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = fakePosts[params.slug];

  if (!post) return notFound();

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300">{post.content}</p>
      </div>
    </div>
  );
}
