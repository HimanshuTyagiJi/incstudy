---
title: "C Programming Unit 1: Fundamentals, Structure & Operators | CCSU BCA 1st Sem"
description: "Comprehensive notes for CCSU BCA 1st Semester (BCA-102) Unit 1. Detailed explanation of C structure, data types, tokens, operator precedence, and solved exam questions."
topic_id: c-programming-unit-1
course_id: bca
shared: true
permalink: /bca/topics/c-programming-unit-1/
toc:
  - id: unit-overview
    title: Unit Overview & Exam Weightage
  - id: structure-of-c
    title: Structure of a C Program
  - id: tokens-identifiers
    title: C Tokens, Keywords & Identifiers
  - id: data-types
    title: Data Types & Format Specifiers
  - id: operators
    title: Operators & Expressions
  - id: prefix-postfix
    title: Prefix vs Postfix Dry-Run
  - id: precedence
    title: Operator Precedence & Associativity
  - id: solved-questions
    title: Solved CCSU Exam Questions
  - id: exam-tips
    title: Common Mistakes in Exams
---

<h2 id="unit-overview">1. Unit Overview & CCSU Exam Weightage</h2>

<p>In the CCSU BCA 1st Semester curriculum, <strong>Programming Principle & Algorithm (Course Code: BCA-102)</strong> serves as the backbone of your software development journey. Unit 1 introduces the core mechanics of how high-level code is structured, parsed, and translated into machine instructions.</p>

<div class="notice-box">
  <strong>CCSU Exam Weightage Analysis:</strong>
  Historically, Unit 1 accounts for <strong>15 to 22.5 marks</strong> out of the 75-mark external paper. You can expect:
  <ul>
    <li>At least <strong>one 3-mark question</strong> in Section A (e.g., Keywords vs Identifiers or format specifier usage).</li>
    <li>One <strong>7.5-mark question</strong> in Section B (e.g., Prefix vs Postfix operators with dry run or Structure of C).</li>
    <li>Often a part of a <strong>15-mark question</strong> in Section C paired with algorithm/flowchart design.</li>
  </ul>
</div>

<h2 id="structure-of-c">2. Anatomy & Structure of a C Program</h2>

<p>A C program is not just a random collection of statements. Dennis Ritchie designed C to follow a structured, modular blueprint composed of distinct sections:</p>

<ol>
  <li><strong>Documentation Section:</strong> Contains comments mentioning the author's name, program purpose, and date. Ignored by the compiler.</li>
  <li><strong>Link / Preprocessor Section:</strong> Header file inclusions like <code>#include &lt;stdio.h&gt;</code> that provide prototypes for built-in I/O functions.</li>
  <li><strong>Definition Section:</strong> Symbolic constants defined using <code>#define PI 3.14159</code>.</li>
  <li><strong>Global Declaration Section:</strong> Variables and user-defined function declarations accessible across all functions.</li>
  <li><strong>Main Function (<code>main()</code>):</strong> The entry point of every C program. Execution strictly begins and terminates here.</li>
  <li><strong>Sub-program Section:</strong> User-defined function implementations (e.g., <code>add()</code>, <code>display()</code>).</li>
</ol>

<h3>Standard Annotated Code Example:</h3>

<pre><code class="language-c">/* Documentation Section: First C Program for CCSU Exam */
#include &lt;stdio.h&gt;   // Link Section: Standard Input Output header

#define PASS_MARK 40 // Definition Section: Symbolic constant

int main(void) {     // Main Function: Execution starting point
    // Variable Declaration
    int student_score = 65;

    // Output Statement
    if (student_score &gt;= PASS_MARK) {
        printf("Result: Passed with score %d\n", student_score);
    } else {
        printf("Result: Failed\n");
    }

    return 0;        // Exit status 0 indicates successful termination
}</code></pre>

<h2 id="tokens-identifiers">3. C Tokens, Keywords, and Identifiers</h2>

<p>A <strong>Token</strong> is the smallest individual unit in a C program that the compiler understands. C tokens are classified into six categories:</p>

<ul>
  <li><strong>Keywords:</strong> Reserved words with pre-defined meanings (32 standard keywords in ANSI C, such as <code>int</code>, <code>float</code>, <code>if</code>, <code>return</code>, <code>static</code>).</li>
  <li><strong>Identifiers:</strong> User-defined names given to variables, functions, and arrays.</li>
  <li><strong>Constants:</strong> Fixed values that cannot be modified during program execution (e.g., <code>100</code>, <code>3.14</code>, <code>'A'</code>).</li>
  <li><strong>Strings:</strong> Sequence of characters enclosed in double quotes (e.g., <code>"IncStudy"</code>).</li>
  <li><strong>Operators:</strong> Symbols that trigger specific mathematical or logical evaluations (e.g., <code>+</code>, <code>&amp;&amp;</code>, <code>==</code>).</li>
  <li><strong>Special Symbols:</strong> Braces, brackets, and semicolons (<code>{ } [ ] ; ,</code>).</li>
