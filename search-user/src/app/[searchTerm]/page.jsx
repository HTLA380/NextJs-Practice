import getWikiResults from "@/lib/getWikiResults";
import React from "react";
import Item from "./components/Item";

export async function generateMetadata({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm?.replaceAll("%20", " ");

  if (!data.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
      // description: `No results found for ${displayTerm}`
    };
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm);
  const data = await wikiData;
  const results = data.query?.pages;

  const content = (
    <main className="max-w-lg min-h-screen p-4 mx-auto bg-slate-200">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
