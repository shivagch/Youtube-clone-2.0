import { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateCache } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
 
  const { cachedResults } = useSelector(state => state.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

   

    const timer = setTimeout(() => {
      if (cachedResults[searchQuery]) {
        setSuggestions(cachedResults[searchQuery]);
      } else {
        getSearchSugesstions(searchQuery);
      }

    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const getSearchSugesstions = async (searchQuery) => {
    if (!searchQuery) return;
    try {
  
      const response = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const data = await response.text();

      const searchSuggestions = [];
      data.split('[').forEach((ele, index) => {
        if (!ele.split('"')[1] || index === 1) return;
          return searchSuggestions.push(ele.split('"')[1]);
      });

      setSuggestions(searchSuggestions);

      dispatch(updateCache({ searchQuery, results : searchSuggestions}));

    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchResults = (suggestion) => {
    setShowSuggestions(false);
    navigate(`/results?search_query=${suggestion}`);
  }


  return (
    <>
      <input className='w-[500px] h-10 px-2 py-1 border border-gray-400 rounded-l-full' placeholder='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} />
      <button className='px-2 h-10 py-1 border border-gray-400 bg-gray-100 rounded-r-full' onClick={() => handleSearchResults(searchQuery)}>Search</button>
      {showSuggestions && (<div className='absolute w-[500px] ml-[390px] px-2 py-1 shadow-lg bg-white border border-white rounded-md'>
        <ul>
          {
            suggestions?.map((suggestion, i) => (
              <li key={i} className='py-2 px-3 text-left shadow-sm hover:bg-gray-200' onClick={() => {setSearchQuery(suggestion); handleSearchResults(suggestion)}}>🔍  {suggestion}</li>
            ))
          }
        </ul>
      </div>)}
    </>
  )
}

export default Search