---
title: "Computer Fundamentals & Architecture Notes | CCSU BCA 1st Sem"
description: "Comprehensive notes for CCSU BCA 1st Semester (BCA-105) Unit 1. Detailed breakdown of CPU architecture, memory hierarchy (RAM, ROM, Cache), I/O subsystems, and operating system basics."
topic_id: computer-fundamentals
course_id: bca
shared: true
permalink: /bca/topics/computer-fundamentals/
toc:
  - id: intro
    title: Introduction to Computer Systems
  - id: functional-units
    title: Von Neumann Architecture & Functional Units
  - id: cpu-organization
    title: Central Processing Unit (ALU, CU, Registers)
  - id: memory-hierarchy
    title: Memory Hierarchy (Registers, Cache, Primary, Secondary)
  - id: io-subsystems
    title: Input / Output Subsystems & Buses
  - id: software-types
    title: System Software vs Application Software
---

<h2 id="intro">1. Introduction to Computer Systems</h2>
<p>A <strong>computer system</strong> is an electronic, programmable data-processing machine that accepts raw input (data), performs systematic mathematical and logical computations under the direction of stored program instructions, and generates structured, meaningful results (information).</p>

<div class="notice-box">
  <strong>Key Definition:</strong> The fundamental computational workflow follows the <strong>Input &rarr; Process &rarr; Output &rarr; Storage (IPOS)</strong> cycle.
</div>

<h2 id="functional-units">2. Von Neumann Architecture &amp; Functional Units</h2>
<p>First proposed by mathematician <strong>John von Neumann</strong> in 1945, the stored-program computer architecture remains the foundational standard for modern personal computers, servers, and embedded processors. Its primary architectural hallmark is the storage of both instructions (programs) and data in the same unified physical memory space.</p>

<p>Every digital computer consists of five essential functional subsystems:</p>
<ol>
  <li><strong>Input Unit:</strong> Transduces human-readable data (alphanumeric text, keystrokes, mouse coordinates, audio waveforms) into binary-encoded digital signals ($0$s and $1$s). Examples: Keyboard, Optical Mouse, Scanner, Barcode Reader, Microphone.</li>
  <li><strong>Central Processing Unit (CPU):</strong> The computational brain that retrieves, decodes, and executes program instructions.</li>
  <li><strong>Primary Memory (Main Storage):</strong> High-speed volatile memory directly accessible by the processor via the system bus (RAM).</li>
  <li><strong>Secondary Storage:</strong> Non-volatile, high-capacity auxiliary memory used for long-term data retention (Solid-State Drives, Hard Disk Drives, Optical Discs).</li>
  <li><strong>Output Unit:</strong> Converts binary-processed computer results into human-interpretable formats. Examples: Visual Display Monitors (OLED/IPS), Laser Printers, Audio Speakers.</li>
</ol>

<h2 id="cpu-organization">3. Central Processing Unit (ALU, CU, Registers)</h2>
<p>The CPU executes the fundamental <strong>Fetch &rarr; Decode &rarr; Execute Cycle</strong>:</p>

<ul>
  <li><strong>Arithmetic and Logic Unit (ALU):</strong> Performs all elementary arithmetic operations (Addition, Subtraction, Multiplication, Division) and boolean relational comparisons (AND, OR, NOT, XOR, Less Than, Greater Than, Equal To).</li>
  <li><strong>Control Unit (CU):</strong> Acts as the nerve center. It issues precise electrical timing and control signals to supervise the sequence of data transfers between registers, memory, and arithmetic units.</li>
  <li><strong>Internal Processor Registers:</strong> Ultra-fast, single-word temporary flip-flop storage elements directly embedded inside the CPU core:
    <ul>
      <li><strong>Program Counter (PC):</strong> Holds the memory address of the next instruction to be fetched.</li>
      <li><strong>Instruction Register (IR):</strong> Holds the binary opcode of the current instruction undergoing execution.</li>
      <li><strong>Memory Address Register (MAR):</strong> Holds the physical memory address to read from or write to.</li>
      <li><strong>Memory Buffer Register (MBR / MDR):</strong> Holds the actual data word transferred to/from memory.</li>
      <li><strong>Accumulator (AC):</strong> Holds intermediate results generated during ALU computations.</li>
    </ul>
  </li>
