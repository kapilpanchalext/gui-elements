import { useCallback, useEffect, useRef } from 'react'
import { Match } from '../model/Data_Model';
import DFA from '../algorithm/DFA';

type Props = {
    keywords: string[];
    text: string;
    onUpdateResults: (results: Match[]) => void;
}

const useSearchText = ({keywords, text}: Props) => {
    const dfa = DFA();
    const searchResults = useRef<Match[]>();
    const searchText = useCallback(() => {
        dfa.patternMatchingMachine(keywords);
        dfa.buildFailureLinks();
        searchResults.current = dfa.search(text || '');
      }, [keywords, text]);

      useEffect(() => {
        searchText();
      }, [keywords, searchText, text]);

      return searchResults;
}

export default useSearchText;