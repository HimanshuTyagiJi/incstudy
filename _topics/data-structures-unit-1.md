---
title: "Data Structures Unit 1: Arrays, Stacks & Complexity | CCSU BCA 3rd Sem"
description: "Comprehensive study notes for CCSU BCA 3rd Sem BCA-302 Unit 1. Covers Linear vs Non-Linear data structures, Stack Push/Pop algorithms, Infix to Postfix, and solved PYQs."
topic_id: data-structures-unit-1
course_id: bca
shared: true
permalink: /bca/topics/data-structures-unit-1/
toc:
  - id: unit-overview
    title: Unit Overview & Exam Weightage
  - id: classification
    title: Classification of Data Structures
  - id: asymptotic-notation
    title: Time & Space Complexity (Big-O)
  - id: stack-intro
    title: Stack Abstract Data Type (LIFO)
  - id: stack-algorithms
    title: Push, Pop & Peek Algorithms
  - id: infix-to-postfix
    title: Infix to Postfix Conversion
  - id: solved-questions
    title: Solved CCSU Exam Questions
  - id: exam-tips
    title: Common Mistakes in Exams
---

<h2 id="unit-overview">1. Unit Overview & CCSU Exam Weightage</h2>

<p>In the CCSU BCA 3rd Semester syllabus, <strong>Data Structure Using C &amp; C++ (Course Code: BCA-302)</strong> is the foundational core paper. Unit 1 establishes the mathematical groundwork of complexity analysis and thoroughly covers linear data representations: Arrays and Stacks.</p>

<div class="notice-box">
  <strong>CCSU Exam Weightage Analysis:</strong>
  Unit 1 consistently carries <strong>15 to 22.5 marks</strong> in the 75-mark external examination:
  <ul>
    <li><strong>3 Marks (Section A):</strong> Differentiate between Linear vs Non-Linear or define Stack Underflow/Overflow.</li>
    <li><strong>7.5 Marks (Section B):</strong> Write algorithms for Stack Push and Pop operations or evaluate a Postfix expression.</li>
    <li><strong>15 Marks (Section C):</strong> Explain Infix to Postfix conversion algorithm with a step-by-step tabular trace of an expression like <code>A + (B * C - (D / E ^ F) * G) * H</code>.</li>
  </ul>
</div>

<h2 id="classification">2. Classification of Data Structures</h2>

<p>A data structure is a specialized format for organizing, processing, retrieving, and storing data efficiently. They are broadly divided into two major families:</p>

<ol>
  <li><strong>Primitive Data Structures:</strong> Basic structures directly operated upon by machine-level instructions (e.g., <code>int</code>, <code>float</code>, <code>char</code>, <code>pointer</code>).</li>
  <li><strong>Non-Primitive Data Structures:</strong> Derived, sophisticated structures built using primitive types:
    <ul>
      <li><strong>Linear Data Structures:</strong> Elements form a sequential sequence where each element has a unique predecessor and successor (except the first and last elements). Examples: <em>Arrays, Stacks, Queues, Linked Lists</em>.</li>
      <li><strong>Non-Linear Data Structures:</strong> Elements are arranged hierarchically or interconnected arbitrarily with multi-level relationships. Examples: <em>Trees, Graphs</em>.</li>
    </ul>
  </li>
</ol>

<table class="data-table" style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border); text-align: left;">
      <th style="padding: 10px;">Feature</th>
      <th style="padding: 10px;">Linear Data Structure</th>
      <th style="padding: 10px;">Non-Linear Data Structure</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Arrangement</strong></td>
      <td style="padding: 10px;">Sequential single-level memory layout</td>
      <td style="padding: 10px;">Hierarchical or networked multi-level layout</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Traversal</strong></td>
      <td style="padding: 10px;">Can be traversed in a single pass (O(n))</td>
      <td style="padding: 10px;">Requires complex traversal (Preorder, BFS, DFS)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Memory Utilization</strong></td>
      <td style="padding: 10px;">Often static (Arrays) or linear dynamic</td>
      <td style="padding: 10px;">Highly flexible, dynamic node pointers</td>
    </tr>
    <tr>
      <td style="padding: 10px;"><strong>Examples</strong></td>
      <td style="padding: 10px;">Array, Stack, Queue, Linked List</td>
      <td style="padding: 10px;">Binary Tree, AVL Tree, Graph, Heap</td>
    </tr>
  </tbody>
