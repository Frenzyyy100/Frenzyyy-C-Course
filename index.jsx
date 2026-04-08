import { useState, useEffect, useRef } from "react";

const GREEN = "#00ff88";
const DIM = "#00cc66";
const BG = "#0a0e0a";
const PANEL = "#0d130d";
const BORDER = "#1a2e1a";
const TEXT = "#c8e6c8";
const MUTED = "#5a7a5a";
const ACCENT = "#ffcc00";
const RED = "#ff4444";

const modules = [
  {
    id: "intro",
    icon: "⬡",
    title: "Introduction to C",
    subtitle: "Origins, philosophy & setup",
    sections: [
      {
        heading: "What is C?",
        body: `C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to write the UNIX operating system and remains one of the most influential languages ever created. Nearly every modern OS, embedded system, and high-performance tool is written in C or heavily influenced by it.`,
      },
      {
        heading: "Why Learn C?",
        bullets: [
          "Direct memory management — you control every byte",
          "Blazing fast execution, close to assembly-level speed",
          "Foundation for C++, Java, Python, Rust, and more",
          "Industry-standard in embedded systems, OS kernels, compilers",
          "Teaches you how computers actually work",
        ],
      },
      {
        heading: "Setting Up",
        body: "Install GCC (GNU Compiler Collection) on your system:",
        code: `# Linux / WSL
sudo apt install gcc

# macOS (via Xcode tools)
xcode-select --install

# Windows — install MinGW or use WSL2

# Verify installation
gcc --version`,
        lang: "bash",
      },
      {
        heading: "Your First Program",
        body: "Every C journey starts here. Save as hello.c and compile it.",
        code: `#include <stdio.h>   // Standard I/O library

int main() {
    printf("Hello, World!\\n");
    return 0;           // 0 = success
}`,
        lang: "c",
      },
      {
        heading: "Compiling & Running",
        code: `gcc hello.c -o hello   # Compile
./hello                 # Run
# Output: Hello, World!`,
        lang: "bash",
      },
    ],
  },
  {
    id: "variables",
    icon: "◈",
    title: "Variables & Data Types",
    subtitle: "Primitives, memory sizes & casting",
    sections: [
      {
        heading: "Primitive Data Types",
        body: "C has a small set of built-in types. Each has a fixed size in memory.",
        table: {
          headers: ["Type", "Size", "Range", "Example"],
          rows: [
            ["char", "1 byte", "-128 to 127", "'A', 65"],
            ["int", "4 bytes", "-2B to 2B", "42, -7"],
            ["float", "4 bytes", "~7 decimal digits", "3.14f"],
            ["double", "8 bytes", "~15 decimal digits", "3.14159"],
            ["long", "8 bytes", "larger int range", "100000L"],
            ["unsigned int", "4 bytes", "0 to 4.29B", "255u"],
            ["void", "—", "No value", "function returns"],
          ],
        },
      },
      {
        heading: "Declaring Variables",
        code: `#include <stdio.h>

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
}`,
        lang: "c",
      },
      {
        heading: "printf Format Specifiers",
        table: {
          headers: ["Specifier", "Type", "Example"],
          rows: [
            ["%d / %i", "int", 'printf("%d", 42)'],
            ["%f", "float/double", 'printf("%.2f", 3.14)'],
            ["%c", "char", 'printf("%c", \'A\')'],
            ["%s", "string", 'printf("%s", "hi")'],
            ["%ld", "long", 'printf("%ld", 100L)'],
            ["%p", "pointer", 'printf("%p", ptr)'],
            ["%x", "hex", 'printf("%x", 255)'],
          ],
        },
      },
      {
        heading: "Type Casting",
        code: `int a = 7, b = 2;
int result1 = a / b;          // 3 (integer division!)
float result2 = (float)a / b; // 3.5 (explicit cast)
float result3 = a / (float)b; // 3.5

// Implicit casting (automatic)
int x = 65;
char c = x;  // c = 'A'
printf("%c\\n", c);  // prints: A`,
        lang: "c",
      },
      {
        heading: "Constants",
        code: `// Method 1: #define (preprocessor macro)
#define PI 3.14159
#define MAX_SIZE 100

// Method 2: const keyword (preferred in modern C)
const int SPEED_LIMIT = 60;
const double GRAVITY = 9.81;

// Usage
double area = PI * 5 * 5;  // 78.53...`,
        lang: "c",
      },
    ],
  },
  {
    id: "operators",
    icon: "⊕",
    title: "Operators & Expressions",
    subtitle: "Arithmetic, logical, bitwise & ternary",
    sections: [
      {
        heading: "Arithmetic Operators",
        code: `int a = 10, b = 3;
printf("%d\\n", a + b);   // 13  — addition
printf("%d\\n", a - b);   // 7   — subtraction
printf("%d\\n", a * b);   // 30  — multiplication
printf("%d\\n", a / b);   // 3   — integer division
printf("%d\\n", a % b);   // 1   — modulus (remainder)

// Increment / Decrement
int x = 5;
printf("%d\\n", x++);  // 5 (post: use then add)
printf("%d\\n", ++x);  // 7 (pre: add then use)`,
        lang: "c",
      },
      {
        heading: "Comparison Operators",
        code: `int a = 5, b = 10;
printf("%d\\n", a == b);  // 0 (false) — equal
printf("%d\\n", a != b);  // 1 (true)  — not equal
printf("%d\\n", a < b);   // 1         — less than
printf("%d\\n", a > b);   // 0         — greater than
printf("%d\\n", a <= b);  // 1         — less or equal
printf("%d\\n", a >= b);  // 0         — greater or equal`,
        lang: "c",
      },
      {
        heading: "Logical Operators",
        code: `int x = 5;
// && = AND, || = OR, ! = NOT
if (x > 0 && x < 10) printf("single digit\\n");
if (x < 0 || x > 100) printf("out of range\\n");
if (!(x == 3))         printf("x is not 3\\n");

// Short-circuit evaluation
// In (A && B): if A is false, B is never evaluated
// In (A || B): if A is true, B is never evaluated`,
        lang: "c",
      },
      {
        heading: "Bitwise Operators",
        code: `unsigned int a = 0b1010;  // 10
unsigned int b = 0b1100;  // 12

printf("%d\\n", a & b);   // 8   — AND
printf("%d\\n", a | b);   // 14  — OR
printf("%d\\n", a ^ b);   // 6   — XOR
printf("%d\\n", ~a);      // -11 — NOT
printf("%d\\n", a << 1);  // 20  — left shift  (x2)
printf("%d\\n", a >> 1);  // 5   — right shift (÷2)`,
        lang: "c",
      },
      {
        heading: "Ternary Operator",
        code: `// Syntax: condition ? value_if_true : value_if_false
int age = 20;
char *status = (age >= 18) ? "adult" : "minor";
printf("%s\\n", status);  // adult

// Nested ternary (use sparingly)
int score = 75;
char *grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" : "F";`,
        lang: "c",
      },
    ],
  },
  {
    id: "control",
    icon: "⟁",
    title: "Control Flow",
    subtitle: "if/else, switch, loops & jumps",
    sections: [
      {
        heading: "if / else if / else",
        code: `int score = 85;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n");
} else if (score >= 70) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}
// Output: Grade: B`,
        lang: "c",
      },
      {
        heading: "switch Statement",
        code: `char op = '+';
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
}`,
        lang: "c",
      },
      {
        heading: "for Loop",
        code: `// Classic for loop
for (int i = 0; i < 5; i++) {
    printf("%d ", i);   // 0 1 2 3 4
}

// Nested loops — multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d\\t", i * j);
    }
    printf("\\n");
}`,
        lang: "c",
      },
      {
        heading: "while & do-while Loops",
        code: `// while: checks condition BEFORE executing
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
} while (input <= 0);  // repeats until valid input`,
        lang: "c",
      },
      {
        heading: "break, continue & goto",
        code: `// break — exit loop immediately
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
    printf("Jumped here\\n");`,
        lang: "c",
      },
    ],
  },
  {
    id: "functions",
    icon: "⟨⟩",
    title: "Functions",
    subtitle: "Declaration, scope, recursion & prototypes",
    sections: [
      {
        heading: "Defining & Calling Functions",
        code: `#include <stdio.h>

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
}`,
        lang: "c",
      },
      {
        heading: "Function Prototypes",
        code: `#include <stdio.h>

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
}`,
        lang: "c",
      },
      {
        heading: "Pass by Value vs Reference",
        code: `// Pass by VALUE — original is unchanged
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
}`,
        lang: "c",
      },
      {
        heading: "Recursion",
        code: `// Factorial: n! = n × (n-1)!
int factorial(int n) {
    if (n <= 1) return 1;       // base case
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
}`,
        lang: "c",
      },
      {
        heading: "Variable Scope & Storage Classes",
        code: `int globalVar = 100;  // global: accessible everywhere

void demo() {
    int localVar = 5;       // local: only inside demo()
    static int count = 0;   // static: persists between calls
    count++;
    printf("Called %d times\\n", count);
}

// Storage classes: auto, static, extern, register
extern int globalVar;  // use a global from another file`,
        lang: "c",
      },
    ],
  },
  {
    id: "arrays",
    icon: "▦",
    title: "Arrays & Strings",
    subtitle: "1D/2D arrays, string.h & manipulation",
    sections: [
      {
        heading: "1D Arrays",
        code: `#include <stdio.h>

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
}`,
        lang: "c",
      },
      {
        heading: "2D Arrays",
        code: `int matrix[3][3] = {
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
// 7 8 9`,
        lang: "c",
      },
      {
        heading: "Strings in C",
        body: "Strings are char arrays terminated by '\\0' (null character).",
        code: `#include <string.h>

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
fgets(name, sizeof(name), stdin);`,
        lang: "c",
      },
      {
        heading: "Common String Functions",
        table: {
          headers: ["Function", "Description", "Example"],
          rows: [
            ["strlen(s)", "Length of string", 'strlen("hi") → 2'],
            ["strcpy(d, s)", "Copy s into d", 'strcpy(buf, "hello")'],
            ["strcat(d, s)", "Append s to d", 'strcat(buf, " world")'],
            ["strcmp(a, b)", "Compare strings", "strcmp(a,b) == 0"],
            ["strchr(s, c)", "Find char in string", "strchr(s, 'e')"],
            ["strstr(s, sub)", "Find substring", 'strstr(s, "lo")'],
            ["toupper(c)", "Convert to uppercase", "toupper('a') → 'A'"],
          ],
        },
      },
      {
        heading: "Passing Arrays to Functions",
        code: `// Arrays are passed as pointers automatically
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
}`,
        lang: "c",
      },
    ],
  },
  {
    id: "pointers",
    icon: "→",
    title: "Pointers",
    subtitle: "Addresses, pointer arithmetic & dynamic memory",
    sections: [
      {
        heading: "What is a Pointer?",
        body: "A pointer stores the memory address of another variable. It's one of C's most powerful — and dangerous — features.",
        code: `int x = 42;
int *ptr = &x;  // ptr holds the address of x

printf("Value of x:   %d\\n", x);      // 42
printf("Address of x: %p\\n", &x);     // 0x7ff...
printf("Value of ptr: %p\\n", ptr);    // same address
printf("Deref ptr:    %d\\n", *ptr);   // 42 (dereference)

*ptr = 100;  // modify x through the pointer
printf("x is now: %d\\n", x);          // 100`,
        lang: "c",
      },
      {
        heading: "Pointer Arithmetic",
        code: `int arr[] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]

printf("%d\\n", *p);       // 10
printf("%d\\n", *(p + 1)); // 20 — next element
printf("%d\\n", *(p + 4)); // 50

p++;  // advance pointer
printf("%d\\n", *p);  // 20

// Pointer difference
int *start = &arr[0];
int *end   = &arr[4];
printf("Distance: %ld\\n", end - start);  // 4`,
        lang: "c",
      },
      {
        heading: "Pointers & Arrays",
        code: `// Array name IS a pointer to its first element
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
}`,
        lang: "c",
      },
      {
        heading: "Dynamic Memory Allocation",
        code: `#include <stdlib.h>

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
arr = NULL;  // good practice`,
        lang: "c",
      },
      {
        heading: "Pointer to Pointer",
        code: `int x = 5;
int *p = &x;     // pointer to int
int **pp = &p;   // pointer to pointer to int

printf("%d\\n", x);    // 5
printf("%d\\n", *p);   // 5
printf("%d\\n", **pp); // 5

**pp = 99;
printf("x = %d\\n", x);  // 99`,
        lang: "c",
      },
    ],
  },
  {
    id: "structs",
    icon: "⬡",
    title: "Structs & Unions",
    subtitle: "Custom types, typedef & memory layout",
    sections: [
      {
        heading: "Defining & Using Structs",
        code: `#include <stdio.h>
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
}`,
        lang: "c",
      },
      {
        heading: "typedef for Cleaner Syntax",
        code: `// Without typedef
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
} Book;`,
        lang: "c",
      },
      {
        heading: "Struct Pointers",
        code: `typedef struct {
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
ptr->age = 26;`,
        lang: "c",
      },
      {
        heading: "Arrays of Structs",
        code: `typedef struct {
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
}`,
        lang: "c",
      },
      {
        heading: "Unions",
        body: "A union stores different types in the SAME memory location. Only one member is valid at a time.",
        code: `union Data {
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
printf("Size: %zu\\n", sizeof(union Data));  // 20`,
        lang: "c",
      },
    ],
  },
  {
    id: "fileio",
    icon: "📄",
    title: "File I/O",
    subtitle: "fopen, fread, fprintf & error handling",
    sections: [
      {
        heading: "Opening & Closing Files",
        code: `#include <stdio.h>

FILE *fp = fopen("data.txt", "r");  // open for reading
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}

// ... do stuff ...

fclose(fp);  // ALWAYS close!`,
        lang: "c",
      },
      {
        heading: "File Open Modes",
        table: {
          headers: ["Mode", "Meaning", "File exists?", "Creates?"],
          rows: [
            ['"r"', "Read only", "Required", "No"],
            ['"w"', "Write (overwrite)", "Truncated", "Yes"],
            ['"a"', "Append", "Preserved", "Yes"],
            ['"r+"', "Read + Write", "Required", "No"],
            ['"w+"', "Read + Write", "Truncated", "Yes"],
            ['"rb"', "Read binary", "Required", "No"],
            ['"wb"', "Write binary", "Truncated", "Yes"],
          ],
        },
      },
      {
        heading: "Reading Files",
        code: `FILE *fp = fopen("input.txt", "r");
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

fclose(fp);`,
        lang: "c",
      },
      {
        heading: "Writing Files",
        code: `FILE *fp = fopen("output.txt", "w");

// Write formatted text
fprintf(fp, "Hello, %s!\\n", "World");
fprintf(fp, "Score: %d\\n", 99);

// Write a string
fputs("Direct string write\\n", fp);

// Write char by char
fputc('A', fp);
fputc('\\n', fp);

fclose(fp);`,
        lang: "c",
      },
      {
        heading: "Binary File I/O",
        code: `typedef struct { int id; float score; } Record;

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
fclose(fp);`,
        lang: "c",
      },
    ],
  },
  {
    id: "memory",
    icon: "⧫",
    title: "Memory Management",
    subtitle: "Stack vs heap, leaks & best practices",
    sections: [
      {
        heading: "Stack vs Heap",
        body: "C programs use two main memory regions. Understanding the difference is critical.",
        table: {
          headers: ["Property", "Stack", "Heap"],
          rows: [
            ["Allocation", "Automatic (compiler)", "Manual (malloc/free)"],
            ["Speed", "Very fast", "Slower"],
            ["Size", "Limited (~1–8MB)", "Limited by RAM"],
            ["Lifetime", "Until function returns", "Until free() is called"],
            ["Management", "Compiler handles", "You handle it"],
            ["Risk", "Stack overflow", "Memory leaks, dangling ptrs"],
          ],
        },
      },
      {
        heading: "malloc, calloc, realloc, free",
        code: `#include <stdlib.h>
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
free(b); b = NULL;`,
        lang: "c",
      },
      {
        heading: "Common Memory Bugs",
        code: `// 1. MEMORY LEAK — forget to free
int *p = malloc(100);
// ... forgot to call free(p)!

// 2. DANGLING POINTER — use after free
int *p = malloc(sizeof(int));
free(p);
*p = 5;  // UNDEFINED BEHAVIOR!

// 3. DOUBLE FREE
free(p);
free(p);  // crash or corruption!

// 4. BUFFER OVERFLOW
char buf[10];
strcpy(buf, "This is way too long!!");  // DANGER!

// SAFE ALTERNATIVE:
strncpy(buf, src, sizeof(buf) - 1);
buf[sizeof(buf) - 1] = '\\0';`,
        lang: "c",
      },
      {
        heading: "Valgrind — Memory Checker",
        code: `# Compile with debug info
gcc -g program.c -o program

# Run under Valgrind
valgrind --leak-check=full ./program

# Sample output:
# ==1234== LEAK SUMMARY:
# ==1234==    definitely lost: 40 bytes in 1 blocks
# ==1234==    indirectly lost: 0 bytes in 0 blocks`,
        lang: "bash",
      },
      {
        heading: "Linked List Example (Dynamic Memory)",
        code: `typedef struct Node {
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
}`,
        lang: "c",
      },
    ],
  },
  {
    id: "preprocessor",
    icon: "#",
    title: "Preprocessor & Macros",
    subtitle: "#define, #include, guards & conditional compilation",
    sections: [
      {
        heading: "What is the Preprocessor?",
        body: "The C preprocessor runs before compilation. It handles #include, #define, and conditional directives — pure text substitution before the compiler sees the code.",
        code: `// The preprocessor:
// 1. Strips comments
// 2. Processes #include (paste file contents)
// 3. Expands #define macros
// 4. Handles #if / #ifdef blocks

// Then the real compiler runs on the result`,
        lang: "c",
      },
      {
        heading: "#define Macros",
        code: `// Object-like macros (constants)
#define MAX 100
#define PI 3.14159265
#define APP_NAME "NovéLore"

// Function-like macros
#define SQUARE(x)   ((x) * (x))
#define MAX2(a, b)  ((a) > (b) ? (a) : (b))
#define ABS(x)      ((x) < 0 ? -(x) : (x))

// ALWAYS wrap macro params in parens!
printf("%d\\n", SQUARE(3 + 1));  // 16, not 7`,
        lang: "c",
      },
      {
        heading: "Header Guards",
        code: `// mylib.h — prevent double inclusion
#ifndef MYLIB_H   // if not defined
#define MYLIB_H   // define it

// Your declarations here
typedef struct { int x, y; } Point;
Point createPoint(int x, int y);

#endif  // MYLIB_H

// Modern alternative (non-standard but widely supported):
#pragma once`,
        lang: "c",
      },
      {
        heading: "Conditional Compilation",
        code: `#define DEBUG 1

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
LOG("Starting program");  // only prints if DEBUG=1`,
        lang: "c",
      },
      {
        heading: "Predefined Macros",
        code: `// Built-in macros — always available
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
    }`,
        lang: "c",
      },
    ],
  },
];

