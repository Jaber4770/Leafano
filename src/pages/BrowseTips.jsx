import { useEffect, useState } from 'react';
import BrowseTipsCard from '../components/BrowseTipsCard';

const BrowseTips = () => {
    const [tips, setTips] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [isAscending, setIsAscending] = useState(false);
    const [sortByDifficulty, setSortByDifficulty] = useState(false);



    const limit = 6;

    useEffect(() => {
        // Reset on filter change and fetch fresh data
        setSkip(0);
        setTips([]);
        setAllLoaded(false);
        fetchTips(0, true);
    }, [selectedDifficulty, isAscending, sortByDifficulty]);

    const fetchTips = (currentSkip, isNewFilter = false) => {
        setLoading(true);

        const url = `https://leafano-server.vercel.app/gardenersTips?limit=${limit}&skip=${currentSkip}`
            + (selectedDifficulty ? `&difficulty=${selectedDifficulty}` : '')
            + (isAscending ? `&sort=asc` : '')
            + (sortByDifficulty ? `&sortByDifficulty=true` : '');


        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length < limit) {
                    setAllLoaded(true);
                } else {
                    setAllLoaded(false);
                }

                // Sort tips so selected difficulty comes first
                let sortedData = [...data];
                if (selectedDifficulty) {
                    sortedData.sort((a, b) => {
                        if (a.difficultyLevel === selectedDifficulty && b.difficultyLevel !== selectedDifficulty) return -1;
                        if (a.difficultyLevel !== selectedDifficulty && b.difficultyLevel === selectedDifficulty) return 1;
                        return 0;
                    });
                }

                if (isNewFilter || currentSkip === 0) {
                    setTips(sortedData);
                    setSkip(limit); // Reset skip after fresh load
                } else {
                    setTips(prev => [...prev, ...sortedData]);
                    setSkip(prev => prev + limit); // Increment skip for pagination
                }
            })
            .finally(() => setLoading(false));
    };

    const handleDifficultySelect = (difficulty) => {
        setSortByDifficulty(true); // turn on sorting by difficulty
        if (difficulty !== selectedDifficulty) {
            setSelectedDifficulty(difficulty);
        }
    };


    const handleSeeAll = () => {
        if (!allLoaded && !loading) {
            fetchTips(skip);
        }
    };

    const handleAscending = () => {
        setTips([]);            // Clear current tips
        setSkip(0);             // Reset skip
        setAllLoaded(false);    // Reset allLoaded flag
        setSelectedDifficulty('');
        setSortByDifficulty(false);
        setIsAscending(prev => !prev);  // Now toggle
    };



    return (
        <div className='container mx-auto my-10'>
            <h1 className=' text-3xl font-semibold mb-3 text-shadow-lg'>Browse Tips</h1>
            <div className=''>
                <div className='flex gap-5 lg:mx-0 mx-4 mb-3'>
                    <li onClick={handleAscending} className='list-none btn'>
                        <p>{isAscending ? 'A-Z (On)' : 'A-Z'}</p>
                    </li>

                    <li className='list-none btn'>
                        <div className="dropdown dropdown-center">
                            <div tabIndex={0} role="button" className="m-1">Difficulty Level</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a onClick={() => handleDifficultySelect('Easy')}>Easy</a></li>
                                <li><a onClick={() => handleDifficultySelect('Medium')}>Medium</a></li>
                                <li><a onClick={() => handleDifficultySelect('Hard')}>Hard</a></li>
                                <li><a onClick={() => {
                                    setSelectedDifficulty('');
                                    setSortByDifficulty(false);
                                }}>All</a></li>
                            </ul>
                        </div>
                    </li>
                </div>

                <div className='grid grid-cols-4 gap-5 lg:mx-0 mx-4'>
                    {tips.map(tip => (
                        <BrowseTipsCard key={tip._id} tip={tip} />
                    ))}
                </div>

                {!allLoaded && (
                    <div className='text-center'>
                        <button
                            className='btn bg-green-500 text-white text-[20px] mt-4'
                            onClick={handleSeeAll}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'See All'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrowseTips;
