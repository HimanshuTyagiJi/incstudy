---
title: "Number Systems & Digital Codes Guide | CCSU BCA 1st Sem"
description: "Comprehensive study notes on Number Systems for CCSU BCA 1st Semester. Conversions between Binary, Octal, Decimal & Hexadecimal, 1's/2's complement subtraction, and digital codes."
topic_id: number-system
course_id: bca
shared: true
permalink: /bca/topics/number-system/
toc:
  - id: intro
    title: Introduction to Positional Number Systems
  - id: radices
    title: Four Primary Computing Radices (Base 2, 8, 10, 16)
  - id: conversions
    title: Inter-Base Number Conversions
  - id: complement-arithmetic
    title: 1's and 2's Complement Arithmetic
  - id: digital-codes
    title: Binary Codes (BCD, Gray Code, Excess-3, ASCII)
---

<h2 id="intro">1. Introduction to Positional Number Systems</h2>
<p>In digital computing, numerical values are expressed using <strong>positional number systems</strong>, where the quantitative weight of every digit is determined by its face value multiplied by an integral power of the base (or radix $r$):</p>
$$N = \sum_{i=-m}^{n-1} d_i \cdot r^i = d_{n-1} r^{n-1} + \dots + d_1 r^1 + d_0 r^0 + d_{-1} r^{-1} + \dots + d_{-m} r^{-m}$$
<p>where $r$ is the radix, $d_i$ are valid digits in the range $0 \le d_i \le r-1$, $n$ is the number of integer digits, and $m$ is the number of fractional digits.</p>

<h2 id="radices">2. The Four Primary Computing Number Systems</h2>
<div class="table-responsive">
  <table class="data-table">
    <thead>
      <tr>
        <th>Number System</th>
        <th>Radix ($r$)</th>
        <th>Allowed Symbols / Digits</th>
        <th>Primary Computing Application</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Binary</strong></td>
        <td>$2$</td>
        <td>$0, 1$</td>
        <td>Machine-level logic states (transistor ON/OFF, low/high voltage).</td>
      </tr>
      <tr>
        <td><strong>Octal</strong></td>
        <td>$8$</td>
        <td>$0, 1, 2, 3, 4, 5, 6, 7$</td>
        <td>Compact shorthand representation (1 octal digit = 3 binary bits).</td>
      </tr>
      <tr>
        <td><strong>Decimal</strong></td>
        <td>$10$</td>
        <td>$0, 1, 2, 3, 4, 5, 6, 7, 8, 9$</td>
        <td>Standard human numerical computation.</td>
      </tr>
      <tr>
        <td><strong>Hexadecimal</strong></td>
        <td>$16$</td>
        <td>$0\text{--}9$ and $\text{A}(10), \text{B}(11), \text{C}(12), \text{D}(13), \text{E}(14), \text{F}(15)$</td>
        <td>Memory addressing, color codes (#RRGGBB), bytecode display.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="conversions">3. Inter-Base Number Conversions</h2>

<h3>A. Decimal to Binary / Octal / Hexadecimal</h3>
<p>Use the <strong>Successive Division Method</strong> for the integer portion and the <strong>Successive Multiplication Method</strong> for the fractional portion:</p>
<ol>
  <li><strong>Integer Part:</strong> Repeatedly divide the decimal integer by target radix $r$, noting down the remainder at each step. Read remainders from bottom to top (Last Remainder is Most Significant Bit/MSB).</li>
  <li><strong>Fractional Part:</strong> Repeatedly multiply the decimal fraction by radix $r$. The integer carry is collected from top to bottom (First Carry is MSB).</li>
</ol>

<div class="callout-box">
  <strong>Example: Convert $(53)_{10}$ to Binary:</strong><br>
  $53 \div 2 = 26 \text{ remainder } \mathbf{1}$ (LSB)<br>
  $26 \div 2 = 13 \text{ remainder } \mathbf{0}$<br>
  $13 \div 2 = 6 \text{ remainder } \mathbf{1}$<br>
  $6 \div 2 = 3 \text{ remainder } \mathbf{0}$<br>
  $3 \div 2 = 1 \text{ remainder } \mathbf{1}$<br>
  $1 \div 2 = 0 \text{ remainder } \mathbf{1}$ (MSB)<br>
  <strong>Result: $(53)_{10} = (\mathbf{110101})_2$</strong>
</div>

<h3>B. Binary to Octal and Hexadecimal Grouping</h3>
<ul>
  <li><strong>Binary to Octal:</strong> Partition binary digits into groups of <strong>3 bits</strong> starting from the binary point outwards (pad with leading/trailing zeros if necessary). Replace each 3-bit group with its single octal digit.
    <br><em>Example:</em> $(110101)_2 = (110)(101)_2 = (\mathbf{65})_8$
  </li>
  <li><strong>Binary to Hexadecimal:</strong> Partition binary digits into groups of <strong>4 bits</strong> from the binary point. Replace each 4-bit nibble with its hexadecimal symbol.
    <br><em>Example:</em> $(0011\,0101)_2 = (\mathbf{35})_{16}$
  </li>
</ul>

<h2 id="complement-arithmetic">4. 1's and 2's Complement Representation &amp; Subtraction</h2>
<p>Digital hardware circuits perform subtraction using <strong>addition hardware</strong> via complement representation:</p>

<h3>1's Complement:</h3>
<p>Obtained by inverting every bit of the binary word ($0 \to 1$ and $1 \to 0$).</p>

<h3>2's Complement:</h3>
<p>Obtained by adding $1$ to the 1's complement representation:</p>
$$\text{2's Complement} = \text{1's Complement} + 1$$

<div class="callout-box">
  <strong>Subtraction Algorithm using 2's Complement ($M - N$):</strong>
  <ol>
    <li>Take the 2's complement of the subtrahend $N$.</li>
    <li>Add this 2's complement value to the minuend $M$.</li>
    <li><strong>If a carry is generated at MSB:</strong> Discard the end-around carry. The resulting sum is <strong>positive</strong>.</li>
    <li><strong>If no carry is generated:</strong> The result is <strong>negative</strong> and in 2's complement form. Take 2's complement of the sum and prefix a minus sign.</li>
  </ol>
</div>

<h2 id="digital-codes">5. Digital Alphanumeric &amp; Binary Codes</h2>
<ul>
  <li><strong>BCD (Binary Coded Decimal / 8421 Code):</strong> Encodes each individual decimal digit ($0\text{--}9$) into an independent 4-bit binary nibble (e.g. $85_{10} = 1000\,0101_{\text{BCD}}$).</li>
  <li><strong>Excess-3 Code:</strong> An unweighted self-complementary code derived by adding $(0011)_2$ (decimal 3) to each BCD digit.</li>
  <li><strong>Gray Code (Reflected Binary Code):</strong> A unit-distance code where two successive numerical values differ by only a <strong>single bit</strong>, preventing race conditions and mechanical encoder errors.</li>
  <li><strong>ASCII (American Standard Code for Information Interchange):</strong> 7-bit character code standardizing 128 characters (control symbols, uppercase/lowercase alphabets, punctuation, digits).</li>
  <li><strong>Unicode (UTF-8):</strong> Modern variable-length (1 to 4 bytes) encoding standard encompassing every character from all written languages and emoji symbols worldwide.</li>
</ul>