</ul>

<h2 id="memory-hierarchy">4. Computer Memory Hierarchy</h2>
<p>Because no single memory technology simultaneously offers maximum access speed, unlimited storage capacity, and minimum financial cost, computer systems organize memory into a stratified hierarchy:</p>

<div class="table-responsive">
  <table class="data-table">
    <thead>
      <tr>
        <th>Hierarchy Level</th>
        <th>Memory Type</th>
        <th>Typical Access Time</th>
        <th>Capacity Range</th>
        <th>Volatility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Level 0</strong></td>
        <td>CPU Internal Registers</td>
        <td>$&lt; 1$ nanosecond</td>
        <td>64 bytes &ndash; 2 KB</td>
        <td>Volatile</td>
      </tr>
      <tr>
        <td><strong>Level 1 / 2 / 3</strong></td>
        <td>SRAM Cache (L1, L2, L3)</td>
        <td>1 &ndash; 15 nanoseconds</td>
        <td>32 KB &ndash; 64 MB</td>
        <td>Volatile</td>
      </tr>
      <tr>
        <td><strong>Level 4</strong></td>
        <td>Main Memory (DRAM / RAM)</td>
        <td>50 &ndash; 80 nanoseconds</td>
        <td>8 GB &ndash; 128 GB</td>
        <td>Volatile</td>
      </tr>
      <tr>
        <td><strong>Level 5</strong></td>
        <td>Solid State Drive (NVMe SSD)</td>
        <td>10 &ndash; 100 microseconds</td>
        <td>256 GB &ndash; 4 TB</td>
        <td>Non-Volatile</td>
      </tr>
      <tr>
        <td><strong>Level 6</strong></td>
        <td>Magnetic Hard Disk (HDD)</td>
        <td>5 &ndash; 15 milliseconds</td>
        <td>1 TB &ndash; 20 TB</td>
        <td>Non-Volatile</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="io-subsystems">5. Input / Output Subsystems &amp; System Buses</h2>
<p>The processor and memory communicate with peripheral hardware devices across shared parallel conductor lines known as the <strong>System Bus</strong>:</p>
<ul>
  <li><strong>Data Bus:</strong> Bidirectional bus carrying the actual data values between CPU, RAM, and I/O devices (typically 32-bit or 64-bit wide).</li>
  <li><strong>Address Bus:</strong> Unidirectional bus driven by the CPU to select a specific physical memory cell or I/O port address. For an $n$-bit address bus, the addressable memory capacity is $2^n$ bytes (e.g. 32-bit bus addresses up to $2^{32} = 4\text{ GB}$).</li>
  <li><strong>Control Bus:</strong> Multidirectional signal lines carrying read/write strobes, interrupt requests (IRQ), bus grants, and clock sync pulses.</li>
</ul>

<h2 id="software-types">6. Classification of Computer Software</h2>
<p>Software refers to the organized collection of data instructions that direct hardware execution. It is broadly categorized into two families:</p>
<ol>
  <li><strong>System Software:</strong> Low-level software that directly manages hardware resources and provides a stable operational platform for application programs:
    <ul>
      <li><strong>Operating System (OS):</strong> Manages processes, virtual memory, filesystems, and device drivers (e.g., Linux, Windows, macOS).</li>
      <li><strong>Language Translators:</strong> Compilers (translate whole program to machine code at once), Interpreters (translate line-by-line), and Assemblers (convert assembly mnemonics to machine code).</li>
      <li><strong>Utility Software:</strong> Disk defragmenters, antivirus suites, backup tools, and file compression utilities.</li>
    </ul>
  </li>
  <li><strong>Application Software:</strong> End-user programs designed to accomplish specific functional tasks:
    <ul>
      <li><strong>General Purpose:</strong> Word processors, spreadsheets, web browsers, media players.</li>
      <li><strong>Specialized / Custom:</strong> Banking core software, airline reservation systems, hospital management software.</li>
    </ul>
  </li>
</ol>