</ul>

<h3>Rules for Naming Identifiers (Frequently Asked 3-Mark Question):</h3>

<table class="data-table" style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border); text-align: left;">
      <th style="padding: 10px;">Rule</th>
      <th style="padding: 10px;">Valid Example</th>
      <th style="padding: 10px;">Invalid Example (Why?)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;">Must start with a letter (a-z, A-Z) or underscore (_)</td>
      <td style="padding: 10px;"><code>_rollNo</code>, <code>total_marks</code></td>
      <td style="padding: 10px;"><code>1st_sem</code> (Cannot start with a digit)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;">No spaces or special characters allowed except underscore</td>
      <td style="padding: 10px;"><code>bca_score</code></td>
      <td style="padding: 10px;"><code>bca-score</code>, <code>bca score</code> (Hyphens &amp; spaces prohibited)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;">Keywords cannot be used as identifier names</td>
      <td style="padding: 10px;"><code>int_val</code></td>
      <td style="padding: 10px;"><code>float</code> (Reserved keyword)</td>
    </tr>
    <tr>
      <td style="padding: 10px;">C is strictly Case-Sensitive</td>
      <td style="padding: 10px;"><code>Total</code> and <code>total</code></td>
      <td style="padding: 10px;">Treated as two completely different variables</td>
    </tr>
  </tbody>
</table>

<h2 id="data-types">4. Data Types & Memory Representation</h2>

<p>Data types specify how much memory to allocate and what kind of data can be stored inside a variable:</p>

<ul>
  <li><strong>Primitive / Primary Data Types:</strong>
    <ul>
      <li><code>int</code>: Stores integers (typically 2 bytes in older 16-bit compilers or 4 bytes in standard 32/64-bit GCC). Range: \(-2,147,483,648\) to \(+2,147,483,647\).</li>
      <li><code>float</code>: Single precision floating-point numbers (4 bytes, 6 decimal places).</li>
      <li><code>double</code>: Double precision floating-point numbers (8 bytes, 14-15 decimal places).</li>
      <li><code>char</code>: Single character or byte (1 byte, range \(-128\) to \(+127\)). Format specifier: <code>%c</code>.</li>
      <li><code>void</code>: Represents empty or no value (used in functions that return nothing).</li>
    </ul>
  </li>
  <li><strong>Derived Data Types:</strong> Arrays, Pointers, Functions.</li>
  <li><strong>User-Defined Data Types:</strong> Structures (<code>struct</code>), Unions (<code>union</code>), Enumerations (<code>enum</code>), and Typedef (<code>typedef</code>).</li>
</ul>

<h2 id="operators">5. Operators in C</h2>

<p>C provides a rich set of operators divided by functionality:</p>

<ol>
  <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (Modulus operator returns remainder; works only with integers).</li>
  <li><strong>Relational Operators:</strong> <code>&lt;</code>, <code>&lt;=</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>==</code>, <code>!=</code> (Produce boolean results 0 or 1).</li>
  <li><strong>Logical Operators:</strong> <code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT). Employs short-circuit evaluation.</li>
  <li><strong>Assignment Operators:</strong> Simple assignment (<code>=</code>) and compound assignments (<code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>).</li>
  <li><strong>Increment and Decrement:</strong> <code>++</code>, <code>--</code>.</li>
  <li><strong>Bitwise Operators:</strong> <code>&amp;</code>, <code>|</code>, <code>^</code> (XOR), <code>~</code> (Complement), <code>&lt;&lt;</code> (Left shift), <code>&gt;&gt;</code> (Right shift).</li>
  <li><strong>Conditional (Ternary) Operator:</strong> <code>condition ? expr1 : expr2</code>.</li>
  <li><strong>Special Operators:</strong> <code>sizeof</code> (returns variable size in bytes), comma operator (<code>,</code>), and address operator (<code>&amp;</code>).</li>
</ol>

<h2 id="prefix-postfix">6. Prefix vs Postfix Operators (7.5-Mark Guaranteed Question)</h2>

<p>One of the most common questions in CCSU examinations asks for the exact execution difference between prefix and postfix increment operators.</p>

