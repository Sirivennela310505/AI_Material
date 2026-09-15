import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { SYLLABUS_DATA, TOP_IMPORTANT_QUESTIONS } from './syllabusData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Gemini Client if key exists
const apiKey = process.env.GEMINI_API_KEY;
let aiClient = null;

if (apiKey && apiKey.trim() !== '') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI with key, using fallback mode:', err.message);
  }
}

// Helper function to call Gemini or fallback
async function generateAIContent(prompt, systemInstruction = '') {
  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: systemInstruction ? { systemInstruction } : undefined,
      });
      return response.text;
    } catch (err) {
      console.warn('Gemini API call failed, using fallback:', err.message);
    }
  }
  return null; // Signals controller to use fallback
}

// ==========================================
// NEW ACADEMIC ENDPOINTS FOR EDUAGENT-2K26
// ==========================================

// 1. Get Complete 5-Unit Syllabus Data
app.get('/api/syllabus', (req, res) => {
  res.json({
    course: 'Artificial Intelligence and Its Applications',
    code: 'EDU-AI-2026',
    units: SYLLABUS_DATA
  });
});

// 2. Get Top 10 Important Exam Questions per Unit (50 total)
app.get('/api/important-questions', (req, res) => {
  const { unitId } = req.query;
  if (unitId) {
    const filtered = TOP_IMPORTANT_QUESTIONS.filter(q => q.unitId === unitId);
    return res.json({ unitId, questions: filtered });
  }
  res.json({ total: TOP_IMPORTANT_QUESTIONS.length, questions: TOP_IMPORTANT_QUESTIONS });
});

