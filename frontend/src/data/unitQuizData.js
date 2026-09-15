// Comprehensive Unit Quiz Bank — 10 to 15 Questions Per Unit (Total 65 Questions)
// Aligned with Units 1–5 of Artificial Intelligence & Its Applications Syllabus

export const UNIT_QUIZZES = {
  'unit-1': {
    title: 'Unit I: Intelligent Agents & Problem Formulation',
    questions: [
      {
        id: 'u1-q1',
        question: 'What is the primary definition of a Rational Agent in Artificial Intelligence?',
        options: [
          'An agent that thinks exactly like a human brain in every scenario',
          'An agent that selects actions expected to maximize its performance measure based on percept history',
          'An agent that never makes mistakes and has complete omniscient hindsight',
          'An agent that operates only in deterministic static environments'
        ],
        answer: 1,
        explanation: 'A rational agent acts to maximize its expected performance measure given its percept history and built-in knowledge.',
        memoryTip: '💡 Rationality = Maximizing expected outcome, not omniscient perfection.'
      },
      {
        id: 'u1-q2',
        question: 'In the PEAS framework for an Autonomous Taxi, what does the letter "E" represent?',
        options: [
          'Engine RPM and Efficiency',
          'Electrical Wiring and Electronics',
          'Environment (Roads, Traffic, Weather, Pedestrians)',
          'Evaluation Criteria and Speed Limits'
        ],
        answer: 2,
        explanation: 'PEAS stands for Performance Measure, Environment, Actuators, and Sensors. "E" is the external world.',
        memoryTip: '💡 PEAS: P = Scorecard, E = World, A = Actuators (Hands), S = Sensors (Eyes).'
      },
      {
        id: 'u1-q3',
        question: 'Which type of task environment is characterized by sensor inputs providing full world state at each point in time?',
        options: [
          'Partially Observable',
          'Fully Observable',
          'Stochastic',
          'Continuous'
        ],
        answer: 1,
        explanation: 'In a Fully Observable environment, sensors detect all aspects relevant to choice of action.',
        memoryTip: '💡 Fully Observable = Complete state visible (e.g. Chess).'
      },
      {
        id: 'u1-q4',
        question: 'What distinguishes a Learning Agent from a simple Reflex Agent?',
        options: [
          'Learning agents have hardcoded condition-action rules only',
          'Learning agents feature a Critic and Learning Element to improve performance over time',
          'Learning agents do not use sensors or actuators',
          'Reflex agents always predict future states using complex planning'
        ],
        answer: 1,
        explanation: 'Learning Agents are divided into Performance Element, Critic, Learning Element, and Problem Generator.',
        memoryTip: '💡 Learning Agent = Critic + Learning Element + Problem Generator.'
      },
      {
        id: 'u1-q5',
        question: 'In state-space problem formulation, what does the Transition Model Result(s, a) return?',
        options: [
          'The heuristic cost estimation h(n)',
          'The successor state resulting from taking action a in state s',
          'The boolean value indicating if state s is the goal state',
          'The branching factor bound b'
        ],
        answer: 1,
        explanation: 'Result(s, a) defines the transition model mapping current state s and action a to successor state s\'.',
        memoryTip: '💡 Transition Model: Result(s, a) = s\''
      },
      {
        id: 'u1-q6',
        question: 'The Turing Test, proposed by Alan Turing in 1950, was designed to test whether a computer can:',
        options: [
          'Solve NP-hard mathematical equations in real time',
          'Demonstrate human-like conversational behavior indistinguishable from a human',
          'Navigate complex 3D physical terrain',
          'Perform logical deduction using first-order logic'
        ],
        answer: 1,
        explanation: 'The Turing Test evaluates if an interrogator cannot distinguish human responses from machine responses.',
        memoryTip: '💡 Turing Test = Acting Humanly in natural language interaction.'
      },
      {
        id: 'u1-q7',
        question: 'Which of the following environments is Discrete, Deterministic, and Sequential?',
        options: [
          'Driving a car in urban morning traffic',
          'Playing a game of Chess',
          'Stock market automated algorithmic trading',
          'Medical diagnosis system'
        ],
        answer: 1,
        explanation: 'Chess has distinct turns (Discrete), no randomness (Deterministic), and actions affect future boards (Sequential).',
        memoryTip: '💡 Chess = Discrete, Deterministic, Static, Sequential, Fully Observable.'
      },
      {
        id: 'u1-q8',
        question: 'A Model-Based Reflex Agent maintains an internal state to handle:',
        options: [
          'Continuous actuators without sensors',
          'Partially observable environments by tracking unobserved aspects of the world',
          'Infinite branching factors in game trees',
          'Stochastic rewards without performance measures'
        ],
        answer: 1,
        explanation: 'Internal state allows model-based agents to keep track of world history in partially observable settings.',
        memoryTip: '💡 Model-Based = Internal State memory for hidden state.'
      },
      {
        id: 'u1-q9',
        question: 'What is the initial step in defining a well-formulated search problem?',
        options: [
          'Selecting a heuristic evaluation function h(n)',
          'Defining the Initial State S0',
          'Running Alpha-Beta Pruning bounds',
          'Constructing a truth table for inference'
        ],
        answer: 1,
        explanation: 'A formal problem is defined by: Initial State, Actions, Transition Model, Goal Test, and Path Cost.',
        memoryTip: '💡 5 Components of Problem Formulation: S0, Actions, Result, Goal Test, Path Cost.'
      },
      {
        id: 'u1-q10',
        question: 'Why is "Acting Rationally" preferred over "Thinking Humanly" as the modern AI paradigm?',
        options: [
          'Human thinking cannot be coded in programming languages',
          'Rationality focuses on mathematical correctness and optimal utility without needing biological mimicry',
          'Humans never act rationally in real life',
          'Rational agents do not require computing hardware'
        ],
        answer: 1,
        explanation: 'Rationality provides a precise mathematical objective (maximizing expected utility) independent of biological constraints.',
        memoryTip: '💡 Modern AI Focus = Acting Rationally.'
      },
      {
        id: 'u1-q11',
        question: 'Which sensor is essential for an Autonomous Car to measure rotational forces and acceleration?',
        options: [
          'LiDAR',
          'Inertial Measurement Unit (IMU)',
          'Ultrasonic Sonar',
          'Microphone array'
        ],
        answer: 1,
        explanation: 'IMUs use accelerometers and gyroscopes to track 3D vehicle orientation and acceleration.',
        memoryTip: '💡 IMU = Motion, acceleration, and rotation sensor.'
      },
      {
        id: 'u1-q12',
        question: 'An environment where the world state changes while the agent is deliberating is classified as:',
        options: [
          'Static',
          'Dynamic',
          'Semidynamic',
          'Episodic'
        ],
        answer: 1,
        explanation: 'Dynamic environments continuously change while the agent thinks (e.g. taxi driving).',
        memoryTip: '💡 Dynamic = World changes while agent thinks.'
      }
    ]
  },
  'unit-2': {
    title: 'Unit II: Heuristic Search & Uninformed Methods',
    questions: [
      {
        id: 'u2-q1',
        question: 'Which property guarantees that Breadth-First Search (BFS) finds the optimal solution?',
        options: [
          'When step costs are all equal (uniform unit cost)',
          'When the search tree has an infinite depth d',
          'When using an admissible heuristic h(n)',
          'When graph memory is zero'
        ],
        answer: 0,
        explanation: 'BFS is optimal when step costs are equal (e.g., cost = 1 per action). For varying costs, Uniform Cost Search is optimal.',
        memoryTip: '💡 BFS = Optimal for uniform step costs.'
      },
      {
        id: 'u2-q2',
        question: 'What is the primary evaluation function used by A* Search?',
        options: [
          'f(n) = g(n) * h(n)',
          'f(n) = g(n) + h(n)',
          'f(n) = h(n) - g(n)',
          'f(n) = max(g(n), h(n))'
        ],
        answer: 1,
        explanation: 'A* evaluates node n using f(n) = g(n) + h(n), where g(n) is path cost from start, and h(n) is estimated cost to goal.',
        memoryTip: '💡 A* Formula: f(n) = g(n) [actual cost] + h(n) [heuristic estimate].'
      },
      {
        id: 'u2-q3',
        question: 'What does it mean for a heuristic h(n) to be "admissible"?',
        options: [
          'h(n) must always equal exact path cost g(n)',
          'h(n) must never overestimate the true cost to reach the goal state',
          'h(n) must return negative numbers for unvisited states',
          'h(n) must be strictly greater than true cost h*(n)'
        ],
        answer: 1,
        explanation: 'Admissibility condition: 0 <= h(n) <= h*(n). An admissible heuristic is optimistic and never overestimates.',
        memoryTip: '💡 Admissible = Never overestimates true cost (optimistic).'
      },
      {
        id: 'u2-q4',
        question: 'Which uninformed search algorithm expands nodes in order of non-decreasing path cost g(n)?',
        options: [
          'Depth-First Search (DFS)',
          'Uniform Cost Search (UCS / Dijkstra)',
          'Depth-Limited Search',
          'Greedy Best-First Search'
        ],
        answer: 1,
        explanation: 'Uniform Cost Search uses a priority queue ordered by g(n) to find path with minimal total cost.',
        memoryTip: '💡 UCS = Priority Queue ordered by path cost g(n).'
      },
      {
        id: 'u2-q5',
        question: 'What is the main advantage of Iterative Deepening Search (IDS)?',
        options: [
          'It requires O(b^d) memory like BFS',
          'It combines the linear O(bd) memory efficiency of DFS with the completeness/optimality of BFS',
          'It eliminates the need for goal testing',
          'It evaluates heuristic functions faster than A*'
        ],
        answer: 1,
        explanation: 'IDS re-runs depth-limited searches with increasing depth limits, using O(bd) space and finding shallowest goal.',
        memoryTip: '💡 IDS = Best of both worlds: O(bd) memory of DFS + Completeness of BFS.'
      },
      {
        id: 'u2-q6',
        question: 'Greedy Best-First Search expands nodes based solely on:',
        options: [
          'f(n) = g(n)',
          'f(n) = h(n)',
          'f(n) = g(n) + h(n)',
          'f(n) = depth(n)'
        ],
        answer: 1,
        explanation: 'Greedy Best-First Search selects nodes using f(n) = h(n), ignoring path cost g(n). It can get stuck in loops.',
        memoryTip: '💡 Greedy Best-First = Evaluates h(n) only (fast but not optimal).'
      },
      {
        id: 'u2-q7',
        question: 'For A* search on a graph to be optimal, the heuristic h(n) must be:',
        options: [
          'Admissible only',
          'Consistent (Monotone) and Admissible',
          'Strictly greater than true cost',
          'Constant h(n) = 100'
        ],
        answer: 1,
        explanation: 'Graph-search A* requires consistency (h(n) <= c(n,a,n\') + h(n\')) to prevent re-opening closed nodes.',
        memoryTip: '💡 Graph A* Optimal = Consistent (Monotone) Heuristic.'
      },
      {
        id: 'u2-q8',
        question: 'What is the spatial distance formula commonly used as an admissible heuristic for grid navigation?',
        options: [
          'Manhattan Distance: |x1 - x2| + |y1 - y2|',
          'Hamming Distance',
          'Levenstein Distance',
          'Exponential Fourier Distance'
        ],
        answer: 0,
        explanation: 'Manhattan Distance sums horizontal and vertical grid steps, providing an admissible heuristic for 4-way grid motion.',
        memoryTip: '💡 Grid Heuristics: Manhattan (4-way) & Euclidean (straight line).'
      },
      {
        id: 'u2-q9',
        question: 'Which local search algorithm can escape local maxima by occasionally making "downhill" moves based on temperature T?',
        options: [
          'Simple Hill-Climbing',
          'Simulated Annealing',
          'First-Choice Hill Climbing',
          'Breadth-First Search'
        ],
        answer: 1,
        explanation: 'Simulated Annealing uses temperature T decay schedule to accept bad moves with probability e^(-delta E / T).',
        memoryTip: '💡 Simulated Annealing = High Temp accepts bad moves to escape local maxima.'
      },
      {
        id: 'u2-q10',
        question: 'What is the time complexity of Breadth-First Search with branching factor b and solution depth d?',
        options: [
          'O(b * d)',
          'O(b^d)',
          'O(d^b)',
          'O(log b)'
        ],
        answer: 1,
        explanation: 'BFS expands 1 + b + b^2 + ... + b^d nodes, yielding time complexity O(b^d).',
        memoryTip: '💡 BFS / DFS Time Complexity = O(b^d).'
      },
      {
        id: 'u2-q11',
        question: 'Genetic Algorithms select parent individuals based on their:',
        options: [
          'Branching factor',
          'Fitness function score',
          'Depth in tree',
          'Admissibility bound'
        ],
        answer: 1,
        explanation: 'Genetic Algorithms evaluate population states using a Fitness Function, performing selection, crossover, and mutation.',
        memoryTip: '💡 Genetic Algo = Population + Fitness + Crossover + Mutation.'
      },
      {
        id: 'u2-q12',
        question: 'In Hill-Climbing, a state where all neighboring states have lower values than the current state but is not the global goal is called a:',
        options: [
          'Global Maximum',
          'Local Maximum',
          'Plateau',
          'Ridge'
        ],
        answer: 1,
        explanation: 'A Local Maximum is a peak higher than neighbors but lower than the global optimum.',
        memoryTip: '💡 Hill Climbing Trap = Stuck in Local Maximum.'
      }
    ]
  },
  'unit-3': {
    title: 'Unit III: Constraints & Adversarial Game Search',
    questions: [
      {
        id: 'u3-q1',
        question: 'In the Minimax algorithm, what objective does the MAX player have?',
        options: [
          'Minimize the utility value at the root node',
          'Maximize the utility value of terminal leaf states',
          'Prune all right-hand branches',
          'Select random actions regardless of score'
        ],
        answer: 1,
        explanation: 'MAX player aims to maximize utility, while MIN player aims to minimize MAX\'s utility outcome.',
        memoryTip: '💡 Minimax: MAX wants highest score, MIN wants lowest score.'
      },
      {
        id: 'u3-q2',
        question: 'Alpha-Beta pruning removes subtrees without affecting the final Minimax decision. What is Alpha (alpha)?',
        options: [
          'The minimum value MIN is guaranteed to get so far',
          'The value of the best (highest-value) choice found so far along the path for MAX',
          'The depth limit bound of the search tree',
          'The branching factor'
        ],
        answer: 1,
        explanation: 'Alpha is the highest-value choice for MAX found so far; Beta is the lowest-value choice for MIN.',
        memoryTip: '💡 Alpha = MAX\'s best score so far; Beta = MIN\'s best score so far.'
      },
      {
        id: 'u3-q3',
        question: 'When can Alpha-Beta pruning cut off a branch (prune)?',
        options: [
          'Whenever alpha < beta',
          'Whenever alpha >= beta',
          'Whenever depth > 10',
          'Whenever heuristic returns zero'
        ],
        answer: 1,
        explanation: 'Pruning occurs whenever alpha >= beta, because MAX will never allow MIN to steer down a worse path.',
        memoryTip: '💡 Pruning Rule: Cut branch when Alpha >= Beta.'
      },
      {
        id: 'u3-q4',
        question: 'A Constraint Satisfaction Problem (CSP) is defined by three components (X, D, C). What are they?',
        options: [
          'Variables X, Domains D, Constraints C',
          'Xml files X, Data D, Code C',
          'eXecution X, Depth D, Cost C',
          'X-axis X, Distance D, Center C'
        ],
        answer: 0,
        explanation: 'CSP formal triplet: X = set of variables, D = domains of allowable values, C = constraints restricting assignments.',
        memoryTip: '💡 CSP = Variables (X) + Domains (D) + Constraints (C).'
      },
      {
        id: 'u3-q5',
        question: 'Which constraint propagation algorithm enforces arc consistency by ensuring every value in variable Xi has a legal value in Xj?',
        options: [
          'Minimax',
          'AC-3 Algorithm',
          'A* Search',
          'Monte Carlo Tree Search'
        ],
        answer: 1,
        explanation: 'AC-3 (Arc Consistency 3) maintains a queue of arcs (Xi, Xj) and prunes domain values violating constraints.',
        memoryTip: '💡 AC-3 = Arc Consistency domain pruning for CSPs.'
      },
      {
        id: 'u3-q6',
        question: 'In Backtracking search for CSPs, the Minimum Remaining Values (MRV) heuristic selects:',
        options: [
          'The variable with the fewest remaining legal values in its domain',
          'The variable involved in the most constraints with unassigned variables',
          'The value that leaves the most choices for neighboring variables',
          'A random unassigned variable'
        ],
        answer: 0,
        explanation: 'MRV ("fail-first" heuristic) picks the variable with the smallest domain to prune invalid branches early.',
        memoryTip: '💡 MRV Heuristic = Most constrained variable first (smallest domain).'
      },
      {
        id: 'u3-q7',
        question: 'In Map Coloring CSP, if Australia has 7 territories and 3 colors (Red, Green, Blue), what is a valid constraint?',
        options: [
          'Adjacent territories must share the same color',
          'Adjacent territories must have different colors (WA != NT)',
          'All territories must be painted Red',
          'Color domain size must equal 10'
        ],
        answer: 1,
        explanation: 'Map coloring constraint requires that bordering regions receive distinct colors.',
        memoryTip: '💡 Map Coloring Constraint: Region_A != Region_B if adjacent.'
      },
      {
        id: 'u3-q8',
        question: 'Under optimal move ordering, what is the time complexity of Alpha-Beta Pruning?',
        options: [
          'O(b^m)',
          'O(b^(m/2))',
          'O(m^b)',
          'O(b * m)'
        ],
        answer: 1,
        explanation: 'With perfect move ordering, Alpha-Beta pruning effectively doubles the searchable depth to O(b^(m/2)).',
        memoryTip: '💡 Optimal Alpha-Beta Complexity = O(b^(m/2)) — effectively doubles search depth!'
      },
      {
        id: 'u3-q9',
        question: 'The Least Constraining Value (LCV) heuristic is used in CSPs to select:',
        options: [
          'Which variable to assign next',
          'Which value to assign to a variable that leaves maximum flexibility for remaining variables',
          'Which constraint to delete',
          'The root node'
        ],
        answer: 1,
        explanation: 'LCV chooses the value that rules out the fewest choices for neighboring variables ("fail-last" for value choice).',
        memoryTip: '💡 LCV = Chooses value that leaves maximum options open.'
      },
      {
        id: 'u3-q10',
        question: 'In games with chance (e.g. Backgammon), Minimax is extended by adding which type of node?',
        options: [
          'Decision nodes',
          'Expectimax / Chance nodes calculating weighted average expected utility',
          'Pruning nodes',
          'Deterministic static nodes'
        ],
        answer: 1,
        explanation: 'Expectimax introduces Chance nodes taking expected utility = sum( P(outcome) * Utility(outcome) ).',
        memoryTip: '💡 Games with Chance = Expectimax with probability-weighted chance nodes.'
      },
      {
        id: 'u3-q11',
        question: 'Forward Checking in CSP backtracking search works by:',
        options: [
          'Checking goal test only at leaf nodes',
          'Tracking remaining legal values for unassigned variables when a variable is assigned',
          'Re-running A* search at every step',
          'Randomizing domain assignments'
        ],
        answer: 1,
        explanation: 'Forward Checking updates remaining legal values for neighbors after each assignment, detecting empty domains early.',
        memoryTip: '💡 Forward Checking = Look ahead 1 step to remove illegal domain values.'
      },
      {
        id: 'u3-q12',
        question: 'What is the evaluation function used when game tree search is cut off at depth limit d?',
        options: [
          'Admissible heuristic h(n)',
          'Heuristic Evaluation Function Eval(s) estimating position strength',
          'Path cost g(n)',
          'Truth table evaluation'
        ],
        answer: 1,
        explanation: 'Evaluation functions Eval(s) replace terminal utility values when real-time games cut off search early.',
        memoryTip: '💡 Eval(s) = Heuristic board evaluator when depth cutoff is reached.'
      }
    ]
  },
  'unit-4': {
    title: 'Unit IV: Knowledge Representation & Logical Reasoning',
    questions: [
      {
        id: 'u4-q1',
        question: 'What is the difference between Propositional Logic and First-Order Logic (FOL)?',
        options: [
          'Propositional logic uses quantum states; FOL uses binary',
          'Propositional logic represents atomic facts; FOL adds Objects, Relations, and Quantifiers (ALL, EXISTS)',
          'FOL cannot express negation',
          'Propositional logic is undecidable'
        ],
        answer: 1,
        explanation: 'First-Order Logic adds expressive power through objects, relations, and universal/existential quantifiers.',
        memoryTip: '💡 FOL = Propositional Logic + Objects + Relations + Quantifiers (∀, ∃).'
      },
      {
        id: 'u4-q2',
        question: 'What does the Universal Quantifier (∀ x) represent in First-Order Logic?',
        options: [
          'There exists at least one element x',
          'For all elements x in the domain',
          'No element x exists',
          'x is equal to zero'
        ],
        answer: 1,
        explanation: '∀ x reads "For all x". (∀ x King(x) => Person(x)) means all kings are persons.',
        memoryTip: '💡 Quantifiers: ∀ = For All; ∃ = There Exists.'
      },
      {
        id: 'u4-q3',
        question: 'In Propositional Logic, what does Modus Ponens state?',
        options: [
          'If P => Q and P are True, then Q is True',
          'If P => Q and Q are True, then P is True',
          'If P is True, then NOT P is True',
          'P AND Q => P OR Q'
        ],
        answer: 0,
        explanation: 'Modus Ponens inference rule: From (α => β) and α, infer β.',
        memoryTip: '💡 Modus Ponens: (P => Q) & P  ===>  Q'
      },
      {
        id: 'u4-q4',
        question: 'To apply the Resolution inference rule, logical sentences must first be converted into:',
        options: [
          'Horn Clauses only',
          'Conjunctive Normal Form (CNF)',
          'Disjunctive Normal Form (DNF)',
          'Truth table matrices'
        ],
        answer: 1,
        explanation: 'Resolution requires sentences to be in CNF (conjunction of disjunctions of literals).',
        memoryTip: '💡 Resolution Proofs require CNF (Conjunctive Normal Form).'
      },
      {
        id: 'u4-q5',
        question: 'What is a Horn Clause in logical inference?',
        options: [
          'A clause with exactly 10 variables',
          'A disjunction of literals with at most one positive literal',
          'A clause containing no negation operators',
          'An invalid contradiction'
        ],
        answer: 1,
        explanation: 'Horn clauses contain at most 1 positive literal, enabling linear-time Forward and Backward Chaining.',
        memoryTip: '💡 Horn Clause = At most 1 positive literal (enables O(n) chaining).'
      },
      {
        id: 'u4-q6',
        question: 'Forward Chaining logic inference is classified as:',
        options: [
          'Goal-driven reasoning starting from query Q',
          'Data-driven reasoning starting from known facts in KB to infer new conclusions',
          'Random sampling',
          'Adversarial minimax reasoning'
        ],
        answer: 1,
        explanation: 'Forward chaining starts from KB known atomic facts and applies modus ponens to derive new facts.',
        memoryTip: '💡 Forward Chaining = Data-driven (Facts ➔ Goal).'
      },
      {
        id: 'u4-q7',
        question: 'Backward Chaining logic inference is classified as:',
        options: [
          'Data-driven inference',
          'Goal-driven reasoning working backward from target query Q to find supporting facts',
          'Resolution refutation',
          'Uninformed search'
        ],
        answer: 1,
        explanation: 'Backward chaining works backward from target query Q, finding rules whose conclusions match Q.',
        memoryTip: '💡 Backward Chaining = Goal-driven (Query ➔ Required Premises).'
      },
      {
        id: 'u4-q8',
        question: 'In Wumpus World AI domain, what percept indicates an adjacent pit in a neighboring square?',
        options: [
          'Stench',
          'Breeze',
          'Glitter',
          'Bump'
        ],
        answer: 1,
        explanation: 'Breeze percept indicates pit in adjacent square; Stench indicates adjacent Wumpus; Glitter indicates gold.',
        memoryTip: '💡 Wumpus World Percepts: Breeze ➔ Pit; Stench ➔ Wumpus; Glitter ➔ Gold.'
      },
      {
        id: 'u4-q9',
        question: 'What is the Unification process in First-Order Logic?',
        options: [
          'Merging two knowledge bases together',
          'Finding a substitution theta that makes two logical expressions identical',
          'Converting FOL sentences to natural language',
          'Deleting duplicate facts'
        ],
        answer: 1,
        explanation: 'Unify(p, q) returns a substitution theta such that Substd(theta, p) = Substd(theta, q).',
        memoryTip: '💡 Unification = Finding variable substitution θ that matches expressions.'
      },
      {
        id: 'u4-q10',
        question: 'Which rule replaces existential variables with fresh unique constants during CNF conversion?',
        options: [
          'Modus Tollens',
          'Skolemization (Skolem Constants / Functions)',
          'De Morgan\'s Law',
          'Resolution'
        ],
        answer: 1,
        explanation: 'Skolemization eliminates existential quantifiers ∃ by introducing Skolem constants or functions.',
        memoryTip: '💡 Skolemization = Replace ∃x with Skolem Constant (e.g. K1).'
      },
      {
        id: 'u4-q11',
        question: 'Proof by Resolution works by proving that Knowledge Base KB AND NOT(Query Q) is:',
        options: [
          'Valid',
          'Unsatisfiable (Contradiction / Empty Clause [])',
          'Equivalent to True',
          'Tautological'
        ],
        answer: 1,
        explanation: 'Resolution Refutation proves KB |= Q by showing KB ^ ~Q leads to contradiction (empty clause).',
        memoryTip: '💡 Resolution Refutation = Derive Contradiction [] from (KB ∧ ¬Q).'
      },
      {
        id: 'u4-q12',
        question: 'An Ontological Engineering hierarchy organizes domain concepts using which relation?',
        options: [
          'Is-A / Subclass-Of taxonomy',
          'Logical negation',
          'Manhattan distance',
          'Heuristic cost'
        ],
        answer: 0,
        explanation: 'Ontologies organize general knowledge into concepts, categories, and Is-A inheritance taxonomies.',
        memoryTip: '💡 Ontology = Is-A concept taxonomy & categories.'
      }
    ]
  },
  'unit-5': {
    title: 'Unit V: AI Applications, Planning & Modern Frontiers',
    questions: [
      {
        id: 'u5-q1',
        question: 'In STRIPS automated planning domain, what 3 lists define an Action operator?',
        options: [
          'Preconditions, Add List, Delete List',
          'Start, Goal, Heuristic',
          'Sensors, Actuators, Environment',
          'Variables, Domains, Constraints'
        ],
        answer: 0,
        explanation: 'STRIPS action schema contains: Preconditions (must be true to execute), Add List (new facts), Delete List (facts no longer true).',
        memoryTip: '💡 STRIPS Action = Preconditions + Add List + Delete List.'
      },
      {
        id: 'u5-q2',
        question: 'What is the main advantage of Partial-Order Planning (POP) over classical linear planning?',
        options: [
          'It forces strict sequential execution of non-interfering actions',
          'It leaves action orderings unspecified whenever possible, avoiding premature commitments (Decommitment)',
          'It eliminates goal state requirements',
          'It uses BFS search exclusively'
        ],
        answer: 1,
        explanation: 'POP creates plans where steps are ordered only when required by causal links or threats.',
        memoryTip: '💡 Partial-Order Planning = Flexible ordering without premature commitments.'
      },
      {
        id: 'u5-q3',
        question: 'In Natural Language Processing (NLP), what is the syntactic parsing step?',
        options: [
          'Converting audio speech into digital waveforms',
          'Analyzing grammatical sentence structure to build a Parse Tree',
          'Extracting sentiment polarities (+/-)',
          'Translating words into vector embeddings'
        ],
        answer: 1,
        explanation: 'Syntactic parsing analyzes grammar rules (Noun Phrases, Verb Phrases) to construct parse trees.',
        memoryTip: '💡 NLP Pipeline: Tokenization ➔ POS Tagging ➔ Syntactic Parsing ➔ Semantics.'
      },
      {
        id: 'u5-q4',
        question: 'In Computer Vision, what operation is performed by a Convolutional layer in CNNs?',
        options: [
          'Solving A* heuristic grid equations',
          'Sliding a kernel/filter matrix over input pixels to extract feature maps (edges, textures)',
          'Pruning alpha-beta game trees',
          'Performing resolution inference'
        ],
        answer: 1,
        explanation: 'Convolution applies filter kernels over image pixels to detect local features like edges and gradients.',
        memoryTip: '💡 CNN Convolution = Feature extraction kernel (edges, corners, features).'
      },
      {
        id: 'u5-q5',
        question: 'In Reinforcement Learning (RL), the Q-learning update formula updates Q(s, a) based on:',
        options: [
          'Immediate reward R + discounted max Q-value of successor state s\'',
          'Preconditions and Delete lists',
          'Manhattan distance h(n)',
          'Turing test score'
        ],
        answer: 0,
        explanation: 'Q-Learning equation: Q(s, a) <- Q(s, a) + alpha * [ R + gamma * max_a\' Q(s\', a\') - Q(s, a) ].',
        memoryTip: '💡 Q-Learning = Bellman Equation update with Reward R + Discounted Max Future Q.'
      },
      {
        id: 'u5-q6',
        question: 'What is the function of a Planning Graph in the Graphplan algorithm?',
        options: [
          'Rendering 3D visual graphs for user interfaces',
          'Polynomial-size structure of alternating State and Action levels that exposes mutually exclusive (mutex) relations',
          'Building A* priority queues',
          'Executing backward chaining'
        ],
        answer: 1,
        explanation: 'Graphplan constructs a Planning Graph with state & action levels, tracking mutex constraints to extract plans efficiently.',
        memoryTip: '💡 Graphplan = State/Action levels with Mutex (mutually exclusive) links.'
      },
      {
        id: 'u5-q7',
        question: 'In Robotics, what does the Inverse Kinematics problem solve?',
        options: [
          'Calculating camera exposure time',
          'Determining required joint angles to place a robotic end-effector at a desired 3D spatial position',
          'Navigating graph nodes in BFS order',
          'Evaluating sentiment scores'
        ],
        answer: 1,
        explanation: 'Inverse Kinematics computes joint angles needed to position robot hands/end-effectors at target coordinates.',
        memoryTip: '💡 Kinematics: Forward = Angles ➔ Position; Inverse = Position ➔ Required Joint Angles.'
      },
      {
        id: 'u5-q8',
        question: 'What architecture introduced by Vaswani et al. (2017) powers modern Large Language Models (LLMs)?',
        options: [
          'Multilayer Perceptrons (MLP)',
          'Transformer Architecture with Self-Attention Mechanisms',
          'Decision Tree Ensembles',
          'Alpha-Beta Minimax Trees'
        ],
        answer: 1,
        explanation: 'Transformers use Self-Attention to process tokens in parallel, replacing sequential RNNs.',
        memoryTip: '💡 Modern AI LLMs = Transformer Architecture + Self-Attention.'
      },
      {
        id: 'u5-q9',
        question: 'Which metric is commonly used to evaluate Machine Translation accuracy against human reference translations?',
        options: [
          'BLEU Score (Bilingual Evaluation Understudy)',
          'Manhattan Distance',
          'A* Heuristic Ratio',
          'Alpha-Beta Cutoff Count'
        ],
        answer: 0,
        explanation: 'BLEU score measures n-gram overlap between machine translations and reference human translations.',
        memoryTip: '💡 Translation Evaluation = BLEU Score (n-gram overlap).'
      },
      {
        id: 'u5-q10',
        question: 'In Hierarchical Task Network (HTN) planning, high-level tasks are decomposed into sub-tasks using:',
        options: [
          'Methods / Action decompositions',
          'Manhattan heuristics',
          'Truth tables',
          'Convolution kernels'
        ],
        answer: 0,
        explanation: 'HTN planning uses Methods to refine abstract high-level tasks into primitive executable actions.',
        memoryTip: '💡 HTN Planning = Hierarchical Task Decomposition using Methods.'
      },
      {
        id: 'u5-q11',
        question: 'What is the role of the Discriminator in a Generative Adversarial Network (GAN)?',
        options: [
          'Generate synthetic fake image samples from noise',
          'Classify whether an input sample is real (from training dataset) or fake (from Generator)',
          'Extract parse trees from sentences',
          'Calculate A* f-costs'
        ],
        answer: 1,
        explanation: 'GANs feature a Generator (creates fake samples) and Discriminator (distinguishes real vs fake).',
        memoryTip: '💡 GAN = Generator (artist) vs Discriminator (critic / judge).'
      },
      {
        id: 'u5-q12',
        question: 'In AI Ethics, "Explainable AI" (XAI) aims to tackle which fundamental problem?',
        options: [
          'Reducing GPU power consumption',
          'The Black-Box problem — making complex AI decision reasoning transparent and understandable to humans',
          'Increasing search tree depth',
          'Eliminating database storage'
        ],
        answer: 1,
        explanation: 'XAI focuses on auditing, interpretability, and transparency of opaque deep learning models.',
        memoryTip: '💡 XAI (Explainable AI) = Solving Black-Box mystery for human trust.'
      }
    ]
  }
};
