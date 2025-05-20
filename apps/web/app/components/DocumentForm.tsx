"use client";

import { useState } from "react";
import { useMutation } from "@repo/convex-client";
import { api } from "@repo/convex-client";

export default function DocumentForm() {
  const [input, setInput] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const createDocument = useMutation(api.documents.create);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    
    // Simple URL validation
    setIsUrl(value.startsWith("http://") || value.startsWith("https://"));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    
    setIsLoading(true);
    
    try {
      const result = await createDocument({
        url: isUrl ? input : undefined,
        query: !isUrl ? input : undefined,
      });
      
      console.log("Document created:", result);
      // In a real app, we would redirect to view the document or show success
    } catch (error) {
      console.error("Error creating document:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="query" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter a technology search prompt or URL
        </label>
        <input
          type="text"
          id="query"
          value={input}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
          placeholder="E.g., React 19 new hooks or https://react.dev/docs"
          disabled={isLoading}
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!input || isLoading}
      >
        {isLoading ? "Processing..." : "Generate Markdown"}
      </button>
    </form>
  );
} 