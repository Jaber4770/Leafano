import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/card";
import {
    UserIcon,
    BookOpenIcon,
    HeartIcon,
    MessageCircleIcon,
    HomeIcon,
    PlusCircleIcon,
    ListOrderedIcon
} from 'lucide-react';
import Aside from '../components/Aside';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        tipsCount: 0,
        usersCount: 0,
        totalLikes: 0,
        commentsCount: 0,
    });

    useEffect(() => {
        // Simulated API call
        setTimeout(() => {
            setDashboardData({
                tipsCount: 124,
                usersCount: 56,
                totalLikes: 921,
                commentsCount: 187,
            });
        }, 500);
    }, []);

    const summaryCards = [
        {
            title: 'Total Tips',
            count: dashboardData.tipsCount,
            icon: <BookOpenIcon className="w-6 h-6 text-green-600" />,
        },
        {
            title: 'Users',
            count: dashboardData.usersCount,
            icon: <UserIcon className="w-6 h-6 text-blue-500" />,
        },
        {
            title: 'Likes',
            count: dashboardData.totalLikes,
            icon: <HeartIcon className="w-6 h-6 text-pink-500" />,
        },
        {
            title: 'Comments',
            count: dashboardData.commentsCount,
            icon: <MessageCircleIcon className="w-6 h-6 text-yellow-500" />,
        },
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
           {/* <Aside></Aside> */}
            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
                <h2 className="text-3xl font-semibold mb-6">Leafano Dashboard</h2>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {summaryCards.map((card) => (
                        <Card key={card.title} className="shadow-md rounded-2xl">
                            <CardContent className="flex items-center justify-between p-6">
                                <div>
                                    <p className="text-sm text-gray-500">{card.title}</p>
                                    <h3 className="text-2xl text-green-500 font-bold">{card.count}</h3>
                                </div>
                                <div className="bg-gray-100 p-3 rounded-full">{card.icon}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Replace chart with something lighter */}
                <Card className="shadow-md rounded-2xl">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">🌿 Top Contributor</h3>
                        <p className="text-gray-700">Most active user this month: <strong>Maria Gardenia</strong> 🌱 with 23 tips shared!</p>
                    </CardContent>
                </Card>

                
            </main>
        </div>
    );
};

export default Dashboard;