// 3. Generate Presentation Slides Endpoint (Topic or Full Unit)
app.post('/api/presentation', async (req, res) => {
  try {
    const { topic, unitId, type = 'topic' } = req.body;
    const title = topic || unitId || 'Artificial Intelligence';

    const prompt = `Generate a 10-slide presentation deck outline for "${title}" in Artificial Intelligence. Return ONLY a JSON array of objects with keys: slideNumber (number), title (string), bulletPoints (array of strings), visualDiagram (string description), keyTakeaway (string).`;
    const aiResult = await generateAIContent(prompt);

    if (aiResult) {
      try {
        const cleaned = aiResult.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return res.json({ title, type, slides: parsed });
      } catch (e) {
        console.warn('PPT JSON parse error, fallback used');
      }
    }

    // Fallback structured slide deck
    const fallbackSlides = [
      {
        slideNumber: 1,
        title: `${title} — Overview & Core Definition`,
        bulletPoints: [
          `Fundamental concept within Artificial Intelligence and Its Applications.`,
          `Transforms theoretical state formulation into actionable computation.`,
          `Acts as an essential building block for rational agent decision making.`
        ],
        visualDiagram: `📌 Diagram: [Percept Sequence] ➔ [Agent Function / Logic] ➔ [Optimal Action]`,
        keyTakeaway: `Key Concept: Foundations must be mastered before tackling complex heuristics.`
      },
      {
        slideNumber: 2,
        title: `Academic Motivation & Real-World Necessity`,
        bulletPoints: [
          `Why traditional static methods fail under high state complexity.`,
          `Enables dynamic adaptation in unpredictable environments.`,
          `Reduces search space overhead through structured rules.`
        ],
        visualDiagram: `📌 Flow: Problem Space ➔ State Reduction ➔ Optimal Path Selection`,
        keyTakeaway: `Core Goal: Maximize efficiency while maintaining strict correctness.`
      },
      {
        slideNumber: 3,
        title: `Mathematical & Architectural Formulation`,
        bulletPoints: [
          `Initial State S0 & Goal Test Condition G(s).`,
          `Transition Function Result(s, a) mapping states to successor states.`,
          `Path Cost measure c(s, a, s') accumulating step weights.`
        ],
        visualDiagram: `📌 Math Matrix: S0 ➔ [Action Set A] ➔ Successor States {S1, S2, S3}`,
        keyTakeaway: `Mathematical Rigor: Formal formulation guarantees sound search execution.`
      },
      {
        slideNumber: 4,
        title: `Step-by-Step Algorithmic Mechanics`,
        bulletPoints: [
          `1. Initialize frontier queue with initial state S0.`,
          `2. Check goal test condition before expanding frontier nodes.`,
          `3. Apply transition model to generate child state nodes.`,
          `4. Re-evaluate queue priorities based on path cost & heuristic bounds.`
        ],
        visualDiagram: `📌 Tree Diagram: Root Node ➔ Level 1 Branching ➔ Level 2 Goal Reach`,
        keyTakeaway: `Algorithm Flow: Systematic expansion prevents infinite loop traps.`
      },
      {
        slideNumber: 5,
        title: `Worked Example & Trace Analysis`,
        bulletPoints: [
          `Step 1: Start node expanded (Cost g=0, Heuristic h=10, Total f=10).`,
          `Step 2: Neighboring nodes evaluated and added to priority queue.`,
          `Step 3: Minimum f-value node selected for next expansion phase.`
        ],
        visualDiagram: `📌 Step Trace Table: Node | g(n) | h(n) | f(n) | Status`,
        keyTakeaway: `Trace Practice: Always write out node expansion queues in university exams.`
      },
      {
        slideNumber: 6,
        title: `Performance Metrics: Time & Space Complexity`,
        bulletPoints: [
          `Time Complexity: Governed by branching factor b and depth d.`,
          `Space Complexity: Memory footprint stored in active frontier queues.`,
          `Completeness & Optimality criteria evaluation.`
        ],
        visualDiagram: `📌 Complexity Comparison Chart: BFS vs DFS vs A* vs Minimax`,
        keyTakeaway: `Exam Formula: Memorize Big-O bounds for written exam answers.`
      },
      {
        slideNumber: 7,
        title: `Common Student Pitfalls & Exam Traps`,
        bulletPoints: [
          `Pitfall 1: Confusing admissible heuristics with non-admissible overestimates.`,
          `Pitfall 2: Forgetting path cost accumulation g(n) in evaluation functions.`,
          `Pitfall 3: Not handling graph cycles leading to infinite loop state traps.`
        ],
        visualDiagram: `📌 Warning Visual: ⚠️ Cycle Warning & Overestimation Traps`,
        keyTakeaway: `Exam Tip: Always double-check heuristic admissibility proof.`
      },
      {
        slideNumber: 8,
        title: `Real-World Application Domains`,
        bulletPoints: [
          `Autonomous Vehicle Navigation & GPS Route Optimization.`,
          `Game Playing Engines & Decision Tree Search (Chess, Go).`,
          `Medical Diagnostics & Expert Reasoning Systems.`
        ],
        visualDiagram: `📌 Applications Grid: Robotics | Autonomous Driving | EdTech | Finance`,
        keyTakeaway: `Practical Impact: Theory directly drives modern autonomous systems.`
      },
      {
        slideNumber: 9,
        title: `Summary & Key Exam Memory Hooks`,
        bulletPoints: [
          `Pillar 1: Define state space clearly before running search.`,
          `Pillar 2: Choose algorithms matching environment observability & determinism.`,
          `Pillar 3: Combine heuristic estimates with exact path costs.`
        ],
        visualDiagram: `📌 Memory Hook Card: Formula + 3 Core Rules`,
        keyTakeaway: `Revision Rule: Review key definitions 15 minutes before exams.`
      },
      {
        slideNumber: 10,
        title: `Self-Assessment & Next Recommended Step`,
        bulletPoints: [
          `Take the 4-question Quiz Studio check on ${title}.`,
          `Try the interactive step-by-step algorithm visualizer.`,
          `Proceed to the next topic on your personalized AI roadmap.`
        ],
        visualDiagram: `📌 Next Step: [Quiz] ➔ [Performance Insight] ➔ [Next Unit]`,
        keyTakeaway: `EduAgent Loop: Test yourself to unlock targeted performance feedback.`
      }
    ];

    return res.json({ title, type, slides: fallbackSlides, fallback: true });
  } catch (err) {
    console.error('Error in /api/presentation:', err);
    res.status(500).json({ error: 'Failed to generate presentation' });
  }
});

