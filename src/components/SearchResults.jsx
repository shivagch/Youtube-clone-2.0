import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_RESULT_API } from '../utils/constants';
import SearchResultsShimmer from './SearchResultsShimmer';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search_query');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getSearchResults(searchQuery);
    }, [searchQuery]);

    const getSearchResults = async (searchQuery) => {
        try {
            const response = await fetch(`${YOUTUBE_SEARCH_RESULT_API}${searchQuery}`);
            const data = await response.json();
            setSearchResults(data.items);
        } catch (error) {
            console.log(error);
        }
    }

    if(searchResults.length === 0) {
        return <SearchResultsShimmer />
    }
  return (
    <div className='m-1 p-1 shadow-sm'>
        {
            searchResults?.map(video => <Link key={video?.id?.videoId} to={`/watch?v=${video?.id?.videoId}`}><SearchResult  video={video} /></Link>)
        }
    </div>
  )
}

const SearchResult = ({ video }) => {
    return (
        <div className='flex m-1 p-1'>
            <img className='h-56 w-96 rounded-md' src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} />
            <div className='m-1 w-96'>
                <p className='text-xl font-bold'>{video?.snippet?.title}</p>
                <p className='text-sm text-gray-500 text-wrap my-1 p-1'>{video?.snippet?.description}</p>
                <p className='text-md font-semibold italic my-1 p-1'>Channel : {video?.snippet?.channelTitle}</p>
                <p className='text-sm text-gray-500 italic p-1'>Published on : {video?.snippet?.publishedAt}</p>
            </div>
        </div>
    )
}

export default SearchResults