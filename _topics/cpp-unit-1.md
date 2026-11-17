---
title: "C++ Unit 1: OOP Concepts, Classes & Objects | CCSU BCA 3rd Sem"
description: "Comprehensive notes for CCSU BCA 3rd Sem BCA-301 Unit 1. Covers Procedural vs OOP, Classes, Objects, Scope Resolution, and solved previous year questions."
topic_id: cpp-unit-1
course_id: bca
shared: true
permalink: /bca/topics/cpp-unit-1/
toc:
  - id: unit-overview
    title: Unit Overview & Exam Weightage
  - id: oop-vs-pop
    title: POP vs OOP Paradigm
  - id: oop-pillars
    title: Four Pillars of OOP
  - id: class-and-object
    title: Classes & Objects in C++
  - id: access-specifiers
    title: Access Specifiers (Private, Public)
  - id: scope-resolution
    title: Scope Resolution Operator (::)
  - id: solved-questions
    title: Solved CCSU Exam Questions
  - id: exam-tips
    title: Common Mistakes in Exams
---

<h2 id="unit-overview">1. Unit Overview & CCSU Exam Weightage</h2>

<p>In the CCSU BCA 3rd Semester curriculum, <strong>Object Oriented Programming Using C++ (Course Code: BCA-301)</strong> transitions students from traditional procedural programming into modern component-oriented architecture.</p>

<div class="notice-box">
  <strong>CCSU Exam Weightage Analysis:</strong>
  Unit 1 carries <strong>15 to 22.5 marks</strong> in the final theory paper:
  <ul>
    <li><strong>3 Marks (Section A):</strong> Define Encapsulation, Data Hiding, or the role of the Scope Resolution Operator (<code>::</code>).</li>
    <li><strong>7.5 Marks (Section B):</strong> Differentiate between Procedure Oriented Programming (POP) and Object Oriented Programming (OOP) with a comparative table.</li>
    <li><strong>15 Marks (Section C):</strong> Explain the key pillars of OOP with complete C++ class syntax and execution lifecycle.</li>
  </ul>
</div>

<h2 id="oop-vs-pop">2. POP vs OOP (Procedure vs Object-Oriented Programming)</h2>

<table class="data-table" style="width: 100%; border-collapse: collapse; margin: 16px 0;">
  <thead>
    <tr style="border-bottom: 2px solid var(--border); text-align: left;">
      <th style="padding: 10px;">Feature</th>
      <th style="padding: 10px;">Procedure-Oriented (e.g., C)</th>
      <th style="padding: 10px;">Object-Oriented (e.g., C++)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Approach</strong></td>
      <td style="padding: 10px;">Top-down design approach</td>
      <td style="padding: 10px;">Bottom-up design approach</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Focus</strong></td>
      <td style="padding: 10px;">Focuses on algorithms and procedures</td>
      <td style="padding: 10px;">Focuses on data security and encapsulation</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Data Security</strong></td>
      <td style="padding: 10px;">Data flows freely across global functions (low security)</td>
      <td style="padding: 10px;">Data is hidden behind access specifiers (high security)</td>
    </tr>
    <tr style="border-bottom: 1px solid var(--border);">
      <td style="padding: 10px;"><strong>Overloading</strong></td>
      <td style="padding: 10px;">Does not support function or operator overloading</td>
      <td style="padding: 10px;">Full support for polymorphism and overloading</td>
    </tr>
    <tr>
      <td style="padding: 10px;"><strong>Code Reusability</strong></td>
      <td style="padding: 10px;">Limited code reusability</td>
      <td style="padding: 10px;">Extensive reusability through Inheritance</td>
    </tr>
  </tbody>
</table>

<h2 id="oop-pillars">3. The Four Core Pillars of OOP</h2>

<ol>
  <li><strong>Encapsulation:</strong> Wrapping data members and member functions into a single unit (Class). Prevents unauthorized direct access from outside functions.</li>
  <li><strong>Data Abstraction:</strong> Displaying only essential features to the outside world while hiding internal complex background details.</li>
  <li><strong>Inheritance:</strong> The capability of a derived class to inherit properties and behaviors from a base class, fostering hierarchical classification.</li>
  <li><strong>Polymorphism:</strong> "Many forms" — allowing a single entity (operator or function) to exhibit different behaviors based on input context (Compile-time vs Runtime polymorphism).</li>
