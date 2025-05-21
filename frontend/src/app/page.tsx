export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold tracking-tight text-white mb-4">Hi, I'm Zeyad 👋</h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-xl">
        Welcome to my futuristic personal site — a hub for my work, thoughts, and contact info.
      </p>
      <nav className="space-x-4">
        <a href="/cv" className="text-blue-400 hover:underline">CV</a>
        <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
        <a href="/blog" className="text-blue-400 hover:underline">Blog</a>
      </nav>
    </div>
  );
}
