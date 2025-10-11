import Link from "next/link";

const tools = [
  {
    name: "JSON Formatter",
    description: "Beautify and validate JSON instantly.",
    slug: "json-formatter",
    emoji: "🧩",
  },
  {
    name: "UUID Generator",
    description: "Generate unique identifiers effortlessly.",
    slug: "uuid-generator",
    emoji: "🪄",
  },
  {
    name: "Color Picker",
    description: "Pick and copy any color with ease.",
    slug: "color-picker",
    emoji: "🎨",
  },
  {
    name: "Base64 Converter",
    description: "Encode or decode Base64 strings easily.",
    slug: "base64-converter",
    emoji: "🔐",
  },
  {
    name: "Explain my Code",
    description: "Ask your doubt, let us clear it",
    slug:"code-explainer",
    emoji: "🤔"
  },
  {
    name: "Regex-tester",
    description: "Test regular expressions",
    slug: "regex-tester",
    emoji: "⚙️"
  }
];

export default function ToolsPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Explore Tools</h1>
      <p className="text-slate-600 mb-12">
        A collection of essential developer utilities. Simple. Fast. Free.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{tool.emoji}</div>
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition">
              {tool.name}
            </h2>
            <p className="text-slate-600 text-sm mt-2">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
