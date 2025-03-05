export default function Component() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-28 mt-12 text-center">
          <h1 className="mt-4 text-5xl font-bold">Mem0 - ChatGPT with memory</h1>
        </header>

        <div className="h-[700px]">
          <iframe
            title="Mem0 example"
            className="h-full w-full border border-gray-200 -mt-20"
            src="https://demo.mem0.ai/"
          />
        </div>
      </div>
    </div>
  );
}
