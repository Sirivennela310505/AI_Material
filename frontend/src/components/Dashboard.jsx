import React, { useEffect, useState } from 'react';
import { CalendarCheck, BookOpen, Zap, TrendingUp, Loader2, Clock } from 'lucide-react';

// Placeholder fetch functions – replace with real API calls
const fetchProgress = async () => {
  // Simulated delay
  await new Promise(r => setTimeout(r, 500));
  return { completed: 42, total: 100 };
};

const fetchRecentActivity = async () => {
  await new Promise(r => setTimeout(r, 400));
  return [
    { id: 1, title: 'Finished Chapter 3: Neural Networks', timestamp: '2h ago' },
    { id: 2, title: 'Scored 85% on Quiz: Linear Regression', timestamp: '5h ago' },
    { id: 3, title: 'Created Flashcard Set: Activation Functions', timestamp: '1d ago' },
  ];
};

export default function Dashboard() {
  const [progress, setProgress] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [prog, act] = await Promise.all([fetchProgress(), fetchRecentActivity()]);
      setProgress(prog);
      setActivity(act);
      setLoading(false);
    };
    loadData();
  }, []);

  const progressPercent = progress ? Math.round((progress.completed / progress.total) * 100) : 0;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold gradient-text-edtech">Your Learning Dashboard</h1>

      {loading ? (
        <div className="flex items-center space-x-2 text-gray-500">
          <Loader2 className="animate-spin" size={20} />
          <span>Loading your data...</span>
        </div>
      ) : (
        <>
          {/* Progress Overview */}
          <section className="edtech-card p-4">
            <div className="flex items-center space-x-3 mb-2">
              <TrendingUp size={24} className="text-primary-indigo" />
              <h2 className="text-lg font-semibold">Progress</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-primary-indigo h-4 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {progress.completed} of {progress.total} modules completed ({progressPercent}%)
            </p>
          </section>

          {/* Quick Links */}
          <section className="edtech-card p-4 grid grid-cols-2 gap-4">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <BookOpen size={18} />
              <span>Explore Concepts</span>
            </button>
            <button className="btn-primary flex items-center justify-center space-x-2">
              <Zap size={18} />
              <span>Start Quiz</span>
            </button>
            <button className="btn-primary flex items-center justify-center space-x-2">
              <CalendarCheck size={18} />
              <span>Review Schedule</span>
            </button>
            <button className="btn-primary flex items-center justify-center space-x-2">
              <TrendingUp size={18} />
              <span>View Roadmap</span>
            </button>
          </section>

          {/* Recent Activity */}
          <section className="edtech-card p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Clock size={24} className="text-primary-indigo" />
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <ul className="space-y-2">
              {activity.map(item => (
                <li key={item.id} className="edtech-card-interactive p-2 flex justify-between items-center">
                  <span>{item.title}</span>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
