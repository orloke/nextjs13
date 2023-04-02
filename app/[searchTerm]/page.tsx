import getWikiResults from '../../lib/getWikiResults';
import { Result, SearchResult } from '../../types';
import { Items } from '../components/Items';

interface Props {
  params: {
    searchTerm: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const displayTerm = params.searchTerm.replaceAll('%20', '');
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} not found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1">
      {results ? (
        Object.values(results).map(result => (
          <Items key={result.pageid} result={result} />
        ))
      ) : (
        <h2>{`${params.searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