// 4. Analyze Progress & AI Learning Insight Engine
app.post('/api/analyze-progress', async (req, res) => {
  try {
    const { history = [], recentScores = [] } = req.body;

    const weakTopics = [];
    const strongTopics = [];

    recentScores.forEach(item => {
      if (item.score / item.total < 0.6) {
        weakTopics.push(item.topic);
      } else {
        strongTopics.push(item.topic);
      }
    });

    const prompt = `Analyze student performance in Artificial Intelligence. Strong areas: ${strongTopics.join(', ') || 'Foundations'}. Weak areas: ${weakTopics.join(', ') || 'A* Search, Heuristics'}. Provide 1-sentence diagnostic insight and 3 recommended study action items. Return JSON with keys: insight, recommendations (array of strings).`;
    const aiResult = await generateAIContent(prompt);

    if (aiResult) {
      try {
        const cleaned = aiResult.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return res.json(parsed);
      } catch (e) {
        console.warn('Progress parse error, fallback used');
      }
    }

    const fallbackAnalysis = {
      insight: weakTopics.length > 0
        ? `Your fundamentals in ${strongTopics.slice(0, 2).join(' and ') || 'Basic AI'} are solid, but your accuracy drops when applying heuristic equations in ${weakTopics[0] || 'A* Search'}.`
        : `Excellent progress! You demonstrate strong comprehension across Unit I & II concepts.`,
      recommendations: [
        `Revise Heuristic Functions and admissibility criteria in Unit II.`,
        `Practice 5 worked examples of A* grid path calculations.`,
        `Retake the Unit II Quiz Studio challenge to verify mastery.`
      ],
      weakTopics: weakTopics.length > 0 ? weakTopics : ['A* Search Heuristics', 'Alpha-Beta Pruning Bounds'],
      strongTopics: strongTopics.length > 0 ? strongTopics : ['PEAS Framework', 'Agent Architectures', 'BFS Traversal']
    };

    return res.json(fallbackAnalysis);
  } catch (err) {
    console.error('Error in /api/analyze-progress:', err);
    res.status(500).json({ error: 'Failed to analyze progress' });
  }
});

// ==========================================
// PRESERVED EXISTING ENDPOINTS
// ==========================================