const SYNTAX_KEYWORDS = /\b(int|float|double|char|void|return|if|else|for|while|do|switch|case|break|continue|default|struct|typedef|union|const|static|extern|auto|register|sizeof|goto|enum|unsigned|signed|long|short|NULL|true|false|include|define|ifndef|ifdef|endif|pragma)\b/g;
const SYNTAX_STRINGS = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g;
const SYNTAX_COMMENTS = /\/\/.*$/gm;
const SYNTAX_NUMBERS = /\b\d+(\.\d+)?(f|L|u|ul)?\b/g;
const SYNTAX_PREPROCESSOR = /^#.*/gm;
const SYNTAX_FUNCTIONS = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g;

function highlight(code) {
  let result = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const placeholders = [];
  let i = 0;
  const ph = (html) => { const k = `\x00PH${i++}\x00`; placeholders.push([k, html]); return k; };

  // Comments first
  result = result.replace(SYNTAX_COMMENTS, m => ph(`<span style="color:#4a7a4a;font-style:italic">${m}</span>`));
  // Strings
  result = result.replace(SYNTAX_STRINGS, m => ph(`<span style="color:#ff9955">${m}</span>`));
  // Preprocessor
  result = result.replace(SYNTAX_PREPROCESSOR, m => ph(`<span style="color:#cc88ff">${m}</span>`));
  // Numbers
  result = result.replace(SYNTAX_NUMBERS, m => ph(`<span style="color:#88ddff">${m}</span>`));
  // Functions
  result = result.replace(SYNTAX_FUNCTIONS, (m, fn) => {
    const kw = ['if','for','while','switch','return','sizeof','printf','scanf'].includes(fn);
    return kw ? m : ph(`<span style="color:#ffdd55">${fn}</span>`) + "(";
  });
  // Keywords
  result = result.replace(SYNTAX_KEYWORDS, m => ph(`<span style="color:#${['return','break','continue','goto','sizeof'].includes(m)?'ff6688':'00ccff'}">${m}</span>`));

  for (const [k, v] of placeholders) result = result.split(k).join(v);
  return result;
}

