<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>C Programming Language — Full Course</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&display=swap" rel="stylesheet"/>
<style>
  :root {
    --green:  #00ff88;
    --dim:    #00cc66;
    --bg:     #0a0e0a;
    --panel:  #0d130d;
    --border: #1a2e1a;
    --text:   #c8e6c8;
    --muted:  #5a7a5a;
    --accent: #ffcc00;
    --red:    #ff4444;
    --code-bg:#060d06;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; overflow: hidden; }
  body {
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
    background: var(--bg);
    color: var(--text);
    display: flex;
    height: 100vh;
  }

  /* ─── Sidebar ─── */
  #sidebar {
    width: 260px;
    min-width: 260px;
    border-right: 1px solid var(--border);
    background: var(--panel);
    display: flex;
    flex-direction: column;
    transition: width .3s ease, min-width .3s ease;
    overflow: hidden;
  }
  #sidebar.collapsed { width: 0; min-width: 0; }

  #sidebar-header {
    padding: 20px 16px 14px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .sb-label  { font-size: 11px; color: var(--muted); letter-spacing: 2px; margin-bottom: 4px; }
  .sb-title  { font-size: 18px; font-weight: 700; color: var(--green); letter-spacing: 1px; }
  .sb-sub    { font-size: 11px; color: var(--muted); margin-top: 2px; }
  #progress-bar-wrap {
    margin-top: 12px; background: var(--bg);
    border-radius: 4px; height: 4px; overflow: hidden;
  }
  #progress-bar {
    height: 100%; background: var(--green);
    border-radius: 4px; transition: width .5s ease;
    width: 0%;
  }
  #progress-label { font-size: 10px; color: var(--muted); margin-top: 4px; }

  #module-list { flex: 1; overflow-y: auto; padding: 8px 0; }
  #module-list::-webkit-scrollbar { width: 4px; }
  #module-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  .mod-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 16px; cursor: pointer;
    border-left: 2px solid transparent;
    transition: all .15s;
    white-space: nowrap;
  }
  .mod-item:hover { background: #0a100a; }
  .mod-item.active {
    background: #0d1a0d;
    border-left-color: var(--green);
  }
  .mod-icon  { font-size: 14px; opacity: .85; flex-shrink: 0; }
  .mod-info  { flex: 1; min-width: 0; }
  .mod-name  { font-size: 12px; font-weight: 400; color: var(--text); overflow: hidden; text-overflow: ellipsis; }
  .mod-item.active .mod-name { font-weight: 700; color: var(--green); }
  .mod-sub   { font-size: 10px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; }
  .mod-check { font-size: 12px; color: var(--green); flex-shrink: 0; }

  #sidebar-footer {
    padding: 12px 16px;
    border-top: 1px solid var(--border);
    font-size: 10px; color: var(--muted); text-align: center;
    flex-shrink: 0;
  }

  /* ─── Main ─── */
  #main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }

  #topbar {
    display: flex; align-items: center; gap: 12px;
    padding: 12px 20px;
    border-bottom: 1px solid var(--border);
    background: var(--panel);
    flex-shrink: 0;
  }
  #toggle-btn {
    background: none;
    border: 1px solid var(--border);
    color: var(--muted);
    padding: 4px 10px; border-radius: 4px;
    cursor: pointer; font-size: 14px; font-family: inherit;
    flex-shrink: 0;
  }
  #toggle-btn:hover { border-color: var(--green); color: var(--green); }
  #topbar-info { flex: 1; display: flex; align-items: center; gap: 8px; }
  #topbar-icon { font-size: 18px; }
  #topbar-title { font-size: 15px; font-weight: 700; color: var(--green); }
  #topbar-sub   { font-size: 11px; color: var(--muted); }
  #nav-btns { display: flex; gap: 8px; flex-shrink: 0; }
  .nav-btn {
    background: none; border: 1px solid var(--border);
    color: var(--text); padding: 4px 12px; border-radius: 4px;
    cursor: pointer; font-family: inherit; font-size: 13px;
    transition: all .15s;
  }
  .nav-btn:disabled { color: var(--border); cursor: default; }
  .nav-btn:not(:disabled):hover { border-color: var(--green); color: var(--green); }
  .nav-btn.primary {
    background: var(--green); border-color: var(--green);
    color: var(--bg); font-weight: 700;
  }
  .nav-btn.primary:disabled { background: transparent; color: var(--border); border-color: var(--border); }
  .nav-btn.primary:not(:disabled):hover { background: var(--dim); border-color: var(--dim); }

  /* ─── Content ─── */
  #content {
    flex: 1; overflow-y: auto;
    padding: 28px 32px;
  }
  #content::-webkit-scrollbar { width: 4px; }
  #content::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  #content-inner { max-width: 860px; width: 100%; margin: 0 auto; }

  /* Module header */
  .mod-header {
    margin-bottom: 32px; padding-bottom: 24px;
    border-bottom: 1px solid var(--border);
  }
  .mod-num   { font-size: 11px; color: var(--muted); letter-spacing: 2px; margin-bottom: 6px; }
  .mod-h1    { font-size: 28px; font-weight: 800; color: var(--green); line-height: 1.2; margin-bottom: 8px; }
  .mod-desc  { font-size: 14px; color: var(--muted); }
  .tag-row   { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
  .tag       { font-size: 10px; padding: 3px 8px; border: 1px solid var(--border); border-radius: 3px; color: var(--muted); letter-spacing: .5px; }

  /* Section */
  .section   { margin-bottom: 28px; border-bottom: 1px solid #1a2e1a44; padding-bottom: 24px; }
  .sec-head  {
    display: flex; align-items: center; gap: 8px;
    color: var(--green); font-size: 15px; font-weight: 600;
    margin-bottom: 10px;
  }
  .sec-arrow { color: var(--accent); font-size: 10px; }
  .sec-body  { color: var(--text); line-height: 1.7; font-size: 14px; margin-bottom: 8px; }
  .sec-ul    { margin: 8px 0; padding-left: 20px; list-style: none; }
  .sec-ul li { color: var(--text); margin-bottom: 5px; font-size: 14px; line-height: 1.6; }
  .sec-ul li::before { content: "→ "; color: var(--green); }

  /* Table */
  .tbl-wrap  { overflow-x: auto; margin-top: 12px; }
  table      { width: 100%; border-collapse: collapse; font-size: 13px; }
  thead th   {
    padding: 7px 12px; text-align: left;
    background: #0d1a0d; color: var(--green);
    border-bottom: 1px solid var(--border);
    font-weight: 600; letter-spacing: .5px;
  }
  tbody tr:nth-child(even) { background: #0a100a; }
  tbody td   { padding: 6px 12px; border-bottom: 1px solid #1a2e1a22; font-size: 13px; color: var(--text); }
  tbody td:first-child { color: var(--accent); font-size: 12px; }

  /* Code block */
  .code-wrap {
    position: relative; margin-top: 12px;
    border-radius: 6px; overflow: hidden;
    border: 1px solid var(--border);
    background: var(--code-bg);
  }
  .code-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 5px 12px; background: #0a130a;
    border-bottom: 1px solid var(--border);
  }
  .code-lang { font-size: 11px; color: var(--muted); letter-spacing: 1px; }
  .copy-btn  {
    background: none; border: 1px solid var(--border);
    color: var(--muted); padding: 2px 10px; border-radius: 4px;
    cursor: pointer; font-size: 10px; font-family: inherit;
    letter-spacing: .5px; transition: color .2s, border-color .2s;
  }
  .copy-btn:hover { color: var(--green); border-color: var(--green); }
  .copy-btn.copied { color: var(--green); border-color: var(--green); }
  pre {
    margin: 0; padding: 14px 16px;
    overflow-x: auto; font-size: 13px;
    line-height: 1.7; font-family: 'JetBrains Mono', monospace;
    color: var(--text);
  }
  pre::-webkit-scrollbar { height: 4px; }
  pre::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

  /* Syntax colours */
  .sk  { color: #00ccff; }   /* keyword */
  .skr { color: #ff6688; }   /* return/break/control */
  .ss  { color: #ff9955; }   /* string */
  .sn  { color: #88ddff; }   /* number */
  .sc  { color: #4a7a4a; font-style: italic; } /* comment */
  .sf  { color: #ffdd55; }   /* function */
  .sp  { color: #cc88ff; }   /* preprocessor */

  /* Bottom bar */
  .mod-footer {
    margin-top: 24px; padding: 20px 0;
    border-top: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 10px;
  }
  #mark-btn {
    background: var(--green); border: 1px solid var(--green);
    color: var(--bg); padding: 10px 24px; border-radius: 6px;
    cursor: pointer; font-family: inherit; font-size: 13px;
    font-weight: 700; letter-spacing: .5px; transition: all .2s;
  }
  #mark-btn.done { background: #0d1a0d; color: var(--green); }
  #mark-btn:hover { opacity: .85; }
  #next-link-btn {
    background: none; border: 1px solid var(--border);
    color: var(--text); padding: 10px 20px; border-radius: 6px;
    cursor: pointer; font-family: inherit; font-size: 13px;
    transition: all .2s;
  }
  #next-link-btn:hover { border-color: var(--green); color: var(--green); }

  #complete-banner {
    display: none;
    margin-top: 20px; padding: 20px;
    border: 1px solid var(--green); border-radius: 8px;
    background: #0d1a0d; text-align: center;
  }
  #complete-banner .emoji { font-size: 28px; margin-bottom: 8px; }
  #complete-banner .ct    { font-size: 16px; color: var(--green); font-weight: 700; }
  #complete-banner .cs    { font-size: 13px; color: var(--muted); margin-top: 6px; }

  /* Mobile tweaks */
  @media (max-width: 680px) {
    #content { padding: 18px 16px; }
    .mod-h1  { font-size: 20px; }
    #sidebar { width: 0; min-width: 0; }
    #sidebar.open { width: 260px; min-width: 260px; position: absolute; z-index: 100; height: 100%; }
  }
</style>
</head>
<body>

<!-- ══ Sidebar ══ -->
<div id="sidebar">
  <div id="sidebar-header">
    <div class="sb-label">COURSE</div>
    <div class="sb-title">C Programming</div>
    <div class="sb-sub">Language Fundamentals</div>
    <div id="progress-bar-wrap"><div id="progress-bar"></div></div>
    <div id="progress-label">0 / 11 modules completed</div>
  </div>
  <div id="module-list"></div>
  <div id="sidebar-footer">11 modules · C89/C99/C11</div>
</div>

<!-- ══ Main ══ -->
<div id="main">
  <div id="topbar">
    <button id="toggle-btn">◀</button>
    <div id="topbar-info">
      <span id="topbar-icon"></span>
      <div>
        <div id="topbar-title"></div>
        <div id="topbar-sub"></div>
      </div>
    </div>
    <div id="nav-btns">
      <button class="nav-btn" id="prev-btn">← Prev</button>
      <button class="nav-btn primary" id="next-btn">Next →</button>
    </div>
  </div>
  <div id="content">
    <div id="content-inner"></div>
  </div>
</div>

<script>
// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════
const modules = [
  {
    id: "intro", icon: "⬡",
    title: "Introduction to C",
    subtitle: "Origins, philosophy & setup",
    sections: [
      { heading: "What is C?", body: "C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to write the UNIX operating system and remains one of the most influential languages ever created. Nearly every modern OS, embedded system, and high-performance tool is written in C or heavily influenced by it." },
      { heading: "Why Learn C?", bullets: ["Direct memory management — you control every byte","Blazing fast execution, close to assembly-level speed","Foundation for C++, Java, Python, Rust, and more","Industry-standard in embedded systems, OS kernels, compilers","Teaches you how computers actually work"] },
      { heading: "Setting Up", body: "Install GCC (GNU Compiler Collection) on your system:", lang:"bash", code:
`# Linux / WSL
sudo apt install gcc

# macOS (via Xcode tools)
xcode-select --install

# Windows — install MinGW or use WSL2

# Verify installation
gcc --version` },
      { heading: "Your First Program", body: "Every C journey starts here. Save as hello.c and compile it.", lang:"c", code:
`#include <stdio.h>   // Standard I/O library

int main() {
    printf("Hello, World!\\n");
    return 0;           // 0 = success
}` },
      { heading: "Compiling & Running", lang:"bash", code:
`gcc hello.c -o hello   # Compile
./hello                 # Run
# Output: Hello, World!` },
    ]
  },
  {
    id: "variables", icon: "◈",
    title: "Variables & Data Types",
    subtitle: "Primitives, memory sizes & casting",
    sections: [
      { heading: "Primitive Data Types", body: "C has a small set of built-in types. Each has a fixed size in memory.", table: { headers:["Type","Size","Range","Example"], rows:[["char","1 byte","-128 to 127","'A', 65"],["int","4 bytes","-2B to 2B","42, -7"],["float","4 bytes","~7 decimal digits","3.14f"],["double","8 bytes","~15 decimal digits","3.14159"],["long","8 bytes","larger int range","100000L"],["unsigned int","4 bytes","0 to 4.29B","255u"],["void","—","No value","function returns"]] } },
      { heading: "Declaring Variables", lang:"c", code:
`#include <stdio.h>

int main() {
    int age = 25;
    float gpa = 3.85f;
    double pi = 3.14159265358979;
    char grade = 'A';
    char name[] = "Frenzyyy";

    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("GPA: %.2f\\n", gpa);
    printf("Pi: %.10f\\n", pi);
    printf("Grade: %c\\n", grade);
    return 0;
}` },
      { heading: "printf Format Specifiers", table: { headers:["Specifier","Type","Example"], rows:[["%d / %i","int",'printf("%d", 42)'],["%f","float/double",'printf("%.2f", 3.14)'],["%c","char","printf(\"%c\", 'A')"],["%s","string",'printf("%s", "hi")'],["%ld","long",'printf("%ld", 100L)'],["%p","pointer",'printf("%p", ptr)'],["%x","hex",'printf("%x", 255)']] } },
      { heading: "Type Casting", lang:"c", code:
`int a = 7, b = 2;
int result1 = a / b;          // 3 (integer division!)
float result2 = (float)a / b; // 3.5 (explicit cast)
float result3 = a / (float)b; // 3.5

// Implicit casting (automatic)
int x = 65;
char c = x;  // c = 'A'
printf("%c\\n", c);  // prints: A` },
      { heading: "Constants", lang:"c", code:
`// Method 1: #define (preprocessor macro)
#define PI 3.14159
#define MAX_SIZE 100

// Method 2: const keyword (preferred in modern C)
const int SPEED_LIMIT = 60;
const double GRAVITY = 9.81;

// Usage
double area = PI * 5 * 5;  // 78.53...` },
    ]
  },
  {
    id: "operators", icon: "⊕",
    title: "Operators & Expressions",
    subtitle: "Arithmetic, logical, bitwise & ternary",
    sections: [
      { heading: "Arithmetic Operators", lang:"c", code:
`int a = 10, b = 3;
printf("%d\\n", a + b);   // 13  — addition
printf("%d\\n", a - b);   // 7   — subtraction
printf("%d\\n", a * b);   // 30  — multiplication
printf("%d\\n", a / b);   // 3   — integer division
printf("%d\\n", a % b);   // 1   — modulus (remainder)

// Increment / Decrement
int x = 5;
printf("%d\\n", x++);  // 5 (post: use then add)
printf("%d\\n", ++x);  // 7 (pre: add then use)` },
      { heading: "Comparison Operators", lang:"c", code:
`int a = 5, b = 10;
printf("%d\\n", a == b);  // 0 (false) — equal
printf("%d\\n", a != b);  // 1 (true)  — not equal
printf("%d\\n", a < b);   // 1         — less than
printf("%d\\n", a > b);   // 0         — greater than
printf("%d\\n", a <= b);  // 1         — less or equal
printf("%d\\n", a >= b);  // 0         — greater or equal` },
      { heading: "Logical Operators", lang:"c", code:
`int x = 5;
// && = AND, || = OR, ! = NOT
if (x > 0 && x < 10) printf("single digit\\n");
if (x < 0 || x > 100) printf("out of range\\n");
if (!(x == 3))         printf("x is not 3\\n");

// Short-circuit evaluation
// In (A && B): if A is false, B is never evaluated
// In (A || B): if A is true,  B is never evaluated` },
      { heading: "Bitwise Operators", lang:"c", code:
`unsigned int a = 0b1010;  // 10
unsigned int b = 0b1100;  // 12

printf("%d\\n", a & b);   // 8   — AND
printf("%d\\n", a | b);   // 14  — OR
printf("%d\\n", a ^ b);   // 6   — XOR
printf("%d\\n", ~a);      // -11 — NOT
printf("%d\\n", a << 1);  // 20  — left shift  (x2)
printf("%d\\n", a >> 1);  // 5   — right shift (÷2)` },
      { heading: "Ternary Operator", lang:"c", code:
`// Syntax: condition ? value_if_true : value_if_false
int age = 20;
char *status = (age >= 18) ? "adult" : "minor";
printf("%s\\n", status);  // adult

// Nested ternary (use sparingly)
int score = 75;
char *grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" : "F";` },
    ]
  },
  {
    id: "control", icon: "⟁",
    title: "Control Flow",
    subtitle: "if/else, switch, loops & jumps",
    sections: [
      { heading: "if / else if / else", lang:"c", code:
`int score = 85;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n");
} else if (score >= 70) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}
// Output: Grade: B` },
      { heading: "switch Statement", lang:"c", code:
`char op = '+';
int a = 5, b = 3;

switch (op) {
    case '+': printf("%d\\n", a + b); break;
    case '-': printf("%d\\n", a - b); break;
    case '*': printf("%d\\n", a * b); break;
    case '/':
        if (b != 0) printf("%d\\n", a / b);
        else printf("Error: divide by zero\\n");
        break;
    default:
        printf("Unknown operator\\n");
}` },
      { heading: "for Loop", lang:"c", code:
`// Classic for loop
for (int i = 0; i < 5; i++) {
    printf("%d ", i);   // 0 1 2 3 4
}

// Nested loops — multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d\\t", i * j);
    }
    printf("\\n");
}` },
      { heading: "while & do-while Loops", lang:"c", code:
`// while: checks condition BEFORE executing
int n = 1;
while (n <= 5) {
    printf("%d ", n);
    n++;
}  // 1 2 3 4 5

// do-while: executes FIRST, then checks
int input;
do {
    printf("Enter a positive number: ");
    scanf("%d", &input);
} while (input <= 0);  // repeats until valid input` },
      { heading: "break, continue & goto", lang:"c", code:
`// break — exit loop immediately
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    printf("%d ", i);  // 0 1 2 3 4
}

// continue — skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    printf("%d ", i);  // 1 3 5 7 9
}

// goto — jump to label (use sparingly!)
    goto end;
    printf("This is skipped\\n");
end:
    printf("Jumped here\\n");` },
    ]
  },
  {
    id: "functions", icon: "⟨⟩",
    title: "Functions",
    subtitle: "Declaration, scope, recursion & prototypes",
    sections: [
      { heading: "Defining & Calling Functions", lang:"c", code:
`#include <stdio.h>

// Function definition
int add(int a, int b) {
    return a + b;
}

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    int result = add(3, 7);   // 10
    printf("Sum: %d\\n", result);
    greet("Frenzyyy");
    return 0;
}` },
      { heading: "Function Prototypes", lang:"c", code:
`#include <stdio.h>

// Prototype (declaration before main)
double power(double base, int exp);

int main() {
    printf("2^10 = %.0f\\n", power(2.0, 10));
    return 0;
}

// Definition can come after main
double power(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; i++)
        result *= base;
    return result;
}` },
      { heading: "Pass by Value vs Reference", lang:"c", code:
`// Pass by VALUE — original is unchanged
void doubleVal(int x) { x *= 2; }

// Pass by REFERENCE (pointer) — original changes
void doubleRef(int *x) { *x *= 2; }

int main() {
    int a = 5;
    doubleVal(a);
    printf("%d\\n", a);  // still 5

    doubleRef(&a);
    printf("%d\\n", a);  // now 10!
    return 0;
}` },
      { heading: "Recursion", lang:"c", code:
`// Factorial: n! = n × (n-1)!
int factorial(int n) {
    if (n <= 1) return 1;        // base case
    return n * factorial(n - 1); // recursive case
}

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    printf("5! = %d\\n", factorial(5));     // 120
    printf("fib(8) = %d\\n", fibonacci(8)); // 21
    return 0;
}` },
      { heading: "Variable Scope & Storage Classes", lang:"c", code:
`int globalVar = 100;  // global: accessible everywhere

void demo() {
    int localVar = 5;       // local: only inside demo()
    static int count = 0;   // static: persists between calls
    count++;
    printf("Called %d times\\n", count);
}

// Storage classes: auto, static, extern, register
extern int globalVar;  // use a global from another file` },
    ]
  },
  {
    id: "arrays", icon: "▦",
    title: "Arrays & Strings",
    subtitle: "1D/2D arrays, string.h & manipulation",
    sections: [
      { heading: "1D Arrays", lang:"c", code:
`#include <stdio.h>

int main() {
    // Declaration & initialization
    int nums[5] = {10, 20, 30, 40, 50};
    float temps[] = {36.5, 37.2, 38.0};  // size inferred

    // Accessing elements (0-indexed)
    printf("%d\\n", nums[0]);  // 10
    printf("%d\\n", nums[4]);  // 50

    // Iterating
    int sum = 0;
    for (int i = 0; i < 5; i++)
        sum += nums[i];
    printf("Sum: %d\\n", sum);  // 150
    return 0;
}` },
      { heading: "2D Arrays", lang:"c", code:
`int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Print the matrix
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++)
        printf("%d ", matrix[i][j]);
    printf("\\n");
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9` },
      { heading: "Strings in C", body: "Strings are char arrays terminated by '\\0' (null character).", lang:"c", code:
`#include <string.h>

char str1[] = "Hello";           // {'H','e','l','l','o','\\0'}
char str2[20] = "World";
char str3[20];

// String functions
printf("%d\\n", strlen(str1));     // 5
strcpy(str3, str1);                // copy str1 → str3
strcat(str2, "!");                 // append "!" → "World!"
printf("%d\\n", strcmp("abc","abc")); // 0 = equal

// String input (safe version)
char name[50];
fgets(name, sizeof(name), stdin);` },
      { heading: "Common String Functions", table: { headers:["Function","Description","Example"], rows:[["strlen(s)","Length of string",'strlen("hi") → 2'],["strcpy(d, s)","Copy s into d",'strcpy(buf, "hello")'],["strcat(d, s)","Append s to d",'strcat(buf, " world")'],["strcmp(a, b)","Compare strings","strcmp(a,b) == 0"],["strchr(s, c)","Find char in string","strchr(s, 'e')"],["strstr(s, sub)","Find substring",'strstr(s, "lo")'],["toupper(c)","Convert to uppercase","toupper('a') → 'A'"]] } },
      { heading: "Passing Arrays to Functions", lang:"c", code:
`// Arrays are passed as pointers automatically
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

void reverseArray(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - 1 - i];
        arr[size - 1 - i] = temp;
    }
}` },
    ]
  },
  {
    id: "pointers", icon: "→",
    title: "Pointers",
    subtitle: "Addresses, pointer arithmetic & dynamic memory",
    sections: [
      { heading: "What is a Pointer?", body: "A pointer stores the memory address of another variable. It's one of C's most powerful — and dangerous — features.", lang:"c", code:
`int x = 42;
int *ptr = &x;  // ptr holds the address of x

printf("Value of x:   %d\\n", x);      // 42
printf("Address of x: %p\\n", &x);     // 0x7ff...
printf("Value of ptr: %p\\n", ptr);    // same address
printf("Deref ptr:    %d\\n", *ptr);   // 42

*ptr = 100;  // modify x through the pointer
printf("x is now: %d\\n", x);          // 100` },
      { heading: "Pointer Arithmetic", lang:"c", code:
`int arr[] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]

printf("%d\\n", *p);       // 10
printf("%d\\n", *(p + 1)); // 20 — next element
printf("%d\\n", *(p + 4)); // 50

p++;  // advance pointer
printf("%d\\n", *p);  // 20

// Pointer difference
int *start = &arr[0];
int *end   = &arr[4];
printf("Distance: %ld\\n", end - start);  // 4` },
      { heading: "Pointers & Arrays", lang:"c", code:
`// Array name IS a pointer to its first element
int arr[] = {1, 2, 3, 4, 5};
int *p = arr;         // equivalent to &arr[0]

// These are ALL equivalent:
arr[2]        // subscript notation
*(arr + 2)    // pointer + offset
*(p + 2)      // pointer variable
p[2]          // pointer subscript

// Passing arrays to functions
void fill(int *arr, int n, int val) {
    for (int i = 0; i < n; i++)
        arr[i] = val;
}` },
      { heading: "Dynamic Memory Allocation", lang:"c", code:
`#include <stdlib.h>

// malloc — allocate uninitialized memory
int *arr = (int *)malloc(5 * sizeof(int));
if (arr == NULL) { /* handle error */ }

for (int i = 0; i < 5; i++) arr[i] = i * 10;

// calloc — allocate + zero-initialize
int *arr2 = (int *)calloc(5, sizeof(int));

// realloc — resize allocation
arr = (int *)realloc(arr, 10 * sizeof(int));

// ALWAYS free when done
free(arr);
free(arr2);
arr = NULL;  // good practice` },
      { heading: "Pointer to Pointer", lang:"c", code:
`int x = 5;
int *p = &x;     // pointer to int
int **pp = &p;   // pointer to pointer to int

printf("%d\\n", x);    // 5
printf("%d\\n", *p);   // 5
printf("%d\\n", **pp); // 5

**pp = 99;
printf("x = %d\\n", x);  // 99` },
    ]
  },
  {
    id: "structs", icon: "⬡",
    title: "Structs & Unions",
    subtitle: "Custom types, typedef & memory layout",
    sections: [
      { heading: "Defining & Using Structs", lang:"c", code:
`#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student s1;
    strcpy(s1.name, "Frenzyyy");
    s1.age = 20;
    s1.gpa = 3.9f;

    printf("Name: %s\\n", s1.name);
    printf("GPA:  %.1f\\n", s1.gpa);
    return 0;
}` },
      { heading: "typedef for Cleaner Syntax", lang:"c", code:
`// Without typedef
struct Point { int x; int y; };
struct Point p1;

// With typedef — no need to write "struct"
typedef struct {
    int x;
    int y;
} Point;

Point p1 = {3, 7};
printf("(%d, %d)\\n", p1.x, p1.y);

// Nested structs
typedef struct {
    char title[100];
    int pages;
    Point position;  // nested!
} Book;` },
      { heading: "Struct Pointers", lang:"c", code:
`typedef struct {
    char name[50];
    int age;
} Person;

Person bob = {"Bob", 25};
Person *ptr = &bob;

// Two ways to access via pointer:
printf("%s\\n", (*ptr).name);  // dereference then access
printf("%s\\n", ptr->name);    // arrow operator (cleaner!)
printf("%d\\n", ptr->age);

// Modify through pointer
ptr->age = 26;` },
      { heading: "Arrays of Structs", lang:"c", code:
`typedef struct {
    char name[30];
    int score;
} Player;

Player team[3] = {
    {"Alice", 95},
    {"Bob",   87},
    {"Carol", 92}
};

for (int i = 0; i < 3; i++) {
    printf("%s: %d\\n", team[i].name, team[i].score);
}` },
      { heading: "Unions", body: "A union stores different types in the SAME memory location. Only one member is valid at a time.", lang:"c", code:
`union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 42;
printf("int: %d\\n", d.i);

d.f = 3.14f;   // overwrites d.i!
printf("float: %.2f\\n", d.f);

// sizeof a union = size of its LARGEST member
printf("Size: %zu\\n", sizeof(union Data));  // 20` },
    ]
  },
  {
    id: "fileio", icon: "📄",
    title: "File I/O",
    subtitle: "fopen, fread, fprintf & error handling",
    sections: [
      { heading: "Opening & Closing Files", lang:"c", code:
`#include <stdio.h>

FILE *fp = fopen("data.txt", "r");  // open for reading
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}

// ... do stuff ...

fclose(fp);  // ALWAYS close!` },
      { heading: "File Open Modes", table: { headers:["Mode","Meaning","File exists?","Creates?"], rows:[['"r"',"Read only","Required","No"],['"w"',"Write (overwrite)","Truncated","Yes"],['"a"',"Append","Preserved","Yes"],['"r+"',"Read + Write","Required","No"],['"w+"',"Read + Write","Truncated","Yes"],['"rb"',"Read binary","Required","No"],['"wb"',"Write binary","Truncated","Yes"]] } },
      { heading: "Reading Files", lang:"c", code:
`FILE *fp = fopen("input.txt", "r");
char line[256];

// Read line by line
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);  // line includes \\n
}

// Read char by char
int ch;
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}

// Read formatted data
int id; char name[50]; float score;
fscanf(fp, "%d %s %f", &id, name, &score);

fclose(fp);` },
      { heading: "Writing Files", lang:"c", code:
`FILE *fp = fopen("output.txt", "w");

// Write formatted text
fprintf(fp, "Hello, %s!\\n", "World");
fprintf(fp, "Score: %d\\n", 99);

// Write a string
fputs("Direct string write\\n", fp);

// Write char by char
fputc('A', fp);
fputc('\\n', fp);

fclose(fp);` },
      { heading: "Binary File I/O", lang:"c", code:
`typedef struct { int id; float score; } Record;

// Write binary
FILE *fp = fopen("data.bin", "wb");
Record r = {1, 95.5f};
fwrite(&r, sizeof(Record), 1, fp);
fclose(fp);

// Read binary
fp = fopen("data.bin", "rb");
Record r2;
fread(&r2, sizeof(Record), 1, fp);
printf("ID: %d, Score: %.1f\\n", r2.id, r2.score);
fclose(fp);` },
    ]
  },
  {
    id: "memory", icon: "⧫",
    title: "Memory Management",
    subtitle: "Stack vs heap, leaks & best practices",
    sections: [
      { heading: "Stack vs Heap", body: "C programs use two main memory regions. Understanding the difference is critical.", table: { headers:["Property","Stack","Heap"], rows:[["Allocation","Automatic (compiler)","Manual (malloc/free)"],["Speed","Very fast","Slower"],["Size","Limited (~1–8MB)","Limited by RAM"],["Lifetime","Until function returns","Until free() is called"],["Management","Compiler handles","You handle it"],["Risk","Stack overflow","Memory leaks, dangling ptrs"]] } },
      { heading: "malloc, calloc, realloc, free", lang:"c", code:
`#include <stdlib.h>
#include <stdio.h>

// malloc: allocate n bytes (uninitialized)
int *a = (int *)malloc(10 * sizeof(int));

// calloc: allocate + zero-fill
int *b = (int *)calloc(10, sizeof(int));

// realloc: resize allocation
a = (int *)realloc(a, 20 * sizeof(int));

// Always check for NULL!
if (!a || !b) {
    fprintf(stderr, "Allocation failed!\\n");
    exit(1);
}

// Free when done
free(a); a = NULL;
free(b); b = NULL;` },
      { heading: "Common Memory Bugs", lang:"c", code:
`// 1. MEMORY LEAK — forget to free
int *p = malloc(100);
// ... forgot to call free(p)!

// 2. DANGLING POINTER — use after free
int *p2 = malloc(sizeof(int));
free(p2);
*p2 = 5;  // UNDEFINED BEHAVIOR!

// 3. DOUBLE FREE
free(p2);
free(p2);  // crash or corruption!

// 4. BUFFER OVERFLOW
char buf[10];
strcpy(buf, "This is way too long!!");  // DANGER!

// SAFE ALTERNATIVE:
strncpy(buf, buf, sizeof(buf) - 1);
buf[sizeof(buf) - 1] = '\\0';` },
      { heading: "Valgrind — Memory Checker", lang:"bash", code:
`# Compile with debug info
gcc -g program.c -o program

# Run under Valgrind
valgrind --leak-check=full ./program

# Sample output:
# ==1234== LEAK SUMMARY:
# ==1234==    definitely lost: 40 bytes in 1 blocks
# ==1234==    indirectly lost: 0 bytes in 0 blocks` },
      { heading: "Linked List Example (Dynamic Memory)", lang:"c", code:
`typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *create(int val) {
    Node *n = (Node *)malloc(sizeof(Node));
    n->data = val;
    n->next = NULL;
    return n;
}

void freeList(Node *head) {
    while (head) {
        Node *tmp = head;
        head = head->next;
        free(tmp);
    }
}` },
    ]
  },
  {
    id: "preprocessor", icon: "#",
    title: "Preprocessor & Macros",
    subtitle: "#define, #include, guards & conditional compilation",
    sections: [
      { heading: "What is the Preprocessor?", body: "The C preprocessor runs before compilation. It handles #include, #define, and conditional directives — pure text substitution before the compiler sees the code.", lang:"c", code:
`// The preprocessor:
// 1. Strips comments
// 2. Processes #include (paste file contents)
// 3. Expands #define macros
// 4. Handles #if / #ifdef blocks

// Then the real compiler runs on the result` },
      { heading: "#define Macros", lang:"c", code:
`// Object-like macros (constants)
#define MAX 100
#define PI 3.14159265
#define APP_NAME "NovéLore"

// Function-like macros
#define SQUARE(x)   ((x) * (x))
#define MAX2(a, b)  ((a) > (b) ? (a) : (b))
#define ABS(x)      ((x) < 0 ? -(x) : (x))

// ALWAYS wrap macro params in parens!
printf("%d\\n", SQUARE(3 + 1));  // 16, not 7` },
      { heading: "Header Guards", lang:"c", code:
`// mylib.h — prevent double inclusion
#ifndef MYLIB_H   // if not defined
#define MYLIB_H   // define it

// Your declarations here
typedef struct { int x, y; } Point;
Point createPoint(int x, int y);

#endif  // MYLIB_H

// Modern alternative (non-standard but widely supported):
#pragma once` },
      { heading: "Conditional Compilation", lang:"c", code:
`#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("[DEBUG] %s\\n", msg)
#else
    #define LOG(msg) // nothing
#endif

// Platform detection
#ifdef _WIN32
    #define CLEAR "cls"
#elif defined(__linux__)
    #define CLEAR "clear"
#elif defined(__APPLE__)
    #define CLEAR "clear"
#endif

// Usage
LOG("Starting program");  // only prints if DEBUG=1` },
      { heading: "Predefined Macros", lang:"c", code:
`// Built-in macros — always available
printf("File:     %s\\n", __FILE__);    // current filename
printf("Line:     %d\\n", __LINE__);    // current line number
printf("Function: %s\\n", __func__);    // current function
printf("Date:     %s\\n", __DATE__);    // compile date
printf("Time:     %s\\n", __TIME__);    // compile time

// Useful for debugging
#define ASSERT(cond) \\
    if (!(cond)) { \\
        fprintf(stderr, "Assert failed: %s line %d\\n", \\
                __FILE__, __LINE__); \\
        exit(1); \\
    }` },
    ]
  },
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let active = 0;
let sidebarOpen = true;
let progress = {};
try { progress = JSON.parse(localStorage.getItem("c_progress") || "{}"); } catch {}

// ══════════════════════════════════════════════
//  SYNTAX HIGHLIGHT
// ══════════════════════════════════════════════
function esc(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function highlight(raw, lang) {
  if (lang !== "c" && lang !== "bash") return esc(raw);

  // We process line by line to handle comments safely
  return raw.split("\n").map(line => {
    // Extract comment suffix first
    let commentSuffix = "";
    const ci = line.indexOf("//");
    if (ci !== -1) {
      commentSuffix = line.slice(ci);
      line = line.slice(0, ci);
    }

    // Tokenise non-comment part
    let out = "";
    let i = 0;
    const src = line;

    while (i < src.length) {
      // Preprocessor at start of trimmed line
      if (i === 0 && src.trimStart().startsWith("#")) {
        out += `<span class="sp">${esc(src)}</span>`;
        i = src.length;
        break;
      }
      // String or char literal
      if (src[i] === '"' || src[i] === "'") {
        const q = src[i]; let j = i + 1;
        while (j < src.length && src[j] !== q) {
          if (src[j] === "\\") j++;
          j++;
        }
        out += `<span class="ss">${esc(src.slice(i, j + 1))}</span>`;
        i = j + 1; continue;
      }
      // Word boundary
      if (/[a-zA-Z_]/.test(src[i])) {
        let j = i;
        while (j < src.length && /[a-zA-Z0-9_]/.test(src[j])) j++;
        const word = src.slice(i, j);
        const ctrl = ["return","break","continue","goto","sizeof","if","else","for","while","do","switch","case","default"];
        const kw   = ["int","float","double","char","void","struct","typedef","union","const","static","extern","auto","register","unsigned","signed","long","short","NULL","true","false","include","define","ifndef","ifdef","endif","pragma","enum"];
        // Check if followed by (
        const isFunc = j < src.length && src[j] === "(";
        if (ctrl.includes(word)) out += `<span class="skr">${esc(word)}</span>`;
        else if (kw.includes(word)) out += `<span class="sk">${esc(word)}</span>`;
        else if (isFunc) out += `<span class="sf">${esc(word)}</span>`;
        else out += esc(word);
        i = j; continue;
      }
      // Number
      if (/[0-9]/.test(src[i]) || (src[i] === "." && /[0-9]/.test(src[i+1]||""))) {
        let j = i;
        while (j < src.length && /[0-9a-fxXbB._fFuUlL]/.test(src[j])) j++;
        out += `<span class="sn">${esc(src.slice(i, j))}</span>`;
        i = j; continue;
      }
      out += esc(src[i]); i++;
    }

    if (commentSuffix) out += `<span class="sc">${esc(commentSuffix)}</span>`;
    return out;
  }).join("\n");
}

// ══════════════════════════════════════════════
//  RENDER HELPERS
// ══════════════════════════════════════════════
function renderCode(code, lang) {
  const label = lang === "bash" ? "$ terminal" : "// c";
  const id = "cb_" + Math.random().toString(36).slice(2);
  return `
  <div class="code-wrap">
    <div class="code-header">
      <span class="code-lang">${label}</span>
      <button class="copy-btn" onclick="copyCode('${id}', this)">COPY</button>
    </div>
    <pre id="${id}">${highlight(code, lang)}</pre>
  </div>`;
}

function renderTable(headers, rows) {
  const ths = headers.map(h => `<th>${h}</th>`).join("");
  const trs = rows.map(row =>
    `<tr>${row.map(c => `<td>${c}</td>`).join("")}</tr>`
  ).join("");
  return `<div class="tbl-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderSection(s) {
  let html = `<div class="section">
    <div class="sec-head"><span class="sec-arrow">▶</span> ${s.heading}</div>`;
  if (s.body) html += `<p class="sec-body">${s.body}</p>`;
  if (s.bullets) {
    html += `<ul class="sec-ul">${s.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
  }
  if (s.table) html += renderTable(s.table.headers, s.table.rows);
  if (s.code)  html += renderCode(s.code, s.lang || "c");
  html += `</div>`;
  return html;
}

// ══════════════════════════════════════════════
//  COPY
// ══════════════════════════════════════════════
window.copyCode = function(id, btn) {
  const pre = document.getElementById(id);
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = "✓ COPIED";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "COPY"; btn.classList.remove("copied"); }, 1800);
  });
};

// ══════════════════════════════════════════════
//  PROGRESS
// ══════════════════════════════════════════════
function saveProgress() {
  try { localStorage.setItem("c_progress", JSON.stringify(progress)); } catch {}
}

function markDone(id) {
  progress[id] = true;
  saveProgress();
  updateProgressUI();
  renderModule(active);
  renderSidebar();
}

function updateProgressUI() {
  const done = modules.filter(m => progress[m.id]).length;
  const pct  = (done / modules.length) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-label").textContent = `${done} / ${modules.length} modules completed`;
}

// ══════════════════════════════════════════════
//  SIDEBAR
// ══════════════════════════════════════════════
function renderSidebar() {
  const list = document.getElementById("module-list");
  list.innerHTML = modules.map((m, i) => `
    <div class="mod-item ${i === active ? "active" : ""}" onclick="navigate(${i})">
      <span class="mod-icon">${m.icon}</span>
      <div class="mod-info">
        <div class="mod-name">${m.title}</div>
        <div class="mod-sub">${m.subtitle}</div>
      </div>
      ${progress[m.id] ? '<span class="mod-check">✓</span>' : ""}
    </div>`).join("");
}

// ══════════════════════════════════════════════
//  MODULE RENDER
// ══════════════════════════════════════════════
function renderModule(idx) {
  active = idx;
  const m = modules[idx];

  // Topbar
  document.getElementById("topbar-icon").textContent  = m.icon;
  document.getElementById("topbar-title").textContent = m.title;
  document.getElementById("topbar-sub").textContent   = m.subtitle;

  // Nav buttons
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === modules.length - 1;

  // Tags
  const tags = m.sections.map(s => `<span class="tag">${s.heading}</span>`).join("");

  // Sections
  const sectHtml = m.sections.map(renderSection).join("");

  // Footer
  const nextBtnHtml = idx < modules.length - 1
    ? `<button id="next-link-btn" onclick="navigate(${idx + 1}); markDone('${m.id}')">Next: ${modules[idx + 1].title} →</button>`
    : "";

  const done = modules.filter(x => progress[x.id]).length;
  const completeBanner = (idx === modules.length - 1 && done >= modules.length - 1)
    ? `<div id="complete-banner" style="display:block">
         <div class="emoji">🎉</div>
         <div class="ct">Course Complete!</div>
         <div class="cs">You've completed all ${modules.length} modules of C Programming Language.</div>
       </div>`
    : `<div id="complete-banner"></div>`;

  document.getElementById("content-inner").innerHTML = `
    <div class="mod-header">
      <div class="mod-num">MODULE ${String(idx + 1).padStart(2,"0")} / ${modules.length}</div>
      <h1 class="mod-h1">${m.title}</h1>
      <div class="mod-desc">${m.subtitle}</div>
      <div class="tag-row">${tags}</div>
    </div>
    ${sectHtml}
    <div class="mod-footer">
      <button id="mark-btn" class="${progress[m.id] ? "done" : ""}"
        onclick="markDone('${m.id}')">
        ${progress[m.id] ? "✓ Completed" : "Mark as Complete"}
      </button>
      ${nextBtnHtml}
    </div>
    ${completeBanner}
  `;

  document.getElementById("content").scrollTo(0, 0);
  renderSidebar();
}

// ══════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════
window.navigate = function(idx) {
  active = idx;
  renderModule(idx);
};

window.markDone = markDone;

document.getElementById("prev-btn").addEventListener("click", () => {
  if (active > 0) navigate(active - 1);
});
document.getElementById("next-btn").addEventListener("click", () => {
  markDone(modules[active].id);
  if (active < modules.length - 1) navigate(active + 1);
});

// Sidebar toggle
document.getElementById("toggle-btn").addEventListener("click", () => {
  sidebarOpen = !sidebarOpen;
  document.getElementById("sidebar").classList.toggle("collapsed", !sidebarOpen);
  document.getElementById("toggle-btn").textContent = sidebarOpen ? "◀" : "▶";
});

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
updateProgressUI();
renderModule(0);
</script>
</body>
</html>
