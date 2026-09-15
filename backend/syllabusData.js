// Comprehensive Academic Source of Truth for Artificial Intelligence and Its Applications
// 5 UNITS with topics, top 10 important exam questions per unit, visualization data, and presentation outlines.

export const SYLLABUS_DATA = [
  {
    id: 'unit-1',
    number: 1,
    title: 'Unit I — Intelligent Agents',
    shortDesc: 'Understand AI foundations, definitions, PEAS framework, environment properties, agent architectures, and state-space representation.',
    conceptCount: 11,
    topics: [
      { id: 'u1-t1', name: 'Introduction to AI & Definitions', desc: 'Acting humanly, thinking humanly, acting rationally, thinking rationally.' },
      { id: 'u1-t2', name: 'Turing Test & Foundations of AI', desc: 'Historical foundations: Philosophy, Mathematics, Neuroscience, Economics.' },
      { id: 'u1-t3', name: 'Standard Model of Rational Action', desc: 'Evaluating rational behavior and expected performance measures.' },
      { id: 'u1-t4', name: 'Intelligent Agents & Environments', desc: 'Sensors, actuators, environment interactions, and agent functions.' },
      { id: 'u1-t5', name: 'PEAS Framework', desc: 'Performance Measure, Environment, Actuators, Sensors specification.' },
      { id: 'u1-t6', name: 'Environment Properties', desc: 'Fully vs Partially Observable, Deterministic vs Stochastic, Episodic vs Sequential, Static vs Dynamic, Discrete vs Continuous, Single vs Multi-Agent.' },
      { id: 'u1-t7', name: 'Simple Reflex Agents', desc: 'Condition-action rules operating on current percepts without history.' },
      { id: 'u1-t8', name: 'Model-Based Reflex Agents', desc: 'Internal state tracking how the world evolves.' },
      { id: 'u1-t9', name: 'Goal-Based Agents', desc: 'Combining state with goal information to choose actions.' },
      { id: 'u1-t10', name: 'Utility-Based Agents', desc: 'Using utility functions to evaluate trade-offs and happiness scores.' },
      { id: 'u1-t11', name: 'Problem-Solving Agents & State Space', desc: 'Formulating problems, state space representation, initial & goal states.' }
    ]
  },
  {
    id: 'unit-2',
    number: 2,
    title: 'Unit II — Problem Solving and Searching',
    shortDesc: 'Master search strategies including BFS, DFS, Uniform Cost, Greedy Best-First, A* Search, Hill Climbing, and Simulated Annealing.',
    conceptCount: 11,
    topics: [
      { id: 'u2-t1', name: 'Formulating Search Problems', desc: 'Initial state, actions, transition model, goal test, path cost.' },
      { id: 'u2-t2', name: 'Breadth-First Search (BFS)', desc: 'FIFO queue traversal, completeness, optimality, O(b^d) space complexity.' },
      { id: 'u2-t3', name: 'Depth-First Search (DFS)', desc: 'LIFO stack traversal, memory efficiency, non-optimal behavior.' },
      { id: 'u2-t4', name: 'Uniform Cost Search (UCS)', desc: 'Priority queue traversal ordered by path cost g(n).' },
      { id: 'u2-t5', name: 'Greedy Best-First Search', desc: 'Heuristic-driven search selecting nodes closest to goal h(n).' },
      { id: 'u2-t6', name: 'A* Search Algorithm', desc: 'Optimal evaluation function f(n) = g(n) + h(n) with admissible heuristics.' },
      { id: 'u2-t7', name: 'Heuristic Functions & Admissibility', desc: 'Manhattan distance, Euclidean distance, consistency criteria.' },
      { id: 'u2-t8', name: 'Hill Climbing Search', desc: 'Local search greedy approach, local maxima, plateaus, ridges.' },
      { id: 'u2-t9', name: 'Simulated Annealing', desc: 'Stochastic hill climbing escaping local maxima using temperature decay.' },
      { id: 'u2-t10', name: 'Continuous Space Search', desc: 'Gradient descent, optimization landscapes.' },
      { id: 'u2-t11', name: 'Online Search & Unknown Environments', desc: 'Exploring partially observable or unknown environments dynamically.' }
    ]
  },
  {
    id: 'unit-3',
    number: 3,
    title: 'Unit III — Constraints and Adversarial Search',
    shortDesc: 'Explore Constraint Satisfaction Problems (CSPs), AC-3 arc consistency, Minimax algorithm, Alpha-Beta Pruning, and MCTS.',
    conceptCount: 10,
    topics: [
      { id: 'u3-t1', name: 'Constraint Satisfaction Problems (CSPs)', desc: 'Variables X, Domains D, Constraints C formulation.' },
      { id: 'u3-t2', name: 'Constraint Hypergraphs & Types', desc: 'Unary, binary, higher-order constraints.' },
      { id: 'u3-t3', name: 'Backtracking Search for CSPs', desc: 'Depth-first search with single variable assignments.' },
      { id: 'u3-t4', name: 'Forward Checking', desc: 'Tracking remaining valid domain values during search.' },
      { id: 'u3-t5', name: 'Arc Consistency & AC-3 Algorithm', desc: 'Enforcing pairwise domain consistency to prune search space.' },
      { id: 'u3-t6', name: 'Game Theory & Game Trees', desc: 'Deterministic, zero-sum, perfect information game models.' },
      { id: 'u3-t7', name: 'Minimax Algorithm', desc: 'Optimal decision strategy for two-player zero-sum games.' },
      { id: 'u3-t8', name: 'Alpha-Beta Pruning', desc: 'Eliminating branches that cannot influence final decision.' },
      { id: 'u3-t9', name: 'Evaluation Functions in Games', desc: 'Heuristic state evaluation for depth-limited games.' },
      { id: 'u3-t10', name: 'Monte Carlo Tree Search (MCTS)', desc: 'Selection, Expansion, Simulation (Rollout), Backpropagation.' }
    ]
  },
  {
    id: 'unit-4',
    number: 4,
    title: 'Unit IV — Knowledge Representation and Reasoning',
    shortDesc: 'Learn knowledge-based agents, propositional & first-order logic, forward/backward chaining, resolution, and expert systems.',
    conceptCount: 10,
    topics: [
      { id: 'u4-t1', name: 'Knowledge-Based Agents', desc: 'Knowledge base (KB), TELL and ASK operations.' },
      { id: 'u4-t2', name: 'Propositional Logic', desc: 'Syntax, semantics, truth tables, entailment, equivalence.' },
      { id: 'u4-t3', name: 'Inference Rules & Proofs', desc: 'Modus Ponens, Resolution, Conjunctive Normal Form (CNF).' },
      { id: 'u4-t4', name: 'First-Order Logic (FOL)', desc: 'Objects, relations, functions, quantifiers (∀, ∃).' },
      { id: 'u4-t5', name: 'Forward Chaining', desc: 'Data-driven inference firing rules from facts to conclusions.' },
      { id: 'u4-t6', name: 'Backward Chaining', desc: 'Goal-driven inference proving hypotheses backwards from goals.' },
      { id: 'u4-t7', name: 'Resolution Refutation in FOL', desc: 'Unification, CNF conversion, proving by contradiction.' },
      { id: 'u4-t8', name: 'Semantic Networks', desc: 'Graphical knowledge representation with nodes and relational edges.' },
      { id: 'u4-t9', name: 'Frames & Inheritance', desc: 'Structured data frames with slots, fillers, and inheritance.' },
      { id: 'u4-t10', name: 'Expert Systems & Production Rules', desc: 'Inference engines, rule bases, domain knowledge integration.' }
    ]
  },
  {
    id: 'unit-5',
    number: 5,
    title: 'Unit V — Artificial Intelligence Applications',
    shortDesc: 'Discover real-world applications in Healthcare, Finance, Agriculture, Smart Cities, NLP, Computer Vision, and Generative AI.',
    conceptCount: 10,
    topics: [
      { id: 'u5-t1', name: 'AI in Healthcare & Medicine', desc: 'Diagnostic imagery analysis, drug discovery, personalized medicine.' },
      { id: 'u5-t2', name: 'AI in Finance & Algorithmic Trading', desc: 'Fraud detection, credit scoring, high-frequency trading.' },
      { id: 'u5-t3', name: 'AI in Agriculture & Precision Farming', desc: 'Crop yield prediction, automated weed detection, soil monitoring.' },
      { id: 'u5-t4', name: 'AI in Smart Cities & Transportation', desc: 'Autonomous vehicles, intelligent traffic routing, grid management.' },
      { id: 'u5-t5', name: 'AI in Manufacturing & Robotics', desc: 'Predictive maintenance, industrial assembly, quality inspection.' },
      { id: 'u5-t6', name: 'AI in Education & EdTech', desc: 'Adaptive learning systems, automated grading, intelligent tutoring.' },
      { id: 'u5-t7', name: 'AI in Cybersecurity', desc: 'Threat detection, anomaly analysis, automated vulnerability patching.' },
      { id: 'u5-t8', name: 'Natural Language Processing (NLP)', desc: 'Sentiment analysis, machine translation, LLMs, information extraction.' },
      { id: 'u5-t9', name: 'Computer Vision Applications', desc: 'Object detection (YOLO), face recognition, image segmentation.' },
      { id: 'u5-t10', name: 'Generative AI & Case Studies', desc: 'Diffusion models, LLMs, ethical AI, real-world deployment challenges.' }
    ]
  }
];