// 1. AI Tutor / Doubt Solver Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, persona = 'socratic', history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const personaInstructions = {
      socratic: 'You are a Socratic AI Tutor for Artificial Intelligence and Its Applications. Answer by asking guiding questions and breaking down complex concepts step-by-step.',
      explainer: 'You are a Friendly Concept Simplifier for AI. Explain topics with engaging real-world analogies, bullet points, and clear steps.',
      exam_coach: 'You are an AI Exam Coach. Give concise, high-yield revision tips, key formulas, and exam model answers.',
      coding_mentor: 'You are a Code & Algorithm Mentor. Provide clean code snippets, algorithms, and step-by-step traces.'
    };

    const instruction = personaInstructions[persona] || personaInstructions.socratic;
    const prompt = `User question regarding Artificial Intelligence and Its Applications: ${message}`;
    const aiResponse = await generateAIContent(prompt, instruction);

    if (aiResponse) {
      return res.json({ response: aiResponse, persona });
    }

    // Intelligent fallback
    let fallbackText = '';
    if (persona === 'socratic') {
      fallbackText = `That's a key question on **"${message}"**! To help you master this concept in your AI syllabus, let's analyze it step-by-step:\n\n1. **Core Principle**: How does an agent perceive the environment in this context?\n2. **State Representation**: What are the variables and state bounds?\n3. **Evaluation**: How do we score the quality of action?\n\nWhat is your initial intuition about step 1?`;
    } else if (persona === 'explainer') {
      fallbackText = `Let me break down **"${message}"** in simple terms! 🚀\n\n💡 **Real-World Analogy**: Imagine a GPS navigation app selecting the fastest route while considering real-time traffic jams.\n\n🔑 **3 Key Points**:\n- **Definition**: Structures complex problem spaces into computable state paths.\n- **Why it matters**: Prevents exhaustive brute-force search over millions of invalid options.\n- **Exam Hook**: Always state initial state, goal test, and path cost equation!`;
    } else if (persona === 'exam_coach') {
      fallbackText = `🎯 **Exam Revision Guide for "${message}"**:\n\n1. **1-Sentence Definition**: Standard definition expected in university evaluations.\n2. **Key Equation/Rule**: Ensure formulas like f(n) = g(n) + h(n) are explicitly written out.\n3. **Diagram Practice**: Draw initial state -> frontier queue -> goal reach.\n4. **Sample 5-Mark Question**: Practice explaining this topic in 4 bullet points under 5 minutes.`;
    } else {
      fallbackText = `💻 **Algorithm & Code Implementation for "${message}"**:\n\n\`\`\`javascript\n// A* Search Node Evaluation Example\nfunction evaluateNode(node, goal) {\n  const g = node.pathCost; // Exact cost spent so far\n  const h = calculateHeuristic(node.position, goal.position); // Estimated cost to goal\n  return g + h;\n}\n\`\`\`\n\n**Best Practice**: Ensure heuristic function h(n) never overestimates true cost to maintain admissibility!`;
    }

    return res.json({ response: fallbackText, persona, fallback: true });
  } catch (err) {
    console.error('Error in /api/chat:', err);
    res.status(500).json({ error: 'Failed to generate chat response' });
  }
});

// 2. Concept Explainer Endpoint
app.post('/api/explain', async (req, res) => {
  try {
    const { topic, level = 'beginner' } = req.body;
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const systemPrompt = `You are an AI educator. Explain "${topic}" for a ${level} level student in the Artificial Intelligence course. Include Summary, Analogy, Key Mechanics, and Reflection Question.`;
    const aiResult = await generateAIContent(`Explain topic: ${topic} at level: ${level}`, systemPrompt);

    if (aiResult) {
      return res.json({ topic, level, explanation: aiResult });
    }

    // Intelligent structured fallback
    const fallbackData = {
      summary: `At the ${level} level, **${topic}** is a core component of Artificial Intelligence and Its Applications that allows agents to evaluate states and make rational decisions.`,
      analogy: level === 'beginner' 
        ? `Think of ${topic} like choosing the fastest lane at a toll booth—you evaluate the length of each line and the speed of the cashier to pick the best spot.`
        : `Think of ${topic} like an automated flight control grid dynamically re-routing aircraft to avoid severe weather pockets while conserving fuel.`,
      keyPoints: [
        `State Space Formulation: Maps inputs to structured searchable states.`,
        `Evaluation Function: Computes path quality and heuristic distance bounds.`,
        `Efficiency: Minimizes time & space complexity during node expansion.`
      ],
      interactiveQuestion: `If you were explaining ${topic} to a classmate before an exam, what 2-sentence analogy would you use?`
    };

    return res.json({ topic, level, explanation: fallbackData, fallback: true });
  } catch (err) {
    console.error('Error in /api/explain:', err);
    res.status(500).json({ error: 'Failed to generate concept explanation' });
  }
});