</ol>

<h2 id="class-and-object">4. Anatomy of a Class &amp; Object in C++</h2>

<p>A <strong>Class</strong> is a user-defined blueprint or template from which individual <strong>Objects</strong> are instantiated. A class consumes zero memory until an object is created.</p>

<pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

// Class Definition Blueprint
class Student {
private:
    int roll_no;       // Private data: hidden from external functions
    float percentage;

public:
    // Member function to assign values
    void setData(int r, float p) {
        roll_no = r;
        percentage = p;
    }

    // Member function to display details
    void display() {
        cout &lt;&lt; "Roll No: " &lt;&lt; roll_no &lt;&lt; " | Score: " &lt;&lt; percentage &lt;&lt; "%" &lt;&lt; endl;
    }
};

int main() {
    Student s1; // Object instantiated in memory
    s1.setData(101, 88.5);
    s1.display();
    return 0;
}</code></pre>

<h2 id="access-specifiers">5. Access Specifiers: Private, Public, Protected</h2>

<ul>
  <li><code>private</code>: Members can only be accessed by member functions inside the same class. (Default access specifier in C++).</li>
  <li><code>public</code>: Members can be accessed from any function anywhere in the program.</li>
  <li><code>protected</code>: Members are inaccessible from outside functions, but can be inherited and accessed by child/derived classes.</li>
</ul>

<h2 id="scope-resolution">6. Scope Resolution Operator (::)</h2>

<p>The <code>::</code> operator in C++ serves three vital purposes:</p>
<ol>
  <li><strong>Defining member functions outside class body:</strong> Keeps class definitions clean and declarative.</li>
  <li><strong>Accessing global variables:</strong> When a local variable shadows a global variable of the same name.</li>
  <li><strong>Resolving multiple inheritance ambiguity:</strong> Disambiguating methods when two parent classes share identical function signatures.</li>
</ol>

<pre><code class="language-cpp">class Calculator {
public:
    int multiply(int a, int b); // Declaration inside class
};

// Definition outside using scope resolution ::
int Calculator::multiply(int a, int b) {
    return a * b;
}</code></pre>

<h2 id="solved-questions">7. Solved CCSU Previous Year Exam Questions</h2>

<div class="notice-box">
  <h3>Q1 (3 Marks - Section A): What is the significance of the <code>this</code> pointer in C++?</h3>
  <p><strong>Answer:</strong> The <code>this</code> pointer is an implicit, constant pointer automatically passed to all non-static member functions. It points directly to the memory address of the invoking object, enabling disambiguation when parameter names match class member variables (e.g., <code>this-&gt;roll_no = roll_no;</code>).</p>
</div>

<div class="notice-box">
  <h3>Q2 (7.5 Marks - Section B): Explain Inline Functions. How do they differ from normal functions?</h3>
  <p><strong>Answer:</strong> An <strong>Inline function</strong> (defined with the keyword <code>inline</code>) suggests to the compiler that the function's body should be directly inserted at the call site rather than generating a standard function call mechanism. This eliminates function-call overhead (saving registers, jumping, stack management), significantly accelerating execution of small, frequently-called routines.</p>
</div>

<h2 id="exam-tips">8. Common Mistakes to Avoid in CCSU Exams</h2>
<ul>
  <li><strong>Missing Semicolon after Class Closing Brace:</strong> A class definition must terminate with a semicolon: <code>class Test { ... };</code>. Leaving this out causes immediate compilation failure.</li>
  <li><strong>Confusing Struct and Class Defaults:</strong> In C++, a <code>class</code> has <code>private</code> members by default, whereas a <code>struct</code> has <code>public</code> members by default.</li>
  <li><strong>Attempting to access Private Members with Dot Operator:</strong> Writing <code>s1.roll_no = 10;</code> directly from <code>main()</code> is a classic exam error. Data members must be set via public setter methods.</li>
</ul>
