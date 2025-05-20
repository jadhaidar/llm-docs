import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Define a query to get all documents
export const get = query({
  handler: async (ctx) => {
    // In the future, this will fetch documents from the database
    return [
      {
        id: "1",
        title: "Sample Documentation",
        content: "This is a sample markdown document.",
        createdAt: new Date().toISOString(),
      },
    ];
  },
});

// Define a mutation to create a new document
export const create = mutation({
  args: {
    url: v.optional(v.string()),
    query: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // This is a sample implementation
    // In the future, this will store documents in the database
    const { url, query } = args;
    console.log("Creating document from:", url || query);
    
    return {
      id: Date.now().toString(),
      title: url || query || "Untitled Document",
      content: "Sample generated markdown",
      createdAt: new Date().toISOString(),
    };
  },
}); 