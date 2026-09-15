import React, { useState } from 'react';
import {
  Maximize2,
  Printer,
  Download,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award,
  Zap,
  Target,
  CheckCircle2,
  Lightbulb,
  Layers,
  Cpu,
  Search,
  Grid,
  Database,
  Compass,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  FileText
} from 'lucide-react';

// ══════════════════════════════════════════════════════════════════════════════
// 5 COMPLETE MASTER POSTERS — 1 PER UNIT (100% SYLLABUS ALIGNED)
// ══════════════════════════════════════════════════════════════════════════════
const UNIT_POSTERS = [
  // ────────────────────────────────────────────────────────────────────────────
  // POSTER 1: UNIT I — INTELLIGENT AGENTS & FOUNDATIONS
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit-1',
    unitNumber: 1,
    unitRoman: 'UNIT I',
    badge: 'Comprehensive Syllabus Poster',
    title: 'Intelligent Agents & Problem Formulation',
    subtitle: 'Foundations of AI, PEAS Framework, Agent Architectures & State-Space Search',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    heroAlt: 'Neural intelligent agent architecture',
    stats: [
      { label: 'Topics Covered', value: '11 Concepts' },
      { label: 'Agent Types', value: '5 Classes' },
      { label: 'Environment Types', value: '6 Dimensions' },
      { label: 'Exam Weightage', value: '20-25 Marks' }
    ],
    sections: [
      {
        id: 'u1-foundations',
        number: '01',
        title: 'Foundations & Definitions of Artificial Intelligence',
        tag: 'Core Philosophy & Turing Test',
        image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
        imageAlt: 'AI conceptual thinking brain',
        imageCaption: 'Fig 1.1: Cognitive & rational dimensions of Artificial Intelligence',
        overview: 'Artificial Intelligence is the computational study of systems that perceive, reason, learn, and act rationally in dynamic environments to achieve specified objectives.',
        keyPoints: [
          'Acting Humanly: The Turing Test (1950) — A computer passes if an interrogator cannot distinguish its responses from a human.',
          'Thinking Humanly: Cognitive Science — Modeling computational systems that replicate human neural thought processes.',
          'Thinking Rationally: Laws of Thought — Formal Aristotelian syllogisms and logic for deductive correctness.',
          'Acting Rationally: The Rational Agent Approach — Maximizing expected performance given percept history.'
        ],
        infographic: {
          type: 'grid4',
          items: [
            { label: 'Acting Humanly', desc: 'Turing Test (NLP, Knowledge, Reasoning, ML)', color: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
            { label: 'Thinking Humanly', desc: 'Cognitive Science & Brain Modeling (GPS)', color: '#f0fdf4', border: '#bbf7d0', text: '#047857' },
            { label: 'Thinking Rationally', desc: 'Laws of Thought, Syllogisms & Logic Rules', color: '#fef3c7', border: '#fde68a', text: '#b45309' },
            { label: 'Acting Rationally', desc: 'Rational Agent: Maximizes Expected Utility', color: '#f3e8ff', border: '#e9d5ff', text: '#7e22ce' }
          ]
        },
        examTip: 'Exam Key: The modern consensus in AI focuses on "Acting Rationally" (Rational Agents) because it allows mathematical optimization without needing to mimic biological human quirks.'
      },
      {
        id: 'u1-peas',
        number: '02',
        title: 'PEAS Framework & Task Environments',
        tag: 'Agent Specification Matrix',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
        imageAlt: 'Autonomous self-driving vehicle with sensors',
        imageCaption: 'Fig 1.2: Autonomous driving task environment — LiDAR, cameras & actuators',
        overview: 'The PEAS framework is the universal standard for specifying an intelligent agent’s operational scope: Performance Measure, Environment, Actuators, and Sensors.',
        keyPoints: [
          'P — Performance Measure: The objective criteria used to evaluate the agent’s success in its environment.',
          'E — Environment: The external world in which the agent lives and acts.',
          'A — Actuators: The mechanism through which the agent exerts actions upon the environment.',
          'S — Sensors: The perception devices that gather information about current states.'
        ],
        infographic: {
          type: 'peasMatrix',
          exampleTitle: 'Case Study: Autonomous Self-Driving Vehicle',
          p: 'Safety, travel time, legal compliance, comfort, energy efficiency',
          e: 'Urban streets, highways, pedestrians, weather, other vehicles, signs',
          a: 'Steering column, accelerator, friction brakes, turn signals, audio horn',
          s: 'Stereo cameras, LiDAR, radar, GPS, sonar, odometer, engine sensors'
        },
        examTip: '10-Mark Question Trap: Never confuse Actuators (outputs like steering wheel) with Sensors (inputs like cameras). Always provide the complete 4-letter matrix for any given agent.'
      },
      {
        id: 'u1-architectures',
        number: '03',
        title: 'The 5 Agent Architecture Hierarchy',
        tag: 'System Complexity Ladder',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
        imageAlt: 'Robotics agent architecture hierarchy',
        imageCaption: 'Fig 1.3: Evolution from simple reflex mechanisms to learning agents',
        overview: 'Agents range in internal complexity from stateless reflex rules to goal-directed systems with internal memory, utility trade-offs, and online self-improvement elements.',
        keyPoints: [
          'Simple Reflex Agent: Directly maps current percepts to actions using condition-action rules [Percept → Rule → Action]. Ignores history.',
          'Model-Based Reflex Agent: Maintains internal state representing how the world evolves and how agent actions affect it. Handles partial observability.',
          'Goal-Based Agent: Combines world state with goal information to plan sequences of actions that reach desired target outcomes.',
          'Utility-Based Agent: Employs a continuous mathematical utility function U(S) to resolve trade-offs between competing goals and choose the happiest outcome.',
          'Learning Agent: Separated into 4 elements: Critic (evaluates performance), Learning Element (makes improvements), Performance Element (selects actions), and Problem Generator (explores new behaviors).'
        ],
        infographic: {
          type: 'ladder',
          steps: [
            { level: '1', title: 'Simple Reflex', formula: 'Percept → Condition-Action Rule → Actuator', desc: 'No memory; works only in fully observable domains' },
            { level: '2', title: 'Model-Based', formula: 'State + Model of World Dynamics + Rules', desc: 'Maintains internal belief state to bridge unobserved gaps' },
            { level: '3', title: 'Goal-Based', formula: 'State + Goals + Search & Planning', desc: 'Evaluates whether prospective actions lead toward target goals' },
            { level: '4', title: 'Utility-Based', formula: 'State + Utility Function U(s) → Real Score', desc: 'Balances conflicting goals (e.g. speed vs. safety vs. fuel)' },
            { level: '5', title: 'Learning Agent', formula: 'Critic + Learning Element + Performance Element + Explorer', desc: 'Improves over time through experience and feedback' }
          ]
        },
        examTip: 'Viva Question: What is the purpose of the Problem Generator in a Learning Agent? It suggests suboptimal experimental actions to discover new, potentially better solutions (exploration vs exploitation).'
      },
      {
        id: 'u1-environments',
        number: '04',
        title: 'Environment Properties & Problem Formulation',
        tag: '6 Environmental Dimensions & State Space',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
        imageAlt: 'Network nodes and state space formulation',
        imageCaption: 'Fig 1.4: State-space graph with transition edges and discrete states',
        overview: 'The complexity of an agent is fundamentally dictated by its environment. Problems are formally framed as a 5-tuple state-space search formulation.',
        keyPoints: [
          'Fully vs. Partially Observable: Sensors provide complete state info (Chess) vs incomplete (Poker, driving).',
          'Deterministic vs. Stochastic: Next state is 100% determined by current state and action (Chess) vs contains randomness (Backgammon, weather).',
          'Episodic vs. Sequential: Current decision does not affect future decisions (defect triage) vs decisions carry cumulative consequences (chess, driving).',
          'Static vs. Dynamic: Environment does not change while agent is deliberating (crosswords) vs changes continuously (taxi driving).',
          'Discrete vs. Continuous: Finite distinct states and actions (tic-tac-toe) vs continuous real numbers (autonomous steering angles).',
          'Single-Agent vs. Multi-Agent: Agent operates alone (crossword puzzle) vs competitive or cooperative entities (chess, traffic).'
        ],
        infographic: {
          type: 'formulationBox',
          title: 'Formal Problem Formulation (5-Tuple)',
          items: [
            { sym: 'S₀', name: 'Initial State', detail: 'The starting configuration of the agent.' },
            { sym: 'ACTIONS(s)', name: 'Action Set', detail: 'Legal actions available to the agent in state s.' },
            { sym: 'RESULT(s, a)', name: 'Transition Model', detail: 'Successor state returned by executing action a in s.' },
            { sym: 'GOAL_TEST(s)', name: 'Goal Test', detail: 'Boolean function determining if current state is the target.' },
            { sym: 'c(s, a, s\')', name: 'Path Cost', detail: 'Sum of step costs incurred along the trajectory.' }
          ]
        },
        examTip: 'Quick Checklist: Taxi driving is the most difficult task environment: Partially observable, Stochastic, Sequential, Dynamic, Continuous, and Multi-Agent!'
      }
    ],
    cheatSheet: {
      formulaTitle: 'Unit I Quick Formula & Architecture Guide',
      points: [
        'Agent Function: f: P* → A (Maps percept sequences to actions)',
        'Agent Program: Architecture + Program running on physical hardware',
        'State Space Size: In 8-Puzzle = 9! / 2 = 181,440 reachable states; In Chess ≈ 10⁴⁰ legal states',
        'Rationality ≠ Omniscience: Rationality maximizes expected performance, not actual perfection with hindsight'
      ]
    }
  },

  // ────────────────────────────────────────────────────────────────────────────
  // POSTER 2: UNIT II — PROBLEM SOLVING & SEARCH STRATEGIES
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit-2',
    unitNumber: 2,
    unitRoman: 'UNIT II',
    badge: 'Comprehensive Syllabus Poster',
    title: 'Problem Solving & Search Algorithms',
    subtitle: 'Uninformed Search, Informed Heuristics, A* Optimality & Local Search Strategies',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80',
    heroAlt: 'Graph traversal and search algorithm network',
    stats: [
      { label: 'Search Algos', value: '7 Traversal Types' },
      { label: 'Evaluation Func', value: 'f(n) = g(n) + h(n)' },
      { label: 'Admissibility', value: 'h(n) ≤ h*(n)' },
      { label: 'Exam Weightage', value: '25 Marks' }
    ],
    sections: [
      {
        id: 'u2-uninformed',
        number: '01',
        title: 'Uninformed (Blind) Search Strategies',
        tag: 'BFS vs DFS vs Uniform Cost Search',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        imageAlt: 'Microchip circuit tree traversal',
        imageCaption: 'Fig 2.1: Frontier expansion in tree search without heuristic domain knowledge',
        overview: 'Uninformed search methods explore the state space systematically using only problem formulation data without any estimate of distance to the goal.',
        keyPoints: [
          'Breadth-First Search (BFS): Expands shallowest frontier node first using a FIFO Queue. Guaranteed Complete and Optimal for unit step costs. Time O(bᵈ), Space O(bᵈ). Memory is the primary bottleneck.',
          'Depth-First Search (DFS): Expands deepest frontier node first using a LIFO Stack. Space efficient: O(bm) linear storage! Not guaranteed Complete in infinite spaces; Non-optimal.',
          'Depth-Limited Search (DLS) & IDDFS: Enforces depth limit l. Iterative Deepening (IDDFS) combines BFS optimality with DFS linear O(bd) memory by iterating limits 0, 1, 2... d.',
          'Uniform Cost Search (UCS): Expands node with lowest cumulative path cost g(n) using a Priority Queue. Optimal for general non-negative step costs.'
        ],
        infographic: {
          type: 'table',
          headers: ['Criterion', 'BFS', 'DFS', 'IDDFS', 'UCS'],
          rows: [
            ['Frontier Data Structure', 'FIFO Queue', 'LIFO Stack', 'LIFO Stack (Iterative)', 'Priority Queue [min g(n)]'],
            ['Completeness', 'Yes (if b is finite)', 'No (fails on loops)', 'Yes (if b is finite)', 'Yes (if step cost ≥ ε > 0)'],
            ['Time Complexity', 'O(bᵈ)', 'O(bᵐ)', 'O(bᵈ)', 'O(b¹⁺⌊C*/ε⌋)'],
            ['Space Complexity', 'O(bᵈ) [High]', 'O(bm) [Linear]', 'O(bd) [Linear!]', 'O(b¹⁺⌊C*/ε⌋)'],
            ['Optimality', 'Yes (unit costs)', 'No', 'Yes (unit costs)', 'Yes (general costs)']
          ]
        },
        examTip: 'Exam Favorite: Why is IDDFS preferred over BFS? It achieves the exact same optimal solution as BFS with the same asymptotic time O(bᵈ), but uses only linear memory O(bd) instead of exponential memory!'
      },
      {
        id: 'u2-informed',
        number: '02',
        title: 'Informed Heuristic Search & A* Algorithm',
        tag: 'Evaluation Function & Graph Search',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
        imageAlt: 'GPS map navigation pathfinding',
        imageCaption: 'Fig 2.2: A* heuristic pathfinding combining known path cost and straight-line distance',
        overview: 'Informed search uses problem-specific heuristic functions h(n) to estimate the cost from node n to the nearest goal, dramatically pruning unexplored branches.',
        keyPoints: [
          'Greedy Best-First Search: Expands node with minimum h(n). Fast and intuitive like a compass, but susceptible to dead ends; neither complete nor optimal.',
          'A* Search: Combines actual path cost from start g(n) with estimated remaining cost h(n): f(n) = g(n) + h(n).',
          'A* Optimality: In Tree Search, A* is guaranteed optimal if h(n) is admissible (never overestimates). In Graph Search, A* is guaranteed optimal if h(n) is consistent (monotonic).',
          'Pruning Efficiency: A* is optimally efficient: no other optimal algorithm expanding the same heuristic can expand fewer nodes.'
        ],
        infographic: {
          type: 'equationBreakdown',
          title: 'A* Evaluation Function: f(n) = g(n) + h(n)',
          parts: [
            { sym: 'g(n)', label: 'Exact Cost to Node', desc: 'Sum of edge weights from initial state S₀ to current node n.' },
            { sym: '+', label: 'Combination', desc: 'Balances past expenditure with future outlook.' },
            { sym: 'h(n)', label: 'Heuristic Estimate', desc: 'Estimated distance from node n to the nearest goal state.' },
            { sym: '=', label: 'Result', desc: 'Total estimated cost of the cheapest solution passing through n.' }
          ]
        },
        examTip: 'Key Rule: If h(n) = 0 for all nodes, A* simplifies exactly to Uniform Cost Search (Dijkstra\'s algorithm)!'
      },
      {
        id: 'u2-heuristics',
        number: '03',
        title: 'Heuristic Properties: Admissibility & Consistency',
        tag: 'Mathematical Guarantees for Optimality',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
        imageAlt: 'Mathematical geometric calculations',
        imageCaption: 'Fig 2.3: Triangle inequality property underpinning heuristic consistency',
        overview: 'Heuristics must obey mathematical bounds to ensure that the first goal popped from the priority queue is unconditionally the true optimal path.',
        keyPoints: [
          'Admissibility Condition: 0 ≤ h(n) ≤ h*(n), where h*(n) is the true optimal cost from n to goal. An admissible heuristic is optimistic.',
          'Consistency (Monotonicity): For every node n and successor n\' via action a: h(n) ≤ c(n, a, n\') + h(n\'). Satisfies the triangle inequality.',
          'Theorem: Every consistent heuristic is admissible. Consistency guarantees that f(n) values along any path never decrease monotonically.',
          'Common Examples: Straight-line Euclidean distance in road networks; Manhattan Distance (h₁) vs Misplaced Tiles (h₂) in the 8-puzzle. Manhattan dominates misplaced tiles (h₁ ≥ h₂).'
        ],
        infographic: {
          type: 'proofBox',
          title: 'Why Consistency Guarantees Graph Search Optimality',
          steps: [
            '1. By definition of consistency: f(n\') = g(n\') + h(n\') = g(n) + c(n,a,n\') + h(n\') ≥ g(n) + h(n) = f(n).',
            '2. Therefore, f-values are non-decreasing along any sequence of expanded nodes.',
            '3. Whenever A* selects node n for expansion, the optimal path to n has already been found.',
            '4. No expanded node ever needs to be reopened, keeping graph search linear in closed-list checks!'
          ]
        },
        examTip: 'Exam Definition: Heuristic h₂ dominates h₁ if for all n, h₂(n) ≥ h₁(n). A dominating admissible heuristic will always expand fewer or equal nodes than the dominated one!'
      },
      {
        id: 'u2-local',
        number: '04',
        title: 'Local Search: Hill Climbing & Simulated Annealing',
        tag: 'Optimization in Vast State Landscapes',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
        imageAlt: 'Mountain peak topography landscape',
        imageCaption: 'Fig 2.4: Energy landscape with global maximum, local maxima, ridges and plateaus',
        overview: 'When the path to the goal does not matter and only the final state is sought (e.g. 8-Queens, VLSI layout), local search algorithms iteratively move to neighboring states.',
        keyPoints: [
          'Hill Climbing (Greedy Local Search): Continuously moves in the direction of increasing value/elevation. Terminates when no neighbor has a higher score.',
          'Hill Climbing Pitfalls: 1. Local Maxima (peaks inferior to global peak), 2. Ridges (slopes requiring multi-step navigation), 3. Plateaus (flat areas with no gradient).',
          'Simulated Annealing: Escapes local maxima by allowing downhill moves with probability P = exp(-ΔE / T). Temperature T decays on a schedule.',
          'Genetic Algorithms: Population-based search using Selection, Crossover (recombination), and Mutation to evolve solutions across generations.'
        ],
        infographic: {
          type: 'annealingFormula',
          title: 'Simulated Annealing Acceptance Probability',
          formula: 'P = exp( -ΔE / T )',
          legend: [
            'ΔE = Magnitude of performance drop (worse move)',
            'T = Current temperature parameter (starts hot, slowly cools to 0)',
            'When T is high: Agent accepts bad moves frequently (Exploration)',
            'When T approaches 0: Agent behaves like pure greedy hill climbing (Exploitation)'
          ]
        },
        examTip: 'Exam Traps: What is Random Restart Hill Climbing? Running a series of hill climbs starting from randomly generated initial states; complete with probability 1 if space is finite.'
      }
    ],
    cheatSheet: {
      formulaTitle: 'Unit II Master Formulas & Complexity Reference',
      points: [
        'A* Evaluation: f(n) = g(n) + h(n) | Greedy Best-First: f(n) = h(n)',
        'Admissibility: 0 ≤ h(n) ≤ h*(n) | Consistency: h(n) ≤ c(n, a, n\') + h(n\')',
        '8-Puzzle Heuristics: Manhattan Distance h = ∑(|x₁-x₂| + |y₁-y₂|) | Misplaced Tiles h = count(tile ≠ goal)',
        'Simulated Annealing: P(accept worse move) = e^(-ΔE/T)'
      ]
    }
  },

  // ────────────────────────────────────────────────────────────────────────────
  // POSTER 3: UNIT III — CONSTRAINTS & ADVERSARIAL GAME SEARCH
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit-3',
    unitNumber: 3,
    unitRoman: 'UNIT III',
    badge: 'Comprehensive Syllabus Poster',
    title: 'Constraints & Adversarial Search',
    subtitle: 'Constraint Satisfaction Problems (CSPs), AC-3 Algorithm, Minimax & Alpha-Beta Pruning',
    heroImage: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1200&q=80',
    heroAlt: 'Chess pieces strategic game board',
    stats: [
      { label: 'CSP Form', value: 'X, D, C Triplet' },
      { label: 'AC-3 Complexity', value: 'O(c · d³)' },
      { label: 'Pruning Speedup', value: 'O(bᵐ/²) vs O(bᵐ)' },
      { label: 'Exam Weightage', value: '25 Marks' }
    ],
    sections: [
      {
        id: 'u3-csp',
        number: '01',
        title: 'Constraint Satisfaction Problems (CSPs)',
        tag: 'Variables, Domains & Constraints',
        image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80',
        imageAlt: 'Sudoku puzzle grid constraints',
        imageCaption: 'Fig 3.1: Constraint graph with variables as nodes and binary constraints as edges',
        overview: 'CSPs represent states as a set of variables with values from domains, subject to constraints. Solved by assigning values without violating any constraints.',
        keyPoints: [
          'CSP Triplet: Variables X = {X₁, ..., Xₙ}, Domains D = {D₁, ..., Dₙ}, Constraints C = {C₁, ..., Cₘ}.',
          'Constraint Types: Unary (restricts single variable, e.g. SA ≠ Green), Binary (relates two variables, e.g. SA ≠ WA), Higher-order / Global (e.g. Alldiff(V₁, ..., Vₖ)).',
          'Classic Examples: Map Coloring (Australia 3 colors), N-Queens, Sudoku, Cryptarithmetic (TWO + TWO = FOUR).',
          'Backtracking Search: Standard DFS with single-variable assignments. Enhanced by MRV (Minimum Remaining Values heuristic) and LCV (Least Constraining Value heuristic).'
        ],
        infographic: {
          type: 'cspVisual',
          title: 'Case Study: Map Coloring of Australia (3 Colors: Red, Green, Blue)',
          vars: 'WA, NT, SA, Q, NSW, V, T',
          rule: 'Adjacent territories cannot share the exact same color (e.g., WA ≠ NT, WA ≠ SA)',
          heuristics: [
            'MRV (Fail-First): Pick unassigned variable with the fewest legal values in its domain.',
            'Degree Heuristic: Pick variable involved in the largest number of constraints with other unassigned variables.',
            'LCV (Fail-Last): Pick value that leaves maximum flexibility for neighbor domains.'
          ]
        },
        examTip: 'High-Yield Exam Point: MRV heuristic selects WHICH variable to assign next, whereas LCV heuristic selects WHICH value to try first for that variable!'
      },
      {
        id: 'u3-ac3',
        number: '02',
        title: 'Constraint Propagation: AC-3 & Forward Checking',
        tag: 'Arc Consistency Algorithm',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        imageAlt: 'Network nodes and server connections',
        imageCaption: 'Fig 3.2: Arc consistency graph propagating domain prunings across variable links',
        overview: 'Constraint propagation detects failures early before deep recursive backtracking occurs by enforcing consistency properties across connected arcs.',
        keyPoints: [
          'Forward Checking: Whenever variable X is assigned, immediately check each unassigned neighbor Y and delete any value in D(Y) that violates the constraint with X.',
          'Arc Consistency: Directed arc Xᵢ → Xⱼ is consistent if for every value x in D(Xᵢ), there exists some legal value y in D(Xⱼ) satisfying the constraint.',
          'AC-3 Algorithm: Uses a queue of arcs. If arc (Xᵢ, Xⱼ) is revised and D(Xᵢ) shrinks, re-add all incoming arcs (Xₖ, Xᵢ) back into the queue.',
          'Complexity: AC-3 runs in O(c · d³) time, where c is number of binary constraints and d is maximum domain size.'
        ],
        infographic: {
          type: 'algoFlow',
          title: 'AC-3 Algorithm Execution Trace',
          steps: [
            '1. Initialize queue Q with all binary arcs in the CSP: { (Xᵢ, Xⱼ), (Xⱼ, Xᵢ), ... }',
            '2. While Q is not empty, pop arc (Xᵢ, Xⱼ).',
            '3. Check: Is there any x ∈ D(Xᵢ) with NO supporting y ∈ D(Xⱼ)? If yes, remove x from D(Xᵢ).',
            '4. If D(Xᵢ) became empty, return failure immediately (no solution possible!).',
            '5. If D(Xᵢ) was reduced, push all neighboring arcs (Xₖ, Xᵢ) for all k ≠ j back into Q.'
          ]
        },
        examTip: 'Key Difference: Forward checking only checks arcs from unassigned variables to the current assigned variable. AC-3 checks arcs between ALL unassigned variables iteratively!'
      },
      {
        id: 'u3-minimax',
        number: '03',
        title: 'Adversarial Game Search & Minimax Algorithm',
        tag: 'Optimal Decision-Making in 2-Player Games',
        image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80',
        imageAlt: 'Chess tactical pieces and game tree',
        imageCaption: 'Fig 3.3: Two-player zero-sum game tree evaluated through Minimax recursive values',
        overview: 'In deterministic, fully observable, zero-sum 2-player games (like Chess or Tic-Tac-Toe), Minimax computes the optimal strategy assuming an optimal opponent.',
        keyPoints: [
          'Game Formulation: Initial State S₀, Player(s), Actions(s), Result(s, a), Terminal-Test(s), Utility(s, p).',
          'Minimax Logic: MAX chooses action that maximizes payoff; MIN chooses action that minimizes MAX\'s payoff.',
          'Recursive Function: Minimax(s) = Utility(s) if terminal; max(Minimax(Result(s,a))) if MAX\'s turn; min(Minimax(Result(s,a))) if MIN\'s turn.',
          'Complexity: Time O(bᵐ) and Space O(bm), where b is legal moves per state and m is maximum game depth. Infeasible for complete chess trees without depth limits!'
        ],
        infographic: {
          type: 'gameTree',
          title: 'Minimax Decision Logic',
          nodes: [
            { level: 'MAX Root', val: 'Returns max(3, 2) = 3', color: '#eff6ff' },
            { level: 'MIN Node L', val: 'Evaluates children [3, 12, 8] → picks min = 3', color: '#fef2f2' },
            { level: 'MIN Node R', val: 'Evaluates children [2, 4, 6] → picks min = 2', color: '#fef2f2' },
            { level: 'Leaf Payoffs', val: 'Terminal game utility scores evaluated at search horizon', color: '#f8fafc' }
          ]
        },
        examTip: 'Syllabus Focus: When game trees are too deep to reach terminal leaves, we replace terminal tests with Depth Cutoffs and replace utility functions with Heuristic Evaluation Functions.'
      },
      {
        id: 'u3-alphabeta',
        number: '04',
        title: 'Alpha-Beta Pruning Optimization & MCTS',
        tag: 'Branch Pruning & Monte Carlo Tree Search',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
        imageAlt: 'Data science algorithmic tree pruning',
        imageCaption: 'Fig 3.4: Alpha-beta bounds pruning subtrees that cannot influence the final decision',
        overview: 'Alpha-Beta pruning removes subtrees that are mathematically guaranteed not to affect the root decision, doubling searchable search depth in the same compute time.',
        keyPoints: [
          'Alpha (α): Value of the best (highest-value) choice found so far by MAX along the search path.',
          'Beta (β): Value of the best (lowest-value) choice found so far by MIN along the search path.',
          'Pruning Rule: Prune the remaining children of a node whenever α ≥ β.',
          'Efficiency: With perfect move ordering, time complexity drops from O(bᵐ) to O(bᵐ/²). For Chess, this doubles the practical lookahead from depth 6 to depth 12!',
          'Monte Carlo Tree Search (MCTS): Used in AlphaGo for games with huge branching factors. 4 steps: 1. Selection (UCT formula) → 2. Expansion → 3. Simulation (Random Rollout) → 4. Backpropagation.'
        ],
        infographic: {
          type: 'mcts4Steps',
          title: 'Monte Carlo Tree Search (MCTS) 4-Phase Cycle',
          phases: [
            { step: '1. Selection', desc: 'Traverse from root using UCT (Upper Confidence bound for Trees) to balance exploration and exploitation.' },
            { step: '2. Expansion', desc: 'Add one or more new legal child nodes to the expanding search tree.' },
            { step: '3. Simulation', desc: 'Perform a fast random rollout playout from the new node until a terminal game state is reached.' },
            { step: '4. Backpropagation', desc: 'Backpropagate the rollout win/loss result up the path to update visit counts and win rates.' }
          ]
        },
        examTip: 'Viva Favorite: Does Alpha-Beta pruning change the final minimax value at the root node? Absolutely NOT. It produces the exact same decision as pure Minimax, just much faster by ignoring irrelevant branches.'
      }
    ],
    cheatSheet: {
      formulaTitle: 'Unit III Master Rules & Pruning Criteria',
      points: [
        'CSP Representation: Triplet <X, D, C> | AC-3 Complexity: O(c · d³)',
        'MRV Heuristic = Choose variable with min remaining domain values (Fail-First)',
        'Alpha-Beta Condition: Prune branch when α ≥ β (where α = best MAX score, β = best MIN score)',
        'Optimal Pruned Tree Complexity: O(b^(m/2)) — doubles effective lookahead depth'
      ]
    }
  },

  // ────────────────────────────────────────────────────────────────────────────
  // POSTER 4: UNIT IV — KNOWLEDGE REPRESENTATION & REASONING
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit-4',
    unitNumber: 4,
    unitRoman: 'UNIT IV',
    badge: 'Comprehensive Syllabus Poster',
    title: 'Knowledge Representation & Logic',
    subtitle: 'Propositional Logic, First-Order Logic, Inference Engines & Forward/Backward Chaining',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&q=80',
    heroAlt: 'Digital symbolic logic connections',
    stats: [
      { label: 'Logic Types', value: 'Propositional & FOL' },
      { label: 'Inference Types', value: 'Forward & Backward' },
      { label: 'Key Rule', value: 'Modus Ponens & Resolution' },
      { label: 'Exam Weightage', value: '25 Marks' }
    ],
    sections: [
      {
        id: 'u4-kba',
        number: '01',
        title: 'Knowledge-Based Agents & Propositional Logic',
        tag: 'Knowledge Base (KB), TELL & ASK',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
        imageAlt: 'Library books knowledge organization',
        imageCaption: 'Fig 4.1: Knowledge base storing logical sentences queried by an inference engine',
        overview: 'Knowledge-Based Agents (KBAs) maintain an internal representation of the world in formal logic sentences. They reason about unobserved facts via inference.',
        keyPoints: [
          'KBA Architecture: Knowledge Base (KB) storing domain axioms + Inference Engine executing sound derivation rules.',
          'Core Operations: TELL(KB, sentence) inserts new knowledge; ASK(KB, query) determines if query is logically entailed (KB ⊨ α).',
          'Propositional Logic Syntax: Atomic propositions (P, Q, R) connected by logical connectives: ¬ (Negation), ∧ (Conjunction), ∨ (Disjunction), ⇒ (Implication), ⇔ (Biconditional).',
          'Entailment & Truth Tables: KB ⊨ α means in every model where KB is true, α must also be true. Evaluated via 2ⁿ truth table enumeration.'
        ],
        infographic: {
          type: 'truthTable',
          title: 'Core Logical Connectives Truth Table',
          headers: ['P', 'Q', '¬P', 'P ∧ Q', 'P ∨ Q', 'P ⇒ Q', 'P ⇔ Q'],
          rows: [
            ['T', 'T', 'F', 'T', 'T', 'T', 'T'],
            ['T', 'F', 'F', 'F', 'T', 'F', 'F'],
            ['F', 'T', 'T', 'F', 'T', 'T', 'F'],
            ['F', 'F', 'T', 'F', 'F', 'T', 'T']
          ]
        },
        examTip: 'Golden Exam Rule: Note that P ⇒ Q is FALSE only when P is True and Q is False! If P is False, the implication P ⇒ Q is vacuously TRUE regardless of Q!'
      },
      {
        id: 'u4-fol',
        number: '02',
        title: 'First-Order Logic (FOL) & Quantifiers',
        tag: 'Predicates, Functions, ∀ & ∃',
        image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80',
        imageAlt: 'Complex mathematical equations and quantifiers',
        imageCaption: 'Fig 4.2: First-Order Logic representing objects, predicates, and universal relations',
        overview: 'While propositional logic only asserts facts, First-Order Logic (FOL) represents worlds containing objects, relations (predicates), functions, and quantifiers.',
        keyPoints: [
          'Elements: Constants (John, Mary), Variables (x, y), Predicates (Brother(x, y)), Functions (MotherOf(x)).',
          'Universal Quantifier (∀): "For all x". Connects naturally with Implication (⇒). Example: "All humans are mortal" → ∀x [Human(x) ⇒ Mortal(x)].',
          'Existential Quantifier (∃): "There exists some x". Connects naturally with Conjunction (∧). Example: "Someone is smart" → ∃x [Person(x) ∧ Smart(x)].',
          'Quantifier Duality (De Morgan\'s Laws for Quantifiers): ¬∀x P(x) ≡ ∃x ¬P(x) and ¬∃x P(x) ≡ ∀x ¬P(x).'
        ],
        infographic: {
          type: 'folRules',
          title: 'Standard English-to-FOL Translation Matrix',
          translations: [
            { eng: 'Every student loves AI', fol: '∀x [Student(x) ⇒ Loves(x, AI)]', note: 'Use ⇒ with ∀' },
            { eng: 'Some student got an A', fol: '∃x [Student(x) ∧ GradeA(x)]', note: 'Use ∧ with ∃' },
            { eng: 'No student failed', fol: '¬∃x [Student(x) ∧ Failed(x)]  ≡  ∀x [Student(x) ⇒ ¬Failed(x)]', note: 'Quantifier duality' },
            { eng: 'Brothers are siblings', fol: '∀x,y [Brother(x, y) ⇒ Sibling(x, y)]', note: 'Multi-variable predicate' }
          ]
        },
        examTip: 'Universal Exam Trap: NEVER write ∀x [Student(x) ∧ Loves(x, AI)]! That asserts every object in the universe is a student AND loves AI. Always use ⇒ with ∀!'
      },
      {
        id: 'u4-inference',
        number: '03',
        title: 'Inference: Forward Chaining vs Backward Chaining',
        tag: 'Data-Driven vs Goal-Driven Deduction',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
        imageAlt: 'Deductive reasoning and logical flowchart',
        imageCaption: 'Fig 4.3: Forward data-driven chaining versus backward goal-driven recursive proof',
        overview: 'Definite Horn clauses enable efficient polynomial-time inference engines through forward data-driven or backward goal-directed chaining.',
        keyPoints: [
          'Modus Ponens: Fundamental inference rule: If P and (P ⇒ Q) are known, infer Q.',
          'Forward Chaining (Data-Driven): Starts with known facts in the KB. Iteratively fires all rules whose premises are satisfied, adding their conclusions as new facts until the goal is proved.',
          'Backward Chaining (Goal-Driven): Starts with the goal hypothesis. Works backwards to find rules that conclude the goal, then recursively tries to prove their premises from known facts.',
          'Applications: Forward chaining is ideal for real-time monitoring and production systems; Backward chaining is ideal for diagnostic systems, expert systems, and Prolog query answering.'
        ],
        infographic: {
          type: 'chainingCompare',
          headers: ['Dimension', 'Forward Chaining', 'Backward Chaining'],
          rows: [
            ['Direction', 'Data-Driven (Facts → Conclusions)', 'Goal-Driven (Goal → Subgoals → Facts)'],
            ['Starting Point', 'Known initial facts in KB', 'The query hypothesis we wish to prove'],
            ['Search Effort', 'May derive many facts irrelevant to goal', 'Focuses only on rules relevant to query'],
            ['Best Use Cases', 'System monitoring, automated alarms', 'Diagnostic systems, medical triage, Prolog'],
            ['Guarantees', 'Sound and Complete for Horn clauses', 'Sound and Complete for Horn clauses']
          ]
        },
        examTip: 'High-Yield Comparison: Forward chaining asks "What follows from what I know?" while Backward chaining asks "What do I need to prove what I want to know?"'
      },
      {
        id: 'u4-resolution',
        number: '04',
        title: 'Resolution Refutation & Knowledge Structures',
        tag: 'CNF Conversion & Semantic Networks',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        imageAlt: 'Microchip neural semantic connection network',
        imageCaption: 'Fig 4.4: Semantic network representing concepts as nodes and inheritance relations as directed arcs',
        overview: 'Resolution is a complete inference rule operating on Conjunctive Normal Form (CNF). Proves goals by showing that KB ∧ ¬Goal leads to a contradiction (empty clause).',
        keyPoints: [
          'Resolution Rule: (A ∨ B) ∧ (¬B ∨ C) ⊨ (A ∨ C). Resolves complementary literals (B and ¬B) to produce the resolvent.',
          'Proof by Refutation (Contradiction): 1. Negate the goal statement (¬α), 2. Add ¬α to KB, 3. Convert all sentences to CNF clauses, 4. Resolve pairs until the empty clause □ is derived.',
          'Semantic Networks: Graphical knowledge representation where nodes represent objects/concepts and labeled directed edges represent relationships (e.g. is-a, has-part).',
          'Frames: Object-oriented slot-and-filler structures that support property inheritance and default values.'
        ],
        infographic: {
          type: 'cnfSteps',
          title: 'Converting FOL to Conjunctive Normal Form (CNF)',
          steps: [
            '1. Eliminate Implication: Replace P ⇒ Q with ¬P ∨ Q',
            '2. Move Negation Inward: Apply De Morgan\'s laws to ¬(P ∧ Q) and quantifier negations',
            '3. Standardize Variables: Ensure distinct variables for each quantifier scope',
            '4. Skolemization: Eliminate existential quantifiers (∃x) using Skolem constants or functions',
            '5. Drop Universal Quantifiers (∀) and distribute ∨ over ∧ to produce conjunction of clauses'
          ]
        },
        examTip: 'Exam Proof Checklist: When asked to prove a theorem using Resolution Refutation, ALWAYS start step 1 by asserting the NEGATION of the goal. The proof ends when you reach the empty clause (Contradiction: □)!'
      }
    ],
    cheatSheet: {
      formulaTitle: 'Unit IV Essential Laws & Inference Rules',
      points: [
        'Modus Ponens: α, α ⇒ β ⊨ β | Modus Tollens: ¬β, α ⇒ β ⊨ ¬α',
        'Implication Elimination: P ⇒ Q ≡ ¬P ∨ Q | Biconditional: P ⇔ Q ≡ (P ⇒ Q) ∧ (Q ⇒ P)',
        'Quantifier Duality: ¬∀x P(x) ≡ ∃x ¬P(x) | ¬∃x P(x) ≡ ∀x ¬P(x)',
        'Resolution Refutation: KB ⊨ α if and only if KB ∧ ¬α is unsatisfiable (derives □)'
      ]
    }
  },

  // ────────────────────────────────────────────────────────────────────────────
  // POSTER 5: UNIT V — ARTIFICIAL INTELLIGENCE APPLICATIONS
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'unit-5',
    unitNumber: 5,
    unitRoman: 'UNIT V',
    badge: 'Comprehensive Syllabus Poster',
    title: 'AI Applications & Future Frontiers',
    subtitle: 'Healthcare, Smart Cities, NLP & LLMs, Computer Vision, Robotics & AI Ethics',
    heroImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    heroAlt: 'High-tech AI robotics and futuristic applications',
    stats: [
      { label: 'Domain Areas', value: '7 Sectors' },
      { label: 'NLP / Vision', value: 'Transformers & CNNs' },
      { label: 'Core Paradigm', value: 'Generative AI & LLMs' },
      { label: 'Exam Weightage', value: '25 Marks' }
    ],
    sections: [
      {
        id: 'u5-healthcare',
        number: '01',
        title: 'AI in Healthcare, Medicine & Drug Discovery',
        tag: 'Medical Imaging & Molecular Biology',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        imageAlt: 'Doctor reviewing medical AI diagnostic imaging',
        imageCaption: 'Fig 5.1: Convolutional Neural Networks performing automated MRI/CT tumor segmentation',
        overview: 'Artificial Intelligence revolutionizes medicine through computer-aided diagnostics, personalized genomics, and computational drug synthesis.',
        keyPoints: [
          'Diagnostic Imaging: Deep Convolutional Neural Networks (CNNs) analyze X-rays, MRI, and CT scans to detect malignancies with radiologist-level sensitivity.',
          'Protein Folding: DeepMind\'s AlphaFold solved a 50-year grand challenge in molecular biology, predicting 3D protein structures from amino acid sequences in seconds.',
          'Drug Discovery: Generative adversarial networks and diffusion models design novel targeted molecular compounds, cutting discovery pipelines from years to weeks.',
          'Clinical Decision Support Systems (CDSS): Rule-based inference combined with predictive models alerts clinicians to drug interactions and sepsis risk.'
        ],
        infographic: {
          type: 'domainGrid',
          items: [
            { label: 'Medical Diagnostics', desc: 'CNN-based retinal scan analysis for diabetic retinopathy & oncological imaging', tag: 'Computer Vision' },
            { label: 'AlphaFold 3D Folding', desc: 'Predicts 200M+ protein structures enabling rapid vaccine & drug design', tag: 'Deep Learning' },
            { label: 'Virtual Nursing', desc: 'NLP conversational agents providing 24/7 patient triage & monitoring', tag: 'NLP Agents' },
            { label: 'Genomic Medicine', desc: 'Precision oncology profiling targeted therapeutics to patient DNA', tag: 'Big Data AI' }
          ]
        },
        examTip: 'Exam Question: Discuss AI in Healthcare. Structure your answer around 3 pillars: 1. Diagnostic Imaging (CNNs), 2. Drug Discovery (AlphaFold/Generative molecules), and 3. Clinical Decision Support (CDSS).'
      },
      {
        id: 'u5-smartcities',
        number: '02',
        title: 'Smart Cities, Transportation & Autonomous Systems',
        tag: 'Self-Driving Cars & Dynamic Traffic Grids',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80',
        imageAlt: 'Smart city urban mobility traffic flow',
        imageCaption: 'Fig 5.2: Sensor fusion pipeline integrating cameras, LiDAR, and radar for autonomous navigation',
        overview: 'AI transforms modern infrastructure through connected autonomous vehicles, adaptive traffic signaling, and smart energy grid load optimization.',
        keyPoints: [
          'Autonomous Vehicles: Sensor fusion pipelines synthesize inputs from LiDAR, radar, cameras, and ultrasonic sensors through deep reinforcement learning controllers.',
          'Dynamic Traffic Management: Reinforcement learning models dynamically optimize traffic light cycle timings based on real-time vehicle queue cameras.',
          'Smart Grid Energy Balancing: Predictive machine learning models forecast renewable solar and wind generation to balance power grid distribution.',
          'Urban Emergency Response: Multi-agent coordination algorithms optimize fire, ambulance, and police vehicle dispatch routes during crises.'
        ],
        infographic: {
          type: 'pipeline',
          title: 'Autonomous Vehicle Perception-to-Action Stack',
          steps: [
            '1. Raw Perception: LiDAR point clouds + Multi-camera streams + Radar velocity data',
            '2. Sensor Fusion: Kalman filtering & neural feature pyramids align modalities into a 3D bird\'s-eye view',
            '3. Localization & Mapping: SLAM (Simultaneous Localization and Mapping) locates vehicle within centimeters',
            '4. Behavioral Planning: A* search & cost-minimizing trajectory planners chart safe maneuvers',
            '5. Actuation Execution: PID & Model Predictive Control (MPC) send steering and braking signals'
          ]
        },
        examTip: 'Viva Question: Why is LiDAR preferred over cameras in autonomous vehicles? LiDAR directly provides accurate 3D spatial depth point clouds regardless of lighting conditions, whereas cameras struggle with glare and low contrast.'
      },
      {
        id: 'u5-nlp',
        number: '03',
        title: 'Natural Language Processing & Large Language Models',
        tag: 'Transformers, Self-Attention & Generative AI',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
        imageAlt: 'Neural network connections language processing',
        imageCaption: 'Fig 5.3: The Transformer self-attention mechanism computing multi-headed contextual representations',
        overview: 'Natural Language Processing was revolutionized by the Transformer architecture, enabling foundation models that understand, generate, and reason with text.',
        keyPoints: [
          'Transformer Architecture (Vaswani et al., 2017): Replaced recurrence (RNNs) with Self-Attention, enabling massive parallel pretraining across internet-scale data.',
          'Attention Formula: Attention(Q, K, V) = softmax( (Q Kᵀ) / √dₖ ) V. Computes how much every token in a sentence attends to every other token.',
          'Foundation Models: GPT-4, Gemini, Claude trained on trillions of tokens to perform machine translation, code synthesis, summarization, and logical reasoning.',
          'Alignment & Safety: RLHF (Reinforcement Learning from Human Feedback) aligns generative models to prevent harmful outputs and ensure honesty.'
        ],
        infographic: {
          type: 'equationBreakdown',
          title: 'Scaled Dot-Product Attention: Attention(Q, K, V) = softmax( (Q·Kᵀ) / √dₖ ) · V',
          parts: [
            { sym: 'Q · Kᵀ', label: 'Query-Key Dot Product', desc: 'Calculates the semantic compatibility score between token pairs.' },
            { sym: '/ √dₖ', label: 'Scaling Factor', desc: 'Normalizes the dot product to prevent vanishing gradients in softmax.' },
            { sym: 'softmax', label: 'Attention Weights', desc: 'Converts compatibility scores into a probability distribution summing to 1.' },
            { sym: '· V', label: 'Weighted Values', desc: 'Aggregates value vectors into a context-enriched token embedding.' }
          ]
        },
        examTip: '10-Mark Question: Explain the Transformer architecture and Self-Attention mechanism. Emphasize why self-attention solves the vanishing gradient / sequential bottleneck of traditional RNNs and LSTMs.'
      },
      {
        id: 'u5-vision',
        number: '04',
        title: 'Computer Vision, Robotics & AI Ethics',
        tag: 'Object Detection, Industrial Cobots & Responsible AI',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        imageAlt: 'Industrial robotics automation factory',
        imageCaption: 'Fig 5.4: Industrial collaborative robots (cobots) utilizing real-time computer vision',
        overview: 'Computer vision and physical robotics bridge digital intelligence with the physical world, raising critical imperatives for safety, transparency, and ethical AI.',
        keyPoints: [
          'Object Detection: Architectures like YOLO (You Only Look Once) and Mask R-CNN achieve real-time bounding box localization and semantic segmentation.',
          'Industrial Robotics: Cobots (Collaborative Robots) and automated warehouse pickers (Kiva systems) perform precision assembly and logistics operations.',
          'Explainable AI (XAI): Techniques like SHAP and LIME demystify "black-box" neural networks so humans can audit high-stakes decisions.',
          'AI Ethics & Fairness: Mitigating algorithmic bias in hiring/lending, protecting data privacy, safeguarding against deepfakes, and establishing safety guardrails.'
        ],
        infographic: {
          type: 'ethicsPillars',
          title: 'The 4 Pillars of Responsible & Ethical AI',
          pillars: [
            { title: 'Transparency & Explainability', desc: 'Decisions in healthcare and finance must provide interpretable rationales, not opaque black boxes.' },
            { title: 'Fairness & Bias Mitigation', desc: 'Training data must be audited to eliminate systemic bias across gender, race, and socio-economic lines.' },
            { title: 'Privacy & Data Governance', desc: 'Techniques like Federated Learning and Differential Privacy protect sensitive user data during model training.' },
            { title: 'Accountability & Safety', desc: 'Autonomous weapons and critical safety systems must maintain human-in-the-loop kill-switches and formal verification.' }
          ]
        },
        examTip: 'Exam Definition: What is XAI (Explainable AI)? XAI provides methods and techniques that explain why an AI model made a particular prediction, essential for regulatory compliance (GDPR) and safety certification.'
      }
    ],
    cheatSheet: {
      formulaTitle: 'Unit V Application Architectures & Milestone Models',
      points: [
        'Computer Vision Backbone: CNNs (Convolution → ReLU → Pooling → Fully Connected) | Real-Time: YOLO',
        'Transformer Attention: Attention(Q, K, V) = softmax(Q·Kᵀ / √dₖ)·V',
        'AlphaFold: Predicts 3D coordinates of proteins from 1D amino acid strings',
        'Ethical AI Triad: Fairness (bias mitigation), Accountability (audit trails), Transparency (XAI)'
      ]
    }
  }
];