// 3. Quiz Studio Generator Endpoint
app.post('/api/quiz', async (req, res) => {
  try {
    const { topic, count = 4, difficulty = 'medium' } = req.body;
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const prompt = `Generate ${count} multiple choice questions on "${topic}" in Artificial Intelligence with difficulty "${difficulty}". Format as clean JSON array of objects with keys: id, question, options (array of 4 strings), answer (index 0-3), explanation, memoryTip. Return ONLY JSON.`;
    const aiResponse = await generateAIContent(prompt);

    if (aiResponse) {
      try {
        const cleaned = aiResponse.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return res.json({ topic, quiz: parsed });
      } catch (parseErr) {
        console.warn('Failed to parse AI JSON quiz output, fallback used');
      }
    }

    // Fallback quiz generator
    const fallbackQuiz = [
      {
        id: 1,
        question: `In the context of ${topic}, what is the primary condition required for optimal performance?`,
        options: [
          `Valid state space formulation and admissible heuristic evaluation`,
          `Unchecked random exploration without goal test conditions`,
          `Infinite memory queues with zero constraint propagation`,
          `Discarding path cost history g(n) entirely`
        ],
        answer: 0,
        explanation: `Optimal performance requires proper state formulation and admissible evaluation bounds to prevent sub-optimal goal selection.`,
        memoryTip: `💡 Remember: Optimal = Sound State Model + Admissible Heuristic.`
      },
      {
        id: 2,
        question: `Which property distinguishes ${topic} when evaluating algorithmic complexity?`,
        options: [
          `It operates strictly in single-state static environments without sensors`,
          `Time complexity depends on branching factor b and depth d`,
          `It eliminates the need for initial state definitions`,
          `It guarantees zero space consumption in frontier storage`
        ],
        answer: 1,
        explanation: `Search space complexity is fundamentally governed by branching factor b and tree depth d (O(b^d)).`,
        memoryTip: `💡 Remember: Search Complexity is a function of Branching (b) & Depth (d).`
      },
      {
        id: 3,
        question: `How does ${topic} handle unexpected edge cases or sub-optimal branches?`,
        options: [
          `By throwing unhandled exceptions and exiting`,
          `By applying pruning rules (like Alpha-Beta or AC-3) or backtracking`,
          `By converting deterministic states into infinite loops`,
          `By ignoring goal test failures completely`
        ],
        answer: 1,
        explanation: `Pruning and backtracking eliminate invalid or sub-optimal search branches before spending computation.`,
        memoryTip: `💡 Remember: Pruning = Cut bad branches early.`
      },
      {
        id: 4,
        question: `What is a common high-yield exam question regarding ${topic}?`,
        options: [
          `Explaining the difference between BFS, DFS, and heuristic search`,
          `Memorizing random unverified definitions`,
          `Proving that empty sets have infinite states`,
          `Writing unstructured pseudocode without variables`
        ],
        answer: 0,
        explanation: `University exams frequently evaluate trade-offs between BFS (level order), DFS (depth order), and Heuristic search.`,
        memoryTip: `💡 Remember: Always compare Space, Time, Completeness, & Optimality.`
      }
    ];

    return res.json({ topic, quiz: fallbackQuiz, fallback: true });
  } catch (err) {
    console.error('Error in /api/quiz:', err);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

// 4. Flashcard Generator Endpoint
app.post('/api/flashcards', async (req, res) => {
  try {
    const { topic } = req.body;
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const prompt = `Create 5 study flashcards for "${topic}" in Artificial Intelligence. Return ONLY a JSON array of objects with keys: term, definition, memoryTip.`;
    const aiResult = await generateAIContent(prompt);

    if (aiResult) {
      try {
        const cleaned = aiResult.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return res.json({ topic, flashcards: parsed });
      } catch (e) {
        console.warn('Flashcards JSON parse error, fallback used');
      }
    }

    const fallbackFlashcards = [
      {
        term: `${topic} — Core Principle`,
        definition: `The fundamental rule governing how information, state transitions, and evaluations operate in this topic.`,
        memoryTip: `💡 Remember: Core Principle = Foundation for all algorithms.`
      },
      {
        term: `Evaluation Function f(n)`,
        definition: `Mathematical formula combining path cost g(n) and heuristic estimate h(n) to rank search frontier nodes.`,
        memoryTip: `💡 Think: f(n) = Spent Cost + Remaining Estimate.`
      },
      {
        term: `Admissibility Condition`,
        definition: `A heuristic property guaranteeing h(n) never overestimates actual cost to reach goal.`,
        memoryTip: `💡 Think: Admissible = Optimistic estimate.`
      },
      {
        term: `Pruning & Consistency`,
        definition: `Techniques (Alpha-Beta, AC-3) that eliminate search subtrees that cannot yield better outcomes.`,
        memoryTip: `💡 Think: Cut useless branches early.`
      },
      {
        term: `Exam Model Formula`,
        definition: `Key Big-O time and space complexity expression expected in university examinations.`,
        memoryTip: `💡 Remember: Time = O(b^d), Space = O(b^d) or O(bd).`
      }
    ];

    return res.json({ topic, flashcards: fallbackFlashcards, fallback: true });
  } catch (err) {
    console.error('Error in /api/flashcards:', err);
    res.status(500).json({ error: 'Failed to generate flashcards' });
  }
});

// 5. Study Roadmap Generator Endpoint
app.post('/api/roadmap', async (req, res) => {
  try {
    const { subject = 'Artificial Intelligence', durationWeeks = 4 } = req.body;

    const prompt = `Create a ${durationWeeks}-step learning roadmap for mastery of "${subject}". Return ONLY a JSON array of objects with keys: week (number), phase (string title), description (string), keySkills (array of strings), practicalProject (string).`;
    const aiResult = await generateAIContent(prompt);

    if (aiResult) {
      try {
        const cleaned = aiResult.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return res.json({ subject, roadmap: parsed });
      } catch (e) {
        console.warn('Roadmap JSON parse error, fallback used');
      }
    }

    const fallbackRoadmap = [
      {
        week: 1,
        phase: `Unit I — Intelligent Agents & Foundations`,
        description: `Master AI definitions, PEAS framework, environment properties, agent architectures, and state space representation.`,
        keySkills: [`PEAS Specification`, `Agent Classification`, `State Space Formulation`],
        practicalProject: `Build a PEAS matrix specification for 3 autonomous systems.`
      },
      {
        week: 2,
        phase: `Unit II — Problem Solving & Search Algorithms`,
        description: `Implement BFS, DFS, Uniform Cost Search, Greedy Search, A* Search, and local search algorithms.`,
        keySkills: [`Search Traversal`, `A* Evaluation f(n)=g(n)+h(n)`, `Heuristic Admissibility`],
        practicalProject: `Build an interactive grid pathfinder using A* search.`
      },
      {
        week: 3,
        phase: `Unit III — Constraints & Adversarial Game Search`,
        description: `Master CSPs, AC-3 constraint propagation, Minimax algorithm, Alpha-Beta Pruning, and MCTS.`,
        keySkills: [`AC-3 Arc Consistency`, `Alpha-Beta Pruning Bounds`, `Game Trees`],
        practicalProject: `Implement a Tic-Tac-Toe AI solver using Minimax with Alpha-Beta pruning.`
      },
      {
        week: 4,
        phase: `Unit IV & V — Knowledge Logic & AI Applications`,
        description: `Master Propositional/FOL logic, Forward/Backward chaining, and real-world AI applications in Healthcare, Finance, and NLP.`,
        keySkills: [`Logic Translation`, `Forward Chaining Proofs`, `Generative AI & LLMs`],
        practicalProject: `Build an Expert System rule-based inference engine.`
      }
    ];

    return res.json({ subject, roadmap: fallbackRoadmap, fallback: true });
  } catch (err) {
    console.error('Error in /api/roadmap:', err);
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'EduAgent AI Backend',
    course: 'Artificial Intelligence and Its Applications',
    unitsCount: SYLLABUS_DATA.length,
    questionsCount: TOP_IMPORTANT_QUESTIONS.length,
    hasApiKey: Boolean(apiKey && apiKey.trim() !== ''),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 EduAgent AI Backend Server running on http://localhost:${PORT}`);
  console.log(`📚 Academic Course Loaded: Artificial Intelligence and Its Applications (5 Units)`);
  console.log(`🔑 Gemini API status: ${apiKey && apiKey.trim() !== '' ? 'Configured' : 'Fallback Mode Active (Intelligent Generators)'}`);
});