function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const html = lang === "c" || lang === "bash" ? highlight(code) : code;
  return (
    <div style={{ position: "relative", margin: "12px 0 0 0", borderRadius: 6, overflow: "hidden", border: `1px solid ${BORDER}`, background: "#060d06" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 12px", background: "#0a130a", borderBottom: `1px solid ${BORDER}` }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: MUTED, letterSpacing: 1 }}>{lang === "bash" ? "$ terminal" : "// c"}</span>
        <button onClick={copy} style={{ background: "none", border: `1px solid ${BORDER}`, color: copied ? GREEN : MUTED, padding: "2px 10px", borderRadius: 4, cursor: "pointer", fontSize: 10, fontFamily: "monospace", letterSpacing: 0.5, transition: "color 0.2s" }}>
          {copied ? "✓ COPIED" : "COPY"}
        </button>
      </div>
      <pre style={{ margin: 0, padding: "14px 16px", overflowX: "auto", fontSize: 13, lineHeight: 1.7, fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace" }}
        dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: "auto", margin: "12px 0 0 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "monospace" }}>
        <thead>
          <tr>{headers.map(h => (
            <th key={h} style={{ padding: "7px 12px", textAlign: "left", background: "#0d1a0d", color: GREEN, borderBottom: `1px solid ${BORDER}`, fontWeight: 600, letterSpacing: 0.5 }}>{h}</th>
          ))}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "transparent" : "#0a100a" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "6px 12px", color: ci === 0 ? ACCENT : TEXT, borderBottom: `1px solid ${BORDER}22`, fontSize: ci === 0 ? 12 : 13 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ section }) {
  return (
    <div style={{ marginBottom: 28, borderBottom: `1px solid ${BORDER}44`, paddingBottom: 24 }}>
      <h3 style={{ margin: "0 0 10px 0", color: GREEN, fontSize: 15, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: ACCENT, fontSize: 10 }}>▶</span> {section.heading}
      </h3>
      {section.body && <p style={{ margin: "0 0 8px 0", color: TEXT, lineHeight: 1.7, fontSize: 14 }}>{section.body}</p>}
      {section.bullets && (
        <ul style={{ margin: "8px 0", paddingLeft: 20 }}>
          {section.bullets.map((b, i) => (
            <li key={i} style={{ color: TEXT, marginBottom: 5, fontSize: 14, lineHeight: 1.6 }}>
              <span style={{ color: GREEN, marginRight: 6 }}>→</span>{b}
            </li>
          ))}
        </ul>
      )}
      {section.table && <Table headers={section.table.headers} rows={section.table.rows} />}
      {section.code && <CodeBlock code={section.code} lang={section.lang || "c"} />}
    </div>
  );
}

export default function App() {
  const [activeModule, setActiveModule] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem("c_progress") || "{}"); } catch { return {}; }
  });
  const contentRef = useRef(null);
  const mod = modules[activeModule];

  const markDone = (id) => {
    const next = { ...progress, [id]: true };
    setProgress(next);
    try { localStorage.setItem("c_progress", JSON.stringify(next)); } catch {}
  };

  const totalDone = Object.keys(progress).filter(k => progress[k]).length;

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTo(0, 0);
  }, [activeModule]);

  return (
    <div style={{ display: "flex", height: "100vh", background: BG, color: TEXT, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", overflow: "hidden" }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? 260 : 0, minWidth: sidebarOpen ? 260 : 0, transition: "all 0.3s ease",
        overflow: "hidden", borderRight: `1px solid ${BORDER}`, background: PANEL, display: "flex", flexDirection: "column"
      }}>
        <div style={{ padding: "20px 16px 14px", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 11, color: MUTED, letterSpacing: 2, marginBottom: 4 }}>COURSE</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: GREEN, letterSpacing: 1 }}>C Programming</div>
          <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>Language Fundamentals</div>
          <div style={{ marginTop: 12, background: "#0a0e0a", borderRadius: 4, height: 4, overflow: "hidden" }}>
            <div style={{ width: `${(totalDone / modules.length) * 100}%`, height: "100%", background: GREEN, transition: "width 0.5s ease", borderRadius: 4 }} />
          </div>
          <div style={{ fontSize: 10, color: MUTED, marginTop: 4 }}>{totalDone}/{modules.length} modules completed</div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {modules.map((m, idx) => (
            <div key={m.id} onClick={() => setActiveModule(idx)}
              style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", cursor: "pointer",
                background: activeModule === idx ? "#0d1a0d" : "transparent",
                borderLeft: `2px solid ${activeModule === idx ? GREEN : "transparent"}`,
                transition: "all 0.15s"
              }}>
              <span style={{ fontSize: 14, opacity: 0.85 }}>{m.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: activeModule === idx ? 700 : 400, color: activeModule === idx ? GREEN : TEXT, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.title}</div>
                <div style={{ fontSize: 10, color: MUTED, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.subtitle}</div>
              </div>
              {progress[m.id] && <span style={{ color: GREEN, fontSize: 12 }}>✓</span>}
            </div>
          ))}
        </div>
        <div style={{ padding: "12px 16px", borderTop: `1px solid ${BORDER}`, fontSize: 10, color: MUTED, textAlign: "center" }}>
          {modules.length} modules · C89/C99/C11
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 20px", borderBottom: `1px solid ${BORDER}`, background: PANEL, flexShrink: 0 }}>
          <button onClick={() => setSidebarOpen(v => !v)}
            style={{ background: "none", border: `1px solid ${BORDER}`, color: MUTED, padding: "4px 10px", borderRadius: 4, cursor: "pointer", fontSize: 14, fontFamily: "monospace" }}>
            {sidebarOpen ? "◀" : "▶"}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
            <span style={{ fontSize: 18 }}>{mod.icon}</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: GREEN }}>{mod.title}</div>
              <div style={{ fontSize: 11, color: MUTED }}>{mod.subtitle}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setActiveModule(v => Math.max(0, v - 1))} disabled={activeModule === 0}
              style={{ background: "none", border: `1px solid ${BORDER}`, color: activeModule === 0 ? BORDER : TEXT, padding: "4px 12px", borderRadius: 4, cursor: activeModule === 0 ? "default" : "pointer", fontFamily: "monospace", fontSize: 13 }}>← Prev</button>
            <button onClick={() => { markDone(mod.id); setActiveModule(v => Math.min(modules.length - 1, v + 1)); }}
              disabled={activeModule === modules.length - 1}
              style={{ background: activeModule === modules.length - 1 ? "transparent" : GREEN, border: `1px solid ${activeModule === modules.length - 1 ? BORDER : GREEN}`, color: activeModule === modules.length - 1 ? BORDER : BG, padding: "4px 14px", borderRadius: 4, cursor: activeModule === modules.length - 1 ? "default" : "pointer", fontFamily: "monospace", fontSize: 13, fontWeight: 700 }}>Next →</button>
          </div>
        </div>

        {/* Content area */}
        <div ref={contentRef} style={{ flex: 1, overflowY: "auto", padding: "28px 32px", maxWidth: 860, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
          {/* Module header */}
          <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${BORDER}` }}>
            <div style={{ fontSize: 11, color: MUTED, letterSpacing: 2, marginBottom: 6 }}>MODULE {String(activeModule + 1).padStart(2, "0")} / {modules.length}</div>
            <h1 style={{ margin: "0 0 8px 0", fontSize: 28, fontWeight: 800, color: GREEN, lineHeight: 1.2 }}>{mod.title}</h1>
            <div style={{ fontSize: 14, color: MUTED }}>{mod.subtitle}</div>
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {mod.sections.map(s => (
                <span key={s.heading} style={{ fontSize: 10, padding: "3px 8px", border: `1px solid ${BORDER}`, borderRadius: 3, color: MUTED, letterSpacing: 0.5 }}>{s.heading}</span>
              ))}
            </div>
          </div>

          {/* Sections */}
          {mod.sections.map((s, i) => <Section key={i} section={s} />)}

          {/* Mark complete button */}
          <div style={{ marginTop: 24, padding: "20px 0", borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button onClick={() => markDone(mod.id)}
              style={{
                background: progress[mod.id] ? "#0d1a0d" : GREEN,
                border: `1px solid ${progress[mod.id] ? GREEN : GREEN}`,
                color: progress[mod.id] ? GREEN : BG,
                padding: "10px 24px", borderRadius: 6, cursor: "pointer",
                fontFamily: "monospace", fontSize: 13, fontWeight: 700, letterSpacing: 0.5,
                transition: "all 0.2s"
              }}>
              {progress[mod.id] ? "✓ Completed" : "Mark as Complete"}
            </button>
            {activeModule < modules.length - 1 && (
              <button onClick={() => { markDone(mod.id); setActiveModule(v => v + 1); }}
                style={{ background: "none", border: `1px solid ${BORDER}`, color: TEXT, padding: "10px 20px", borderRadius: 6, cursor: "pointer", fontFamily: "monospace", fontSize: 13, transition: "all 0.2s" }}>
                Next: {modules[activeModule + 1].title} →
              </button>
            )}
          </div>

          {activeModule === modules.length - 1 && totalDone >= modules.length - 1 && (
            <div style={{ marginTop: 20, padding: 20, border: `1px solid ${GREEN}`, borderRadius: 8, background: "#0d1a0d", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>🎉</div>
              <div style={{ fontSize: 16, color: GREEN, fontWeight: 700 }}>Course Complete!</div>
              <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>You've completed all {modules.length} modules of C Programming Language.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