// Top 10 Important Exam Questions per Unit (50 Total Questions)
export const TOP_IMPORTANT_QUESTIONS = [
  // UNIT 1
  {
    unitId: 'unit-1',
    id: 'u1-q1',
    marks: 10,
    topic: 'Intelligent Agents & PEAS',
    question: 'Define an Intelligent Agent. Explain the PEAS framework in detail with complete specifications for (a) Automated Driving System and (b) Medical Diagnostic System.',
    shortAnswer: 'An Intelligent Agent is anything that perceives its environment through sensors and acts upon that environment through actuators rationally. PEAS stands for Performance Measure, Environment, Actuators, and Sensors.',
    detailedAnswer: '1. Definition: An agent function maps any given percept sequence to an action. An optimal rational agent selects actions expected to maximize performance measure.\n2. Automated Driving PEAS:\n   - Performance: Safety, speed, legal drive, comfort, profit.\n   - Environment: Roads, traffic, pedestrians, weather.\n   - Actuators: Steering, accelerator, brake, signal, horn.\n   - Sensors: Cameras, LiDAR, radar, GPS, speedometer.\n3. Medical Diagnostic System PEAS:\n   - Performance: Healthy patient, minimized costs, accurate diagnosis.\n   - Environment: Patient, hospital staff, symptoms.\n   - Actuators: Screen display, test requests, prescription output.\n   - Sensors: Keyboard input of symptoms/test results.',
    memoryTip: '💡 Remember PEAS as: P = Goal/Score, E = World, A = Muscle/Controls, S = Eyes/Ears.',
    whyImportant: 'Frequently asked 10-mark university question testing fundamental agent specification.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q2',
    marks: 5,
    topic: 'Environment Properties',
    question: 'Differentiate between Fully Observable vs Partially Observable and Deterministic vs Stochastic environments with examples.',
    shortAnswer: 'Fully Observable means sensors detect complete state at each point in time (Chess). Deterministic means next state is completely determined by current state and action (Taxi driving is Stochastic).',
    detailedAnswer: 'Fully Observable: Agent sensors give complete state (e.g. Chess, Crossword). Partially Observable: Sensors missed noise or data (e.g. Poker, Automated driving in fog).\nDeterministic: Next state strictly governed by current state & action (e.g. Chess). Stochastic: Randomness or unknown variables affect next state (e.g. Weather, Traffic).',
    memoryTip: '💡 Fully = Complete Vision; Deterministic = No Surprise Randomness.',
    whyImportant: 'Core classification concept required for choosing suitable search/agent strategies.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q3',
    marks: 10,
    topic: 'Agent Architectures',
    question: 'Compare Simple Reflex Agents, Model-Based Agents, Goal-Based Agents, and Utility-Based Agents with structural architectural diagrams.',
    shortAnswer: 'Simple Reflex agents act only on current percept. Model-based maintain internal world state. Goal-based work toward goals. Utility-based optimize happiness/cost tradeoffs.',
    detailedAnswer: '1. Simple Reflex: Condition-Action rules (If car in front stops -> Brake).\n2. Model-Based: Tracks how world evolves + how my actions affect world.\n3. Goal-Based: Combines state with goal destination to plan path.\n4. Utility-Based: Evaluates multiple paths using utility function u(s) to find best trade-off (fastest vs safest vs cheapest).',
    memoryTip: '💡 Evolution of Agents: Reflex (Instinct) -> Model (Memory) -> Goal (Destination) -> Utility (Preference/Optimization).',
    whyImportant: 'High-yield question summarizing agent design hierarchy.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q4',
    marks: 5,
    topic: 'Turing Test',
    question: 'What is the Turing Test? What capabilities must a computer possess to pass the Total Turing Test?',
    shortAnswer: 'Proposed by Alan Turing in 1950 to test machine intelligence via natural language conversation with a human judge. Total Turing Test adds physical interaction via vision and robotics.',
    detailedAnswer: 'Capabilities needed for Turing Test:\n1. NLP (communication in natural language)\n2. Knowledge Representation (storing knowledge)\n3. Automated Reasoning (using knowledge to answer)\n4. Machine Learning (adapting to new circumstances).\nTotal Turing Test adds:\n5. Computer Vision (perceiving objects)\n6. Robotics (manipulating objects).',
    memoryTip: '💡 4 Core AI Skills (Lang + Knowledge + Reasoning + Learning) + 2 Physical (Vision + Robotics).',
    whyImportant: 'Standard introductory exam question.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q5',
    marks: 5,
    topic: 'State Space Representation',
    question: 'Define State Space. How is a problem mathematically formulated in AI?',
    shortAnswer: 'State Space is the set of all possible states reachable from initial state by any sequence of actions. Problem formulation requires 5 components.',
    detailedAnswer: '5 Components of Problem Formulation:\n1. Initial State: Where agent starts.\n2. Actions(s): Executable choices in state s.\n3. Transition Model Result(s, a): State resulting from action a in state s.\n4. Goal Test: Check if state is goal state.\n5. Path Cost c(s, a, s\'): Numerical cost of step.',
    memoryTip: '💡 State Space 5 Tuple: (Initial State, Actions, Transition, Goal Test, Path Cost).',
    whyImportant: 'Essential prerequisite for search algorithms in Unit II.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q6',
    marks: 2,
    topic: 'Rationality',
    question: 'What is Rationality in AI? Is rationality the same as omniscience?',
    shortAnswer: 'Rationality means doing the right thing based on expected performance and percept sequence. It is NOT omniscience because rationality depends on expected outcome, not actual outcome with infinite future knowledge.',
    detailedAnswer: 'Omniscience knows the actual outcome of actions. Rationality maximizes expected performance given available information.',
    memoryTip: '💡 Rational = Smart decision with current data; Omniscient = Perfect foresight.',
    whyImportant: 'Short 2-mark conceptual discriminator.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q7',
    marks: 2,
    topic: 'Agent Function vs Agent Program',
    question: 'Distinguish between Agent Function and Agent Program.',
    shortAnswer: 'Agent Function is an abstract mathematical mapping f: P* -> A from percept sequence to action. Agent Program is the concrete code running on physical architecture.',
    detailedAnswer: 'Agent Architecture + Agent Program = Intelligent Agent.',
    memoryTip: '💡 Function = Math Concept; Program = Code Execution.',
    whyImportant: 'Standard definition question.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q8',
    marks: 5,
    topic: 'Foundations of AI',
    question: 'Briefly explain how Mathematics and Neuroscience contributed to modern AI.',
    shortAnswer: 'Mathematics contributed logic, probability, computation theory, and optimization. Neuroscience showed that brains consist of interconnected networks of biological neurons.',
    detailedAnswer: 'Mathematics provided formal logic (Boole, Frege), algorithms (Al-Khwarizmi), probability (Bayes), and computational limits (Turing). Neuroscience demonstrated that brain operations are driven by electrical signals between neurons.',
    memoryTip: '💡 Math gives the Logic & Rules; Neuroscience gives the Neural Model.',
    whyImportant: 'Historical overview question.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q9',
    marks: 5,
    topic: 'Episodic vs Sequential Environments',
    question: 'Contrast Episodic and Sequential task environments with suitable scenarios.',
    shortAnswer: 'In Episodic environments, current decision does not affect future decisions (e.g. defect sorting). In Sequential environments, current decision affects all future decisions (e.g. Chess, Driving).',
    detailedAnswer: 'Episodic: Each episode consists of agent perceiving and acting. Next episode does not depend on past actions. Sequential: Short term actions have long term consequences.',
    memoryTip: '💡 Episodic = Independent Snapshots; Sequential = Chain Reaction.',
    whyImportant: 'Key environment property question.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q10',
    marks: 5,
    topic: 'Goal-Based vs Utility-Based Agents',
    question: 'Why are Utility-Based Agents superior to Goal-Based Agents when trade-offs are involved?',
    shortAnswer: 'Goal-Based agents only distinguish goal states from non-goal states (binary yes/no). Utility-Based agents measure HOW GOOD a state is using a continuous utility score u(s).',
    detailedAnswer: 'When multiple conflicting goals exist (e.g. fast travel vs safe travel vs cheap travel), utility functions weight trade-offs to pick the optimal path under uncertainty.',
    memoryTip: '💡 Goal = Pass/Fail; Utility = Score/Happiness Gradient.',
    whyImportant: 'Conceptual comparative question.'
  },

  // UNIT 2
  {
    unitId: 'unit-2',
    id: 'u2-q1',
    marks: 10,
    topic: 'A* Search Algorithm',
    question: 'Explain the A* Search Algorithm in detail. Prove that A* is tree-search optimal if the heuristic function h(n) is admissible.',
    shortAnswer: 'A* evaluates nodes using f(n) = g(n) + h(n), where g(n) is path cost from start node and h(n) is estimated cost to goal. Admissible means h(n) never overestimates actual cost.',
    detailedAnswer: '1. Evaluation Function: f(n) = g(n) + h(n).\n2. Admissibility condition: 0 <= h(n) <= h*(n) for all n, where h*(n) is true cost to goal.\n3. Proof of Optimality (Tree-Search):\n   Suppose sub-optimal goal G2 is popped from queue before optimal goal G1. Then f(G2) = g(G2) > g(G1). Since h(n) is admissible, for node n on optimal path to G1, f(n) = g(n) + h(n) <= g(G1) < f(G2). Thus node n will be expanded before G2, contradicting that G2 was popped first. Hence A* is optimal.',
    memoryTip: '💡 A* Formula: Actual Cost + Underestimating Heuristic = Guaranteed Shortest Path.',
    whyImportant: 'Most important 10-mark algorithm question in Unit II.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q2',
    marks: 10,
    topic: 'BFS vs DFS Comparison',
    question: 'Compare Breadth-First Search (BFS) and Depth-First Search (DFS) in terms of Data Structure, Completeness, Optimality, Time Complexity, and Space Complexity.',
    shortAnswer: 'BFS uses FIFO Queue, is Complete & Optimal for unit costs, Time & Space O(b^d). DFS uses LIFO Stack, is Not Complete in infinite spaces, Time O(b^m), Space O(bm).',
    detailedAnswer: '1. Data Structure: BFS uses FIFO Queue; DFS uses LIFO Stack/Recursion.\n2. Completeness: BFS is Complete if branching factor b is finite. DFS is Not Complete in infinite depth trees.\n3. Optimality: BFS is Optimal if step cost = 1. DFS is Not Optimal.\n4. Time Complexity: BFS O(b^d), DFS O(b^m).\n5. Space Complexity: BFS O(b^d) (huge memory drawback!), DFS O(bm) (linear space savings).',
    memoryTip: '💡 BFS = Level-by-level (Memory heavy, Optimal); DFS = Deep dive (Memory light, Dangerous).',
    whyImportant: 'Standard fundamental search comparison.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q3',
    marks: 5,
    topic: 'Uniform Cost Search (UCS)',
    question: 'Explain Uniform Cost Search algorithm and state how it differs from BFS.',
    shortAnswer: 'UCS expands the node n with lowest path cost g(n) using a priority queue. It is optimal for arbitrary non-negative step costs, unlike BFS which assumes uniform cost.',
    detailedAnswer: 'UCS expands nodes in order of cumulative cost g(n). It guarantees optimality whenever every step cost c(s,a,s\') >= e > 0.',
    memoryTip: '💡 UCS = Dijkstra for AI Search trees.',
    whyImportant: 'Bridges BFS and A* Search.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q4',
    marks: 5,
    topic: 'Greedy Best-First Search',
    question: 'How does Greedy Best-First Search work? What are its main drawbacks?',
    shortAnswer: 'Greedy Best-First evaluates nodes solely using heuristic h(n) (estimated distance to goal). It is fast but NOT optimal and NOT complete (can get stuck in loops).',
    detailedAnswer: 'Greedy expands node that appears closest to goal. It ignores past path cost g(n), making it susceptible to taking costly detour paths.',
    memoryTip: '💡 Greedy = Shortsighted (Looks only at destination estimate, ignores spent gas).',
    whyImportant: 'Crucial stepping stone before introducing A*.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q5',
    marks: 5,
    topic: 'Hill Climbing Search & Local Maxima',
    question: 'Explain Hill Climbing search. Discuss its major pitfalls: Local Maxima, Ridges, and Plateaus.',
    shortAnswer: 'Hill Climbing is a local search loop that continuously moves in direction of increasing elevation. Pitfalls: Local Maxima (peaks lower than global max), Ridges (sequence of local max), Plateaus (flat area).',
    detailedAnswer: 'Solutions to pitfalls: Random-restart hill climbing, stochastic hill climbing, and simulated annealing.',
    memoryTip: '💡 Hill Climbing = Walking uphill in dense fog (Can get stuck on a small hill!).',
    whyImportant: 'Standard optimization search question.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q6',
    marks: 5,
    topic: 'Simulated Annealing',
    question: 'Describe Simulated Annealing and explain how the temperature parameter T allows escaping local maxima.',
    shortAnswer: 'Simulated Annealing borrows from metallurgy. It allows bad downhill moves with probability P = exp(-ΔE / T). As temperature T decreases, bad moves become rarer.',
    detailedAnswer: 'At high T, search acts like random walk. At low T, search acts like pure hill climbing.',
    memoryTip: '💡 Hot T = Explore risky paths; Cold T = Fine-tune local peak.',
    whyImportant: 'High-yield stochastic search topic.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q7',
    marks: 2,
    topic: 'Admissible Heuristics',
    question: 'Define an Admissible Heuristic with a mathematical expression.',
    shortAnswer: 'An admissible heuristic h(n) never overestimates the cost to reach the goal state: 0 <= h(n) <= h*(n), where h*(n) is the true optimal cost from node n to goal.',
    detailedAnswer: 'Examples: Straight-line distance for map navigation, Manhattan distance for 8-puzzle.',
    memoryTip: '💡 Admissible = Optimistic / Never overestimates cost.',
    whyImportant: 'Core requirement for A* optimality.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q8',
    marks: 2,
    topic: 'Manhattan vs Euclidean Distance',
    question: 'Write the formulas for Manhattan Distance and Euclidean Distance heuristics.',
    shortAnswer: 'Manhattan Distance = |x1 - x2| + |y1 - y2|. Euclidean Distance = sqrt((x1 - x2)^2 + (y1 - y2)^2).',
    detailedAnswer: 'Manhattan distance is used when movement is restricted to 4-directional grid (8-puzzle). Euclidean is used for 2D plane geometry.',
    memoryTip: '💡 Manhattan = Grid city blocks; Euclidean = As the crow flies.',
    whyImportant: 'Short formula calculation question.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q9',
    marks: 5,
    topic: 'Iterative Deepening Search (IDS)',
    question: 'Why is Iterative Deepening DFS (IDS) preferred over BFS and DFS for large search spaces?',
    shortAnswer: 'IDS combines benefits of BFS (completeness & optimality) and DFS (linear space complexity O(bd)) by incrementally increasing depth limit d.',
    detailedAnswer: 'Although nodes in top levels are generated multiple times, the overhead is small because most nodes reside at the bottom level of the tree.',
    memoryTip: '💡 IDS = Best of both worlds (BFS optimality + DFS low memory).',
    whyImportant: 'Classic search strategy synthesis question.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q10',
    marks: 5,
    topic: 'Online Search Agents',
    question: 'Explain how Online Search Agents operate in unknown environments.',
    shortAnswer: 'An online search agent interleaves computation and action. It acts, perceives the new state, and updates its map dynamically.',
    detailedAnswer: 'Crucial for real-world robotics and unexplored physical terrain where offline map lookup is impossible.',
    memoryTip: '💡 Online = Explore as you go; Offline = Plan whole path beforehand.',
    whyImportant: 'Real-world deployment search scenario.'
  },

  // UNIT 3
  {
    unitId: 'unit-3',
    id: 'u3-q1',
    marks: 10,
    topic: 'Minimax & Alpha-Beta Pruning',
    question: 'Explain the Minimax Algorithm for 2-player zero-sum games. Demonstrate Alpha-Beta Pruning with a step-by-step game tree example.',
    shortAnswer: 'Minimax calculates optimal decision for MAX player assuming MIN player plays optimally. Alpha-Beta pruning eliminates subtrees that cannot affect final outcome using alpha (MAX best choice) and beta (MIN best choice) bounds.',
    detailedAnswer: '1. Minimax Value: Utility(state) if terminal; Max_a Minimax(Result(s,a)) if MAX turn; Min_a Minimax(Result(s,a)) if MIN turn.\n2. Alpha-Beta Rules:\n   - Alpha α = best value MAX can guarantee so far.\n   - Beta β = best value MIN can guarantee so far.\n   - Prune if α >= β.',
    memoryTip: '💡 Cut the branch whenever α >= β (Why compute worse options when better ones are guaranteed!).',
    whyImportant: 'Highest yield 10-mark question in Unit III.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q2',
    marks: 10,
    topic: 'Constraint Satisfaction Problems (CSP)',
    question: 'Define a Constraint Satisfaction Problem (CSP). Explain Backtracking Search and Forward Checking with the Map Coloring Problem.',
    shortAnswer: 'CSP is defined by Variables X = {X1..Xn}, Domains D = {D1..Dn}, and Constraints C. Backtracking assigns one variable at a time. Forward checking prunes domain values inconsistent with new assignment.',
    detailedAnswer: 'Map Coloring Example: Australia map (WA, NT, SA, Q, NSW, V, T) with Domains {Red, Green, Blue}.\n- Constraint: Neighboring regions must have different colors.\n- Forward Checking: When WA = Red, immediately remove Red from WA\'s neighbors (NT, SA). If any domain becomes empty, backtrack immediately.',
    memoryTip: '💡 CSP = Variables + Allowed Values + Rules. Forward Checking = Detect future failure early.',
    whyImportant: 'Core framework for problem formulation in Unit III.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q3',
    marks: 5,
    topic: 'AC-3 Algorithm',
    question: 'Explain the AC-3 (Arc Consistency Algorithm 3) for constraint propagation.',
    shortAnswer: 'AC-3 maintains a queue of directed arcs (Xi, Xj). It removes values from Domain(Xi) that have no valid supporting value in Domain(Xj) until all arcs are consistent.',
    detailedAnswer: 'If Domain(Xi) is modified, all neighboring arcs (Xk, Xi) must be re-added to queue for re-evaluation. Time complexity is O(n^2 d^3).',
    memoryTip: '💡 Arc Consistent = Every value in X has at least one valid friend in Y.',
    whyImportant: 'Standard constraint propagation algorithm.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q4',
    marks: 5,
    topic: 'Monte Carlo Tree Search (MCTS)',
    question: 'Describe the 4 phases of Monte Carlo Tree Search (MCTS): Selection, Expansion, Simulation, Backpropagation.',
    shortAnswer: 'MCTS builds asymmetric tree by randomized rollouts. 1. Selection (UCB1 formula), 2. Expansion (add child node), 3. Simulation (random game playout), 4. Backpropagation (update win counts).',
    detailedAnswer: 'Used in modern AI champions like AlphaGo and Chess engines where game trees are too deep for exhaustive Minimax.',
    memoryTip: '💡 MCTS 4 Steps: Select best path -> Expand node -> Simulate random outcome -> Backpropagate result.',
    whyImportant: 'Modern AI game engine architecture.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q5',
    marks: 5,
    topic: 'Game Theory & Zero-Sum Games',
    question: 'What is a Zero-Sum Game? How does payoff structure affect decision making?',
    shortAnswer: 'A Zero-Sum game is one where total utility among players is constant: MAX\'s gain is exactly equal to MIN\'s loss (P1 + P2 = 0).',
    detailedAnswer: 'Pure competition means players cannot cooperate. Chess, Checkers, and Go are classic zero-sum deterministic games.',
    memoryTip: '💡 Zero-Sum = Win for me is an exact Loss for you.',
    whyImportant: 'Theoretical foundation for adversarial search.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q6',
    marks: 2,
    topic: 'Alpha and Beta Definitions',
    question: 'Define Alpha and Beta values in Alpha-Beta Pruning.',
    shortAnswer: 'Alpha (α) is the value of the best choice (highest value) found so far for MAX along path. Beta (β) is the value of best choice (lowest value) found so far for MIN along path.',
    detailedAnswer: 'Initially α = -∞ and β = +∞.',
    memoryTip: '💡 α = MAX score floor; β = MIN score ceiling.',
    whyImportant: '2-mark definition question.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q7',
    marks: 5,
    topic: 'Heuristics for CSP Backtracking',
    question: 'Explain MRV (Minimum Remaining Values) and Degree Heuristic in CSP Backtracking.',
    shortAnswer: 'MRV selects variable with fewest remaining legal values ("most constrained variable"). Degree heuristic selects variable involved in most constraints with unassigned variables.',
    detailedAnswer: 'MRV reduces branching factor. Degree heuristic acts as tie-breaker for MRV.',
    memoryTip: '💡 MRV = Pick hardest variable first (Fail-first principle).',
    whyImportant: 'Optimization heuristics for CSPs.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q8',
    marks: 2,
    topic: 'Unary vs Binary Constraints',
    question: 'Distinguish between Unary and Binary Constraints with examples.',
    shortAnswer: 'Unary constraint restricts value of a single variable (e.g. SA != Red). Binary constraint restricts relation between two variables (e.g. SA != WA).',
    detailedAnswer: 'Higher-order constraints involve 3 or more variables (e.g. Sudoku row constraints).',
    memoryTip: '💡 Unary = 1 Variable; Binary = 2 Variables.',
    whyImportant: 'Basic CSP taxonomy.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q9',
    marks: 5,
    topic: 'Evaluation Functions in Games',
    question: 'What is an Evaluation Function in game playing? How does it differ from exact Minimax utility?',
    shortAnswer: 'Evaluation Function estimates board utility when game tree search is cutoff before reaching terminal states due to depth limits.',
    detailedAnswer: 'In Chess, eval function weights pieces (Pawn=1, Knight=3, Queen=9) + positional features.',
    memoryTip: '💡 Eval Function = Heuristic score for unfinished games.',
    whyImportant: 'Practical implementation detail for game AI.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q10',
    marks: 5,
    topic: 'Constraint Propagation vs Search',
    question: 'Differentiate between Constraint Propagation and Search in CSPs.',
    shortAnswer: 'Search makes tentative variable assignments. Constraint propagation uses constraints to enforce consistency and eliminate illegal values before making assignments.',
    detailedAnswer: 'Combining both yields powerful solvers capable of solving 9x9 Sudokus instantly without guessing.',
    memoryTip: '💡 Propagation = Rule deduction; Search = Trial & Error branching.',
    whyImportant: 'Comparative conceptual question.'
  },

  // UNIT 4
  {
    unitId: 'unit-4',
    id: 'u4-q1',
    marks: 10,
    topic: 'Forward Chaining vs Backward Chaining',
    question: 'Compare Forward Chaining and Backward Chaining algorithms in Horn clause logic with complete flowcharts and worked examples.',
    shortAnswer: 'Forward Chaining starts from known facts and applies rules to infer new facts until goal is reached (data-driven). Backward Chaining starts from goal hypothesis and works backward to find supporting facts (goal-driven).',
    detailedAnswer: '1. Forward Chaining: Data-driven. Good for monitoring, diagnosis, and synthesis.\n2. Backward Chaining: Goal-driven. Good for diagnostic expert systems, troubleshooting, and Prolog queries.\n3. Example: Rules: A -> B, B -> C. Fact: A is true. Goal: Is C true?\n   - Forward: Know A -> infer B -> infer C -> Goal reached!\n   - Backward: Goal C -> needs B -> needs A -> A is in KB -> Proved!',
    memoryTip: '💡 Forward = Facts -> Conclusion; Backward = Goal <- Supporting Facts.',
    whyImportant: 'Top 10-mark reasoning algorithm question.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q2',
    marks: 10,
    topic: 'First-Order Logic (FOL)',
    question: 'Explain First-Order Logic (FOL) syntax and semantics. Translate the following sentences into FOL:\n(a) Every student likes AI.\n(b) Some students are smart.\n(c) Anyone who passes the exam is happy.',
    shortAnswer: 'FOL extends Propositional Logic by introducing Objects, Relations (Predicates), Functions, and Quantifiers (Universal ∀ and Existential ∃).',
    detailedAnswer: 'FOL Translations:\n(a) ∀x (Student(x) -> Likes(x, AI))\n(b) ∃x (Student(x) ^ Smart(x))\n(c) ∀x (Passes(x, Exam) -> Happy(x)).\nKey Rule: Universal quantifier ∀ uses Implication (->); Existential quantifier ∃ uses Conjunction (^).',
    memoryTip: '💡 Universal ∀ goes with -> (If student, then likes); Existential ∃ goes with ^ (Is student AND smart).',
    whyImportant: 'Standard logic translation exam question.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q3',
    marks: 5,
    topic: 'Resolution Refutation in Propositional Logic',
    question: 'Explain Resolution proof by contradiction in Propositional Logic.',
    shortAnswer: 'To prove sentence alpha from KB (KB |= alpha), negate alpha (~alpha), add it to KB in CNF, and derive empty clause () via Resolution rule: (A v B) ^ (~A v C) |= (B v C).',
    detailedAnswer: 'If empty clause () is derived, a contradiction occurs, proving original alpha is true.',
    memoryTip: '💡 Resolution: Add negation -> Resolve complimentary literals -> Empty clause proves true!',
    whyImportant: 'Core automated theorem proving method.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q4',
    marks: 5,
    topic: 'Semantic Networks & Frames',
    question: 'Explain Semantic Networks and Frame-based representation with structural diagrams.',
    shortAnswer: 'Semantic Networks represent knowledge via node concepts and labeled directed relational edges (e.g. IS-A, HAS-A). Frames structure knowledge into slots (attributes) and fillers (values).',
    detailedAnswer: 'Inheritance allows child nodes/frames to automatically inherit properties of parent classes.',
    memoryTip: '💡 Semantic Net = Graph with labeled edges; Frame = Object/Struct with property slots.',
    whyImportant: 'Classic structured knowledge representation.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q5',
    marks: 5,
    topic: 'Expert Systems Architecture',
    question: 'Draw the general architecture of an Expert System. Explain Knowledge Base, Inference Engine, and User Interface.',
    shortAnswer: 'An Expert System emulates human expert decision making using Knowledge Base (rules/facts), Inference Engine (reasoning mechanism), and User Interface.',
    detailedAnswer: 'Knowledge Acquisition Module allows experts to update rules. Explanation Facility explains WHY a conclusion was reached.',
    memoryTip: '💡 Expert System = Rules (Knowledge) + Inference Engine (Brain) + UI.',
    whyImportant: 'Standard applied AI architecture question.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q6',
    marks: 2,
    topic: 'Horn Clause',
    question: 'Define a Horn Clause and explain why it is important for reasoning.',
    shortAnswer: 'A Horn clause is a disjunction of literals with AT MOST ONE positive literal (e.g. ~A v ~B v C, equivalent to A ^ B -> C). It enables linear time inference in Forward/Backward chaining.',
    detailedAnswer: 'Crucial for logic programming languages like Prolog.',
    memoryTip: '💡 Horn Clause = At most 1 positive literal -> Enables fast linear reasoning.',
    whyImportant: '2-mark definition question.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q7',
    marks: 2,
    topic: 'Modus Ponens',
    question: 'State Modus Ponens inference rule with an example.',
    shortAnswer: 'Modus Ponens: Given P -> Q and P, infer Q.',
    detailedAnswer: 'Example: If it rains, the ground gets wet. It is raining. Therefore, the ground is wet.',
    memoryTip: '💡 Modus Ponens = (P -> Q) and P yields Q.',
    whyImportant: 'Fundamental inference rule.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q8',
    marks: 5,
    topic: 'Unification in FOL',
    question: 'What is Unification in First-Order Logic? Give an example of unifying two terms.',
    shortAnswer: 'Unification is the process of finding a substitution θ that makes two logical expressions identical.',
    detailedAnswer: 'Example: Unify Knows(John, x) and Knows(y, Jane). Substitution θ = {x/Jane, y/John} yields Knows(John, Jane).',
    memoryTip: '💡 Unification = Finding variable values to make two terms match.',
    whyImportant: 'Essential prerequisite for FOL resolution.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q9',
    marks: 5,
    topic: 'Conjunctive Normal Form (CNF)',
    question: 'Outline the steps to convert a First-Order Logic sentence into Conjunctive Normal Form (CNF).',
    shortAnswer: '1. Eliminate implications (->), 2. Move ~ inward, 3. Standardize variables, 4. Skolemize existential quantifiers, 5. Drop universal quantifiers, 6. Distribute v over ^.',
    detailedAnswer: 'Resulting CNF is a conjunction of disjunctions required for Resolution.',
    memoryTip: '💡 CNF = AND of OR clauses.',
    whyImportant: 'Algorithmic logic transformation.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q10',
    marks: 5,
    topic: 'Knowledge-Based Agent Cycle',
    question: 'Describe the TELL-ASK cycle of a Knowledge-Based Agent.',
    shortAnswer: '1. TELL KB current percepts, 2. ASK KB what action to perform using inference, 3. TELL KB action executed.',
    detailedAnswer: 'Enables agent to maintain state and infer hidden properties of environment.',
    memoryTip: '💡 TELL percept -> ASK action -> TELL executed action.',
    whyImportant: 'Agent-logic interface concept.'
  },

  // UNIT 5
  {
    unitId: 'unit-5',
    id: 'u5-q1',
    marks: 10,
    topic: 'AI Applications Across Domains',
    question: 'Discuss the transformational role of Artificial Intelligence in (a) Healthcare, (b) Smart Cities, (c) Finance, and (d) Agriculture with real-world case studies.',
    shortAnswer: 'AI transforms domains through predictive modeling, computer vision diagnostics, autonomous navigation, algorithmic fraud detection, and precision yield farming.',
    detailedAnswer: '1. Healthcare: Computer Vision tumor detection in MRI/CT scans (e.g. Google DeepMind Health), AI drug discovery.\n2. Smart Cities: Intelligent traffic signal control (adaptive timing), smart energy grids, autonomous public transit.\n3. Finance: Real-time credit card fraud detection, algorithmic trading, automated risk assessment.\n4. Agriculture: Drones with Computer Vision for targeted pesticide spraying, soil moisture prediction models.',
    memoryTip: '💡 Healthcare = Vision Diagnosis; Smart City = Traffic/Grid; Finance = Fraud; Ag Tech = Crop Drones.',
    whyImportant: 'Comprehensive 10-mark application domain essay.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q2',
    marks: 10,
    topic: 'Generative AI & LLMs',
    question: 'Explain the architecture and societal impact of Generative AI and Large Language Models (LLMs). Discuss hallucination and ethical alignment.',
    shortAnswer: 'Generative AI uses Transformer deep learning architectures with self-attention mechanisms to generate text, images, and code. Hallucination occurs when model generates confident falsehoods.',
    detailedAnswer: '1. Transformer Architecture: Self-attention enables modeling long-range contextual dependencies across tokens.\n2. Key Challenges: Hallucination, bias propagation, copyright attribution, energy consumption.\n3. Alignment: Reinforcement Learning from Human Feedback (RLHF) aligns model outputs with human safety guidelines.',
    memoryTip: '💡 Gen AI = Transformers + Self-Attention; RLHF = Safety Alignment.',
    whyImportant: 'Modern state-of-the-art AI application question.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q3',
    marks: 5,
    topic: 'Computer Vision Applications',
    question: 'How do Convolutional Neural Networks (CNNs) enable Object Detection and Autonomous Driving?',
    shortAnswer: 'CNNs extract spatial feature maps (edges, textures, shapes) through convolutional layers. Models like YOLO process camera/LiDAR frames in real-time to detect bounding boxes around pedestrians and vehicles.',
    detailedAnswer: 'Pipeline: Frame capture -> CNN feature extraction -> Bounding box regression -> Obstacle classification.',
    memoryTip: '💡 CNNs extract features; YOLO draws bounding boxes at 60 FPS.',
    whyImportant: 'Core computer vision application.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q4',
    marks: 5,
    topic: 'Natural Language Processing (NLP)',
    question: 'Explain key NLP tasks: Sentiment Analysis, Named Entity Recognition (NER), and Machine Translation.',
    shortAnswer: 'Sentiment Analysis classifies text polarity (positive/negative). NER extracts entities (names, dates, locations). Machine Translation maps text between natural languages.',
    detailedAnswer: 'Powered by recurrent architectures (LSTM) and modern Transformer encoders (BERT/GPT).',
    memoryTip: '💡 Sentiment = Emotion; NER = Entities (Who/Where); Translation = Language Bridge.',
    whyImportant: 'Standard NLP application breakdown.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q5',
    marks: 5,
    topic: 'AI in Cybersecurity',
    question: 'Explain how AI detects zero-day exploits and network anomalies.',
    shortAnswer: 'Traditional security relies on signature matching. AI uses unsupervised anomaly detection to flag behavior deviating from baseline network traffic.',
    detailedAnswer: 'Machine Learning models detect data exfiltration, automated botnet probes, and phish attempts in real time.',
    memoryTip: '💡 AI Security = Behavior Anomaly Detection instead of static signatures.',
    whyImportant: 'High-demand applied AI topic.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q6',
    marks: 2,
    topic: 'AI in Agriculture',
    question: 'What is Precision Agriculture in AI?',
    shortAnswer: 'Precision Agriculture uses AI sensors, satellite imagery, and drone vision to optimize fertilizer, water, and pesticide application to specific crop micro-zones.',
    detailedAnswer: 'Reduces chemical waste while maximizing crop yields.',
    memoryTip: '💡 Precision Ag = Targeted water/fertilizer per square meter.',
    whyImportant: '2-mark domain definition.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q7',
    marks: 2,
    topic: 'What is AI Hallucination?',
    question: 'Define AI Hallucination in Generative AI models.',
    shortAnswer: 'Hallucination is when an AI model generates plausible-sounding facts, references, or answers that are factually incorrect or unsupported by training data.',
    detailedAnswer: 'Mitigated using Retrieval-Augmented Generation (RAG) and ground-truth grounding.',
    memoryTip: '💡 Hallucination = Confident incorrect output.',
    whyImportant: 'Crucial contemporary AI concept.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q8',
    marks: 5,
    topic: 'AI in Education & EdTech',
    question: 'How do AI Learning Companions (like EduAgent) provide personalized education?',
    shortAnswer: 'AI companions adapt learning pace, detect individual student knowledge gaps through quiz telemetry, provide tailored analogies, and generate dynamic study roadmaps.',
    detailedAnswer: 'Replaces static one-size-fits-all textbooks with interactive feedback loops.',
    memoryTip: '💡 EdTech AI = Adaptive pace + Weak area detection + Personalized guidance.',
    whyImportant: 'Directly mirrors the EduAgent AI project vision!'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q9',
    marks: 5,
    topic: 'Ethical AI & Bias',
    question: 'Explain Algorithmic Bias and Ethical Governance in AI deployments.',
    shortAnswer: 'Algorithmic bias occurs when training data contains historical human prejudices or uneven representation, leading to unfair decisions in hiring, loan approvals, or policing.',
    detailedAnswer: 'Ethical governance requires fairness audits, explainability (XAI), privacy protection, and human-in-the-loop oversight.',
    memoryTip: '💡 Biased Data = Biased AI Output. Needs Audits & Transparency.',
    whyImportant: 'Essential governance & ethics topic.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q10',
    marks: 5,
    topic: 'AI in Smart Manufacturing',
    question: 'Explain Predictive Maintenance in Industry 4.0 using IoT and AI.',
    shortAnswer: 'Sensors track vibration, heat, and acoustics on factory machinery. Machine learning predicts component failure BEFORE breakdown occurs, saving downtime.',
    detailedAnswer: 'Shifts manufacturing from scheduled/reactive repairs to data-driven proactive maintenance.',
    memoryTip: '💡 Predictive Maintenance = Fix machines before they break.',
    whyImportant: 'Industrial automation case study.'
  }
];