</table>

<h2 id="asymptotic-notation">3. Asymptotic Notations: Time &amp; Space Complexity</h2>

<p>When evaluating an algorithm's efficiency, asymptotic notation describes the execution time and memory requirement as the input size \(n\) grows towards infinity:</p>

<ul>
  <li><strong>Big-O Notation (\(O\)):</strong> Defines the <em>Upper Bound</em> (Worst-case performance). It guarantees that an algorithm will never take more than \(c \cdot g(n)\) time.</li>
  <li><strong>Big-Omega Notation (\(\Omega\)):</strong> Defines the <em>Lower Bound</em> (Best-case performance). Indicates the minimum possible execution time.</li>
  <li><strong>Big-Theta Notation (\(\Theta\)):</strong> Defines the <em>Tight Bound</em> (Average-case performance), sandwiching execution time between lower and upper limits.</li>
</ul>

<div class="notice-box">
  <strong>Standard Growth Hierarchy:</strong>
  \(O(1) &lt; O(\log n) &lt; O(n) &lt; O(n \log n) &lt; O(n^2) &lt; O(2^n)\).
</div>

<h2 id="stack-intro">4. Stack Abstract Data Type (LIFO)</h2>

<p>A <strong>Stack</strong> is a linear data structure that strictly enforces the <strong>LIFO (Last In, First Out)</strong> principle. In a stack, insertion of new elements and removal of existing elements are restricted to a single endpoint known as the <strong>TOP</strong> of the stack.</p>

<p><strong>Real-World Analogies:</strong> A stack of cafeteria plates, a spring-loaded CD spindle, or browser history navigation (back button).</p>

<h2 id="stack-algorithms">5. Stack Operations: Push, Pop &amp; Peek Algorithms</h2>

<h3>Algorithm: PUSH (Insert an Element into Stack)</h3>
<pre><code class="language-plaintext">Algorithm PUSH(STACK, TOP, MAX, ITEM)
1. [Check for Stack Overflow]
   If TOP == MAX - 1 then:
       Print "Error: Stack Overflow! Cannot insert ITEM."
       Return
2. [Increment top pointer]
   Set TOP = TOP + 1
3. [Insert ITEM into STACK]
   Set STACK[TOP] = ITEM
4. Print "ITEM successfully inserted."
5. Exit</code></pre>

<h3>Algorithm: POP (Delete an Element from Stack)</h3>
<pre><code class="language-plaintext">Algorithm POP(STACK, TOP, ITEM)
1. [Check for Stack Underflow]
   If TOP == -1 then:
       Print "Error: Stack Underflow! Stack is empty."
       Return
2. [Retrieve the element at top]
   Set ITEM = STACK[TOP]
3. [Decrement top pointer]
   Set TOP = TOP - 1
4. Print "Removed ITEM from Stack: ", ITEM
5. Return ITEM</code></pre>

<h2 id="infix-to-postfix">6. Infix to Postfix Conversion (15-Mark Guaranteed Question)</h2>

<p>Compilers use stacks to convert human-readable arithmetic expressions (<strong>Infix</strong>) into compiler-friendly notation (<strong>Postfix / Reverse Polish Notation</strong>) to eliminate parenthesis ambiguity.</p>

