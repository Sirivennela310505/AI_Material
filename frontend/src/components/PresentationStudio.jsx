import React, { useState } from 'react';
import {
  Presentation, ChevronLeft, ChevronRight,
  Download, Sparkles, Loader2, Image as ImageIcon,
  Printer, FileText
} from 'lucide-react';

// ─── Rich local slide generator ─────────────────────────────────────────────
function generateSlides(topic) {
  const t = topic.trim();

  // topic → Unsplash image keyword map
  const imgKeywords = {
    'a*': 'map-navigation-gps', 'a* search': 'map-navigation-gps',
    'bfs': 'network-graph', 'breadth first': 'network-graph',
    'dfs': 'tree-branches', 'depth first': 'tree-branches',
    'minimax': 'chess-game', 'alpha-beta': 'chess-game',
    'peas': 'robot-autonomous', 'intelligent agent': 'robot-ai',
    'neural': 'brain-neurons', 'nlp': 'language-communication',
    'csp': 'puzzle-constraint', 'hill climbing': 'mountain-peak',
    'simulated annealing': 'temperature-heat',
    'forward chaining': 'logic-inference', 'backward chaining': 'logic-inference',
    'propositional logic': 'books-philosophy', 'first-order logic': 'books-philosophy',
    'expert system': 'expert-knowledge', 'knowledge': 'knowledge-brain',
    'healthcare': 'medical-ai', 'finance': 'finance-data',
    'generative ai': 'ai-generated-art', 'computer vision': 'camera-vision',
  };
  const tLower = t.toLowerCase();
  let imgKey = 'artificial-intelligence';
  for (const [k, v] of Object.entries(imgKeywords)) {
    if (tLower.includes(k)) { imgKey = v; break; }
  }
  const img = `https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80`;
  const img2 = `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80`;

  // ─── Slide Templates by Topic ────────────────────────────────────────────
  const topicLower = tLower;
  const isAStar = topicLower.includes('a*') || topicLower.includes('a star');
  const isMinimax = topicLower.includes('minimax');
  const isAlphaBeta = topicLower.includes('alpha');
  const isBFS = topicLower.includes('bfs') || topicLower.includes('breadth');
  const isDFS = topicLower.includes('dfs') || topicLower.includes('depth first');
  const isPEAS = topicLower.includes('peas');
  const isCSP = topicLower.includes('csp') || topicLower.includes('constraint');
  const isFC = topicLower.includes('forward');
  const isBC = topicLower.includes('backward');

  // Generic template enriched for any topic
  const slides = [
    {
      slideNumber: 1,
      layout: 'title',
      title: t,
      subtitle: 'Artificial Intelligence and Its Applications',
      course: 'EduAgent AI | AI and Its Applications',
      image: img,
      color: '#4f46e5',
    },
    {
      slideNumber: 2,
      layout: 'intro',
      title: 'What is it?',
      image: img,
      points: isAStar ? [
        'A* is an informed best-first search algorithm.',
        'It uses a heuristic function h(n) to guide the search towards the goal.',
        'Combines the advantages of BFS (completeness) and Greedy search (efficiency).',
        'Widely used in GPS navigation, robotics, and game AI.',
        'Guarantees the optimal path when the heuristic is admissible.',
      ] : isMinimax ? [
        'Minimax is a recursive algorithm for two-player zero-sum games.',
        'One player maximizes the score; the other minimizes it.',
        'Used in chess, tic-tac-toe, checkers, and Go.',
        'Explores the full game tree to determine the best move.',
        'Assumes both players play optimally.',
      ] : isAlphaBeta ? [
        'Alpha-Beta Pruning is an enhancement of the Minimax algorithm.',
        'It prunes branches that cannot influence the final decision.',
        'Can cut the effective branching factor roughly in half.',
        'Does not change the final result — only reduces computation.',
        'Named after the two bounds: α (lower) and β (upper).',
      ] : isBFS ? [
        'BFS explores nodes level by level, starting from the root.',
        'Uses a FIFO queue to track the frontier.',
        'Guarantees the shortest path (when step costs are equal).',
        'Complete: always finds a solution if one exists.',
        'High memory usage — stores all frontier nodes.',
      ] : isDFS ? [
        'DFS explores as far as possible along each branch before backtracking.',
        'Uses a LIFO stack (or recursion).',
        'Low memory usage: O(bm).',
        'Not optimal — may miss shorter paths.',
        'Useful for problems with deep solutions or when memory is limited.',
      ] : isPEAS ? [
        'PEAS stands for Performance, Environment, Actuators, Sensors.',
        'Used to formally describe the task environment of an agent.',
        'Helps design and evaluate intelligent agents systematically.',
        'Every agent design starts with specifying its PEAS.',
        'Applicable to all types of AI agents.',
      ] : isCSP ? [
        'CSP is defined by variables, domains, and constraints.',
        'Goal is to assign values to variables satisfying all constraints.',
        'Examples: map coloring, N-queens, scheduling.',
        'Solved using backtracking + constraint propagation.',
        'Key optimizations: MRV, Degree Heuristic, LCV, Arc Consistency.',
      ] : isFC ? [
        'Forward Chaining is a data-driven inference method.',
        'Starts with known facts and applies rules to derive new facts.',
        'Continues until the goal is reached or no more rules apply.',
        'Used in expert systems and logic programming (Prolog).',
        'Bottom-up reasoning approach.',
      ] : isBC ? [
        'Backward Chaining is a goal-driven inference method.',
        'Starts with the goal and works backwards to find supporting facts.',
        'Efficient when there are many facts but a clear goal.',
        'Used in medical diagnosis and query answering systems.',
        'Top-down reasoning approach.',
      ] : [
        `${t} is a fundamental concept in Artificial Intelligence.`,
        'It plays a key role in building intelligent reasoning systems.',
        'Students of AI must understand this concept thoroughly.',
        'It is applied in various real-world AI domains.',
        'Covered under the AI and Its Applications syllabus.',
      ],
    },
    {
      slideNumber: 3,
      layout: 'concept',
      title: 'Core Concept & Theory',
      image: img2,
      points: isAStar ? [
        'Evaluation function: f(n) = g(n) + h(n)',
        'g(n) = cost of path from start to node n',
        'h(n) = estimated cost from n to goal (heuristic)',
        'f(n) = total estimated cost of the cheapest solution through n',
        'Admissible heuristic: h(n) ≤ true cost → guarantees optimality',
        'Consistent heuristic: h(n) ≤ cost(n,n\')+h(n\') → efficient',
      ] : isMinimax ? [
        'MINIMAX(state) = UTILITY(state) if terminal',
        'MAX-VALUE: returns max(MINIMAX(successor))',
        'MIN-VALUE: returns min(MINIMAX(successor))',
        'Time complexity: O(b^m) — b=branching factor, m=max depth',
        'Space complexity: O(bm) — linear in depth',
        'Perfect information, deterministic game assumption',
      ] : isAlphaBeta ? [
        'α = best value MAX can achieve along current path (−∞ initially)',
        'β = best value MIN can achieve along current path (+∞ initially)',
        'Prune at MAX node when α ≥ β (β cut-off)',
        'Prune at MIN node when β ≤ α (α cut-off)',
        'Best case: O(b^(m/2)) — examines only √ as many nodes',
        'Effective branching factor reduced significantly',
      ] : isBFS ? [
        'Algorithm: Initialize queue with start node',
        'While queue not empty: dequeue node, check if goal',
        'If not goal: expand children, add to queue',
        'Mark visited nodes to avoid cycles',
        'Time: O(b^d), Space: O(b^d)',
        'Optimal when all step costs are equal',
      ] : isDFS ? [
        'Algorithm: Initialize stack with start node (or use recursion)',
        'While stack not empty: pop node, check if goal',
        'If not goal: push unvisited children onto stack',
        'Backtrack when dead end is reached',
        'Time: O(b^m), Space: O(bm) — linear space!',
        'Not complete for infinite state spaces',
      ] : [
        `The theoretical foundation of ${t}`,
        'Key definitions and formal specifications',
        'Mathematical or logical representation',
        'Conditions for correctness and completeness',
        'Relationship to other AI concepts',
        'Formal proofs and theoretical bounds',
      ],
    },
    {
      slideNumber: 4,
      layout: 'visual',
      title: 'Visual Diagram / Architecture',
      image: isAStar
        ? 'https://images.unsplash.com/photo-1597762117709-859f744b84c3?w=700&q=80'
        : isMinimax || isAlphaBeta
        ? 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=700&q=80'
        : isBFS || isDFS
        ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80'
        : isPEAS
        ? 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=700&q=80'
        : 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80',
      diagramLabel: isAStar
        ? 'Start → [Open Set sorted by f(n)] → Expand lowest f(n) → Add to Closed Set → Repeat until GOAL'
        : isMinimax
        ? 'ROOT [MAX] → Children [MIN] → Grandchildren [MAX] → Leaf values → Propagate upward'
        : isAlphaBeta
        ? 'MAX: update α = max(α, value); MIN: update β = min(β, value); Prune when α ≥ β'
        : isBFS
        ? 'FIFO Queue: Enqueue(root) → Dequeue → If GOAL stop → Else Enqueue(children)'
        : isDFS
        ? 'LIFO Stack: Push(root) → Pop → If GOAL stop → Else Push(children not visited)'
        : `Diagram illustrating the structure and flow of ${t}`,
      points: [],
    },
    {
      slideNumber: 5,
      layout: 'steps',
      title: 'Step-by-Step Process',
      image: img,
      points: isAStar ? [
        '① Put start node in Open Set; f(start) = h(start)',
        '② Select node n with lowest f(n) from Open Set',
        '③ If n = goal → trace path back to start and STOP',
        '④ Move n to Closed Set',
        '⑤ For each neighbour m of n: compute g(m), h(m), f(m)',
        '⑥ If m not in Open/Closed → add to Open Set',
        '⑦ If m already in Open Set and new path is better → update',
        '⑧ Repeat from Step ②',
      ] : isMinimax ? [
        '① Check if current state is terminal → return utility',
        '② If MAX node: call MIN for each child',
        '③ If MIN node: call MAX for each child',
        '④ MAX returns the maximum of children values',
        '⑤ MIN returns the minimum of children values',
        '⑥ Root node returns the best move for MAX',
      ] : isAlphaBeta ? [
        '① Start with α = −∞, β = +∞',
        '② At MAX node: v = max(v, AlphaBeta(child, α, β, MIN))',
        '③ Update α = max(α, v)',
        '④ Prune if v ≥ β → return v (β-cutoff)',
        '⑤ At MIN node: v = min(v, AlphaBeta(child, α, β, MAX))',
        '⑥ Update β = min(β, v)',
        '⑦ Prune if v ≤ α → return v (α-cutoff)',
      ] : isBFS ? [
        '① Create frontier queue; insert start state',
        '② Create explored set (empty)',
        '③ If frontier empty → return FAILURE',
        '④ node ← POP(frontier) [FIFO]',
        '⑤ If GOAL-TEST(node) → return path',
        '⑥ Add node to explored set',
        '⑦ For each action in ACTIONS(node.state):',
        '⑧ Create child; if not explored → add to frontier',
      ] : isPEAS ? [
        '① Identify the type of agent to design',
        '② Define Performance Measure (what does success look like?)',
        '③ Specify the Environment (what world does it operate in?)',
        '④ List Actuators (what can the agent do?)',
        '⑤ List Sensors (what can the agent perceive?)',
        '⑥ Determine environment properties (observable, deterministic?)',
        '⑦ Choose appropriate agent architecture',
      ] : isCSP ? [
        '① Select an unassigned variable (use MRV heuristic)',
        '② For each value in domain (use LCV heuristic):',
        '③   Assign value to variable',
        '④   Run forward checking / arc consistency',
        '⑤   If constraints satisfied → recursively assign next variable',
        '⑥   If assignment complete → return SOLUTION',
        '⑦ If no value works → BACKTRACK to previous variable',
      ] : [
        `Step 1: Understand the problem setting for ${t}`,
        'Step 2: Identify inputs, outputs and key parameters',
        'Step 3: Apply the algorithm / technique',
        'Step 4: Evaluate intermediate results',
        'Step 5: Check for correctness and optimality',
        'Step 6: Return or act on the final result',
      ],
    },
    {
      slideNumber: 6,
      layout: 'example',
      title: 'Worked Example',
      image: img2,
      points: isAStar ? [
        'Graph: A→B (1), A→C (4), B→D (5), C→D (2), D→Goal (1)',
        'Heuristic h: A=6, B=5, C=3, D=1, Goal=0',
        'Open: {A: f=6}',
        'Expand A → B(g=1,h=5,f=6), C(g=4,h=3,f=7)',
        'Open: {B:6, C:7}; expand B → D(g=6,h=1,f=7)',
        'Open: {C:7, D:7}; expand D → Goal(g=7,h=0,f=7)',
        'Path: A → B → D → Goal, Cost = 7',
      ] : isMinimax ? [
        'Tic-Tac-Toe: X is MAX, O is MIN',
        'Terminal states: +1 (X wins), −1 (O wins), 0 (draw)',
        'MAX picks move with highest MINIMAX value',
        'MIN picks move with lowest MINIMAX value',
        'Example: MAX at root sees children values [3, 5, 2]',
        'MAX chooses move leading to value 5',
      ] : isBFS ? [
        'Graph: A connected to B,C; B connected to D,E; C connected to F',
        'Start: A, Goal: F',
        'Queue: [A]',
        'Dequeue A → enqueue B,C → Queue: [B,C]',
        'Dequeue B → enqueue D,E → Queue: [C,D,E]',
        'Dequeue C → enqueue F → Queue: [D,E,F]',
        'Dequeue D,E → Dequeue F → GOAL FOUND! Path: A→C→F',
      ] : isPEAS ? [
        'Agent: Medical Diagnosis System',
        'P: Accuracy of diagnosis, minimal false negatives',
        'E: Patient records, symptoms, lab results',
        'A: Diagnosis report, treatment recommendation',
        'S: Patient input form, test results API',
        'Environment: Partially observable, stochastic, sequential',
      ] : isFC ? [
        'Facts: isFeverish(John)=true, hasCough(John)=true',
        'Rule 1: isFeverish(X) ∧ hasCough(X) → suspectFlu(X)',
        'Rule 2: suspectFlu(X) → recommendTest(X)',
        'FC Step 1: Apply Rule 1 → suspectFlu(John)',
        'FC Step 2: Apply Rule 2 → recommendTest(John)',
        'Conclusion: Recommend flu test for John',
      ] : [
        `Example scenario demonstrating ${t}`,
        'Input: [specify input state or problem]',
        'Process: Apply the technique step by step',
        'Intermediate states: trace through each step',
        'Output: [specify result or solution]',
        'Verify: Check solution against problem constraints',
      ],
    },
    {
      slideNumber: 7,
      layout: 'comparison',
      title: 'Comparison with Related Algorithms',
      image: isAStar ? 'https://images.unsplash.com/photo-1597762117709-859f744b84c3?w=700&q=80' : img,
      points: isAStar ? [
        'BFS vs A*: BFS is optimal (uniform cost), A* is optimal+efficient with good heuristic',
        'DFS vs A*: DFS saves memory, A* guarantees optimality',
        'Greedy vs A*: Greedy uses h(n) only — faster but not optimal; A* uses f=g+h — optimal',
        'UCS vs A*: UCS uses g(n) only — optimal but blind; A* adds heuristic guidance',
        'IDA* vs A*: IDA* uses less memory (iterative deepening + A*)',
      ] : isMinimax ? [
        'Minimax vs Alpha-Beta: Alpha-Beta is minimax + pruning = same result, faster',
        'Minimax vs MCTS: Minimax is complete (finite), MCTS is approximate (useful for large trees)',
        'Minimax vs Greedy: Greedy may not play optimally; Minimax always does',
        'Minimax vs Hill Climbing: HC is for optimization, Minimax is for adversarial games',
      ] : isBFS ? [
        'BFS vs DFS: BFS optimal+complete, DFS memory-efficient',
        'BFS vs UCS: UCS handles variable step costs; BFS assumes uniform',
        'BFS vs Greedy: Greedy faster but not optimal; BFS always finds shortest path',
        'BFS vs A*: A* is more efficient with a good heuristic; BFS is uninformed',
      ] : [
        `Comparison of ${t} with related approaches in AI`,
        'Identify key parameters: time, space, completeness, optimality',
        'Highlight when each method is preferred',
        'Trade-offs between the approaches',
        'Real-world selection criteria',
      ],
    },
    {
      slideNumber: 8,
      layout: 'adv',
      title: 'Advantages & Limitations',
      image: img2,
      advantages: isAStar ? [
        'Optimal: finds lowest-cost path',
        'Complete: always finds a solution',
        'Efficient with a good heuristic',
        'Flexible: works for many problem types',
        'Widely applicable: GPS, games, robotics',
      ] : isMinimax ? [
        'Provably optimal for perfect play',
        'Complete in finite game trees',
        'Simple and elegant recursive formulation',
        'Forms the basis for all game-playing agents',
      ] : isBFS ? [
        'Complete — always finds a solution',
        'Optimal — finds shortest path (uniform cost)',
        'Simple to implement',
        'Good for small, shallow problems',
      ] : [
        `Advantage 1 of ${t}`,
        'Advantage 2: efficiency or correctness',
        'Advantage 3: applicability',
        'Advantage 4: robustness',
      ],
      limitations: isAStar ? [
        'High memory: stores all nodes in Open Set',
        'Performance depends on heuristic quality',
        'Inadmissible heuristic → suboptimal solution',
        'Slow for very large state spaces',
      ] : isMinimax ? [
        'Exponential time: O(b^m) — impractical for large trees',
        'Explores redundant branches',
        'Assumes both players play optimally',
        'Does not work for imperfect-information games',
      ] : isBFS ? [
        'High memory: O(b^d) — stores entire frontier',
        'Slow for deep solutions',
        'Not suitable if branching factor is very large',
      ] : [
        `Limitation 1 of ${t}`,
        'Limitation 2: scalability',
        'Limitation 3: assumptions',
      ],
    },
    {
      slideNumber: 9,
      layout: 'application',
      title: 'Real-World Applications',
      image: 'https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=700&q=80',
      points: isAStar ? [
        '📍 GPS Navigation (Google Maps, Waze)',
        '🎮 Pathfinding in Video Games (NPCs, maze solving)',
        '🤖 Robot Motion Planning',
        '📦 Logistics & Delivery Route Optimization',
        '✈️ Flight Path Planning',
        '🏥 Medical Imaging — finding shortest anatomical path',
      ] : isMinimax ? [
        '♟️ Chess (Deep Blue, Stockfish)',
        '🎮 Tic-Tac-Toe, Checkers, Othello',
        '🃏 Poker (combined with probability)',
        '📊 Decision Theory & Game Theory',
        '🤖 Robot vs Robot competition',
      ] : isAlphaBeta ? [
        '♟️ Real-time chess engines (Stockfish uses alpha-beta)',
        '🎮 Strategy games requiring deep lookahead',
        '🤖 Multi-agent competitive environments',
        '📱 Mobile game AI with limited compute',
      ] : isBFS ? [
        '🗺️ Shortest-path problems in networks',
        '🌐 Web crawlers and link analysis',
        '🧩 Puzzle solving (sliding tile, maze)',
        '📡 Network broadcasting and peer-to-peer',
      ] : isPEAS ? [
        '🚗 Self-driving car agent specification',
        '🏥 Medical diagnosis agent design',
        '🏦 Financial trading agent',
        '🤖 Any intelligent agent design process',
      ] : [
        `Application 1 of ${t} in industry`,
        'Application 2 — research context',
        'Application 3 — consumer products',
        'Application 4 — government and public sector',
      ],
    },
    {
      slideNumber: 10,
      layout: 'summary',
      title: 'Summary & Key Takeaways',
      image: img,
      points: isAStar ? [
        '✅ A* = g(n) + h(n) — the gold standard of informed search',
        '✅ Optimal when heuristic is admissible (never overestimates)',
        '✅ Complete — always finds a solution if one exists',
        '✅ Outperforms BFS, DFS, and Greedy for most real problems',
        '🧠 Memory Trick: "f is the Full cost, g is how far you\'ve Gone, h is your Hope"',
        '📝 Exam Tip: Always state admissibility condition in exam answers',
      ] : isMinimax ? [
        '✅ Minimax = optimal strategy for two-player zero-sum games',
        '✅ MAX maximizes, MIN minimizes utility',
        '✅ Builds the complete game tree recursively',
        '✅ Alpha-Beta Pruning reduces complexity without changing result',
        '🧠 Memory Trick: "MAX goes high, MIN goes low"',
        '📝 Exam Tip: Always draw the game tree and show propagation',
      ] : isBFS ? [
        '✅ BFS explores nodes level by level using a queue',
        '✅ Complete and optimal (uniform cost)',
        '✅ High memory — stores all frontier nodes',
        '✅ Use when depth is small and branching factor is manageable',
        '🧠 Memory Trick: "BFS = FIFO Queue = Level by Level"',
        '📝 Exam Tip: Show queue state at each step in diagrams',
      ] : [
        `✅ ${t} is a key concept in AI`,
        '✅ Understand the algorithm/definition and its properties',
        '✅ Know the time and space complexities',
        '✅ Compare with related techniques',
        '🧠 Use memory tricks to retain formulas',
        '📝 Always back up exam answers with examples',
      ],
    },
  ];

  return slides;
}

