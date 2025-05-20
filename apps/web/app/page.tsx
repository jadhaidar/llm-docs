import DocumentForm from "./components/DocumentForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          LLM Context Augmentation Tool
        </h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Generate Documentation Summary</h2>
          <DocumentForm />
        </div>
      </div>
    </main>
  );
}
