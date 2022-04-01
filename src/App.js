import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './component/Header/Header';
import Posts from './component/Posts/Posts';
import Pagination from './component/Pagination';
import Character from './component/Characters/Character';

const App = () => {

    const [listCharacter, setListCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [charId, setCharId] = useState();
    const [showDetails, setShowDetails] = useState(false);


    const getData = async () => {
        setLoading(true);
        const response = await fetch('https://www.breakingbadapi.com/api/characters');
        const data = await response.json();
        setListCharacter(data);
        setLoading(false);
    }


    useEffect(() => {
        getData();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentList = listCharacter.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNo) => {
        setCurrentPage(pageNo)
    }

    const characterDetails = (cid) => {
        setCharId(cid);
    }

    const totalChar = listCharacter.length;
    const lastIndex = (Math.floor(totalChar/10))+1

    return (
        <div className="container mt-3 bg-gradient-light">
            <Header />
            <Posts listCharacter={currentList} loading={loading} characterDetails={characterDetails}  setShowDetails= {setShowDetails}/>
            {!loading && <Pagination currentListLength={currentList.length} totalChar={totalChar} paginate={paginate} lastIndex={lastIndex} setShowDetails= {setShowDetails} />}
            {showDetails && <Character charId={charId} currentList={currentList} />}
        </div>
    )
}

export default App;