// ══════════════════════════════════════════════════════════════════════════════
// MAIN INTERACTIVE POSTERS COMPONENT
// ══════════════════════════════════════════════════════════════════════════════
export default function InteractivePosters() {
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const currentPoster = UNIT_POSTERS[selectedUnitIdx];

  const handlePrint = () => {
    window.print();
  };

  // Download Current Poster as a Standalone High-Res Styled Document / PDF
  const handleDownloadPosterHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${currentPoster.unitRoman} — ${currentPoster.title}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; color: #0f172a; margin: 0; padding: 24px; background: #f1f5f9; }
  .poster-container { max-width: 1040px; margin: auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 2px solid #cbd5e1; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
  .hero-banner { position: relative; background: #0f172a; color: #ffffff; padding: 24px 30px; }
  .hero-banner img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }
  .badge { background: #4f46e5; color: #ffffff; padding: 3px 10px; border-radius: 9999px; font-weight: 800; font-size: 0.75rem; display: inline-block; margin-bottom: 6px; }
  h1 { font-size: 1.75rem; margin: 0 0 6px 0; color: #ffffff; }
  .subtitle { font-size: 0.9rem; color: #cbd5e1; margin-bottom: 12px; }
  .stats-grid { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
  .stat-card { background: rgba(255,255,255,0.15); padding: 4px 12px; border-radius: 6px; font-size: 0.78rem; }
  .body-content { padding: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; background: #f8fafc; }
  .sec-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); page-break-inside: avoid; display: flex; flex-direction: column; gap: 8px; }
  .sec-header { display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
  .sec-num { width: 26px; height: 26px; background: #e0e7ff; color: #3730a3; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.8rem; }
  .sec-title { font-size: 1.05rem; font-weight: 800; color: #0f172a; margin: 0; }
  .img-frame { width: 100%; height: 130px; object-fit: cover; border-radius: 6px; }
  .exam-box { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; padding: 8px 12px; border-radius: 6px; margin-top: auto; font-weight: 600; font-size: 0.8rem; }
  .cheat-sheet { background: #0f172a; color: #ffffff; padding: 20px 28px; border-top: 2px solid #cbd5e1; page-break-inside: avoid; }
  @media (max-width: 800px) { .body-content { grid-template-columns: 1fr; } }
  @media print { body { padding: 0; background: #fff; } .poster-container { border: none; box-shadow: none; max-width: 100%; } .sec-card { page-break-inside: avoid; } }
</style>
</head>
<body>
<div class="poster-container">
  <div class="hero-banner">
    <img src="${currentPoster.heroImage}" alt="${currentPoster.heroAlt}">
    <span class="badge">${currentPoster.unitRoman} • GENERAL UNIT POSTER</span>
    <h1>${currentPoster.title}</h1>
    <div class="subtitle">${currentPoster.subtitle}</div>
    <div class="stats-grid">
      ${currentPoster.stats.map(s => `<div class="stat-card"><strong>${s.value}</strong> — ${s.label}</div>`).join('')}
    </div>
  </div>
  <div class="body-content">
    ${currentPoster.sections.map(s => `
      <div class="sec-card">
        <div class="sec-header">
          <div class="sec-num">${s.number}</div>
          <div>
            <h2 class="sec-title">${s.title}</h2>
            <span style="font-size: 0.72rem; color: #4f46e5; font-weight: 700;">${s.tag}</span>
          </div>
        </div>
        <img src="${s.image}" alt="${s.imageAlt}" class="img-frame">
        <p style="font-size: 0.85rem; color: #334155; line-height: 1.45; margin: 0;"><strong>Intuition:</strong> ${s.overview}</p>
        <ul style="padding-left: 18px; font-size: 0.8rem; color: #1e293b; line-height: 1.5; margin: 0;">
          ${s.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
        <div class="exam-box">💡 <strong>Exam High-Yield Tip:</strong> ${s.examTip}</div>
      </div>
    `).join('')}
  </div>
  <div class="cheat-sheet">
    <h3 style="margin: 0 0 10px 0; color: #818cf8; font-size: 1rem;">⚡ ${currentPoster.cheatSheet.formulaTitle}</h3>
    <ul style="padding-left: 18px; font-size: 0.82rem; line-height: 1.6; color: #e2e8f0; margin: 0;">
      ${currentPoster.cheatSheet.points.map(pt => `<li>${pt}</li>`).join('')}
    </ul>
  </div>
</div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentPoster.id}_General_Unit_Poster.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download All 5 Posters in One Complete Study Dossier
  const handleDownloadAllPosters = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Artificial Intelligence — Complete 5-Unit Master Academic Posters</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; color: #0f172a; margin: 0; padding: 20px; background: #f1f5f9; }
  .unit-poster { max-width: 1040px; margin: 0 auto 40px auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 2px solid #cbd5e1; box-shadow: 0 8px 24px rgba(0,0,0,0.08); page-break-after: always; }
  .hero-banner { background: #0f172a; color: #ffffff; padding: 24px 30px; }
  .hero-banner img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; }
  .badge { background: #4f46e5; color: #ffffff; padding: 3px 10px; border-radius: 9999px; font-weight: 800; font-size: 0.75rem; display: inline-block; margin-bottom: 6px; }
  h1 { font-size: 1.75rem; margin: 0 0 6px 0; color: #ffffff; }
  .body-content { padding: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; background: #f8fafc; }
  .sec-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; page-break-inside: avoid; display: flex; flex-direction: column; gap: 8px; }
  .img-frame { width: 100%; height: 130px; object-fit: cover; border-radius: 6px; }
  .cheat-sheet { background: #0f172a; color: #ffffff; padding: 20px 28px; }
  @media (max-width: 800px) { .body-content { grid-template-columns: 1fr; } }
  @media print { body { padding: 0; background: #fff; } .unit-poster { border: none; box-shadow: none; margin-bottom: 0; page-break-after: always; } }
</style>
</head>
<body>
<h1 style="color: #1e1b4b; text-align: center; margin-bottom: 4px;">Artificial Intelligence and Its Applications</h1>
<p style="text-align: center; color: #64748b; margin-bottom: 24px; font-size: 0.9rem;">Complete 5-Unit General Academic Posters • 100% University Syllabus</p>
<hr style="margin-bottom: 30px; border-color: #cbd5e1;"/>
${UNIT_POSTERS.map(p => `
<div class="unit-poster">
  <div class="hero-banner">
    <img src="${p.heroImage}" alt="${p.heroAlt}">
    <span class="badge">${p.unitRoman} • GENERAL UNIT POSTER</span>
    <h1>${p.title}</h1>
    <p style="color: #cbd5e1; margin: 4px 0 0 0; font-size: 0.9rem;">${p.subtitle}</p>
  </div>
  <div class="body-content">
    ${p.sections.map(s => `
      <div class="sec-card">
        <h3 style="color: #1e1b4b; margin: 0; font-size: 1.05rem;">[${s.number}] ${s.title}</h3>
        <span style="font-size: 0.72rem; color: #4f46e5; font-weight: 700;">${s.tag}</span>
        <img src="${s.image}" alt="${s.imageAlt}" class="img-frame">
        <p style="font-size: 0.85rem; color: #334155; margin: 0;">${s.overview}</p>
        <ul style="padding-left: 18px; font-size: 0.8rem; line-height: 1.5; color: #1e293b; margin: 0;">
          ${s.keyPoints.map(k => `<li>${k}</li>`).join('')}
        </ul>
        <div style="background: #fffbeb; padding: 8px 12px; border-radius: 6px; font-size: 0.78rem; color: #92400e; margin-top: auto;">
          <strong>Exam Tip:</strong> ${s.examTip}
        </div>
      </div>
    `).join('')}
  </div>
  <div class="cheat-sheet">
    <h4 style="color: #818cf8; margin: 0 0 8px 0; font-size: 0.95rem;">⚡ ${p.cheatSheet.formulaTitle}</h4>
    <ul style="padding-left: 18px; font-size: 0.8rem; line-height: 1.6; margin: 0;">
      ${p.cheatSheet.points.map(pt => `<li>${pt}</li>`).join('')}
    </ul>
  </div>
</div>
`).join('\n')}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `All_5_Units_Master_Academic_Posters_Bundle.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadCheatSheet = () => {
    const textContent = `================================================================================
${currentPoster.unitRoman}: ${currentPoster.title.toUpperCase()}
Official Academic Master Poster Study Guide
================================================================================
${currentPoster.subtitle}

${currentPoster.sections.map(s => `
[${s.number}] ${s.title.toUpperCase()} (${s.tag})
--------------------------------------------------------------------------------
${s.overview}

Key Concepts:
${s.keyPoints.map(p => `• ${p}`).join('\n')}

Exam Golden Tip:
${s.examTip}
`).join('\n')}

================================================================================
QUICK REFERENCE CHEAT SHEET
================================================================================
${currentPoster.cheatSheet.points.map(p => `✓ ${p}`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentPoster.id}_Master_Poster_Study_Guide.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 60 }}>
      {/* ── Top Page Header ────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-indigo)', letterSpacing: '0.08em', background: 'var(--primary-indigo-light)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
              Complete 5-Unit Master Posters
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              100% Syllabus Coverage • High-Res Visuals
            </span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0, letterSpacing: '-0.02em' }}>
            Interactive Academic Posters (5 Units)
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: 6, maxWidth: 720 }}>
            Each master poster compiles all topics, definitions, mathematical formulas, and clear visual diagrams for that entire unit into one comprehensive presentation.
          </p>
        </div>

        {/* Action Controls & Prominent Download Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadPosterHTML}
            className="btn-primary"
            title="Download this poster as printable HTML / PDF"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '8px 16px' }}
          >
            <Download size={16} /> Download This Poster (PDF/HTML)
          </button>
          <button
            onClick={handleDownloadAllPosters}
            className="btn-secondary"
            title="Download complete bundle of all 5 posters"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '8px 14px' }}
          >
            <Download size={16} /> Download All 5 Posters Bundle
          </button>
          <button
            onClick={handlePrint}
            className="btn-secondary"
            title="Print or Save PDF"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '8px 14px' }}
          >
            <Printer size={16} /> Print
          </button>
          <button
            onClick={() => setIsFullScreen(true)}
            className="btn-secondary"
            title="Fullscreen Poster View"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '8px 12px' }}
          >
            <Maximize2 size={16} /> Fullscreen
          </button>
          <button
            onClick={handleDownloadCheatSheet}
            className="btn-secondary"
            title="Download Study Sheet Text"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '8px 12px' }}
          >
            <FileText size={16} /> .txt
          </button>
        </div>
      </div>

      {/* ── 5 Unit Selector Tabs ───────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 10,
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {UNIT_POSTERS.map((p, idx) => {
          const isSelected = selectedUnitIdx === idx;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedUnitIdx(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                border: isSelected ? '2px solid var(--primary-indigo)' : '1px solid var(--border-color)',
                backgroundColor: isSelected ? 'var(--primary-indigo-light)' : '#ffffff',
                color: isSelected ? 'var(--primary-indigo)' : 'var(--text-dark)',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'var(--primary-indigo)' : '#f1f5f9',
                color: isSelected ? '#ffffff' : 'var(--text-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                flexShrink: 0
              }}>
                U{p.unitNumber}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: isSelected ? 'var(--primary-indigo)' : 'var(--text-muted)' }}>
                  {p.unitRoman} Poster
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {p.title.split('&')[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Navigation Strip (Previous / Next Unit) ────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setSelectedUnitIdx(i => Math.max(0, i - 1))}
          disabled={selectedUnitIdx === 0}
          className="btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '6px 14px' }}
        >
          <ChevronLeft size={16} /> Previous Unit Poster
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-indigo)' }}>
            Viewing Unit {currentPoster.unitNumber} of 5
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            — {currentPoster.title}
          </span>
        </div>

        <button
          onClick={() => setSelectedUnitIdx(i => Math.min(UNIT_POSTERS.length - 1, i + 1))}
          disabled={selectedUnitIdx === UNIT_POSTERS.length - 1}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', padding: '6px 16px' }}
        >
          Next Unit Poster <ChevronRight size={16} />
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* THE MASTER UNIT POSTER CANVAS (MEDIUM GENERAL UNIT POSTER)            */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      <div
        id="master-poster-canvas"
        className="edtech-card"
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          width: '100%',
          padding: 0,
          overflow: 'hidden',
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: '#ffffff'
        }}
      >
        {/* ── Medium Poster Hero Banner ───────────────────────────────────────── */}
        <div style={{ position: 'relative', minHeight: 150, maxHeight: 180, overflow: 'hidden' }}>
          <img
            src={currentPoster.heroImage}
            alt={currentPoster.heroAlt}
            style={{ width: '100%', height: '100%', minHeight: 150, maxHeight: 180, objectFit: 'cover' }}
          />
          {/* Rich aesthetic gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,27,75,0.85) 60%, rgba(15,23,42,0.95) 100%)'
          }} />

          {/* Banner Contents */}
          <div style={{
            position: 'absolute',
            inset: 0,
            padding: '20px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  backgroundColor: 'var(--primary-indigo)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.04em'
                }}>
                  {currentPoster.unitRoman} GENERAL UNIT POSTER
                </span>
                <span style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  Official University Syllabus Overview
                </span>
              </div>

              {/* Direct Download in Hero */}
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={handleDownloadPosterHTML}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#ffffff',
                    borderRadius: 6,
                    padding: '4px 12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <Download size={13} /> Download Poster
                </button>
                <button
                  onClick={handlePrint}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#ffffff',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                  }}
                >
                  <Printer size={13} /> Print
                </button>
              </div>
            </div>

            <div>
              <h1 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 900, margin: 0, letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {currentPoster.title}
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginTop: 4, maxWidth: 840, lineHeight: 1.4 }}>
                {currentPoster.subtitle}
              </p>
            </div>

            {/* Quick Stats Strip */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {currentPoster.stats.map(s => (
                <div key={s.label} style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 6,
                  padding: '3px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}>
                  <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.8rem' }}>{s.value}</div>
                  <div style={{ color: '#cbd5e1', fontSize: '0.7rem', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Poster Body: Medium Balanced 2-Column Grid (Not overly big) ──── */}
        <div style={{
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: 16,
          backgroundColor: '#f8fafc'
        }}>
          {currentPoster.sections.map((sec, idx) => (
            <div
              key={sec.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 16
              }}
            >
              {/* Section Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: 8
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    backgroundColor: 'var(--primary-indigo-light)',
                    color: 'var(--primary-indigo)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.75rem'
                  }}>
                    {sec.number}
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', margin: 0 }}>
                      {sec.title}
                    </h2>
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--primary-indigo)', fontWeight: 700, backgroundColor: 'var(--primary-indigo-light)', padding: '2px 8px', borderRadius: 4 }}>
                  {sec.tag}
                </span>
              </div>

              {/* Top Row: Thumbnail Image + Core Intuition & Key Points */}
              <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 12 }}>
                <div style={{ borderRadius: 6, overflow: 'hidden', border: '1px solid var(--border-color)', backgroundColor: '#0f172a', height: 110 }}>
                  <img
                    src={sec.image}
                    alt={sec.imageAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                  <div style={{
                    backgroundColor: 'var(--primary-indigo-light)',
                    padding: '8px 10px',
                    borderRadius: 6,
                    fontSize: '0.78rem',
                    color: '#1e1b4b',
                    lineHeight: 1.45
                  }}>
                    <strong style={{ color: 'var(--primary-indigo)' }}>Core Principle: </strong>
                    {sec.overview}
                  </div>

                  <ul style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    paddingLeft: 14,
                    fontSize: '0.78rem',
                    color: 'var(--text-dark)',
                    lineHeight: 1.4,
                    margin: 0
                  }}>
                    {sec.keyPoints.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx}>
                        {pt.includes(':') ? (
                          <>
                            <strong>{pt.split(':')[0]}:</strong>
                            {pt.substring(pt.indexOf(':') + 1)}
                          </>
                        ) : (
                          pt
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Middle: Compact Infographic Widget */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {/* Grid 4 Infographic */}
                      {sec.infographic.type === 'grid4' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                          {sec.infographic.items.map(item => (
                            <div key={item.label} style={{
                              backgroundColor: item.color,
                              border: `1px solid ${item.border}`,
                              borderRadius: 'var(--radius-md)',
                              padding: 12
                            }}>
                              <div style={{ fontWeight: 800, color: item.text, fontSize: '0.85rem', marginBottom: 4 }}>
                                {item.label}
                              </div>
                              <div style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.4 }}>
                                {item.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* PEAS Matrix Infographic */}
                      {sec.infographic.type === 'peasMatrix' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.85rem', marginBottom: 10 }}>
                            {sec.infographic.exampleTitle}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8, fontSize: '0.82rem' }}>
                            <div style={{ background: '#eff6ff', padding: 10, borderRadius: 8, border: '1px solid #bfdbfe' }}>
                              <strong style={{ color: '#1d4ed8' }}>P (Performance):</strong>
                              <div style={{ color: '#1e293b', marginTop: 2 }}>{sec.infographic.p}</div>
                            </div>
                            <div style={{ background: '#f0fdf4', padding: 10, borderRadius: 8, border: '1px solid #bbf7d0' }}>
                              <strong style={{ color: '#047857' }}>E (Environment):</strong>
                              <div style={{ color: '#1e293b', marginTop: 2 }}>{sec.infographic.e}</div>
                            </div>
                            <div style={{ background: '#fef3c7', padding: 10, borderRadius: 8, border: '1px solid #fde68a' }}>
                              <strong style={{ color: '#b45309' }}>A (Actuators):</strong>
                              <div style={{ color: '#1e293b', marginTop: 2 }}>{sec.infographic.a}</div>
                            </div>
                            <div style={{ background: '#f3e8ff', padding: 10, borderRadius: 8, border: '1px solid #e9d5ff' }}>
                              <strong style={{ color: '#7e22ce' }}>S (Sensors):</strong>
                              <div style={{ color: '#1e293b', marginTop: 2 }}>{sec.infographic.s}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Agent Ladder Infographic */}
                      {sec.infographic.type === 'ladder' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {sec.infographic.steps.map((st) => (
                            <div key={st.level} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              backgroundColor: '#f8fafc',
                              border: '1px solid var(--border-color)',
                              borderRadius: 8,
                              padding: '8px 12px'
                            }}>
                              <div style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-indigo)',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 800,
                                fontSize: '0.75rem',
                                flexShrink: 0
                              }}>
                                {st.level}
                              </div>
                              <div style={{ flex: 1 }}>
                                <span style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem' }}>
                                  {st.title}:
                                </span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--primary-indigo)', marginLeft: 6 }}>
                                  {st.formula}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                                  {st.desc}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Problem Formulation Box */}
                      {sec.infographic.type === 'formulationBox' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8 }}>
                            {sec.infographic.items.map((it) => (
                              <div key={it.sym} style={{ backgroundColor: '#ffffff', padding: 8, borderRadius: 6, border: '1px solid #e2e8f0', fontSize: '0.78rem' }}>
                                <code style={{ color: 'var(--primary-indigo)', fontWeight: 700 }}>{it.sym}</code>
                                <strong style={{ display: 'block', color: 'var(--text-dark)' }}>{it.name}</strong>
                                <span style={{ color: 'var(--text-muted)' }}>{it.detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Search Table Infographic */}
                      {sec.infographic.type === 'table' && (
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
                            <thead>
                              <tr style={{ backgroundColor: 'var(--primary-indigo-light)', color: 'var(--primary-indigo)' }}>
                                {sec.infographic.headers.map(h => (
                                  <th key={h} style={{ padding: '8px 10px', border: '1px solid #c7d2fe', fontWeight: 800 }}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.infographic.rows.map((row, rIdx) => (
                                <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} style={{ padding: '8px 10px', border: '1px solid var(--border-color)', fontWeight: cIdx === 0 ? 700 : 500 }}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Equation Breakdown Infographic */}
                      {sec.infographic.type === 'equationBreakdown' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.9rem', marginBottom: 10, textAlign: 'center' }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8 }}>
                            {sec.infographic.parts.map(p => (
                              <div key={p.sym} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 10 }}>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-indigo)', fontFamily: 'var(--font-mono)' }}>{p.sym}</div>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-dark)', marginTop: 2 }}>{p.label}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 2 }}>{p.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Proof Box Infographic */}
                      {sec.infographic.type === 'proofBox' && (
                        <div style={{
                          backgroundColor: '#f0fdf4',
                          border: '1px solid #bbf7d0',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: '#047857', fontSize: '0.85rem', marginBottom: 6 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.8rem', color: '#065f46' }}>
                            {sec.infographic.steps.map((st, sIdx) => (
                              <div key={sIdx}>{st}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Annealing Formula */}
                      {sec.infographic.type === 'annealingFormula' && (
                        <div style={{
                          backgroundColor: '#fef3c7',
                          border: '1px solid #fde68a',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                            <div style={{ fontWeight: 800, color: '#92400e', fontSize: '0.85rem' }}>{sec.infographic.title}</div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, color: '#b45309', fontSize: '1rem', background: '#fff', padding: '2px 10px', borderRadius: 6 }}>
                              {sec.infographic.formula}
                            </div>
                          </div>
                          <ul style={{ paddingLeft: 18, fontSize: '0.78rem', color: '#78350f', display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {sec.infographic.legend.map((l, lIdx) => (
                              <li key={lIdx}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CSP Visual Infographic */}
                      {sec.infographic.type === 'cspVisual' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.85rem' }}>{sec.infographic.title}</div>
                          <div style={{ fontSize: '0.8rem', color: '#475569', margin: '4px 0 8px 0' }}>
                            <strong>Variables:</strong> {sec.infographic.vars} | <strong>Rule:</strong> {sec.infographic.rule}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.78rem' }}>
                            {sec.infographic.heuristics.map((h, hIdx) => (
                              <div key={hIdx} style={{ backgroundColor: '#ffffff', padding: '6px 10px', borderRadius: 6, border: '1px solid #e2e8f0' }}>
                                🔹 {h}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Algo Flow Steps */}
                      {sec.infographic.type === 'algoFlow' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem' }}>
                            {sec.infographic.steps.map((st, stIdx) => (
                              <div key={stIdx} style={{ backgroundColor: '#ffffff', padding: '6px 10px', borderRadius: 6, border: '1px solid #e2e8f0', color: '#334155' }}>
                                {st}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Game Tree */}
                      {sec.infographic.type === 'gameTree' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
                            {sec.infographic.nodes.map((node) => (
                              <div key={node.level} style={{ backgroundColor: node.color, padding: 10, borderRadius: 8, border: '1px solid var(--border-color)' }}>
                                <div style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--text-dark)' }}>{node.level}</div>
                                <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: 2 }}>{node.val}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* MCTS 4 Steps */}
                      {sec.infographic.type === 'mcts4Steps' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8 }}>
                            {sec.infographic.phases.map(p => (
                              <div key={p.step} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 10 }}>
                                <strong style={{ color: 'var(--primary-indigo)', fontSize: '0.8rem', display: 'block' }}>{p.step}</strong>
                                <span style={{ fontSize: '0.75rem', color: '#475569', marginTop: 2, display: 'block' }}>{p.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Truth Table */}
                      {sec.infographic.type === 'truthTable' && (
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'center' }}>
                            <thead>
                              <tr style={{ backgroundColor: 'var(--primary-indigo-light)', color: 'var(--primary-indigo)' }}>
                                {sec.infographic.headers.map(h => (
                                  <th key={h} style={{ padding: '6px 8px', border: '1px solid #c7d2fe', fontWeight: 800 }}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.infographic.rows.map((row, rIdx) => (
                                <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} style={{ padding: '6px 8px', border: '1px solid var(--border-color)', fontWeight: cell === 'T' ? 700 : 500, color: cell === 'T' ? '#047857' : '#be123c' }}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* FOL Translation Rules */}
                      {sec.infographic.type === 'folRules' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {sec.infographic.translations.map((tr, tIdx) => (
                            <div key={tIdx} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor: '#f8fafc',
                              padding: '8px 12px',
                              borderRadius: 6,
                              border: '1px solid var(--border-color)',
                              fontSize: '0.8rem'
                            }}>
                              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>"{tr.eng}"</span>
                              <code style={{ color: 'var(--primary-indigo)', fontWeight: 700, backgroundColor: '#ffffff', padding: '2px 8px', borderRadius: 4, border: '1px solid #c7d2fe' }}>
                                {tr.fol}
                              </code>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Chaining Comparison */}
                      {sec.infographic.type === 'chainingCompare' && (
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
                            <thead>
                              <tr style={{ backgroundColor: 'var(--primary-indigo-light)', color: 'var(--primary-indigo)' }}>
                                {sec.infographic.headers.map(h => (
                                  <th key={h} style={{ padding: '8px 10px', border: '1px solid #c7d2fe', fontWeight: 800 }}>{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.infographic.rows.map((row, rIdx) => (
                                <tr key={rIdx} style={{ backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} style={{ padding: '8px 10px', border: '1px solid var(--border-color)', fontWeight: cIdx === 0 ? 700 : 500 }}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* CNF Conversion Steps */}
                      {sec.infographic.type === 'cnfSteps' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.78rem' }}>
                            {sec.infographic.steps.map((st, sIdx) => (
                              <div key={sIdx} style={{ backgroundColor: '#ffffff', padding: '6px 10px', borderRadius: 6, border: '1px solid #e2e8f0', color: '#334155' }}>
                                {st}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Domain Grid for Unit 5 */}
                      {sec.infographic.type === 'domainGrid' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
                          {sec.infographic.items.map(it => (
                            <div key={it.label} style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 8, padding: 12 }}>
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-indigo)', backgroundColor: 'var(--primary-indigo-light)', padding: '2px 8px', borderRadius: 4 }}>
                                {it.tag}
                              </span>
                              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-dark)', marginTop: 6 }}>{it.label}</div>
                              <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: 2 }}>{it.desc}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* AV Pipeline */}
                      {sec.infographic.type === 'pipeline' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.78rem' }}>
                            {sec.infographic.steps.map((st, stIdx) => (
                              <div key={stIdx} style={{ backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: 6, border: '1px solid #e2e8f0', color: '#334155' }}>
                                <strong>{st.split(':')[0]}:</strong> {st.substring(st.indexOf(':') + 1)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Ethics Pillars */}
                      {sec.infographic.type === 'ethicsPillars' && (
                        <div style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          padding: 14
                        }}>
                          <div style={{ fontWeight: 800, color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: 8 }}>
                            {sec.infographic.title}
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8 }}>
                            {sec.infographic.pillars.map(p => (
                              <div key={p.title} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 10 }}>
                                <div style={{ fontWeight: 800, color: 'var(--primary-indigo)', fontSize: '0.8rem' }}>{p.title}</div>
                                <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: 2 }}>{p.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                  {/* Exam Golden Tip Pill */}
                  <div style={{
                    marginTop: 'auto',
                    backgroundColor: '#fffbeb',
                    border: '1px solid #fde68a',
                    borderRadius: 'var(--radius-md)',
                    padding: '10px 14px',
                    fontSize: '0.82rem',
                    color: '#92400e',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    <Lightbulb size={18} color="#d97706" style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Exam High-Yield Tip:</strong> {sec.examTip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

        {/* ── Bottom Master Cheat-Sheet & Quick Reference Strip ──────────────── */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '28px 36px',
          borderTop: '2px solid var(--border-strong)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--primary-indigo)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Zap size={18} color="#fff" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {currentPoster.cheatSheet.formulaTitle}
              </h3>
            </div>

            <span style={{ fontSize: '0.75rem', color: '#94a3b8', backgroundColor: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
              15-Minute Pre-Exam Recall Guide
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
            {currentPoster.cheatSheet.points.map((pt, pIdx) => (
              <div key={pIdx} style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                fontSize: '0.82rem',
                color: '#e2e8f0',
                lineHeight: 1.5
              }}>
                <span style={{ color: '#818cf8', fontWeight: 700, marginRight: 6 }}>✓</span>
                {pt}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Unit Switcher Bar ────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: '16px 24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <button
          onClick={() => setSelectedUnitIdx(i => Math.max(0, i - 1))}
          disabled={selectedUnitIdx === 0}
          className="btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}
        >
          <ChevronLeft size={16} /> Unit {Math.max(1, currentPoster.unitNumber - 1)}
        </button>

        <div style={{ display: 'flex', gap: 8 }}>
          {UNIT_POSTERS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedUnitIdx(idx)}
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                border: selectedUnitIdx === idx ? '2px solid var(--primary-indigo)' : '1px solid var(--border-color)',
                backgroundColor: selectedUnitIdx === idx ? 'var(--primary-indigo)' : '#f8fafc',
                color: selectedUnitIdx === idx ? '#ffffff' : 'var(--text-dark)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {p.unitNumber}
            </button>
          ))}
        </div>

        <button
          onClick={() => setSelectedUnitIdx(i => Math.min(UNIT_POSTERS.length - 1, i + 1))}
          disabled={selectedUnitIdx === UNIT_POSTERS.length - 1}
          className="btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}
        >
          Unit {Math.min(5, currentPoster.unitNumber + 1)} <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Fullscreen Cinema Modal ────────────────────────────────────────── */}
      {isFullScreen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15,23,42,0.95)',
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
            overflowY: 'auto'
          }}
        >
          {/* Modal Header Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
            maxWidth: 1200,
            width: '100%',
            margin: '0 auto 16px auto'
          }}>
            <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 800 }}>
              {currentPoster.unitRoman}: {currentPoster.title} (Fullscreen High-Res Poster)
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={handlePrint} className="btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                <Printer size={16} /> Print
              </button>
              <button
                onClick={() => setIsFullScreen(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 16px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <X size={18} /> Close Fullscreen
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden' }}>
            <img src={currentPoster.heroImage} alt={currentPoster.heroAlt} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
            <div style={{ padding: 32 }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-indigo)' }}>{currentPoster.unitRoman} FULLSCREEN STUDY POSTER</span>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-dark)', marginTop: 4 }}>{currentPoster.title}</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: 24 }}>{currentPoster.subtitle}</p>

              {/* Sections list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {currentPoster.sections.map(s => (
                  <div key={s.id} style={{ border: '1px solid var(--border-color)', borderRadius: 12, padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--primary-indigo)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem' }}>
                        {s.number}
                      </span>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{s.title}</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 16, marginBottom: 12 }}>
                      <img src={s.image} alt={s.imageAlt} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }} />
                      <div>
                        <p style={{ fontSize: '0.9rem', color: '#1e293b', marginBottom: 8, lineHeight: 1.6 }}>{s.overview}</p>
                        <ul style={{ paddingLeft: 18, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                          {s.keyPoints.map((k, ki) => <li key={ki}>{k}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div style={{ background: '#fef3c7', padding: '8px 12px', borderRadius: 8, fontSize: '0.82rem', color: '#92400e' }}>
                      <strong>Exam Tip:</strong> {s.examTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
