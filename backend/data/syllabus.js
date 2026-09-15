// backend/data/syllabus.js
// Central syllabus data used by backend APIs
export const syllabus = {
  units: [
    {
      id: 'unit-1',
      title: 'INTELLIGENT AGENTS',
      description: 'Understanding how intelligent systems perceive, reason and act.',
      topics: [
        { id: 'topic-1-1', title: 'Introduction to Artificial Intelligence' },
        { id: 'topic-1-2', title: 'Definitions of AI' },
        // ... other topics omitted for brevity
      ]
    },
    {
      id: 'unit-2',
      title: 'PROBLEM SOLVING AND SEARCHING',
      description: 'Techniques for exploring state spaces and finding optimal solutions.',
      topics: [
        { id: 'topic-2-1', title: 'Problem Solving in AI' },
        { id: 'topic-2-2', title: 'State Space Search' },
        { id: 'topic-2-3', title: 'Uninformed Search' },
        { id: 'topic-2-4', title: 'Breadth First Search (BFS)' },
        { id: 'topic-2-5', title: 'Depth First Search (DFS)' },
        { id: 'topic-2-6', title: 'Uniform Cost Search' },
        { id: 'topic-2-7', title: 'Heuristic Search' },
        { id: 'topic-2-8', title: 'Greedy Best First Search' },
        { id: 'topic-2-9', title: 'A* Search Algorithm' },
        { id: 'topic-2-10', title: 'f(n) = g(n) + h(n)' },
        // ... remaining topics omitted
      ]
    }
    // Units 3-5 omitted for brevity
  ]
};
