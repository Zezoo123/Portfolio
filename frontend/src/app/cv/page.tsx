export default function CV() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Curriculum Vitae</h1>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Education</h2>
          <div>
            <p className="font-semibold">BSc Computer Science – University of Manchester</p>
            <p className="text-sm text-gray-400">2022 – 2025</p>
            <p className="text-gray-300 mt-1">Expected First Class. Relevant modules: AI, ML, Blockchain, Cognitive Robotics.</p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Experience</h2>

          <div className="mb-4">
            <p className="font-semibold">Flutter Developer – Harf Information Technology</p>
            <p className="text-sm text-gray-400">Jun 2023 – Sep 2023</p>
            <p className="text-gray-300 mt-1">
              Led a team of junior interns and developed mobile applications using Flutter. Delivered 3 apps to production.
            </p>
          </div>

          <div>
            <p className="font-semibold">Blockchain + ML Projects</p>
            <p className="text-sm text-gray-400">Ongoing</p>
            <p className="text-gray-300 mt-1">
              Building a DeFi arbitrage and price prediction tool using LSTM and Uniswap data. Integrated multiple APIs and backtesting strategies.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Skills</h2>
          <ul className="list-disc pl-5 text-gray-300">
            <li>Languages: Python, Java, C++, Solidity, Dart, JavaScript/TypeScript</li>
            <li>Frameworks: FastAPI, Flask, React, Flutter, Node.js, Spring</li>
            <li>Tools: Git, Docker, MongoDB, PostgreSQL, Firebase</li>
          </ul>
        </section>

        {/* Contact / Download */}
        <div className="text-center mt-10">
          <a
            href="/zeyad_cv.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