<h3>Step-by-Step Operator Priority:</h3>
<ul>
  <li><code>^</code> (Exponentiation): Priority 3 (Associativity: Right to Left)</li>
  <li><code>*</code>, <code>/</code> (Multiplication, Division): Priority 2 (Associativity: Left to Right)</li>
  <li><code>+</code>, <code>-</code> (Addition, Subtraction): Priority 1 (Associativity: Left to Right)</li>
  <li><code>(</code>: Priority 0 (Inside Stack)</li>
</ul>

<h3>CCSU Exam Solved Example: Convert <code>(A + B) * (C - D) / E</code> to Postfix</h3>

<table class="data-table" style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border); text-align: left;">
      <th style="padding: 8px;">Symbol Scanned</th>
      <th style="padding: 8px;">Stack Status</th>
      <th style="padding: 8px;">Postfix Expression (Output)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>(</code></td>
      <td style="padding: 8px;"><code>(</code></td>
      <td style="padding: 8px;"><em>Empty</em></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>A</code></td>
      <td style="padding: 8px;"><code>(</code></td>
      <td style="padding: 8px;"><code>A</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>+</code></td>
      <td style="padding: 8px;"><code>( +</code></td>
      <td style="padding: 8px;"><code>A</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>B</code></td>
      <td style="padding: 8px;"><code>( +</code></td>
      <td style="padding: 8px;"><code>A B</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>)</code></td>
      <td style="padding: 8px;"><em>Empty</em></td>
      <td style="padding: 8px;"><code>A B +</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>*</code></td>
      <td style="padding: 8px;"><code>*</code></td>
      <td style="padding: 8px;"><code>A B +</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>(</code></td>
      <td style="padding: 8px;"><code>* (</code></td>
      <td style="padding: 8px;"><code>A B +</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>C</code></td>
      <td style="padding: 8px;"><code>* (</code></td>
      <td style="padding: 8px;"><code>A B + C</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>-</code></td>
      <td style="padding: 8px;"><code>* ( -</code></td>
      <td style="padding: 8px;"><code>A B + C</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>D</code></td>
      <td style="padding: 8px;"><code>* ( -</code></td>
      <td style="padding: 8px;"><code>A B + C D</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>)</code></td>
      <td style="padding: 8px;"><code>*</code></td>
      <td style="padding: 8px;"><code>A B + C D -</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>/</code></td>
      <td style="padding: 8px;"><code>/</code> (Pops <code>*</code> due to equal precedence)</td>
      <td style="padding: 8px;"><code>A B + C D - *</code></td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 8px;"><code>E</code></td>
      <td style="padding: 8px;"><code>/</code></td>
      <td style="padding: 8px;"><code>A B + C D - * E</code></td>
    </tr>
    <tr>
      <td style="padding: 8px;"><strong>End of String</strong></td>
      <td style="padding: 8px;"><em>Empty</em> (Pop remaining operators)</td>
      <td style="padding: 8px;"><code>A B + C D - * E /</code></td>
    </tr>
  </tbody>
</table>

<h2 id="solved-questions">7. Solved CCSU Previous Year Exam Questions</h2>

<div class="notice-box">
  <h3>Q1 (3 Marks - Section A): What is Stack Overflow and Stack Underflow?</h3>
  <p><strong>Answer:</strong> <strong>Stack Overflow</strong> occurs when an attempt is made to push an element into a stack that is already full (i.e., <code>TOP == MAX - 1</code>). <strong>Stack Underflow</strong> occurs when an attempt is made to pop an element from an empty stack (i.e., <code>TOP == -1</code>).</p>
</div>

<div class="notice-box">
  <h3>Q2 (7.5 Marks - Section B): Explain any four applications of Stacks in Computer Science.</h3>
  <p><strong>Answer:</strong></p>
  <ol>
    <li><strong>Expression Evaluation &amp; Parsing:</strong> Converting arithmetic expressions between Infix, Prefix, and Postfix formats and evaluating postfix strings.</li>
    <li><strong>Function Call &amp; Recursion Management:</strong> The Call Stack stores activation records, local variables, and return addresses during nested function calls.</li>
    <li><strong>Backtracking Algorithms:</strong> Used in maze solvers, game boards (Chess/Sudoku), and depth-first search (DFS) traversals.</li>
    <li><strong>Undo/Redo Mechanisms:</strong> Text editors maintain two stacks (Undo stack and Redo stack) to track state changes.</li>
  </ol>
</div>

<h2 id="exam-tips">8. Common Mistakes to Avoid in CCSU Exams</h2>
<ul>
  <li><strong>Not initializing TOP to -1:</strong> In 0-indexed C arrays, an empty stack must have <code>TOP = -1</code>, not 0.</li>
  <li><strong>Ignoring Associativity during Infix Conversion:</strong> When two operators share equal precedence (like <code>*</code> and <code>/</code>), left-to-right associativity demands that the existing stack operator be popped first.</li>
  <li><strong>Omitting Boundary Condition Checks:</strong> Writing code without <code>if (TOP == -1)</code> or <code>if (TOP == MAX - 1)</code> leads to immediate marks deduction in Section B questions.</li>
</ul>
