import getWikiResults from '../../lib/getWikiResults';
import { Result, SearchResult } from '../../types';

interface Props {
  params: {
    searchTerm: string;
  };
}

export default async function SearchResults({ params }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(params.searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main>
      {results ? (
        Object.values(results).map(result => (
          <p key={result.pageid}>{JSON.stringify(result)}</p>
        ))
      ) : (
        <h2>{`${params.searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