<table class="data-table" style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border); text-align: left;">
      <th style="padding: 10px;">Feature</th>
      <th style="padding: 10px;">Prefix (<code>++x</code>)</th>
      <th style="padding: 10px;">Postfix (<code>x++</code>)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Rule</strong></td>
      <td style="padding: 10px;">"Increment first, then use value"</td>
      <td style="padding: 10px;">"Use current value first, then increment"</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Expression</strong></td>
      <td style="padding: 10px;"><code>y = ++x;</code></td>
      <td style="padding: 10px;"><code>y = x++;</code></td>
    </tr>
    <tr>
      <td style="padding: 10px;"><strong>Tracing (when x = 5)</strong></td>
      <td style="padding: 10px;">x becomes 6, then y receives 6 (x=6, y=6)</td>
      <td style="padding: 10px;">y receives 5, then x becomes 6 (x=6, y=5)</td>
    </tr>
  </tbody>
</table>

<h3>Practical Dry Run Code for Exams:</h3>

<pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int a = 5, b = 5;
    int res1, res2;

    res1 = ++a; // Prefix: 'a' is incremented to 6, then assigned to res1
    res2 = b++; // Postfix: 'b' (5) is assigned to res2, then 'b' becomes 6

    printf("Prefix  -&gt; a: %d, res1: %d\n", a, res1); // a: 6, res1: 6
    printf("Postfix -&gt; b: %d, res2: %d\n", b, res2); // b: 6, res2: 5

    return 0;
}</code></pre>

<h2 id="precedence">7. Operator Precedence and Associativity</h2>

<p>When an expression contains multiple operators, precedence determines which operation executes first, while associativity defines the order (Left-to-Right or Right-to-Left) when operators share the same priority.</p>

<div class="notice-box">
  <strong>High-Priority Rule:</strong> Postfix &amp; Unary operators have higher precedence than Arithmetic, which ranks above Relational, followed by Logical, Conditional, and finally Assignment.
</div>

<p><strong>Example Dry Run:</strong> Evaluate the expression: <code>result = 10 + 20 * 3 / 2 - 5</code></p>
<ol>
  <li>Multiplication and Division share equal precedence (Associativity: Left to Right).</li>
  <li>Step 1: <code>20 * 3 = 60</code> &rarr; Expression becomes <code>10 + 60 / 2 - 5</code>.</li>
  <li>Step 2: <code>60 / 2 = 30</code> &rarr; Expression becomes <code>10 + 30 - 5</code>.</li>
  <li>Step 3: <code>10 + 30 = 40</code> (Addition, Left to Right).</li>
  <li>Step 4: <code>40 - 5 = 35</code>.</li>
  <li><strong>Final Answer: 35</strong>.</li>
</ol>

<h2 id="solved-questions">8. Solved CCSU Previous Year Exam Questions</h2>

<div class="notice-box">
  <h3>Q1 (3 Marks - Section A): What is the difference between single quotes (' ') and double quotes (" ") in C?</h3>
  <p><strong>Answer:</strong> Single quotes are used to enclose a single character constant (e.g., <code>'A'</code>), which occupies 1 byte of memory and represents its ASCII integer value (65). Double quotes enclose a string literal (e.g., <code>"A"</code>), which is an array of characters automatically terminated by a null character (<code>'\0'</code>), occupying 2 bytes in memory (the character 'A' plus the '\0' delimiter).</p>
</div>

<div class="notice-box">
  <h3>Q2 (7.5 Marks - Section B): Explain Type Casting with suitable examples of Implicit vs Explicit conversion.</h3>
  <p><strong>Answer:</strong> Type casting is the process of converting one data type into another.</p>
  <ul>
    <li><strong>Implicit Type Conversion (Type Promotion):</strong> Performed automatically by the C compiler when operands in an expression belong to different types. The lower data type is promoted to the higher data type to prevent loss of precision (e.g., <code>int</code> added to <code>float</code> results in a <code>float</code>).</li>
    <li><strong>Explicit Type Conversion:</strong> User-forced conversion using the cast operator syntax <code>(type) expression</code>.</li>
  </ul>
  <pre><code class="language-c">int total = 17, count = 5;
float avg_implicit = total / count;         // Evaluates to 3.0 (Integer division)
float avg_explicit = (float) total / count; // Evaluates to 3.4 (Accurate float division)</code></pre>
</div>

<h2 id="exam-tips">9. Common Mistakes to Avoid in CCSU Exams</h2>

<ul>
  <li><strong>Missing Semicolon after Declarations:</strong> Forgetting semicolons after variable declarations or struct definitions.</li>
  <li><strong>Using Assignment (<code>=</code>) instead of Comparison (<code>==</code>):</strong> Writing <code>if (x = 5)</code> will assign 5 to x and evaluate to true, causing logical bugs.</li>
  <li><strong>Modulus with Floats:</strong> Attempting to use <code>5.5 % 2</code> will throw a compiler error because <code>%</code> only supports integral operands.</li>
  <li><strong>Not drawing diagrams in 15-mark answers:</strong> In university exams, writing plain text gets average marks. Always draw block diagrams for program compilation stages and tabular traces for expressions.</li>
</ul>
