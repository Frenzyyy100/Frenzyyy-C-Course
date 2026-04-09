// ══════════════════════════════════════════════
//  C PROGRAMMING COURSE — script.js
// ══════════════════════════════════════════════

// ══════════════════════════════════════════════
//  DATA — 14 MODULES
// ══════════════════════════════════════════════
const modules = [
  // ─────────────────────────────────────────
  //  1. Introduction
  // ─────────────────────────────────────────
  {
    id: "intro", icon: "⬡", diff: "beginner",
    title: "Introduction to C",
    subtitle: "Origins, philosophy & setup",
    sections: [
      {
        heading: "What is C?",
        body: "C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to write the UNIX operating system and remains one of the most influential languages ever created. Nearly every modern OS, embedded system, and high-performance tool is written in C or heavily influenced by it."
      },
      {
        heading: "Why Learn C?",
        bullets: [
          "Direct memory management — you control every byte",
          "Blazing fast execution, close to assembly-level speed",
          "Foundation for C++, Java, Python, Rust, Go and more",
          "Industry-standard in embedded systems, OS kernels, compilers",
          "Teaches you how computers actually work at a low level"
        ]
      },
      {
        heading: "Setting Up",
        body: "Install GCC (GNU Compiler Collection) on your system:",
        lang: "bash",
        code:
`# Linux / WSL
sudo apt install gcc

# macOS (via Xcode tools)
xcode-select --install

# Windows — install MinGW or use WSL2

# Verify installation
gcc --version`
      },
      {
        heading: "Your First Program",
        body: "Every C journey starts here. Save as hello.c and compile it.",
        lang: "c",
        code:
`#include <stdio.h>   // Standard I/O library

int main() {
    printf("Hello, World!\\n");
    return 0;           // 0 = success
}`
      },
      {
        heading: "Compiling & Running",
        lang: "bash",
        code:
`gcc hello.c -o hello   # Compile
./hello                 # Run
# Output: Hello, World!

# With warnings enabled (recommended)
gcc -Wall -Wextra hello.c -o hello`,
        tip: "Always compile with -Wall -Wextra to catch common mistakes early. Treat warnings as errors in learning."
      }
    ]
  },

  // ─────────────────────────────────────────
  //  2. Variables & Data Types
  // ─────────────────────────────────────────
  {
    id: "variables", icon: "◈", diff: "beginner",
    title: "Variables & Data Types",
    subtitle: "Primitives, memory sizes & casting",
    sections: [
      {
        heading: "Primitive Data Types",
        body: "C has a small set of built-in types. Each has a fixed size in memory.",
        table: {
          headers: ["Type", "Size", "Range", "Example"],
          rows: [
            ["char",         "1 byte",   "-128 to 127",      "'A', 65"],
            ["int",          "4 bytes",  "-2B to 2B",        "42, -7"],
            ["float",        "4 bytes",  "~7 decimal digits", "3.14f"],
            ["double",       "8 bytes",  "~15 decimal digits","3.14159"],
            ["long",         "8 bytes",  "larger int range", "100000L"],
            ["unsigned int", "4 bytes",  "0 to 4.29B",       "255u"],
            ["void",         "—",        "No value",         "function returns"]
          ]
        },
        tip: "Use sizeof(int) at runtime to check the actual size on your machine — it can vary across platforms."
      },
      {
        heading: "Declaring Variables",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "printf Format Specifiers",
        table: {
          headers: ["Specifier", "Type", "Example"],
          rows: [
            ["%d / %i", "int",          'printf("%d", 42)'],
            ["%f",      "float/double", 'printf("%.2f", 3.14)'],
            ["%c",      "char",         "printf(\"%c\", 'A')"],
            ["%s",      "string",       'printf("%s", "hi")'],
            ["%ld",     "long",         'printf("%ld", 100L)'],
            ["%p",      "pointer",      'printf("%p", ptr)'],
            ["%x",      "hex",          'printf("%x", 255)'],
            ["%zu",     "size_t",       'printf("%zu", sizeof(x))']
          ]
        }
      },
      {
        heading: "Type Casting",
        lang: "c",
        code:
`int a = 7, b = 2;
int result1 = a / b;          // 3 (integer division!)
float result2 = (float)a / b; // 3.5 (explicit cast)
float result3 = a / (float)b; // 3.5

// Implicit casting (automatic)
int x = 65;
char c = x;  // c = 'A'
printf("%c\\n", c);  // prints: A`
      },
      {
        heading: "Constants",
        lang: "c",
        code:
`// Method 1: #define (preprocessor macro)
#define PI 3.14159
#define MAX_SIZE 100

// Method 2: const keyword (preferred in modern C)
const int SPEED_LIMIT = 60;
const double GRAVITY = 9.81;

// Usage
double area = PI * 5 * 5;  // 78.53...`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  3. Operators & Expressions
  // ─────────────────────────────────────────
  {
    id: "operators", icon: "⊕", diff: "beginner",
    title: "Operators & Expressions",
    subtitle: "Arithmetic, logical, bitwise & ternary",
    sections: [
      {
        heading: "Arithmetic Operators",
        lang: "c",
        code:
`int a = 10, b = 3;
printf("%d\\n", a + b);   // 13  — addition
printf("%d\\n", a - b);   // 7   — subtraction
printf("%d\\n", a * b);   // 30  — multiplication
printf("%d\\n", a / b);   // 3   — integer division
printf("%d\\n", a % b);   // 1   — modulus (remainder)

// Increment / Decrement
int x = 5;
printf("%d\\n", x++);  // 5 (post: use then add)
printf("%d\\n", ++x);  // 7 (pre: add then use)`
      },
      {
        heading: "Comparison Operators",
        lang: "c",
        code:
`int a = 5, b = 10;
printf("%d\\n", a == b);  // 0 (false) — equal
printf("%d\\n", a != b);  // 1 (true)  — not equal
printf("%d\\n", a < b);   // 1         — less than
printf("%d\\n", a > b);   // 0         — greater than
printf("%d\\n", a <= b);  // 1         — less or equal
printf("%d\\n", a >= b);  // 0         — greater or equal`,
        warn: "A common bug: using = (assignment) instead of == (comparison) inside an if condition. The compiler won't always catch it!"
      },
      {
        heading: "Logical Operators",
        lang: "c",
        code:
`int x = 5;
// && = AND, || = OR, ! = NOT
if (x > 0 && x < 10) printf("single digit\\n");
if (x < 0 || x > 100) printf("out of range\\n");
if (!(x == 3))         printf("x is not 3\\n");

// Short-circuit evaluation
// In (A && B): if A is false, B is never evaluated
// In (A || B): if A is true,  B is never evaluated`
      },
      {
        heading: "Bitwise Operators",
        lang: "c",
        code:
`unsigned int a = 0b1010;  // 10
unsigned int b = 0b1100;  // 12

printf("%d\\n", a & b);   // 8   — AND
printf("%d\\n", a | b);   // 14  — OR
printf("%d\\n", a ^ b);   // 6   — XOR
printf("%d\\n", ~a);      // -11 — NOT
printf("%d\\n", a << 1);  // 20  — left shift  (×2)
printf("%d\\n", a >> 1);  // 5   — right shift (÷2)`,
        note: "Bitwise operators work on individual bits. Use unsigned types to avoid undefined behavior with right-shift on negative numbers."
      },
      {
        heading: "Ternary Operator",
        lang: "c",
        code:
`// Syntax: condition ? value_if_true : value_if_false
int age = 20;
char *status = (age >= 18) ? "adult" : "minor";
printf("%s\\n", status);  // adult

// Nested ternary (use sparingly — readability suffers)
int score = 75;
char *grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" : "F";`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  4. Control Flow
  // ─────────────────────────────────────────
  {
    id: "control", icon: "⟁", diff: "beginner",
    title: "Control Flow",
    subtitle: "if/else, switch, loops & jumps",
    sections: [
      {
        heading: "if / else if / else",
        lang: "c",
        code:
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
// Output: Grade: B`
      },
      {
        heading: "switch Statement",
        lang: "c",
        code:
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
}`,
        warn: "Forgetting break causes 'fall-through' — execution continues into the next case. Sometimes intentional, usually a bug!"
      },
      {
        heading: "for Loop",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "while & do-while Loops",
        lang: "c",
        code:
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
} while (input <= 0);  // repeats until valid input`
      },
      {
        heading: "break, continue & goto",
        lang: "c",
        code:
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
    printf("Jumped here\\n");`,
        tip: "goto is generally avoided, but it is legitimate for jumping out of deeply nested loops or centralized cleanup in C."
      }
    ]
  },

  // ─────────────────────────────────────────
  //  5. Functions
  // ─────────────────────────────────────────
  {
    id: "functions", icon: "⟨⟩", diff: "intermediate",
    title: "Functions",
    subtitle: "Declaration, scope, recursion & prototypes",
    sections: [
      {
        heading: "Defining & Calling Functions",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "Function Prototypes",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "Pass by Value vs Reference",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "Recursion",
        lang: "c",
        code:
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
}`,
        warn: "Every recursive function MUST have a base case. Without it, it recurses infinitely and causes a stack overflow crash."
      },
      {
        heading: "Variable Scope & Storage Classes",
        lang: "c",
        code:
`int globalVar = 100;  // global: accessible everywhere

void demo() {
    int localVar = 5;       // local: only inside demo()
    static int count = 0;   // static: persists between calls!
    count++;
    printf("Called %d times\\n", count);
}

// Storage classes: auto, static, extern, register
extern int globalVar;  // use a global from another file`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  6. Arrays & Strings
  // ─────────────────────────────────────────
  {
    id: "arrays", icon: "▦", diff: "intermediate",
    title: "Arrays & Strings",
    subtitle: "1D/2D arrays, string.h & manipulation",
    sections: [
      {
        heading: "1D Arrays",
        lang: "c",
        code:
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
}`,
        warn: "C does NOT check array bounds! Accessing nums[5] or nums[-1] is undefined behavior — it can corrupt memory or crash silently."
      },
      {
        heading: "2D Arrays",
        lang: "c",
        code:
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
// 7 8 9`
      },
      {
        heading: "Strings in C",
        body: "Strings are char arrays terminated by '\\0' (null character). The null terminator is what marks the end of the string.",
        lang: "c",
        code:
`#include <string.h>

char str1[] = "Hello";           // {'H','e','l','l','o','\\0'}
char str2[20] = "World";
char str3[20];

// String functions
printf("%zu\\n", strlen(str1));    // 5
strcpy(str3, str1);               // copy str1 → str3
strcat(str2, "!");                // append "!" → "World!"
printf("%d\\n", strcmp("abc","abc")); // 0 = equal

// Safe string input
char name[50];
fgets(name, sizeof(name), stdin);`
      },
      {
        heading: "Common String Functions",
        table: {
          headers: ["Function", "Description", "Example"],
          rows: [
            ["strlen(s)",    "Length of string",         'strlen("hi") → 2'],
            ["strcpy(d, s)", "Copy s into d",            'strcpy(buf, "hello")'],
            ["strncpy(d,s,n)","Copy at most n chars",    'strncpy(buf, src, 49)'],
            ["strcat(d, s)", "Append s to d",            'strcat(buf, " world")'],
            ["strcmp(a, b)", "Compare strings",          "strcmp(a,b) == 0"],
            ["strchr(s, c)", "Find char in string",      "strchr(s, 'e')"],
            ["strstr(s, t)", "Find substring",           'strstr(s, "lo")'],
            ["toupper(c)",   "Uppercase a char",         "toupper('a') → 'A'"]
          ]
        },
        tip: "Prefer strncpy over strcpy, and snprintf over sprintf. The 'n' variants limit the amount of data written, preventing buffer overflows."
      },
      {
        heading: "Passing Arrays to Functions",
        lang: "c",
        code:
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
}`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  7. Pointers
  // ─────────────────────────────────────────
  {
    id: "pointers", icon: "→", diff: "advanced",
    title: "Pointers",
    subtitle: "Addresses, pointer arithmetic & dynamic memory",
    sections: [
      {
        heading: "What is a Pointer?",
        body: "A pointer stores the memory address of another variable. It is one of C's most powerful — and dangerous — features.",
        lang: "c",
        code:
`int x = 42;
int *ptr = &x;  // ptr holds the address of x

printf("Value of x:   %d\\n", x);      // 42
printf("Address of x: %p\\n", &x);     // 0x7ff...
printf("Value of ptr: %p\\n", ptr);    // same address
printf("Deref ptr:    %d\\n", *ptr);   // 42

*ptr = 100;  // modify x through the pointer
printf("x is now: %d\\n", x);          // 100`,
        warn: "Never dereference a NULL or uninitialized pointer. Always set pointers to NULL at declaration: int *ptr = NULL; and check before use."
      },
      {
        heading: "Pointer Arithmetic",
        lang: "c",
        code:
`int arr[] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]

printf("%d\\n", *p);       // 10
printf("%d\\n", *(p + 1)); // 20 — next element
printf("%d\\n", *(p + 4)); // 50

p++;  // advance pointer by one int-sized step
printf("%d\\n", *p);  // 20

// Pointer difference
int *start = &arr[0];
int *end   = &arr[4];
printf("Distance: %ld\\n", end - start);  // 4`
      },
      {
        heading: "Pointers & Arrays",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "Dynamic Memory Allocation",
        lang: "c",
        code:
`#include <stdlib.h>

// malloc — allocate uninitialized memory
int *arr = (int *)malloc(5 * sizeof(int));
if (arr == NULL) { perror("malloc"); exit(1); }

for (int i = 0; i < 5; i++) arr[i] = i * 10;

// calloc — allocate + zero-initialize
int *arr2 = (int *)calloc(5, sizeof(int));

// realloc — resize allocation
arr = (int *)realloc(arr, 10 * sizeof(int));

// ALWAYS free when done
free(arr);
free(arr2);
arr  = NULL;  // prevent dangling pointer
arr2 = NULL;`,
        tip: "Always set a pointer to NULL after free(). This turns dangling pointer bugs into predictable NULL dereference crashes, which are much easier to find."
      },
      {
        heading: "Pointer to Pointer",
        lang: "c",
        code:
`int x = 5;
int *p = &x;     // pointer to int
int **pp = &p;   // pointer to pointer to int

printf("%d\\n", x);    // 5
printf("%d\\n", *p);   // 5
printf("%d\\n", **pp); // 5

**pp = 99;
printf("x = %d\\n", x);  // 99`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  8. Structs & Unions
  // ─────────────────────────────────────────
  {
    id: "structs", icon: "⬡", diff: "intermediate",
    title: "Structs & Unions",
    subtitle: "Custom types, typedef & memory layout",
    sections: [
      {
        heading: "Defining & Using Structs",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "typedef for Cleaner Syntax",
        lang: "c",
        code:
`// Without typedef
struct Point { int x; int y; };
struct Point p1;

// With typedef — no need to write "struct" every time
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
        tip: "Using typedef with structs is a C convention that keeps code cleaner. It is especially useful when the struct name is used frequently."
      },
      {
        heading: "Struct Pointers",
        lang: "c",
        code:
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
ptr->age = 26;`
      },
      {
        heading: "Arrays of Structs",
        lang: "c",
        code:
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
}`
      },
      {
        heading: "Unions",
        body: "A union stores different types in the SAME memory location. Only one member is valid at a time — the last one written.",
        lang: "c",
        code:
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
printf("Size: %zu\\n", sizeof(union Data));  // 20`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  9. File I/O
  // ─────────────────────────────────────────
  {
    id: "fileio", icon: "📄", diff: "intermediate",
    title: "File I/O",
    subtitle: "fopen, fread, fprintf & error handling",
    sections: [
      {
        heading: "Opening & Closing Files",
        lang: "c",
        code:
`#include <stdio.h>

FILE *fp = fopen("data.txt", "r");  // open for reading
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}

// ... do stuff ...

fclose(fp);  // ALWAYS close!`,
        warn: "Never skip fclose(). Unclosed files can cause data loss (buffered writes never flushed) and exhaust OS file descriptors."
      },
      {
        heading: "File Open Modes",
        table: {
          headers: ["Mode", "Meaning", "File exists?", "Creates?"],
          rows: [
            ['"r"',  "Read only",        "Required",  "No"],
            ['"w"',  "Write (overwrite)", "Truncated", "Yes"],
            ['"a"',  "Append",            "Preserved", "Yes"],
            ['"r+"', "Read + Write",      "Required",  "No"],
            ['"w+"', "Read + Write",      "Truncated", "Yes"],
            ['"rb"', "Read binary",       "Required",  "No"],
            ['"wb"', "Write binary",      "Truncated", "Yes"]
          ]
        }
      },
      {
        heading: "Reading Files",
        lang: "c",
        code:
`FILE *fp = fopen("input.txt", "r");
char line[256];

// Read line by line
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);  // line includes \\n
}

// Read char by char
int ch;
rewind(fp);  // go back to start
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}

// Read formatted data
int id; char name[50]; float score;
fscanf(fp, "%d %s %f", &id, name, &score);

fclose(fp);`
      },
      {
        heading: "Writing Files",
        lang: "c",
        code:
`FILE *fp = fopen("output.txt", "w");

// Write formatted text
fprintf(fp, "Hello, %s!\\n", "World");
fprintf(fp, "Score: %d\\n", 99);

// Write a string
fputs("Direct string write\\n", fp);

// Write char by char
fputc('A', fp);
fputc('\\n', fp);

fclose(fp);`
      },
      {
        heading: "Binary File I/O",
        lang: "c",
        code:
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
fclose(fp);`,
        tip: "Binary I/O with fwrite/fread is much faster than text I/O for large datasets, and it preserves the exact in-memory representation."
      }
    ]
  },

  // ─────────────────────────────────────────
  //  10. Memory Management
  // ─────────────────────────────────────────
  {
    id: "memory", icon: "⧫", diff: "advanced",
    title: "Memory Management",
    subtitle: "Stack vs heap, leaks & best practices",
    sections: [
      {
        heading: "Stack vs Heap",
        body: "C programs use two main memory regions. Understanding the difference is critical.",
        table: {
          headers: ["Property", "Stack", "Heap"],
          rows: [
            ["Allocation",  "Automatic (compiler)",  "Manual (malloc/free)"],
            ["Speed",       "Very fast",             "Slower"],
            ["Size",        "Limited (~1–8 MB)",     "Limited by RAM"],
            ["Lifetime",    "Until function returns","Until free() is called"],
            ["Management",  "Compiler handles",      "You handle it"],
            ["Risk",        "Stack overflow",        "Memory leaks, dangling ptrs"]
          ]
        }
      },
      {
        heading: "malloc, calloc, realloc, free",
        lang: "c",
        code:
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
free(b); b = NULL;`
      },
      {
        heading: "Common Memory Bugs",
        lang: "c",
        code:
`// 1. MEMORY LEAK — forget to free
int *p = malloc(100);
// ... forgot to call free(p)!

// 2. DANGLING POINTER — use after free
int *p2 = malloc(sizeof(int));
free(p2);
*p2 = 5;  // UNDEFINED BEHAVIOR!

// 3. DOUBLE FREE
free(p2);
free(p2);  // crash or silent corruption!

// 4. BUFFER OVERFLOW
char buf[10];
strcpy(buf, "This is way too long!!");  // DANGER!

// SAFE ALTERNATIVE:
strncpy(buf, "Safe copy", sizeof(buf) - 1);
buf[sizeof(buf) - 1] = '\\0';`,
        warn: "These bugs cause undefined behavior — the program may crash immediately, corrupt data silently, or seem to work fine until production. Use Valgrind to detect them."
      },
      {
        heading: "Valgrind — Memory Checker",
        lang: "bash",
        code:
`# Compile with debug info
gcc -g program.c -o program

# Run under Valgrind
valgrind --leak-check=full ./program

# Sample output:
# ==1234== LEAK SUMMARY:
# ==1234==    definitely lost: 40 bytes in 1 blocks

# AddressSanitizer (faster, built into GCC/Clang)
gcc -fsanitize=address -g program.c -o program
./program`
      },
      {
        heading: "Linked List Example (Dynamic Memory)",
        lang: "c",
        code:
`typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *create(int val) {
    Node *n = (Node *)malloc(sizeof(Node));
    if (!n) { perror("malloc"); exit(1); }
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
}`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  11. Preprocessor & Macros
  // ─────────────────────────────────────────
  {
    id: "preprocessor", icon: "#", diff: "intermediate",
    title: "Preprocessor & Macros",
    subtitle: "#define, #include, guards & conditional compilation",
    sections: [
      {
        heading: "What is the Preprocessor?",
        body: "The C preprocessor runs before compilation. It handles #include, #define, and conditional directives — pure text substitution before the compiler sees the code.",
        lang: "c",
        code:
`// The preprocessor:
// 1. Strips comments
// 2. Processes #include (paste file contents)
// 3. Expands #define macros
// 4. Handles #if / #ifdef blocks

// Then the real compiler runs on the result`
      },
      {
        heading: "#define Macros",
        lang: "c",
        code:
`// Object-like macros (constants)
#define MAX 100
#define PI 3.14159265
#define APP_NAME "MyApp"

// Function-like macros
#define SQUARE(x)   ((x) * (x))
#define MAX2(a, b)  ((a) > (b) ? (a) : (b))
#define ABS(x)      ((x) < 0 ? -(x) : (x))

// ALWAYS wrap macro params in parens!
printf("%d\\n", SQUARE(3 + 1));  // 16, not 7`,
        tip: "Prefer const variables over #define for constants — they have types and scopes, which makes debugging much easier."
      },
      {
        heading: "Header Guards",
        lang: "c",
        code:
`// mylib.h — prevent double inclusion
#ifndef MYLIB_H   // if not defined
#define MYLIB_H   // define it

// Your declarations here
typedef struct { int x, y; } Point;
Point createPoint(int x, int y);

#endif  // MYLIB_H

// Modern alternative (non-standard but widely supported):
#pragma once`
      },
      {
        heading: "Conditional Compilation",
        lang: "c",
        code:
`#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("[DEBUG] %s\\n", msg)
#else
    #define LOG(msg) // nothing — compiled out
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
LOG("Starting program");  // only prints if DEBUG=1`
      },
      {
        heading: "Predefined Macros",
        lang: "c",
        code:
`// Built-in macros — always available
printf("File:     %s\\n", __FILE__);    // current filename
printf("Line:     %d\\n", __LINE__);    // current line number
printf("Function: %s\\n", __func__);    // current function name
printf("Date:     %s\\n", __DATE__);    // compile date
printf("Time:     %s\\n", __TIME__);    // compile time

// Useful for a custom assert macro
#define ASSERT(cond) \\
    if (!(cond)) { \\
        fprintf(stderr, "Assert failed: %s:%d\\n", \\
                __FILE__, __LINE__); \\
        exit(1); \\
    }`
      }
    ]
  },

  // ─────────────────────────────────────────
  //  12. Enums & Type Aliases  (NEW)
  // ─────────────────────────────────────────
  {
    id: "enums", icon: "≡", diff: "beginner",
    title: "Enums & Type Aliases",
    subtitle: "enum, typedef, named constants & bit flags",
    sections: [
      {
        heading: "What is an Enum?",
        body: "An enum (enumeration) assigns meaningful names to integer constants, making code far more readable than bare numbers.",
        lang: "c",
        code:
`#include <stdio.h>

enum Day {
    MONDAY = 1,
    TUESDAY,     // 2 (auto-increments)
    WEDNESDAY,   // 3
    THURSDAY,    // 4
    FRIDAY,      // 5
    SATURDAY,    // 6
    SUNDAY       // 7
};

int main() {
    enum Day today = WEDNESDAY;

    if (today == WEDNESDAY) printf("Midweek!\\n");
    printf("Day number: %d\\n", today);  // 3
    return 0;
}`
      },
      {
        heading: "typedef enum",
        lang: "c",
        code:
`// Without typedef:  enum Color c = RED;
// With typedef:      Color c = RED;

typedef enum {
    RED,    // 0
    GREEN,  // 1
    BLUE    // 2
} Color;

typedef enum {
    IDLE,
    RUNNING,
    PAUSED,
    STOPPED
} ProcessState;

Color c = GREEN;
ProcessState state = RUNNING;

printf("Color: %d\\n", c);      // 1
printf("State: %d\\n", state);  // 1`,
        tip: "Enum values are just ints in disguise. You can switch on them, store them in arrays, and pass them to functions like any integer."
      },
      {
        heading: "Enums as Bit Flags",
        body: "A powerful pattern: assign each constant a power of two so multiple flags can be combined with bitwise OR.",
        lang: "c",
        code:
`typedef enum {
    PERM_NONE    = 0,        // 0b0000
    PERM_READ    = 1 << 0,   // 0b0001
    PERM_WRITE   = 1 << 1,   // 0b0010
    PERM_EXECUTE = 1 << 2    // 0b0100
} Permission;

int perms = PERM_READ | PERM_WRITE;  // 0b0011

// Check a flag
if (perms & PERM_READ)    printf("Can read\\n");
if (perms & PERM_WRITE)   printf("Can write\\n");
if (!(perms & PERM_EXECUTE)) printf("Cannot execute\\n");

// Add a flag
perms |= PERM_EXECUTE;

// Remove a flag
perms &= ~PERM_WRITE;`
      },
      {
        heading: "switch with Enums",
        lang: "c",
        code:
`typedef enum { NORTH, SOUTH, EAST, WEST } Direction;

void move(Direction dir) {
    switch (dir) {
        case NORTH: printf("Moving North\\n"); break;
        case SOUTH: printf("Moving South\\n"); break;
        case EAST:  printf("Moving East\\n");  break;
        case WEST:  printf("Moving West\\n");  break;
        // Compiler warns if you miss a case!
    }
}

int main() {
    move(EAST);   // Moving East
    return 0;
}`,
        note: "With -Wall, GCC warns if a switch on an enum is missing cases. This is a powerful safety net — always handle all enum values."
      }
    ]
  },

  // ─────────────────────────────────────────
  //  13. Command-Line Arguments  (NEW)
  // ─────────────────────────────────────────
  {
    id: "cmdargs", icon: "$", diff: "intermediate",
    title: "Command-Line Arguments",
    subtitle: "argc, argv, stdin/stderr & string conversions",
    sections: [
      {
        heading: "argc & argv",
        body: "main() can accept two parameters: argc (argument count) and argv (argument vector — an array of strings).",
        lang: "c",
        code:
`#include <stdio.h>

int main(int argc, char *argv[]) {
    // argc = number of arguments (includes program name)
    // argv[0] = name of the program itself

    printf("Program: %s\\n", argv[0]);
    printf("Args: %d\\n", argc - 1);

    for (int i = 1; i < argc; i++) {
        printf("  argv[%d] = \\"%s\\"\\n", i, argv[i]);
    }
    return 0;
}
// Run:   ./program hello world 42
// Output:
//   Program: ./program
//   Args: 3
//   argv[1] = "hello"
//   argv[2] = "world"
//   argv[3] = "42"`,
        warn: "argv[argc] is always NULL. Never access argv[i] without first checking i < argc — this will cause a segfault."
      },
      {
        heading: "Practical Example: Mini Calculator",
        lang: "c",
        code:
`#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 4) {
        fprintf(stderr, "Usage: %s <num1> <op> <num2>\\n", argv[0]);
        return 1;
    }

    double a  = atof(argv[1]);
    char   op = argv[2][0];
    double b  = atof(argv[3]);
    double result;

    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b == 0.0) {
                fprintf(stderr, "Error: division by zero\\n");
                return 1;
            }
            result = a / b; break;
        default:
            fprintf(stderr, "Unknown operator: %c\\n", op);
            return 1;
    }

    printf("%.6g\\n", result);
    return 0;
}
// Run: ./calc 10 + 5   →  15
// Run: ./calc 7 / 2    →  3.5`
      },
      {
        heading: "stdin / stdout / stderr",
        lang: "c",
        code:
`#include <stdio.h>

int main() {
    char buf[256];

    // stdin — read from keyboard (or piped file)
    printf("Enter text: ");
    fgets(buf, sizeof(buf), stdin);

    // stdout — normal output (can be redirected)
    fprintf(stdout, "You typed: %s", buf);

    // stderr — error output (separate channel)
    fprintf(stderr, "Warning: example error\\n");

    return 0;
}

// Shell redirection:
// ./program < input.txt         stdin from file
// ./program > output.txt        stdout to file
// ./program 2> errors.txt       stderr to file
// ./program > out.txt 2>&1      both to same file`
      },
      {
        heading: "String ↔ Number Conversions",
        lang: "c",
        code:
`#include <stdlib.h>
#include <stdio.h>

// atoi — quick string to int (no error checking)
int n = atoi("42");       // 42
int bad = atoi("hello");  // 0 (silent fail!)

// strtol — safe string to long (with error detection)
char *endptr;
long val = strtol("123abc", &endptr, 10);
// val = 123, *endptr = 'a' (first unconverted char)

if (*endptr != '\\0') {
    printf("Invalid: trailing chars '%s'\\n", endptr);
}

// strtod — string to double
double d = strtod("3.14", NULL);

// Number to string
char str[32];
snprintf(str, sizeof(str), "%d", 42);     // "42"
snprintf(str, sizeof(str), "%.2f", 3.14); // "3.14"`,
        tip: "Prefer strtol/strtod over atoi/atof. They let you detect invalid input via the endptr and errno, while atoi silently returns 0 on failure."
      }
    ]
  },

  // ─────────────────────────────────────────
  //  14. Best Practices & Patterns  (NEW)
  // ─────────────────────────────────────────
  {
    id: "bestpractices", icon: "✦", diff: "advanced",
    title: "Best Practices & Patterns",
    subtitle: "Defensive coding, idioms & clean C",
    sections: [
      {
        heading: "Defensive Programming",
        lang: "c",
        code:
`// 1. Validate all function arguments
int divide(int a, int b) {
    if (b == 0) {
        fprintf(stderr, "Error: division by zero\\n");
        return -1;
    }
    return a / b;
}

// 2. Always check allocations
int *buf = (int *)malloc(100 * sizeof(int));
if (!buf) { perror("malloc"); exit(EXIT_FAILURE); }

// 3. Initialize variables — never rely on garbage
int  x   = 0;
int *ptr = NULL;

// 4. Use sizeof for portability
int arr[20];
int n = sizeof(arr) / sizeof(arr[0]);  // 20, not hardcoded`,
        tip: "Compile with -Wall -Wextra -fsanitize=address during development. These flags catch the majority of common C bugs at compile or run time."
      },
      {
        heading: "Guard Clauses (Early Return)",
        body: "Instead of deeply nested if statements, return early when preconditions fail. This flattens code and makes the happy path obvious.",
        lang: "c",
        code:
`// BAD: deeply nested
int processFile(const char *path) {
    if (path != NULL) {
        FILE *fp = fopen(path, "r");
        if (fp != NULL) {
            // ... actual logic buried here ...
            fclose(fp);
            return 0;
        }
    }
    return -1;
}

// GOOD: guard clauses
int processFile(const char *path) {
    if (path == NULL) return -1;      // guard

    FILE *fp = fopen(path, "r");
    if (fp == NULL) return -1;        // guard

    // ... actual logic is clear and flat ...

    fclose(fp);
    return 0;
}`
      },
      {
        heading: "Error Handling with errno",
        lang: "c",
        code:
`#include <errno.h>
#include <string.h>

FILE *fp = fopen("missing.txt", "r");
if (fp == NULL) {
    // errno is set automatically by fopen
    fprintf(stderr, "fopen: %s\\n", strerror(errno));
    // Output: fopen: No such file or directory
}

// Return-code pattern (standard C idiom)
typedef enum {
    OK = 0,
    ERR_NULL_PTR,
    ERR_OUT_OF_BOUNDS,
    ERR_IO,
    ERR_NO_MEMORY
} Status;

Status process(int *data, int len) {
    if (!data)    return ERR_NULL_PTR;
    if (len <= 0) return ERR_OUT_OF_BOUNDS;
    // ... do work ...
    return OK;
}`
      },
      {
        heading: "Naming Conventions",
        lang: "c",
        code:
`// Macros and constants — SCREAMING_SNAKE_CASE
#define MAX_BUFFER_SIZE 1024
#define PI 3.14159

// Types (structs, typedefs, enums) — PascalCase
typedef struct { int x, y; } Point;
typedef enum { RED, GREEN, BLUE } Color;

// Functions — snake_case
int calculate_score(int hits, int misses);
void print_array(int *arr, int len);

// Variables — snake_case
int user_score = 0;
char *file_path = NULL;

// Avoid magic numbers — give them names!
// BAD:  if (status == 3) { ... }
// GOOD: if (status == STATUS_ERROR) { ... }`
      },
      {
        heading: "Recommended Compiler Flags",
        lang: "bash",
        code:
`# Development build — maximum warnings + sanitizers
gcc -Wall -Wextra -Wpedantic -g -fsanitize=address -std=c11 \\
    program.c -o program

# Release build — optimized, no debug info
gcc -O2 -std=c11 program.c -o program

# Flag reference:
# -Wall          Enable most common warnings
# -Wextra        Additional warnings beyond -Wall
# -Wpedantic     Strict ISO C compliance
# -g             Include debug symbols (for gdb, valgrind)
# -O2            Optimize for speed
# -std=c11       Use C11 standard
# -fsanitize=address  Detect memory errors at runtime`,
        tip: "Make -Wall -Wextra your default. Warnings are the compiler trying to help you. Fix every warning — they almost always point to real bugs."
      }
    ]
  }
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let active = 0;
let sidebarOpen = true;
let progress = {};
try { progress = JSON.parse(localStorage.getItem("c_course_progress") || "{}"); } catch {}

// ══════════════════════════════════════════════
//  SYNTAX HIGHLIGHT
// ══════════════════════════════════════════════
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlight(raw, lang) {
  if (lang !== "c" && lang !== "bash") return esc(raw);

  return raw.split("\n").map(line => {
    // Extract comment suffix first
    let commentSuffix = "";
    const ci = line.indexOf("//");
    if (ci !== -1) {
      commentSuffix = line.slice(ci);
      line = line.slice(0, ci);
    }

    let out = "";
    let i = 0;
    const src = line;

    while (i < src.length) {
      // Preprocessor line
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
      // Word
      if (/[a-zA-Z_]/.test(src[i])) {
        let j = i;
        while (j < src.length && /[a-zA-Z0-9_]/.test(src[j])) j++;
        const word = src.slice(i, j);
        const ctrl = ["return","break","continue","goto","sizeof","if","else","for","while","do","switch","case","default"];
        const kw   = ["int","float","double","char","void","struct","typedef","union","const","static","extern","auto","register","unsigned","signed","long","short","NULL","true","false","include","define","ifndef","ifdef","endif","pragma","enum","exit","FILE"];
        const isFunc = j < src.length && src[j] === "(";
        if (ctrl.includes(word))      out += `<span class="skr">${esc(word)}</span>`;
        else if (kw.includes(word))   out += `<span class="sk">${esc(word)}</span>`;
        else if (isFunc)              out += `<span class="sf">${esc(word)}</span>`;
        else                          out += esc(word);
        i = j; continue;
      }
      // Number
      if (/[0-9]/.test(src[i]) || (src[i] === "." && /[0-9]/.test(src[i+1] || ""))) {
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

function renderCallout(type, text) {
  const icons = { tip: "💡", warn: "⚠️", note: "ℹ️" };
  return `<div class="callout callout-${type}">
    <span class="callout-icon">${icons[type] || "💡"}</span>
    <span class="callout-text">${text}</span>
  </div>`;
}

function renderSection(s) {
  let html = `<div class="section">
    <div class="sec-head"><span class="sec-arrow">▶</span> ${s.heading}</div>`;
  if (s.body)    html += `<p class="sec-body">${s.body}</p>`;
  if (s.tip)     html += renderCallout("tip", s.tip);
  if (s.warn)    html += renderCallout("warn", s.warn);
  if (s.note)    html += renderCallout("note", s.note);
  if (s.bullets) html += `<ul class="sec-ul">${s.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`;
  if (s.table)   html += renderTable(s.table.headers, s.table.rows);
  if (s.code)    html += renderCode(s.code, s.lang || "c");
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
  try { localStorage.setItem("c_course_progress", JSON.stringify(progress)); } catch {}
}

function markDone(id) {
  progress[id] = true;
  saveProgress();
  updateProgressUI();
  renderModule(active);
  renderSidebar();
}
window.markDone = markDone;

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
  const query = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const list  = document.getElementById("module-list");
  let html = "";
  let visibleCount = 0;

  modules.forEach((m, i) => {
    const visible = !query ||
      m.title.toLowerCase().includes(query) ||
      m.subtitle.toLowerCase().includes(query);
    if (!visible) return;
    visibleCount++;

    html += `
    <div class="mod-item ${i === active ? "active" : ""}" onclick="navigate(${i})" role="button" tabindex="0" aria-label="${m.title}">
      <span class="mod-icon">${m.icon}</span>
      <div class="mod-info">
        <div class="mod-name">${m.title}</div>
        <div class="mod-sub">${m.subtitle}</div>
      </div>
      ${progress[m.id] ? '<span class="mod-check">✓</span>' : `<span class="mod-diff diff-${m.diff || 'beginner'}"></span>`}
    </div>`;
  });

  if (visibleCount === 0) {
    html = `<div class="no-results">No modules match "${query}"</div>`;
  }

  list.innerHTML = html;
}

// ══════════════════════════════════════════════
//  MODULE RENDER
// ══════════════════════════════════════════════
function renderModule(idx) {
  active = idx;
  const m = modules[idx];

  document.getElementById("topbar-icon").textContent  = m.icon;
  document.getElementById("topbar-title").textContent = m.title;
  document.getElementById("topbar-sub").textContent   = m.subtitle;

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === modules.length - 1;

  const tags     = m.sections.map(s => `<span class="tag">${s.heading}</span>`).join("");
  const sectHtml = m.sections.map(renderSection).join("");

  const diffLabel = { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };
  const diffBadge = `<div class="diff-badge ${m.diff || 'beginner'}">● ${diffLabel[m.diff] || "Beginner"}</div>`;

  const nextBtnHtml = idx < modules.length - 1
    ? `<button id="next-link-btn" onclick="navigate(${idx + 1}); markDone('${m.id}')">Next: ${modules[idx + 1].title} →</button>`
    : "";

  const done           = modules.filter(x => progress[x.id]).length;
  const isLastDone     = idx === modules.length - 1 && done >= modules.length - 1;
  const completeBanner = isLastDone
    ? `<div id="complete-banner" class="show">
         <div class="emoji">🎉</div>
         <div class="ct">Course Complete!</div>
         <div class="cs">You have completed all ${modules.length} modules of C Programming Language. Keep practising!</div>
       </div>`
    : `<div id="complete-banner"></div>`;

  document.getElementById("content-inner").innerHTML = `
    <div class="mod-header">
      <div class="mod-num">MODULE ${String(idx + 1).padStart(2, "0")} / ${modules.length}</div>
      <h1 class="mod-h1">${m.title}</h1>
      <div class="mod-desc">${m.subtitle}</div>
      ${diffBadge}
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
//  NAVIGATION  (with fade transition)
// ══════════════════════════════════════════════
window.navigate = function(idx) {
  if (idx < 0 || idx >= modules.length) return;
  const ci = document.getElementById("content-inner");
  ci.classList.add("fading");
  setTimeout(() => {
    active = idx;
    renderModule(idx);
    ci.classList.remove("fading");
  }, 130);
};

// ══════════════════════════════════════════════
//  EVENT LISTENERS
// ══════════════════════════════════════════════

// Prev / Next buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  if (active > 0) navigate(active - 1);
});
document.getElementById("next-btn").addEventListener("click", () => {
  markDone(modules[active].id);
  if (active < modules.length - 1) navigate(active + 1);
});

// Sidebar toggle
document.getElementById("toggle-btn").addEventListener("click", () => {
  const isMobile = window.innerWidth <= 700;
  if (isMobile) {
    document.getElementById("sidebar").classList.toggle("open");
  } else {
    sidebarOpen = !sidebarOpen;
    document.getElementById("sidebar").classList.toggle("collapsed", !sidebarOpen);
    document.getElementById("toggle-btn").textContent = sidebarOpen ? "◀" : "▶";
  }
});

// Search
document.getElementById("search-input").addEventListener("input", renderSidebar);

// Keyboard navigation (arrow keys)
document.addEventListener("keydown", (e) => {
  if (document.activeElement === document.getElementById("search-input")) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    if (active < modules.length - 1) {
      markDone(modules[active].id);
      navigate(active + 1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    if (active > 0) navigate(active - 1);
  } else if (e.key === "t" || e.key === "T") {
    // T = toggle sidebar
    document.getElementById("toggle-btn").click();
  }
});

// Keyboard accessibility for sidebar items (Enter/Space)
document.getElementById("module-list").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.target.click();
  }
});

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
document.getElementById("footer-modules").textContent = `${modules.length} modules · C89/C99/C11`;
updateProgressUI();
renderModule(0);