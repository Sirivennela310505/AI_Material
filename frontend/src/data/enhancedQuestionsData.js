// Comprehensive University-Grade Exam Question Bank (50 Questions • 10 per Unit)
// Designed for 8-12 Marks University Exam Scoring Rubric with Flowcharts, Graphs, Diagrams & Real Images.

export const ENHANCED_EXAM_QUESTIONS = [
  // ════════════════════════════════════════════════════════════════════════════
  // UNIT I: INTELLIGENT AGENTS & FOUNDATIONS
  // ════════════════════════════════════════════════════════════════════════════
  {
    unitId: 'unit-1',
    id: 'u1-q1',
    marks: 12,
    topic: 'Intelligent Agents & PEAS Framework',
    question: 'Define an Intelligent Agent. Explain the PEAS framework in detail with complete specifications for (a) Automated Driving System and (b) Medical Diagnostic System.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    imageCaption: 'Fig 1.1: Autonomous driving task environment — LiDAR, cameras, radar, and actuation controls',
    flowchart: [
      { step: '1. Perception', desc: 'Sensors capture environment state (LiDAR, Cameras, GPS, Symptoms)', icon: 'Eye' },
      { step: '2. Belief Update', desc: 'Internal model integrates percepts with prior world knowledge', icon: 'Cpu' },
      { step: '3. Performance Eval', desc: 'Agent evaluates candidate actions against performance metric P', icon: 'Award' },
      { step: '4. Actuator Signal', desc: 'Actuators execute optimal action (Steering, Prescription)', icon: 'Zap' },
      { step: '5. Environment Feedback', desc: 'World state evolves; agent receives successor percept sequence', icon: 'RefreshCw' }
    ],
    diagramAscii: `
┌───────────────────────────────────────────────────────────────┐
│                      ENVIRONMENT                              │
└──────┬────────────────────────────────────────────────▲───────┘
       │ Percept Sequence (P*)                          │ Actions (A)
       ▼                                                │
┌──────────────┐                               ┌────────┴───────┐
│   SENSORS    │                               │   ACTUATORS    │
└──────┬───────┘                               └────────▲───────┘
       │                                                │
       ▼                                                │
┌───────────────────────────────────────────────────────┴───────┐
│                    INTELLIGENT AGENT                          │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Mathematical Agent Function:  f: P* ➔ A                 │  │
│  │ Objective: Maximize Expected Performance Measure (P)    │  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘`,
    rubric: 'Definition & Agent Function: 2M | PEAS Concept: 2M | Automated Vehicle Matrix: 4M | Medical Diagnostic Matrix: 4M = Total 12 Marks',
    shortAnswer: 'An Intelligent Agent is any entity that perceives its environment through sensors and acts upon it rationally through actuators to maximize expected performance. PEAS specifies: Performance Measure, Environment, Actuators, and Sensors.',
    structuredAnswer: {
      definition: `1. Mathematical Definition of an Agent:
An agent is an entity that perceives its environment through sensors and acts upon that environment through actuators. Mathematically, an agent's behavior is described by an agent function:
f: P* → A
where P* is the history of all percept sequences received up to the current time, and A is the set of legal actions. An agent program is the concrete software implementation running on an architecture (hardware + sensors + compute).

2. Rationality Principle:
A rational agent is one that, for each possible percept sequence, selects an action that is expected to maximize its performance measure, given the evidence provided by the percept sequence and whatever built-in knowledge the agent possesses. Rationality ≠ Omniscience (rationality maximizes expected outcome, not actual hindsight perfection).`,
      peasBreakdown: `The PEAS framework formalizes the complete operational domain for any rational agent:
• P (Performance Measure): The objective external metric used to gauge success.
• E (Environment): The external world/context the agent inhabits.
• A (Actuators): The output hardware/software through which actions are executed.
• S (Sensors): The input perception devices translating environment physical signals into digital percepts.`,
      caseStudies: `Case Study A: Automated Driving System (Self-Driving Car)
• Performance Measure: Safety (0 collisions), travel time minimization, legal compliance (speed limits, signals), passenger comfort (smooth jerk-free acceleration), fuel/battery efficiency.
• Environment: Public roadways, multilane highways, pedestrian crossings, adverse weather (fog, rain), other vehicles, cyclists, road construction cones.
• Actuators: Electronic power steering column, drive-by-wire throttle accelerator, regenerative friction brakes, turn indicators, headlights, horn, infotainment display.
• Sensors: 360° LiDAR arrays, high-resolution stereo cameras, long-range radar, ultrasonic park distance sensors, GPS/GNSS receiver, IMU (inertial measurement unit), wheel speed encoders.

Case Study B: Medical Diagnostic System
• Performance Measure: Correct diagnosis accuracy (high sensitivity & specificity), patient recovery speed, minimized diagnostic testing expense, zero adverse drug reaction events.
• Environment: Hospital clinical setting, patient physiology, nursing staff, clinical laboratory database, dynamic medical symptom progression.
• Actuators: Clinical display monitor showing differential diagnoses, automated laboratory test orders, recommended prescription dosages, referral alerts.
• Sensors: Keyboard/touchscreen symptom entries, electronic health record (EHR) feeds, laboratory biochemical assays, vitals monitors (ECG, blood pressure).`,
      criticalAnalysis: `Exam Trap & Distinction:
Students frequently confuse Actuators with Sensors. Always verify that Sensors are INPUT transducers (e.g. cameras) and Actuators are OUTPUT mechanisms (e.g. steering motor). When designing PEAS, performance measures must be designed from the user's objective standpoint, NOT from the agent's internal convenience.`
    },
    memoryTip: '💡 PEAS Mnemonic: P = Scorecard, E = World, A = Muscles/Hands, S = Eyes/Ears.',
    whyImportant: 'Universally asked 10-12 mark university question testing foundational agent theory.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q2',
    marks: 10,
    topic: 'Environment Properties & Classification',
    question: 'Differentiate between Fully Observable vs Partially Observable and Deterministic vs Stochastic environments with real-world scenarios.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
    imageCaption: 'Fig 1.2: Dimensional spectrum of agent environments from discrete boards to dynamic traffic',
    flowchart: [
      { step: 'Sensor Ingestion', desc: 'Are sensors complete? Yes ➔ Fully Observable; No ➔ Partially Observable', icon: 'Search' },
      { step: 'Next State Transition', desc: 'Is next state 100% predictable? Yes ➔ Deterministic; No ➔ Stochastic', icon: 'Compass' },
      { step: 'Temporal Impact', desc: 'Do past actions affect future rewards? Yes ➔ Sequential; No ➔ Episodic', icon: 'Clock' },
      { step: 'World Dynamics', desc: 'Does environment change during deliberation? Yes ➔ Dynamic; No ➔ Static', icon: 'Activity' }
    ],
    diagramAscii: `
ENVIRONMENT CLASSIFICATION MATRIX:
┌────────────────────────┬──────────────────────┬────────────────────────┐
│ Environment Dimension  │ Easiest (Trivial)    │ Hardest (Real-World)   │
├────────────────────────┼──────────────────────┼────────────────────────┤
│ Observability          │ Fully Observable     │ Partially Observable   │
│ Predictability         │ Deterministic        │ Stochastic / Random    │
│ Time Horizon           │ Episodic             │ Sequential             │
│ World Stability        │ Static               │ Dynamic                │
│ Continuity             │ Discrete             │ Continuous             │
│ Agency                 │ Single Agent         │ Multi-Agent (Adversary)│
└────────────────────────┴──────────────────────┴────────────────────────┘`,
    rubric: 'Observability Comparison: 4M | Determinism vs Stochasticity: 4M | Scenario Mapping: 2M = Total 10 Marks',
    shortAnswer: 'Fully Observable means sensors detect complete world state at every instant (Chess). Partially Observable means sensors suffer from noise or occlusion (Poker, Driving). Deterministic means next state is strictly determined by current state and action.',
    structuredAnswer: {
      definition: `1. Fully Observable vs. Partially Observable:
• Fully Observable: An environment is fully observable if an agent's sensors give it access to the complete state of the environment at each point in time. Fully observable environments are convenient because the agent needs no internal state to track the world (e.g. Chess, Crossword puzzles, 8-Puzzle).
• Partially Observable: An environment is partially observable when sensors are noisy, limited, or parts of the state are occluded. The agent must maintain an internal belief state to reconstruct missing data (e.g. Poker where opponents' cards are hidden; Automated driving in heavy fog).

2. Deterministic vs. Stochastic:
• Deterministic: An environment is deterministic if the next state of the environment is completely determined by the current state and the action executed by the agent. If the environment is deterministic except for the actions of other agents, it is strategic (e.g. Tic-Tac-Toe, 8-Puzzle).
• Stochastic: An environment is stochastic if there is inherent randomness, uncertainty, or unmodeled physics in state transitions. The agent cannot know the exact next state with 100% certainty, only probability distributions P(s' | s, a) (e.g. Backgammon with dice rolls; Autonomous driving with erratic pedestrian behavior).`,
      comparisonTable: `Key Structural Differences:
• Memory Requirement: Fully observable requires 0 belief state; Partially observable requires tracking probability distributions over states.
• Search Algorithm: Deterministic allows standard A* or BFS trees; Stochastic requires Expectiminimax or Markov Decision Processes (MDPs).
• Failure Modes: Stochastic algorithms must plan contingencies or use closed-loop feedback policies.`,
      criticalAnalysis: `Exam Trap: Never say "Taxi driving is deterministic because cars obey physics." Real-world driving is heavily STOCHASTIC due to tire slip, sensor noise, unpredictable pedestrian crossings, and mechanical variances!`
    },
    memoryTip: '💡 Easy Exam Mnemonic: Chess is Fully-Deterministic-Static-Discrete; Driving is Partially-Stochastic-Dynamic-Continuous.',
    whyImportant: 'Core classification concept required for choosing suitable search and planning algorithms.'
  },
  {
    unitId: 'unit-1',
    id: 'u1-q3',
    marks: 12,
    topic: 'Agent Architecture Hierarchy',
    question: 'Compare Simple Reflex Agents, Model-Based Agents, Goal-Based Agents, and Utility-Based Agents with structural architectural diagrams.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    imageCaption: 'Fig 1.3: Evolution of intelligent agent internal reasoning architectures',
    flowchart: [
      { step: 'Level 1: Simple Reflex', desc: 'Percept ➔ Condition-Action Rules ➔ Actuators (Stateless)', icon: 'Zap' },
      { step: 'Level 2: Model-Based', desc: 'Internal State + Transition Model + Rules (Bridges unobserved states)', icon: 'Database' },
      { step: 'Level 3: Goal-Based', desc: 'State + Goals ➔ Search & Planning sequence ➔ Action', icon: 'Target' },
      { step: 'Level 4: Utility-Based', desc: 'State + Utility Function U(s) ➔ Tradeoff Optimization ➔ Action', icon: 'Award' },
      { step: 'Level 5: Learning Agent', desc: 'Critic + Learning Element + Performance Element + Problem Generator', icon: 'Sparkles' }
    ],
    diagramAscii: `
AGENT ARCHITECTURE LADDER:
[5. LEARNING AGENT]     ➔ Adapts behavior via Critic, Learner & Explorer
         ▲
[4. UTILITY-BASED AGENT] ➔ Optimizes trade-offs via Utility Function U(s) -> R
         ▲
[3. GOAL-BASED AGENT]    ➔ Plans sequences of actions to reach target Goals
         ▲
[2. MODEL-BASED AGENT]   ➔ Maintains Internal World State (How world evolves)
         ▲
[1. SIMPLE REFLEX AGENT] ➔ Condition-Action Rules (If condition Then action)`,
    rubric: 'Simple Reflex: 2M | Model-Based: 3M | Goal-Based: 3M | Utility-Based: 3M | Structural Comparison: 1M = Total 12 Marks',
    shortAnswer: 'Agents evolve in complexity from stateless Simple Reflex (Condition-Action) to Model-Based (internal memory), Goal-Based (planning ahead), Utility-Based (optimizing continuous tradeoffs), and Learning Agents (self-improving).',
    structuredAnswer: {
      definition: `1. Simple Reflex Agents:
Select actions based solely on the CURRENT percept, completely ignoring percept history. Operates via condition-action rules:
IF condition THEN action
Example: IF car-in-front-is-braking THEN initiate-braking.
Limitation: Works ONLY in fully observable environments; enters infinite loops if partially observable.

2. Model-Based Reflex Agents:
Maintains an INTERNAL STATE to handle partial observability. Combines current percept with two models:
• Transition Model: Knowledge about "How the world evolves independently of agent".
• Sensor Model: Knowledge about "How the world affects the agent's sensors".
This internal state maintains a belief state of unobserved variables over time.

3. Goal-Based Agents:
Knowing the current state is not always enough; the agent needs GOAL information that describes desirable situations. Combines state information with goal descriptions to search, plan, and evaluate future sequences of actions.
Example: GPS navigation finding a route connecting current location to destination.

4. Utility-Based Agents:
Goals provide a crude binary distinction between "happy" and "unhappy" states. A utility function maps a state onto a real number U(s) ∈ ℝ, representing how desirable the state is. Allows rational decision making when:
• Conflicting goals exist (e.g. speed vs safety vs fuel efficiency).
• Multiple goals exist with uncertain likelihood of attainment.`,
      criticalAnalysis: `Viva Question: Why is a Learning Agent distinct?
A Learning Agent is not a separate tier of decision-making, but an overlay that can be added to any of the 4 architectures. It consists of:
• Critic: Measures agent performance against external standard.
• Learning Element: Makes improvements to the decision program.
• Performance Element: Selects external actions.
• Problem Generator: Suggests exploratory actions to discover new experiences.`
    },
    memoryTip: '💡 Memory Ladder: Reflex (Instinct) ➔ Model (Memory) ➔ Goal (Destination) ➔ Utility (Preferences) ➔ Learning (Improvement).',
    whyImportant: 'Major 12-mark university question testing the central hierarchy of agent design.'
  },

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT II: PROBLEM SOLVING & SEARCH ALGORITHMS
  // ════════════════════════════════════════════════════════════════════════════
  {
    unitId: 'unit-2',
    id: 'u2-q1',
    marks: 12,
    topic: 'A* Search Algorithm & Optimality Proof',
    question: 'Explain the A* Search Algorithm in detail. Prove that A* is tree-search optimal if the heuristic function h(n) is admissible, and graph-search optimal if consistent.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
    imageCaption: 'Fig 2.1: A* heuristic evaluation guiding search along the optimal shortest cost corridor',
    flowchart: [
      { step: '1. Initialize', desc: 'Push start node S₀ into Open Priority Queue with f(S₀) = g(S₀) + h(S₀)', icon: 'Layers' },
      { step: '2. Pop Minimum', desc: 'Pop node n with minimum f(n) from Open list; add to Closed list', icon: 'Search' },
      { step: '3. Goal Test', desc: 'If n is Goal state, return optimal path cost g(n)', icon: 'CheckCircle2' },
      { step: '4. Expand Successors', desc: 'For each child n\', compute g(n\') = g(n) + c(n, a, n\') and f(n\') = g(n\') + h(n\')', icon: 'GitBranch' },
      { step: '5. Queue Update', desc: 'If n\' is not in Open/Closed with lower cost, insert/update in Open list', icon: 'RefreshCw' }
    ],
    diagramAscii: `
A* EVALUATION FUNCTION ARCHITECTURE:
             f(n) = g(n) + h(n)
             ┌──────┴──────┐
             │             │
      g(n): Exact       h(n): Estimated
      Cost from Start   Cost to Goal
            │                  │
            ▼                  ▼
    [Path History]      [Heuristic Compass]
            │                  │
            └─────────┬────────┘
                      ▼
       TOTAL ESTIMATED PATH COST f(n)
                      │
           [Priority Queue Pop: min f(n)]`,
    rubric: 'A* Mechanics & Formula: 3M | Admissibility Definition: 2M | Tree-Search Proof: 4M | Consistency & Graph Proof: 3M = Total 12 Marks',
    shortAnswer: 'A* evaluates nodes using f(n) = g(n) + h(n). It is provably optimal in tree search if h(n) is admissible (0 ≤ h(n) ≤ h*(n)) and in graph search if h(n) is consistent (h(n) ≤ c + h(n\')).',
    structuredAnswer: {
      definition: `1. Evaluation Function Formulation:
A* search is an informed best-first search strategy that evaluates candidate nodes in a priority queue ordered by:
f(n) = g(n) + h(n)
where:
• g(n) = Exact cumulative path cost incurred from the start node S₀ to node n.
• h(n) = Estimated heuristic cost of the cheapest path from node n to the nearest goal state.
• f(n) = Total estimated cost of the cheapest solution passing through node n.

2. Heuristic Conditions:
• Admissibility: A heuristic h(n) is admissible if it NEVER overestimates the true cost to reach the goal:
0 ≤ h(n) ≤ h*(n)  ∀n
where h*(n) is the true optimal cost from n to goal. Admissible heuristics are optimistic.
• Consistency (Monotonicity): For every node n and successor n' generated by action a:
h(n) ≤ c(n, a, n') + h(n')
This satisfies the triangle inequality. Every consistent heuristic is admissible.`,
      proofOfOptimality: `3. Proof of Optimality for Tree-Search (By Contradiction):
Let G₂ be a sub-optimal goal state generated in the priority queue, with cost g(G₂) > C* (where C* is optimal cost). Let G₁ be an optimal goal state with g(G₁) = C*.
Suppose for contradiction that A* terminates by selecting G₂ from the priority queue before G₁.

Since G₂ is a goal state, h(G₂) = 0:
f(G₂) = g(G₂) + h(G₂) = g(G₂) > C*

Now consider an unexpanded node n on the frontier that lies on the true optimal path to G₁:
Since h is admissible, h(n) ≤ h*(n):
f(n) = g(n) + h(n) ≤ g(n) + h*(n) = C*

Combining the inequalities:
f(n) ≤ C* < f(G₂)  ⇒  f(n) < f(G₂)

Since the priority queue always pops the node with the MINIMUM f-value, node n MUST be expanded before G₂ can ever be popped!
This directly contradicts our assumption that G₂ was selected.
Therefore, no sub-optimal goal state can ever be selected ahead of an optimal path. A* is optimal! Q.E.D.`,
      criticalAnalysis: `4. Graph Search Optimality & Consistency:
In graph search, if h(n) is consistent, f(n) is monotonically non-decreasing along any path.
Proof: f(n') = g(n') + h(n') = g(n) + c(n, a, n') + h(n') ≥ g(n) + h(n) = f(n).
Because f-values never decrease, whenever A* selects a node for expansion, the optimal path to that node has already been found. No node ever needs to be reopened!`
    },
    memoryTip: '💡 A* Exam Rule: f(n) = Spent Cost g(n) + Future Guess h(n). Admissible = Underestimates, never overestimates!',
    whyImportant: 'Most frequently asked 10-12 mark algorithm question in AI syllabus.'
  },
  {
    unitId: 'unit-2',
    id: 'u2-q2',
    marks: 12,
    topic: 'Uninformed Search: BFS vs DFS vs IDDFS vs UCS',
    question: 'Compare Breadth-First Search (BFS), Depth-First Search (DFS), Iterative Deepening (IDDFS), and Uniform Cost Search (UCS) in terms of data structures, completeness, time complexity, and space complexity.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    imageCaption: 'Fig 2.2: Systematic state space exploration from shallow breadth waves to deep linear stacks',
    flowchart: [
      { step: 'BFS Traversal', desc: 'FIFO Queue ➔ Expands shallowest level first ➔ Optimal for unit step costs', icon: 'Grid' },
      { step: 'DFS Traversal', desc: 'LIFO Stack ➔ Dives to maximum depth first ➔ Linear space O(bm)', icon: 'Layers' },
      { step: 'IDDFS Hybrid', desc: 'Iterates depth limit l = 0, 1, 2... ➔ BFS optimality + DFS linear space', icon: 'Repeat' },
      { step: 'UCS Traversal', desc: 'Priority Queue ordered by g(n) ➔ Expands lowest path cost first', icon: 'Award' }
    ],
    diagramAscii: `
MASTER SEARCH COMPLEXITY COMPARISON:
┌───────────┬──────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ Algorithm │ Frontier Data│ Complete?    │ Optimal?     │ Time         │ Space        │
├───────────┼──────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ BFS       │ FIFO Queue   │ Yes (b < ∞)  │ Yes (unit c) │ O(bᵈ)        │ O(bᵈ) [HIGH!]│
│ DFS       │ LIFO Stack   │ No (loops)   │ No           │ O(bᵐ)        │ O(bm) [LOW!] │
│ IDDFS     │ LIFO Stack   │ Yes (b < ∞)  │ Yes (unit c) │ O(bᵈ)        │ O(bd) [BEST!]│
│ UCS       │ Priority Q   │ Yes (c ≥ ε)  │ Yes (gen c)  │ O(b¹⁺⌊C*/ε⌋) │ O(b¹⁺⌊C*/ε⌋) │
└───────────┴──────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
Where: b = branching factor, d = depth of shallowest goal, m = maximum search depth.`,
    rubric: 'BFS Mechanics: 3M | DFS Mechanics: 3M | IDDFS Synthesis: 3M | UCS & Complexity Comparison: 3M = Total 12 Marks',
    shortAnswer: 'BFS uses FIFO Queue and is complete/optimal for unit costs but has exponential space O(b^d). DFS uses LIFO Stack with linear space O(bm) but is non-optimal. IDDFS combines BFS optimality with DFS linear space O(bd). UCS uses a Priority Queue for general edge costs.',
    structuredAnswer: {
      definition: `1. Breadth-First Search (BFS):
Expands the root node first, then all successors of root, then their successors.
• Frontier: First-In-First-Out (FIFO) Queue.
• Completeness: Yes (if branching factor b is finite).
• Optimality: Yes, provided step costs are identical (unit step cost = 1).
• Time Complexity: O(b^d).
• Space Complexity: O(b^d) — Every node generated remains in memory! Memory is the catastrophic bottleneck.

2. Depth-First Search (DFS):
Always expands the deepest node in the current frontier first.
• Frontier: Last-In-First-Out (LIFO) Stack or recursive call stack.
• Completeness: No — Fails in infinite-depth spaces and gets trapped in cyclic graphs.
• Optimality: No — May return a deep path when a shallow path exists.
• Time Complexity: O(b^m), where m is maximum depth (can be ∞).
• Space Complexity: O(bm) — Linear space! Only needs to store single path from root to leaf plus siblings.`,
      iddfsAnalysis: `3. Iterative Deepening Search (IDDFS):
IDDFS solves the space dilemma of BFS and the incompleteness of DFS by calling Depth-Limited Search with increasing depth limits l = 0, 1, 2, ..., d.
• Completeness: Yes (like BFS).
• Optimality: Yes for unit step costs (like BFS).
• Space Complexity: O(bd) — Linear storage like DFS!
• Time Complexity: O(b^d).
Overhead Analysis:
Nodes at depth d are generated 1 time, depth d-1 generated 2 times, ..., root generated d+1 times.
Total nodes = (d+1)·1 + d·b + (d-1)·b² + ... + 1·b^d = O(b^d).
When b=10 and d=5, IDDFS generates only ~11% more nodes than BFS, while saving gigabytes of RAM!`,
      criticalAnalysis: `4. Uniform Cost Search (UCS):
Instead of expanding shallowest depth, UCS expands the node with the lowest cumulative path cost g(n) using a Priority Queue.
• Equivalent to Dijkstra's algorithm in AI search trees.
• Crucial Implementation Invariant: Goal test MUST be applied when a node is POPPED from the priority queue, NOT when it is generated!`
    },
    memoryTip: '💡 Key Exam Takeaway: When memory is constrained and step costs are equal, IDDFS is the universally preferred search method.',
    whyImportant: 'Standard university 12-mark fundamental search comparison.'
  },

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT III: CONSTRAINTS & ADVERSARIAL SEARCH
  // ════════════════════════════════════════════════════════════════════════════
  {
    unitId: 'unit-3',
    id: 'u3-q1',
    marks: 12,
    topic: 'Minimax Algorithm & Alpha-Beta Pruning',
    question: 'Explain the Minimax Algorithm for 2-player zero-sum games. Demonstrate Alpha-Beta Pruning with a step-by-step game tree example and state the pruning conditions.',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80',
    imageCaption: 'Fig 3.1: Adversarial game tree search showing MAX/MIN alternating levels and pruned subtrees',
    flowchart: [
      { step: '1. Root MAX Node', desc: 'Initialize α = -∞, β = +∞; MAX seeks to maximize value', icon: 'Award' },
      { step: '2. Branch to MIN', desc: 'Descend to MIN ply; MIN seeks to minimize payoff to MAX', icon: 'GitBranch' },
      { step: '3. Terminal Evaluation', desc: 'At leaf horizon, evaluate terminal utility score', icon: 'CheckCircle2' },
      { step: '4. Update Bounds', desc: 'At MAX: α = max(α, v); At MIN: β = min(β, v)', icon: 'Sliders' },
      { step: '5. Pruning Cutoff', desc: 'If α ≥ β: PRUNE remaining child branches immediately!', icon: 'Scissors' }
    ],
    diagramAscii: `
ALPHA-BETA PRUNING GAME TREE TRACE:
                     [MAX: v = 3]  (α=3, β=∞)
                     /          \\
                    /            \\
          [MIN: v = 3]          [MIN: v ≤ 2] ➔ PRUNED! (α=3 ≥ β=2)
          (α=-∞, β=3)           (α=3, β=2)
          /         \\           /       \\
         /           \\         /         \\
      [Leaf: 3]   [Leaf: 5]  [Leaf: 2]   [Leaf: X] ➔ NEVER EVALUATED!
      
Pruning Invariant:
• α = Highest-value choice found so far by MAX along path.
• β = Lowest-value choice found so far by MIN along path.
• Cutoff Condition: PRUNE if α ≥ β.`,
    rubric: 'Minimax Formulation: 3M | Alpha & Beta Definitions: 2M | Pruning Proof & Trace: 4M | Complexity Drop O(b^m/2): 3M = Total 12 Marks',
    shortAnswer: 'Minimax determines the optimal move for MAX assuming MIN plays optimally. Alpha-Beta pruning eliminates subtrees that cannot influence the root decision whenever α ≥ β, cutting time complexity from O(b^m) to O(b^(m/2)).',
    structuredAnswer: {
      definition: `1. Minimax Decision Formulation:
In a 2-player zero-sum game with perfect information (e.g. Chess, Tic-Tac-Toe):
• MAX seeks to maximize utility.
• MIN seeks to minimize MAX's utility.
Recursive Minimax Function:
Minimax(s) =
  Utility(s)                             if Terminal-Test(s) is true
  max_{a ∈ Actions(s)} Minimax(Result(s, a)) if Player(s) = MAX
  min_{a ∈ Actions(s)} Minimax(Result(s, a)) if Player(s) = MIN

Complexity of Minimax: Time O(b^m), Space O(bm). For Chess (b ≈ 35, m ≈ 80), O(35⁸⁰) is computationally impossible to evaluate exhaustively.`,
      alphabetaMechanics: `2. Alpha-Beta Pruning Algorithm:
Alpha-Beta pruning computes the EXACT SAME move as Minimax, but prunes subtrees that are provably worse than previously examined options.
Parameters:
• α (Alpha): The value of the best (highest-value) choice found so far for MAX along the path to the current node. Initialized to -∞.
• β (Beta): The value of the best (lowest-value) choice found so far for MIN along the path to the current node. Initialized to +∞.

Pruning Rule (Cutoff Condition):
Whenever α ≥ β at any node, stop generating further children of that node (PRUNE the remaining branch).

3. Step-by-Step Worked Example:
1. MAX root visits left child MIN₁.
2. MIN₁ evaluates first leaf = 3. β becomes min(∞, 3) = 3.
3. MIN₁ evaluates second leaf = 5. β remains 3. MIN₁ returns 3 to MAX root.
4. MAX root updates α = max(-∞, 3) = 3.
5. MAX root visits right child MIN₂ with inherited bounds (α=3, β=∞).
6. MIN₂ evaluates first child = 2. MIN₂ updates β = min(∞, 2) = 2.
7. Check pruning condition: α = 3, β = 2  ⇒  α ≥ β is TRUE!
8. MIN₂ PRUNES all remaining children without evaluating them, because MAX can already guarantee a score of at least 3 via the left branch, so MAX will never choose the right branch!`,
      criticalAnalysis: `4. Time Complexity Advantage:
• Pure Minimax: O(b^m)
• Alpha-Beta with Optimal Move Ordering: O(b^(m/2))
Effect: Alpha-Beta doubles the reachable search depth in the exact same computation time! For Chess, it expands practical lookahead from depth 6 to depth 12.`
    },
    memoryTip: '💡 Alpha-Beta Golden Rule: Cut the branch whenever α ≥ β. α is MAX\'s floor, β is MIN\'s ceiling!',
    whyImportant: 'Top 10-12 mark exam question across all competitive university AI curricula.'
  },
  {
    unitId: 'unit-3',
    id: 'u3-q2',
    marks: 12,
    topic: 'Constraint Satisfaction Problems & Forward Checking',
    question: 'Define a Constraint Satisfaction Problem (CSP). Explain Backtracking Search and Forward Checking with the Australia Map Coloring Problem.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80',
    imageCaption: 'Fig 3.2: Australia map coloring constraint graph with adjacent territorial edges',
    flowchart: [
      { step: '1. CSP Definition', desc: 'Variables X, Domains D, Constraints C', icon: 'Grid' },
      { step: '2. Variable Selection', desc: 'Select unassigned variable using MRV (Minimum Remaining Values)', icon: 'Target' },
      { step: '3. Value Assignment', desc: 'Select value using LCV (Least Constraining Value)', icon: 'Sliders' },
      { step: '4. Forward Checking', desc: 'Prune inconsistent values from neighbor domains immediately', icon: 'Scissors' },
      { step: '5. Backtrack Check', desc: 'If any neighbor domain becomes empty: Undo assignment & Backtrack', icon: 'RefreshCw' }
    ],
    diagramAscii: `
AUSTRALIA MAP COLORING CONSTRAINT GRAPH:
       (WA) ─────── (NT) ─────── (Q)
        │  ╲       ╱  │         ╱ │
        │   ╲     ╱   │        ╱  │
        │    (SA) ────┼───────┘   │
        │   ╱    ╲    │           │
        │  ╱      ╲   │           │
       (NSW) ────── (V)           (T) ➔ Island (Independent)
         
Variables X = {WA, NT, SA, Q, NSW, V, T}
Domains D = {Red, Green, Blue}
Constraints C = Adjacent regions must have different colors (e.g., WA ≠ NT, WA ≠ SA)`,
    rubric: 'CSP Formal Definition: 3M | Backtracking Search Algorithm: 3M | Map Coloring Formulation: 3M | Forward Checking Trace: 3M = Total 12 Marks',
    shortAnswer: 'A CSP is defined by Variables X, Domains D, and Constraints C. Backtracking assigns one variable at a time. Forward Checking prunes neighbor domains after each assignment to detect future dead ends early.',
    structuredAnswer: {
      definition: `1. Formal Definition of CSP:
A Constraint Satisfaction Problem consists of a 3-tuple <X, D, C>:
• X = {X₁, X₂, ..., Xₙ}: A finite set of variables.
• D = {D₁, D₂, ..., Dₙ}: A set of domains, where Dᵢ is the set of allowable values for variable Xᵢ.
• C = {C₁, C₂, ..., Cₘ}: A set of constraints specifying allowable combinations of values for subsets of variables.
A state is defined by an assignment of values to some or all variables. A solution is a complete, consistent assignment satisfying all constraints.

2. Australia Map Coloring Problem:
• Variables: X = {WA, NT, SA, Q, NSW, V, T} (7 Australian regions).
• Domains: Dᵢ = {Red, Green, Blue} for all regions.
• Constraints: Adjacent territories cannot have the same color:
WA ≠ NT, WA ≠ SA, NT ≠ SA, NT ≠ Q, SA ≠ Q, SA ≠ NSW, SA ≠ V, Q ≠ NSW, NSW ≠ V.
(Tasmania T has no adjacent neighbors and is independent).`,
      forwardCheckingTrace: `3. Backtracking Search with Forward Checking Trace:
Standard backtracking is depth-first search with single-variable assignments.
Forward Checking Mechanism: Whenever variable X is assigned a value v, examine each unassigned neighbor Y of X, and delete v from Domain(Y). If any domain becomes empty (size 0), immediately backtrack!

Trace Step-by-Step:
Step 1: Assign WA = Red.
• Forward Check:
  Domain(NT) becomes {Green, Blue}
  Domain(SA) becomes {Green, Blue}
  All other domains remain {Red, Green, Blue}.

Step 2: Assign Q = Green.
• Forward Check:
  Domain(NT) becomes {Blue}
  Domain(SA) becomes {Blue}
  Domain(NSW) becomes {Red, Blue}.

Step 3: Assign V = Blue.
• Forward Check:
  Domain(NSW) becomes {Red}
  Domain(SA) was {Blue} ➔ When V = Blue, remove Blue from SA ➔ Domain(SA) becomes EMPTY (∅)!
• Forward Checking detects that SA has NO valid color remaining!
• Action: Immediate backtrack before wasting time searching NSW or NT!`,
      criticalAnalysis: `4. Advantage over Simple Backtracking:
Simple backtracking only detects conflicts when assigning SA much later. Forward checking looks ahead to detect future domain collapses early, drastically pruning fruitless branches!`
    },
    memoryTip: '💡 CSP Heuristics Mnemonic: MRV selects WHICH variable (Fail-First); LCV selects WHICH value (Fail-Last).',
    whyImportant: 'Fundamental 12-mark question on constraint-based search formulation.'
  },

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT IV: KNOWLEDGE REPRESENTATION & REASONING
  // ════════════════════════════════════════════════════════════════════════════
  {
    unitId: 'unit-4',
    id: 'u4-q1',
    marks: 12,
    topic: 'Forward Chaining vs Backward Chaining',
    question: 'Compare Forward Chaining and Backward Chaining algorithms in Horn clause logic with complete flowcharts, algorithms, and worked examples.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    imageCaption: 'Fig 4.1: Directional inference pathways — data-driven forward fire vs goal-driven recursive proof',
    flowchart: [
      { step: 'Forward Chaining', desc: 'Known Facts ➔ Trigger matching rule premises ➔ Infer conclusions as new facts ➔ Repeat until Goal', icon: 'ArrowRight' },
      { step: 'Backward Chaining', desc: 'Target Goal ➔ Locate rules concluding Goal ➔ Recursively prove premises ➔ Ground in Facts', icon: 'CornerDownLeft' },
      { step: 'Modus Ponens', desc: 'Inference Rule: If premise P is true and P ⇒ Q, infer Q', icon: 'CheckCircle2' },
      { step: 'Conflict Resolution', desc: 'If multiple rules fire in Forward Chaining, prioritize by specificity/salience', icon: 'Sliders' }
    ],
    diagramAscii: `
FORWARD CHAINING (Data-Driven) vs BACKWARD CHAINING (Goal-Driven):

FORWARD CHAINING:                   BACKWARD CHAINING:
[Known Initial Facts in KB]          [Target Query Goal: Prove G?]
         │                                        │
         ▼                                        ▼
Match premises of Rules (A ∧ B ➔ C)  Find rules concluding G (X ➔ G)
         │                                        │
         ▼                                        ▼
Fire Rule & Assert New Fact (C)      Prove Subgoal X recursively
         │                                        │
         ▼                                        ▼
Repeat until Goal G is added!        Reach known ground facts in KB!`,
    rubric: 'Forward Chaining Algorithm: 4M | Backward Chaining Algorithm: 4M | Comparison Matrix: 2M | Worked Example: 2M = Total 12 Marks',
    shortAnswer: 'Forward Chaining starts with known facts and applies rules to infer new facts until the goal is derived (data-driven). Backward Chaining starts with the goal query and works backward to find supporting facts (goal-driven).',
    structuredAnswer: {
      definition: `1. Definite Horn Clauses:
Both algorithms operate efficiently on Horn clauses: a disjunction of literals with at most one positive literal:
¬A ∨ ¬B ∨ C  ≡  (A ∧ B) ⇒ C
where (A ∧ B) is the premise and C is the conclusion.

2. Forward Chaining (Data-Driven / Bottom-Up):
• Mechanism: Starts with the known facts in the Knowledge Base (KB). If all premises of an implication rule are known facts, the rule fires, and its conclusion is added to the KB as a new fact. Continues until query goal q is generated or no more rules fire.
• Time Complexity: Linear O(n) in size of KB.
• Best For: System monitoring, automated reaction systems, process control.

3. Backward Chaining (Goal-Driven / Top-Down):
• Mechanism: Starts with the goal hypothesis query q. Searches the KB for rules whose conclusion matches q. If premises of that rule are known facts, q is proved; otherwise, those premises become new subgoals to be proved recursively.
• Time Complexity: Linear or sub-linear because it only evaluates rules relevant to the goal.
• Best For: Diagnostic systems, medical triage, troubleshooting, Prolog language engines.`,
      workedExample: `4. Worked Example:
Knowledge Base Rules:
R1: A ∧ B ⇒ C
R2: C ∧ D ⇒ E
R3: E ⇒ Goal
Initial Facts in KB: {A, B, D}
Query: Prove Goal.

• Forward Chaining Execution Trace:
1. Compare facts {A, B, D} with rules.
2. Rule R1 has premises A and B (both true). Fire R1 ➔ Assert C into KB.
   KB Facts now: {A, B, D, C}.
3. Rule R2 has premises C and D (both true). Fire R2 ➔ Assert E into KB.
   KB Facts now: {A, B, D, C, E}.
4. Rule R3 has premise E (true). Fire R3 ➔ Assert Goal into KB.
   Goal reached! Proved in 3 iterations.

• Backward Chaining Execution Trace:
1. Target Goal.
2. Rule concluding Goal is R3 (Premise: E). New Subgoal: Prove E.
3. Rule concluding E is R2 (Premises: C and D). D is already a known fact! Subgoal remaining: Prove C.
4. Rule concluding C is R1 (Premises: A and B). Both A and B are known facts in KB!
5. Unwind recursion: A & B prove C ➔ C & D prove E ➔ E proves Goal.
   Goal proved!`,
      comparisonTable: `Key Structural Comparison:
• Direction: Forward = Facts ➔ Conclusions; Backward = Goal ➔ Facts.
• Search Space: Forward may derive millions of irrelevant facts; Backward only searches branches connected to the goal.
• Soundness & Completeness: Both are sound and complete for definite Horn clause KBs.`
    },
    memoryTip: '💡 Rule of Thumb: Forward asks "What follows from what I know?"; Backward asks "What do I need to prove what I want?".',
    whyImportant: 'Highest yield 12-mark reasoning question in Unit IV.'
  },
  {
    unitId: 'unit-4',
    id: 'u4-q2',
    marks: 12,
    topic: 'First-Order Logic (FOL) Syntax & Quantifiers',
    question: 'Explain First-Order Logic (FOL) syntax and semantics. Translate the following English sentences into FOL:\n(a) Every student loves AI.\n(b) Some students are smart.\n(c) Anyone who passes all exams is happy.\n(d) No student failed AI.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80',
    imageCaption: 'Fig 4.2: First-Order Logic quantifier bindings over domain objects and relational predicates',
    flowchart: [
      { step: 'Identify Objects', desc: 'Constants (John, AI) and Variables (x, y)', icon: 'Layers' },
      { step: 'Identify Predicates', desc: 'Relations between objects: Student(x), Loves(x, y), Passes(x, e)', icon: 'Cpu' },
      { step: 'Universal Quantifier', desc: 'Use ∀x with Implication (⇒) for "All / Every"', icon: 'CheckCircle2' },
      { step: 'Existential Quantifier', desc: 'Use ∃x with Conjunction (∧) for "Some / Exists"', icon: 'Target' },
      { step: 'Quantifier Duality', desc: 'Apply De Morgan rules: ¬∀x P(x) ≡ ∃x ¬P(x)', icon: 'Repeat' }
    ],
    diagramAscii: `
QUANTIFIER BINDING PRINCIPLES IN FOL:
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ UNIVERSAL QUANTIFIER (∀x)            │ EXISTENTIAL QUANTIFIER (∃x)          │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ Natural Connective: IMPLICATION (⇒)  │ Natural Connective: CONJUNCTION (∧)  │
│ Formula: ∀x [Student(x) ⇒ Loves(x,AI)]│ Formula: ∃x [Student(x) ∧ Smart(x)]  │
│ Meaning: If x is a student, x loves  │ Meaning: There exists x who is both  │
│ AI. (True for non-students vacuously)│ a student AND smart.                 │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ ❌ FATAL EXAM ERROR:                 │ ❌ FATAL EXAM ERROR:                 │
│ ∀x [Student(x) ∧ Loves(x, AI)]       │ ∃x [Student(x) ⇒ Smart(x)]           │
│ (Asserts EVERY OBJECT in universe is │ (Vacuously true if ANY non-student   │
│ a student and loves AI!)             │ exists in the universe!)             │
└──────────────────────────────────────┴──────────────────────────────────────┘`,
    rubric: 'FOL Syntax & Components: 4M | Quantifier Rules (∀ vs ∃): 2M | 4 Sentence Translations: 6M (1.5M each) = Total 12 Marks',
    shortAnswer: 'FOL extends Propositional Logic with Objects, Predicates, Functions, and Quantifiers. Universal quantifier ∀ connects with ⇒; Existential quantifier ∃ connects with ∧.',
    structuredAnswer: {
      definition: `1. First-Order Logic Syntax Elements:
• Constants: Name specific objects in the domain (e.g. John, Mary, AI, Exam).
• Variables: Stand for unspecified domain objects (e.g. x, y, z).
• Predicates: Relational functions returning True or False (e.g. Student(x), Loves(x, y), GreaterThan(x, 5)).
• Functions: Return an object rather than a truth value (e.g. MotherOf(x), Sqrt(x)).
• Connectives: ¬ (Not), ∧ (And), ∨ (Or), ⇒ (Implication), ⇔ (Biconditional).
• Quantifiers:
  - Universal Quantifier (∀): Assert property holds for ALL objects in domain.
  - Existential Quantifier (∃): Assert property holds for AT LEAST ONE object in domain.`,
      translations: `2. Detailed University Translations & Explanations:

(a) "Every student loves AI"
Translation:
∀x [Student(x) ⇒ Loves(x, AI)]
Explanation: Uses Universal Quantifier ∀ connected with Implication ⇒. If an entity x is not a student, the implication is vacuously true.

(b) "Some students are smart"
Translation:
∃x [Student(x) ∧ Smart(x)]
Explanation: Uses Existential Quantifier ∃ connected with Conjunction ∧. Asserts there exists an object x that satisfies being a student AND being smart simultaneously.

(c) "Anyone who passes all exams is happy"
Translation:
∀x [Person(x) ∧ (∀e [Exam(e) ⇒ Passes(x, e)]) ⇒ Happy(x)]
Explanation: Nested universal quantification: For every person x, if for all exams e x passes e, then x is happy.

(d) "No student failed AI"
Translation (Form 1):
¬∃x [Student(x) ∧ Failed(x, AI)]
Equivalent Translation (Form 2 via Quantifier Duality):
∀x [Student(x) ⇒ ¬Failed(x, AI)]
Explanation: By De Morgan's Law for quantifiers: ¬∃x P(x) ≡ ∀x ¬P(x). Both expressions are logically identical.`,
      criticalAnalysis: `Quantifier Duality Laws (Memorize for Exam):
• ¬∀x P(x) ≡ ∃x ¬P(x)
• ¬∃x P(x) ≡ ∀x ¬P(x)
• ∀x P(x) ≡ ¬∃x ¬P(x)
• ∃x P(x) ≡ ¬∀x ¬P(x)`
    },
    memoryTip: '💡 Universal Rule: ∀ always goes with ⇒ ; ∃ always goes with ∧ ! Never swap them.',
    whyImportant: 'Standard 12-mark logic translation question in university exam papers.'
  },

  // ════════════════════════════════════════════════════════════════════════════
  // UNIT V: ARTIFICIAL INTELLIGENCE APPLICATIONS
  // ════════════════════════════════════════════════════════════════════════════
  {
    unitId: 'unit-5',
    id: 'u5-q1',
    marks: 12,
    topic: 'AI in Healthcare & Medicine',
    question: 'Discuss the role of Artificial Intelligence in Healthcare. Explain CNNs for medical diagnostic imaging, AlphaFold for drug discovery, and Clinical Decision Support Systems (CDSS).',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageCaption: 'Fig 5.1: Deep Convolutional Neural Network performing automated MRI tumor localization',
    flowchart: [
      { step: '1. Scan Acquisition', desc: 'High-res MRI / CT scan volumetric imaging', icon: 'Image' },
      { step: '2. Preprocessing', desc: 'Intensity normalization, artifact filtering, skull stripping', icon: 'Sliders' },
      { step: '3. CNN Feature Map', desc: 'Convolution kernels extract edge, texture, and tissue patterns', icon: 'Grid' },
      { step: '4. Segmentation Mask', desc: 'U-Net architecture produces pixel-level tumor contour masks', icon: 'Cpu' },
      { step: '5. Clinical Triage', desc: 'Alerts radiologist with malignancy probability & volume metrics', icon: 'Award' }
    ],
    diagramAscii: `
MEDICAL DIAGNOSTIC AI PIPELINE (U-Net CNN Architecture):
[Raw MRI Scan Input]
        │
        ▼  Convolutional Downsampling (Feature Extraction)
[High-Level Feature Maps: Edges, Textures, Density]
        │
        ▼  Bottleneck Latent Representation
[Skip Connections: Preserves High-Res Spatial Location]
        │
        ▼  Deconvolutional Upsampling (Pixel Reconstruction)
[Precise Tumor Segmentation Mask Overlay on Radiologist Screen]`,
    rubric: 'Medical Imaging & CNNs: 4M | AlphaFold & Drug Discovery: 4M | CDSS & Ethics: 4M = Total 12 Marks',
    shortAnswer: 'AI transforms medicine through deep CNNs for automated MRI/CT tumor segmentation, AlphaFold predicting 3D protein structures for rapid drug design, and Clinical Decision Support Systems assisting physicians in triage.',
    structuredAnswer: {
      definition: `1. Overview of Healthcare AI:
Artificial Intelligence in healthcare applies deep learning, computer vision, and expert reasoning to medical data to accelerate diagnostics, discover novel molecular therapeutics, and personalize clinical care.

2. Diagnostic Imaging via Convolutional Neural Networks (CNNs):
• Architecture: Deep CNNs (such as U-Net and ResNet) analyze 2D/3D radiology scans (MRI, CT, X-rays, histopathology).
• Working: Convolution layers apply filter kernels to extract low-level features (edges, contours) that compose into high-level pathological indicators (micro-calcifications, tumor margins).
• Clinical Efficacy: CNNs detect diabetic retinopathy from fundus photographs, pulmonary nodules from chest CTs, and glioblastoma margins in brain MRIs with accuracy matching or exceeding board-certified radiologists.`,
      alphaFoldSection: `3. AlphaFold & Molecular Drug Discovery:
• The Protein Folding Problem: For 50 years, predicting how a 1D sequence of amino acids folds into a functional 3D protein was a grand biological challenge requiring years of X-ray crystallography per protein.
• DeepMind's AlphaFold: Uses transformer-based neural networks (Evoformer) to predict the 3D atomic coordinates of over 200 million proteins with sub-angstrom accuracy in minutes.
• Impact on Drug Discovery: Enables computational drug design by predicting how candidate small molecules bind to viral or bacterial target receptors, reducing drug discovery timelines from 5 years to mere months.`,
      cdssSection: `4. Clinical Decision Support Systems (CDSS):
• Combines rule-based expert systems with predictive machine learning models.
• Real-Time Monitoring: Analyzes ICU vitals, lab results, and EHR notes to predict septic shock 6 hours before clinical onset.
• Drug-Drug Interaction Alerts: Cross-references prescription requests against pharmacological knowledge bases to prevent fatal contraindications.

5. Ethical & Regulatory Challenges:
• Explainability (XAI): Clinicians cannot trust "black box" models without interpretable attention maps (Grad-CAM).
• Bias & Fairness: Models trained on limited demographic cohorts can fail when deployed across diverse global populations.
• HIPAA & Data Privacy: Requires Federated Learning where models train across hospital nodes without sharing raw patient data.`
    },
    memoryTip: '💡 3 Pillars of Medical AI: 1. Imaging (CNNs), 2. Discovery (AlphaFold), 3. Triage/Safety (CDSS).',
    whyImportant: 'Standard 12-mark real-world application question in modern university curricula.'
  },
  {
    unitId: 'unit-5',
    id: 'u5-q3',
    marks: 12,
    topic: 'Natural Language Processing & Transformers',
    question: 'Explain the Transformer architecture and Self-Attention mechanism in Natural Language Processing. How does it overcome the limitations of RNNs and LSTMs?',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    imageCaption: 'Fig 5.2: Multi-head self-attention computing bidirectional token relationships in parallel',
    flowchart: [
      { step: 'Token Embedding', desc: 'Convert input words into dense vectors + add Positional Encoding', icon: 'Layers' },
      { step: 'Linear Projections', desc: 'Project embeddings into Query (Q), Key (K), and Value (V) matrices', icon: 'Cpu' },
      { step: 'Scaled Dot-Product', desc: 'Compute Attention(Q,K,V) = softmax(Q·Kᵀ / √dₖ)·V', icon: 'Zap' },
      { step: 'Multi-Head Attention', desc: 'Concatenate multiple attention heads to capture diverse linguistic roles', icon: 'Grid' },
      { step: 'Feed-Forward & Norm', desc: 'Layer normalization + residual connections output contextual representations', icon: 'CheckCircle2' }
    ],
    diagramAscii: `
SCALED DOT-PRODUCT ATTENTION ARCHITECTURE:
                  Query (Q)       Key (K)
                      │               │
                      └───────┬───────┘
                              ▼
                        [MatMul: Q · Kᵀ]
                              │
                              ▼
                     [Scale: ÷ √dₖ]
                              │
                              ▼
                    [Mask (Optional)]
                              │
                              ▼
                        [Softmax]  ➔ Attention Weights (Sum = 1.0)
                              │
                              ├──────── Value (V)
                              ▼
                       [MatMul with V]
                              │
                              ▼
                      [Attention Output]`,
    rubric: 'Limitations of RNNs: 2M | Self-Attention Formula & Steps: 5M | Multi-Head Architecture: 3M | LLM Foundation Models: 2M = Total 12 Marks',
    shortAnswer: 'The Transformer replaces recurrence with Self-Attention, processing entire sentences in parallel. Its Scaled Dot-Product attention formula Attention(Q,K,V) = softmax(QKᵀ/√dₖ)V captures long-range dependencies without vanishing gradients.',
    structuredAnswer: {
      definition: `1. Limitations of Traditional Recurrent Networks (RNNs / LSTMs):
• Sequential Processing Bottleneck: RNNs process text token-by-token (t = 1, 2, ..., T). Step t cannot be computed until step t-1 completes. This prevents parallelization on modern GPUs.
• Vanishing & Exploding Gradients: Backpropagation Through Time (BPTT) over long sequences leads to exponential decay of gradients, causing RNNs to forget information from 50+ tokens ago.

2. The Transformer Paradigm (Vaswani et al., 2017):
The Transformer eliminates recurrence entirely. It ingests all tokens simultaneously and models relationships between all word pairs in parallel via the Self-Attention mechanism.`,
      attentionMechanism: `3. Mathematical Derivation of Scaled Dot-Product Attention:
Given an input sequence, linear projections create three matrices:
• Query Matrix (Q): "What am I looking for?"
• Key Matrix (K): "What information do I contain?"
• Value Matrix (V): "What is my actual content?"

Formula:
Attention(Q, K, V) = softmax( (Q · Kᵀ) / √dₖ ) · V

Step-by-Step Mathematical Mechanics:
1. Q · Kᵀ: Dot product measures the semantic compatibility between every token pair. (Result is an n × n matrix of attention scores).
2. / √dₖ: Scaling by the square root of key dimension dₖ prevents dot products from growing excessively large, which would push the softmax into regions of vanishing gradients.
3. softmax(...): Converts raw scores into normalized probabilities across rows such that weights sum to 1.0.
4. · V: Multiplies the attention probability distribution with the Value vectors, producing a context-enriched token representation.`,
      multiHeadSection: `4. Multi-Head Attention:
Instead of performing a single attention function, Multi-Head Attention linearly projects Q, K, and V h times with different learned parameter matrices:
MultiHead(Q, K, V) = Concat(head₁, head₂, ..., headₕ) · Wᴼ
where headᵢ = Attention(Q·Wᵢᑫ, K·Wᵢᴷ, V·Wᵢⱽ).
Benefit: Allows the model to jointly attend to information from different representation subspaces (e.g. one head tracks grammar, another tracks subject-verb agreement, another tracks pronoun references).

5. Foundation Models & Impact:
Transformers are the core architecture powering Large Language Models (LLMs) including GPT-4, Gemini, and Claude, achieving state-of-the-art results across machine translation, code synthesis, and logical reasoning.`
    },
    memoryTip: '💡 Formula to Write First: Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V. Q=Query, K=Key, V=Value.',
    whyImportant: 'Top 12-mark question on modern Deep Learning and NLP architectures.'
  }
];