// ─── Slide Renderer ──────────────────────────────────────────────────────────
function SlideCanvas({ slide }) {
  if (!slide) return null;

  const base = {
    width: '100%', maxWidth: 800,
    minHeight: 460,
    display: 'flex', flexDirection: 'column',
    borderRadius: 12, overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
    border: '1px solid #e2e8f0',
    background: '#ffffff',
    position: 'relative',
  };

  if (slide.layout === 'title') {
    return (
      <div style={base}>
        <div style={{ position: 'relative', flex: 1 }}>
          <img src={slide.image} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(79,70,229,0.92) 0%, rgba(37,99,235,0.85) 100%)' }} />
          <div style={{ position: 'relative', padding: '60px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', minHeight: 460 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{slide.course}</div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.15, marginBottom: 16 }}>{slide.title}</h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{slide.subtitle}</p>
            <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 36, height: 4, background: '#fff', borderRadius: 2 }} />
              <div style={{ width: 12, height: 4, background: 'rgba(255,255,255,0.5)', borderRadius: 2 }} />
            </div>
          </div>
        </div>
        <div style={{ padding: '10px 48px', borderTop: '1px solid rgba(255,255,255,0.15)', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b' }}>
          <span>EduAgent AI</span><span>Slide 01</span>
        </div>
      </div>
    );
  }

  if (slide.layout === 'visual') {
    return (
      <div style={base}>
        {/* Image half */}
        <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
          <img src={slide.image} alt="visual" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, padding: '16px 24px', textAlign: 'center', fontFamily: 'monospace', color: '#fff', fontSize: '0.85rem', lineHeight: 1.8 }}>
              {slide.diagramLabel}
            </div>
          </div>
        </div>
        <div style={{ padding: '24px 32px', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #4f46e5', paddingBottom: 10, marginBottom: 16 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{slide.title}</h2>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#e0e7ff', color: '#3730a3', padding: '3px 10px', borderRadius: 20 }}>Slide 0{slide.slideNumber}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: '0.85rem' }}>
            <ImageIcon size={16} />
            <span>Visual diagram — refer to the algorithm poster for the interactive version.</span>
          </div>
        </div>
      </div>
    );
  }

  if (slide.layout === 'adv') {
    return (
      <div style={base}>
        <div style={{ padding: '28px 32px', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #4f46e5', paddingBottom: 10, marginBottom: 20 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{slide.title}</h2>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#e0e7ff', color: '#3730a3', padding: '3px 10px', borderRadius: 20 }}>Slide 0{slide.slideNumber}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: '#047857', marginBottom: 10 }}>✅ Advantages</div>
              <ul style={{ paddingLeft: 18, lineHeight: 1.9, fontSize: '0.85rem', color: '#065f46' }}>
                {(slide.advantages || []).map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: 16 }}>
              <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: 10 }}>⚠️ Limitations</div>
              <ul style={{ paddingLeft: 18, lineHeight: 1.9, fontSize: '0.85rem', color: '#7f1d1d' }}>
                {(slide.limitations || []).map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div style={{ padding: '8px 32px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
          <span>EduAgent AI</span><span>Slide 0{slide.slideNumber}</span>
        </div>
      </div>
    );
  }

  // Default rich layout (intro, concept, steps, example, application, comparison, summary)
  return (
    <div style={base}>
      {/* Thin colour bar at top */}
      <div style={{ height: 6, background: 'linear-gradient(90deg,#4f46e5,#2563eb)' }} />
      <div style={{ padding: '28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Slide header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #4f46e5', paddingBottom: 10, marginBottom: 20 }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>{slide.title}</h2>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#e0e7ff', color: '#3730a3', padding: '3px 10px', borderRadius: 20, whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>Slide 0{slide.slideNumber}</span>
        </div>

        {/* Two-column: bullet points + image */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24, flex: 1 }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingLeft: 20, fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.7 }}>
            {(slide.points || []).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid #e2e8f0', alignSelf: 'start' }}>
            <img src={slide.image} alt="slide visual" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '8px 32px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', background: '#f8fafc' }}>
        <span>EduAgent AI | AI and Its Applications</span>
        <span>Slide 0{slide.slideNumber} of 10</span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function PresentationStudio({ initialTopic = 'A* Search Algorithm' }) {
  const [topic, setTopic] = useState(initialTopic);
  const [slides, setSlides] = useState(() => generateSlides(initialTopic));
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setLoading(true);
    setCurrentSlideIndex(0);
    setTimeout(() => {
      setSlides(generateSlides(topic));
      setLoading(false);
    }, 600);
  };

  const currentSlide = slides[currentSlideIndex];

  const handleDownloadSlidesHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${topic} — Presentation Slide Deck</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #1e293b; margin: 0; padding: 24px; display: flex; flex-direction: column; gap: 32px; align-items: center; }
  .slide-card { width: 900px; min-height: 500px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.3); display: flex; flex-direction: column; justify-content: space-between; page-break-after: always; }
  .slide-header { border-bottom: 2px solid #4f46e5; padding: 24px 32px 14px 32px; display: flex; justify-content: space-between; align-items: center; }
  .slide-header h2 { margin: 0; font-size: 1.4rem; color: #0f172a; }
  .badge { background: #e0e7ff; color: #3730a3; padding: 4px 12px; border-radius: 9999px; font-weight: 700; font-size: 0.8rem; }
  .slide-body { padding: 32px; display: grid; grid-template-columns: 1fr 280px; gap: 24px; flex: 1; }
  .slide-body ul { line-height: 1.8; font-size: 1rem; color: #334155; }
  .slide-body img { width: 100%; height: 220px; object-fit: cover; border-radius: 8px; }
  .slide-footer { background: #f8fafc; padding: 12px 32px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; font-size: 0.8rem; color: #64748b; }
  @media print { body { background: #fff; padding: 0; } .slide-card { box-shadow: none; width: 100%; min-height: auto; page-break-after: always; } }
</style>
</head>
<body>
<h1 style="color: #ffffff; margin-bottom: 4px;">${topic}</h1>
<p style="color: #94a3b8; margin: 0 0 24px 0;">EduAgent AI • 10-Slide Academic Presentation Deck</p>
${slides.map((s, idx) => `
<div class="slide-card">
  <div class="slide-header">
    <h2>${s.title}</h2>
    <span class="badge">Slide 0${s.slideNumber || idx + 1} of ${slides.length}</span>
  </div>
  <div class="slide-body">
    <div>
      ${s.subtitle ? `<h3 style="color: #4f46e5; margin-top: 0;">${s.subtitle}</h3>` : ''}
      <ul>
        ${(s.points || s.bulletPoints || s.advantages || []).map(p => `<li>${p}</li>`).join('')}
      </ul>
      ${s.keyTakeaway ? `<div style="background: #e0e7ff; color: #3730a3; padding: 10px 14px; border-radius: 8px; margin-top: 16px; font-weight: 600;">💡 ${s.keyTakeaway}</div>` : ''}
    </div>
    ${s.image ? `<img src="${s.image}" alt="Slide visual">` : ''}
  </div>
  <div class="slide-footer">
    <span>EduAgent AI | Artificial Intelligence and Its Applications</span>
    <span>Slide 0${s.slideNumber || idx + 1}</span>
  </div>
</div>
`).join('')}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/\s+/g, '_')}_Slides_Deck.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    const outline = slides
      .map(s => `Slide ${s.slideNumber}: ${s.title}\n${(s.points || s.advantages || []).map(b => '  • ' + b).join('\n')}`)
      .join('\n\n');
    const blob = new Blob([outline], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.replace(/\s+/g, '_')}_Presentation.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const quickTopics = [
    'A* Search Algorithm', 'BFS', 'DFS', 'Minimax Algorithm',
    'Alpha-Beta Pruning', 'PEAS Framework', 'CSP Backtracking',
    'Forward Chaining', 'Backward Chaining', 'AI Applications',
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Header */}
      <div className="edtech-card" style={{ padding: 24 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Presentation size={22} color="var(--accent-amber)" />
          AI Topic PPT Slide Deck Generator
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 16 }}>
          Generates a fully illustrated 10-slide academic presentation with images, diagrams, worked examples and exam tips for any AI topic.
        </p>
        <form onSubmit={handleGenerate} style={{ display: 'flex', gap: 12 }}>
          <input
            type="text"
            placeholder="e.g., A* Search, Minimax, PEAS Framework, Forward Chaining..."
            value={topic}
            onChange={e => setTopic(e.target.value)}
            style={{ flex: 1, padding: '10px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '0.9rem', outline: 'none' }}
          />
          <button type="submit" disabled={!topic.trim() || loading} className="btn-primary">
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
            Generate
          </button>
        </form>
        {/* Quick topic buttons */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
          {quickTopics.map(qt => (
            <button
              key={qt}
              onClick={() => { setTopic(qt); setSlides(generateSlides(qt)); setCurrentSlideIndex(0); }}
              style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', background: topic === qt ? 'var(--primary-indigo-light)' : '#f8fafc', color: topic === qt ? 'var(--primary-indigo)' : 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer' }}
            >{qt}</button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="edtech-card" style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>
          <Loader2 className="animate-spin" size={24} color="var(--primary-indigo)" style={{ margin: '0 auto 12px auto' }} />
          <p>Building slides for <strong>{topic}</strong>…</p>
        </div>
      ) : slides.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          {/* Controls row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 800, alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Slide <strong>{currentSlideIndex + 1}</strong> of {slides.length}
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={handleDownloadSlidesHTML}
                className="btn-primary"
                title="Download 10-slide deck as standalone HTML presentation"
                style={{ fontSize: '0.8rem', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <Download size={14} /> Download Slides (.html/PDF)
              </button>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
                title="Print or Save Slides PDF"
                style={{ fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <Printer size={14} /> Print
              </button>
              <button
                onClick={handleExport}
                className="btn-secondary"
                title="Export Outline Text"
                style={{ fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <FileText size={14} /> Outline (.txt)
              </button>
            </div>
          </div>

          {/* Slide canvas */}
          <div style={{ width: '100%', maxWidth: 800, display: 'flex', justifyContent: 'center' }}>
            <SlideCanvas slide={currentSlide} />
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <button onClick={() => setCurrentSlideIndex(p => Math.max(0, p - 1))} disabled={currentSlideIndex === 0} className="btn-secondary">
              <ChevronLeft size={18} /> Previous
            </button>
            {/* Thumbnail dots */}
            <div style={{ display: 'flex', gap: 4 }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlideIndex(i)} style={{ width: i === currentSlideIndex ? 20 : 8, height: 8, borderRadius: 4, border: 'none', background: i === currentSlideIndex ? 'var(--primary-indigo)' : '#cbd5e1', cursor: 'pointer', transition: 'all 0.2s ease', padding: 0 }} />
              ))}
            </div>
            <button onClick={() => setCurrentSlideIndex(p => Math.min(slides.length - 1, p + 1))} disabled={currentSlideIndex === slides.length - 1} className="btn-primary">
              Next <ChevronRight size={18} />
            </button>
          </div>

          {/* Slide outline */}
          <div className="edtech-card" style={{ width: '100%', maxWidth: 800, padding: 20 }}>
            <div style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: 12, fontSize: '0.9rem' }}>Presentation Outline</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {slides.map((s, i) => (
                <button key={i} onClick={() => setCurrentSlideIndex(i)} style={{ textAlign: 'left', padding: '8px 12px', borderRadius: 8, border: i === currentSlideIndex ? '1px solid var(--primary-indigo)' : '1px solid transparent', background: i === currentSlideIndex ? 'var(--primary-indigo-light)' : 'transparent', color: i === currentSlideIndex ? 'var(--primary-indigo)' : 'var(--text-muted)', fontSize: '0.82rem', fontWeight: i === currentSlideIndex ? 700 : 400, cursor: 'pointer' }}>
                  <span style={{ fontWeight: 700, marginRight: 8 }}>0{s.slideNumber}</span>{s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
