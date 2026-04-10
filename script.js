// ══════════════════════════════════════════════
//  C PROGRAMMING COURSE — script.js
// ══════════════════════════════════════════════

// ══════════════════════════════════════════════
//  MODULES DATA  (14 modules)
// ══════════════════════════════════════════════
const modules = [
  {
    id:"intro", icon:"⬡", diff:"beginner",
    title:"Introduction to C",
    subtitle:"Origins, philosophy & setup",
    sections:[
      { heading:"What is C?", body:"C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It was designed to write the UNIX operating system and remains one of the most influential languages ever created. Nearly every modern OS, embedded system, and high-performance tool is written in C or heavily influenced by it." },
      { heading:"Why Learn C?", bullets:["Direct memory management — you control every byte","Blazing fast execution, close to assembly-level speed","Foundation for C++, Java, Python, Rust, Go and more","Industry-standard in embedded systems, OS kernels, compilers","Teaches you how computers actually work at a low level"] },
      { heading:"Setting Up", body:"Install GCC (GNU Compiler Collection) on your system:", lang:"bash", code:
`# Linux / WSL
sudo apt install gcc

# macOS (via Xcode tools)
xcode-select --install

# Windows — install MinGW or use WSL2

# Verify installation
gcc --version` },
      { heading:"Your First Program", body:"Every C journey starts here. Save as hello.c and compile it.", lang:"c", code:
`#include <stdio.h>   // Standard I/O library

int main() {
    printf("Hello, World!\\n");
    return 0;           // 0 = success
}` },
      { heading:"Compiling & Running", lang:"bash", code:
`gcc hello.c -o hello   # Compile
./hello                 # Run
# Output: Hello, World!

# With warnings enabled (recommended)
gcc -Wall -Wextra hello.c -o hello`,
        tip:"Always compile with -Wall -Wextra to catch common mistakes early. Treat warnings as errors while learning." }
    ]
  },
  {
    id:"variables", icon:"◈", diff:"beginner",
    title:"Variables & Data Types",
    subtitle:"Primitives, memory sizes & casting",
    sections:[
      { heading:"Primitive Data Types", body:"C has a small set of built-in types. Each has a fixed size in memory.",
        table:{ headers:["Type","Size","Range","Example"], rows:[
          ["char","1 byte","-128 to 127","'A', 65"],
          ["int","4 bytes","-2B to 2B","42, -7"],
          ["float","4 bytes","~7 decimal digits","3.14f"],
          ["double","8 bytes","~15 decimal digits","3.14159"],
          ["long","8 bytes","larger int range","100000L"],
          ["unsigned int","4 bytes","0 to 4.29B","255u"],
          ["void","—","No value","function returns"]
        ]},
        tip:"Use sizeof(int) at runtime to check the actual size on your machine — it can vary across platforms."
      },
      { heading:"Declaring Variables", lang:"c", code:
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
      { heading:"printf Format Specifiers",
        table:{ headers:["Specifier","Type","Example"], rows:[
          ["%d / %i","int",'printf("%d", 42)'],
          ["%f","float/double",'printf("%.2f", 3.14)'],
          ["%c","char","printf(\"%c\", 'A')"],
          ["%s","string",'printf("%s", "hi")'],
          ["%ld","long",'printf("%ld", 100L)'],
          ["%p","pointer",'printf("%p", ptr)'],
          ["%x","hex",'printf("%x", 255)'],
          ["%zu","size_t",'printf("%zu", sizeof(x))']
        ]}
      },
      { heading:"Type Casting", lang:"c", code:
`int a = 7, b = 2;
int result1 = a / b;          // 3 (integer division!)
float result2 = (float)a / b; // 3.5 (explicit cast)
float result3 = a / (float)b; // 3.5

// Implicit casting (automatic)
int x = 65;
char c = x;  // c = 'A'
printf("%c\\n", c);  // prints: A` },
      { heading:"Constants", lang:"c", code:
`// Method 1: #define (preprocessor macro)
#define PI 3.14159
#define MAX_SIZE 100

// Method 2: const keyword (preferred in modern C)
const int SPEED_LIMIT = 60;
const double GRAVITY = 9.81;

// Usage
double area = PI * 5 * 5;  // 78.53...` }
    ]
  },
  {
    id:"operators", icon:"⊕", diff:"beginner",
    title:"Operators & Expressions",
    subtitle:"Arithmetic, logical, bitwise & ternary",
    sections:[
      { heading:"Arithmetic Operators", lang:"c", code:
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
      { heading:"Comparison Operators", lang:"c", code:
`int a = 5, b = 10;
printf("%d\\n", a == b);  // 0 (false) — equal
printf("%d\\n", a != b);  // 1 (true)  — not equal
printf("%d\\n", a < b);   // 1         — less than
printf("%d\\n", a > b);   // 0         — greater than
printf("%d\\n", a <= b);  // 1         — less or equal
printf("%d\\n", a >= b);  // 0         — greater or equal`,
        warn:"Common bug: using = (assignment) instead of == (comparison) inside an if condition. Some compilers won't catch it!" },
      { heading:"Logical Operators", lang:"c", code:
`int x = 5;
// && = AND,  || = OR,  ! = NOT
if (x > 0 && x < 10) printf("single digit\\n");
if (x < 0 || x > 100) printf("out of range\\n");
if (!(x == 3))         printf("x is not 3\\n");

// Short-circuit evaluation
// In (A && B): if A is false, B is never evaluated
// In (A || B): if A is true,  B is never evaluated` },
      { heading:"Bitwise Operators", lang:"c", code:
`unsigned int a = 0b1010;  // 10
unsigned int b = 0b1100;  // 12

printf("%d\\n", a & b);   // 8   — AND
printf("%d\\n", a | b);   // 14  — OR
printf("%d\\n", a ^ b);   // 6   — XOR
printf("%d\\n", ~a);      // -11 — NOT
printf("%d\\n", a << 1);  // 20  — left shift  (×2)
printf("%d\\n", a >> 1);  // 5   — right shift (÷2)`,
        note:"Use unsigned types with bitwise operators to avoid undefined behavior when right-shifting negative numbers." },
      { heading:"Ternary Operator", lang:"c", code:
`// condition ? value_if_true : value_if_false
int age = 20;
char *status = (age >= 18) ? "adult" : "minor";
printf("%s\\n", status);  // adult

// Nested ternary (use sparingly)
int score = 75;
char *grade = (score >= 90) ? "A" :
              (score >= 80) ? "B" :
              (score >= 70) ? "C" : "F";` }
    ]
  },
  {
    id:"control", icon:"⟁", diff:"beginner",
    title:"Control Flow",
    subtitle:"if/else, switch, loops & jumps",
    sections:[
      { heading:"if / else if / else", lang:"c", code:
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
      { heading:"switch Statement", lang:"c", code:
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
        warn:"Forgetting break causes fall-through — execution continues into the next case. Sometimes intentional, usually a bug!" },
      { heading:"for Loop", lang:"c", code:
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
      { heading:"while & do-while", lang:"c", code:
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
} while (input <= 0);` },
      { heading:"break, continue & goto", lang:"c", code:
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

// goto — jump to label (use sparingly)
    goto end;
    printf("This is skipped\\n");
end:
    printf("Jumped here\\n");`,
        tip:"goto is generally avoided but is legitimate for jumping out of deeply nested loops or centralised cleanup in C." }
    ]
  },
  {
    id:"functions", icon:"⟨⟩", diff:"intermediate",
    title:"Functions",
    subtitle:"Declaration, scope, recursion & prototypes",
    sections:[
      { heading:"Defining & Calling Functions", lang:"c", code:
`#include <stdio.h>

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
      { heading:"Function Prototypes", lang:"c", code:
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
      { heading:"Pass by Value vs Reference", lang:"c", code:
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
      { heading:"Recursion", lang:"c", code:
`// Factorial: n! = n × (n-1)!
int factorial(int n) {
    if (n <= 1) return 1;        // base case
    return n * factorial(n - 1); // recursive case
}

// Fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int main() {
    printf("5! = %d\\n", factorial(5));     // 120
    printf("fib(8) = %d\\n", fibonacci(8)); // 21
    return 0;
}`,
        warn:"Every recursive function MUST have a base case. Without one it recurses infinitely and crashes with a stack overflow." },
      { heading:"Variable Scope & Storage Classes", lang:"c", code:
`int globalVar = 100;  // global: accessible everywhere

void demo() {
    int localVar = 5;       // local: only inside demo()
    static int count = 0;   // static: persists between calls!
    count++;
    printf("Called %d times\\n", count);
}

// extern: access a global defined in another file
extern int globalVar;` }
    ]
  },
  {
    id:"arrays", icon:"▦", diff:"intermediate",
    title:"Arrays & Strings",
    subtitle:"1D/2D arrays, string.h & manipulation",
    sections:[
      { heading:"1D Arrays", lang:"c", code:
`#include <stdio.h>

int main() {
    int nums[5] = {10, 20, 30, 40, 50};
    float temps[] = {36.5, 37.2, 38.0};  // size inferred

    printf("%d\\n", nums[0]);  // 10
    printf("%d\\n", nums[4]);  // 50

    int sum = 0;
    for (int i = 0; i < 5; i++)
        sum += nums[i];
    printf("Sum: %d\\n", sum);  // 150
    return 0;
}`,
        warn:"C does NOT check array bounds! Accessing nums[5] or nums[-1] is undefined behaviour — it can corrupt memory silently." },
      { heading:"2D Arrays", lang:"c", code:
`int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++)
        printf("%d ", matrix[i][j]);
    printf("\\n");
}` },
      { heading:"Strings in C", body:"Strings are char arrays terminated by '\\0' (null character).", lang:"c", code:
`#include <string.h>

char str1[] = "Hello";        // {'H','e','l','l','o','\\0'}
char str2[20] = "World";

printf("%zu\\n", strlen(str1));     // 5
strcpy(str2, str1);                 // copy
strcat(str2, "!");                  // append
printf("%d\\n", strcmp("abc","abc")); // 0 = equal

char name[50];
fgets(name, sizeof(name), stdin);` },
      { heading:"Common String Functions",
        table:{ headers:["Function","Description","Example"], rows:[
          ["strlen(s)","Length of string",'strlen("hi") → 2'],
          ["strcpy(d,s)","Copy s into d",'strcpy(buf, "hello")'],
          ["strncpy(d,s,n)","Copy at most n chars",'strncpy(buf,src,49)'],
          ["strcat(d,s)","Append s to d",'strcat(buf," world")'],
          ["strcmp(a,b)","Compare strings","strcmp(a,b)==0"],
          ["strchr(s,c)","Find char in string","strchr(s,'e')"],
          ["strstr(s,t)","Find substring",'strstr(s,"lo")'],
          ["toupper(c)","Uppercase a char","toupper('a')→'A'"]
        ]},
        tip:"Prefer strncpy over strcpy, and snprintf over sprintf — the 'n' variants prevent buffer overflows." }
    ]
  },
  {
    id:"pointers", icon:"→", diff:"advanced",
    title:"Pointers",
    subtitle:"Addresses, pointer arithmetic & dynamic memory",
    sections:[
      { heading:"What is a Pointer?", body:"A pointer stores the memory address of another variable — one of C's most powerful and dangerous features.", lang:"c", code:
`int x = 42;
int *ptr = &x;  // ptr holds the address of x

printf("Value of x:   %d\\n", x);      // 42
printf("Address of x: %p\\n", &x);     // 0x7ff...
printf("Deref ptr:    %d\\n", *ptr);   // 42

*ptr = 100;  // modify x through the pointer
printf("x is now: %d\\n", x);          // 100`,
        warn:"Never dereference a NULL or uninitialised pointer. Always initialise: int *ptr = NULL; and check before use." },
      { heading:"Pointer Arithmetic", lang:"c", code:
`int arr[] = {10, 20, 30, 40, 50};
int *p = arr;  // points to arr[0]

printf("%d\\n", *p);       // 10
printf("%d\\n", *(p + 1)); // 20
printf("%d\\n", *(p + 4)); // 50

p++;  // advance by one int-sized step
printf("%d\\n", *p);  // 20` },
      { heading:"Pointers & Arrays", lang:"c", code:
`int arr[] = {1, 2, 3, 4, 5};
int *p = arr;   // equivalent to &arr[0]

// All four of these are equivalent:
arr[2]        // subscript notation
*(arr + 2)    // pointer + offset
*(p + 2)      // pointer variable
p[2]          // pointer subscript` },
      { heading:"Dynamic Memory Allocation", lang:"c", code:
`#include <stdlib.h>

// malloc — allocate uninitialized memory
int *arr = (int *)malloc(5 * sizeof(int));
if (arr == NULL) { perror("malloc"); exit(1); }

// calloc — allocate + zero-initialize
int *arr2 = (int *)calloc(5, sizeof(int));

// realloc — resize allocation
arr = (int *)realloc(arr, 10 * sizeof(int));

// ALWAYS free when done
free(arr);
free(arr2);
arr  = NULL;  // prevent dangling pointer
arr2 = NULL;`,
        tip:"Set pointers to NULL after free(). This turns dangling-pointer bugs into predictable NULL-dereference crashes, which are easier to debug." },
      { heading:"Pointer to Pointer", lang:"c", code:
`int x = 5;
int *p = &x;    // pointer to int
int **pp = &p;  // pointer to pointer to int

printf("%d\\n", x);    // 5
printf("%d\\n", *p);   // 5
printf("%d\\n", **pp); // 5

**pp = 99;
printf("x = %d\\n", x);  // 99` }
    ]
  },
  {
    id:"structs", icon:"⬡", diff:"intermediate",
    title:"Structs & Unions",
    subtitle:"Custom types, typedef & memory layout",
    sections:[
      { heading:"Defining & Using Structs", lang:"c", code:
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
      { heading:"typedef for Cleaner Syntax", lang:"c", code:
`// Without typedef:  struct Point p1;
// With typedef:      Point p1;
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
    Point position;
} Book;` },
      { heading:"Struct Pointers & Arrow Operator", lang:"c", code:
`typedef struct {
    char name[50];
    int age;
} Person;

Person bob = {"Bob", 25};
Person *ptr = &bob;

// Two ways to access via pointer:
printf("%s\\n", (*ptr).name);  // dereference then access
printf("%s\\n", ptr->name);    // arrow operator (cleaner!)

ptr->age = 26;  // modify through pointer` },
      { heading:"Arrays of Structs", lang:"c", code:
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
      { heading:"Unions", body:"A union stores different types in the SAME memory location. Only the last-written member is valid.", lang:"c", code:
`union Data {
    int i;
    float f;
    char str[20];
};

union Data d;
d.i = 42;
printf("int:   %d\\n", d.i);

d.f = 3.14f;   // overwrites d.i!
printf("float: %.2f\\n", d.f);

// sizeof a union = size of its LARGEST member
printf("Size: %zu\\n", sizeof(union Data));  // 20` }
    ]
  },
  {
    id:"fileio", icon:"📄", diff:"intermediate",
    title:"File I/O",
    subtitle:"fopen, fread, fprintf & error handling",
    sections:[
      { heading:"Opening & Closing Files", lang:"c", code:
`#include <stdio.h>

FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}

// ... do stuff ...

fclose(fp);  // ALWAYS close!`,
        warn:"Never skip fclose(). Unclosed files can cause data loss (buffered writes never flushed) and exhaust OS file descriptors." },
      { heading:"File Open Modes",
        table:{ headers:["Mode","Meaning","File exists?","Creates?"], rows:[
          ['"r"',"Read only","Required","No"],
          ['"w"',"Write (overwrite)","Truncated","Yes"],
          ['"a"',"Append","Preserved","Yes"],
          ['"r+"',"Read + Write","Required","No"],
          ['"w+"',"Read + Write","Truncated","Yes"],
          ['"rb"',"Read binary","Required","No"],
          ['"wb"',"Write binary","Truncated","Yes"]
        ]}
      },
      { heading:"Reading Files", lang:"c", code:
`FILE *fp = fopen("input.txt", "r");
char line[256];

// Read line by line
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
}

// Read formatted data
int id; char name[50]; float score;
rewind(fp);  // go back to start
fscanf(fp, "%d %s %f", &id, name, &score);

fclose(fp);` },
      { heading:"Writing Files", lang:"c", code:
`FILE *fp = fopen("output.txt", "w");

fprintf(fp, "Hello, %s!\\n", "World");
fprintf(fp, "Score: %d\\n", 99);
fputs("Direct string\\n", fp);
fputc('A', fp);

fclose(fp);` },
      { heading:"Binary File I/O", lang:"c", code:
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
        tip:"Binary I/O with fwrite/fread is much faster than text I/O for large datasets and preserves the exact in-memory representation." }
    ]
  },
  {
    id:"memory", icon:"⧫", diff:"advanced",
    title:"Memory Management",
    subtitle:"Stack vs heap, leaks & best practices",
    sections:[
      { heading:"Stack vs Heap",
        table:{ headers:["Property","Stack","Heap"], rows:[
          ["Allocation","Automatic (compiler)","Manual (malloc/free)"],
          ["Speed","Very fast","Slower"],
          ["Size","Limited (~1–8 MB)","Limited by RAM"],
          ["Lifetime","Until function returns","Until free() is called"],
          ["Management","Compiler handles","You handle it"],
          ["Risk","Stack overflow","Memory leaks, dangling ptrs"]
        ]}
      },
      { heading:"malloc / calloc / realloc / free", lang:"c", code:
`#include <stdlib.h>

// malloc: uninitialized
int *a = (int *)malloc(10 * sizeof(int));

// calloc: zero-filled
int *b = (int *)calloc(10, sizeof(int));

// realloc: resize
a = (int *)realloc(a, 20 * sizeof(int));

// Always check!
if (!a || !b) { fprintf(stderr, "OOM\\n"); exit(1); }

free(a); a = NULL;
free(b); b = NULL;` },
      { heading:"Common Memory Bugs", lang:"c", code:
`// 1. MEMORY LEAK — forget to free
int *p = malloc(100);
// ... forgot free(p)!

// 2. DANGLING POINTER — use after free
int *p2 = malloc(sizeof(int));
free(p2);
*p2 = 5;  // UNDEFINED BEHAVIOUR!

// 3. DOUBLE FREE
free(p2);
free(p2);  // crash!

// 4. BUFFER OVERFLOW
char buf[10];
strcpy(buf, "This is way too long!!");  // DANGER

// SAFE:
strncpy(buf, "Safe", sizeof(buf) - 1);
buf[sizeof(buf) - 1] = '\\0';`,
        warn:"These bugs cause undefined behaviour — crash immediately, silent corruption, or seem fine until production. Use Valgrind to detect them." },
      { heading:"Valgrind & AddressSanitizer", lang:"bash", code:
`# Valgrind
gcc -g program.c -o program
valgrind --leak-check=full ./program

# AddressSanitizer (faster, built into GCC/Clang)
gcc -fsanitize=address -g program.c -o program
./program` },
      { heading:"Linked List (Dynamic Memory)", lang:"c", code:
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
}` }
    ]
  },
  {
    id:"preprocessor", icon:"#", diff:"intermediate",
    title:"Preprocessor & Macros",
    subtitle:"#define, #include, guards & conditional compilation",
    sections:[
      { heading:"What is the Preprocessor?", body:"The C preprocessor runs before compilation. It handles #include, #define, and conditional directives — pure text substitution before the compiler sees code.", lang:"c", code:
`// The preprocessor:
// 1. Strips comments
// 2. Processes #include (pastes file contents)
// 3. Expands #define macros
// 4. Handles #if / #ifdef blocks

// Then the real compiler runs on the result` },
      { heading:"#define Macros", lang:"c", code:
`#define MAX 100
#define PI 3.14159265

// Function-like macros
#define SQUARE(x)   ((x) * (x))
#define MAX2(a, b)  ((a) > (b) ? (a) : (b))
#define ABS(x)      ((x) < 0 ? -(x) : (x))

// ALWAYS wrap params in parens!
printf("%d\\n", SQUARE(3 + 1));  // 16, not 7`,
        tip:"Prefer const variables over #define for constants — they have types and scope, which makes debugging easier." },
      { heading:"Header Guards", lang:"c", code:
`// mylib.h — prevent double inclusion
#ifndef MYLIB_H
#define MYLIB_H

typedef struct { int x, y; } Point;
Point createPoint(int x, int y);

#endif  // MYLIB_H

// Modern alternative (widely supported):
#pragma once` },
      { heading:"Conditional Compilation", lang:"c", code:
`#define DEBUG 1

#if DEBUG
    #define LOG(msg) printf("[DEBUG] %s\\n", msg)
#else
    #define LOG(msg) // compiled out
#endif

// Platform detection
#ifdef _WIN32
    #define CLEAR "cls"
#elif defined(__linux__)
    #define CLEAR "clear"
#endif

LOG("Starting");  // only prints if DEBUG=1` },
      { heading:"Predefined Macros", lang:"c", code:
`printf("File:     %s\\n", __FILE__);
printf("Line:     %d\\n", __LINE__);
printf("Function: %s\\n", __func__);
printf("Date:     %s\\n", __DATE__);
printf("Time:     %s\\n", __TIME__);

#define ASSERT(cond) \\
    if (!(cond)) { \\
        fprintf(stderr, "Assert failed: %s:%d\\n", \\
                __FILE__, __LINE__); \\
        exit(1); \\
    }` }
    ]
  },
  {
    id:"enums", icon:"≡", diff:"beginner",
    title:"Enums & Type Aliases",
    subtitle:"enum, typedef, named constants & bit flags",
    sections:[
      { heading:"What is an Enum?", body:"An enum assigns meaningful names to integer constants, making code far more readable than bare numbers.", lang:"c", code:
`#include <stdio.h>

enum Day {
    MONDAY = 1,
    TUESDAY,   // 2
    WEDNESDAY, // 3
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

int main() {
    enum Day today = WEDNESDAY;
    if (today == WEDNESDAY) printf("Midweek!\\n");
    printf("Day: %d\\n", today);  // 3
    return 0;
}` },
      { heading:"typedef enum", lang:"c", code:
`typedef enum {
    RED,    // 0
    GREEN,  // 1
    BLUE    // 2
} Color;

typedef enum {
    IDLE, RUNNING, PAUSED, STOPPED
} ProcessState;

Color c = GREEN;
ProcessState state = RUNNING;
printf("Color: %d\\n", c);      // 1
printf("State: %d\\n", state);  // 1`,
        tip:"Enum values are just ints. You can switch on them, store them in arrays, and pass them to functions like any integer." },
      { heading:"Enums as Bit Flags", lang:"c", code:
`typedef enum {
    PERM_NONE    = 0,
    PERM_READ    = 1 << 0,   // 001
    PERM_WRITE   = 1 << 1,   // 010
    PERM_EXECUTE = 1 << 2    // 100
} Permission;

int perms = PERM_READ | PERM_WRITE;  // 011

if (perms & PERM_READ)       printf("Can read\\n");
if (perms & PERM_WRITE)      printf("Can write\\n");
if (!(perms & PERM_EXECUTE)) printf("Cannot execute\\n");

perms |= PERM_EXECUTE;  // add
perms &= ~PERM_WRITE;   // remove` },
      { heading:"switch with Enums", lang:"c", code:
`typedef enum { NORTH, SOUTH, EAST, WEST } Direction;

void move(Direction dir) {
    switch (dir) {
        case NORTH: printf("Moving North\\n"); break;
        case SOUTH: printf("Moving South\\n"); break;
        case EAST:  printf("Moving East\\n");  break;
        case WEST:  printf("Moving West\\n");  break;
    }
}

int main() {
    move(EAST);
    return 0;
}`,
        note:"With -Wall, GCC warns if a switch on an enum is missing cases — a powerful safety net." }
    ]
  },
  {
    id:"cmdargs", icon:"$", diff:"intermediate",
    title:"Command-Line Arguments",
    subtitle:"argc, argv, stdin/stderr & string conversions",
    sections:[
      { heading:"argc & argv", body:"main() accepts two parameters: argc (argument count) and argv (array of strings).", lang:"c", code:
`#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program: %s\\n", argv[0]);
    printf("Args: %d\\n", argc - 1);

    for (int i = 1; i < argc; i++) {
        printf("  argv[%d] = \\"%s\\"\\n", i, argv[i]);
    }
    return 0;
}
// Run:  ./program hello world 42
// Output:
//   Program: ./program
//   Args: 3
//   argv[1] = "hello"`,
        warn:"argv[argc] is always NULL. Never access argv[i] without checking i < argc first — this causes a segfault." },
      { heading:"Mini Calculator Example", lang:"c", code:
`#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 4) {
        fprintf(stderr, "Usage: %s <n1> <op> <n2>\\n", argv[0]);
        return 1;
    }
    double a  = atof(argv[1]);
    char   op = argv[2][0];
    double b  = atof(argv[3]);

    switch (op) {
        case '+': printf("%.6g\\n", a + b); break;
        case '-': printf("%.6g\\n", a - b); break;
        case '*': printf("%.6g\\n", a * b); break;
        case '/':
            if (b == 0) { fprintf(stderr, "div by zero\\n"); return 1; }
            printf("%.6g\\n", a / b); break;
        default:
            fprintf(stderr, "Unknown op: %c\\n", op); return 1;
    }
    return 0;
}
// ./calc 10 + 5  →  15` },
      { heading:"stdin / stdout / stderr", lang:"c", code:
`char buf[256];
fgets(buf, sizeof(buf), stdin);    // read from keyboard/pipe
fprintf(stdout, "Got: %s", buf);   // normal output
fprintf(stderr, "Error!\\n");      // error channel

// Shell redirection
// ./program < input.txt       stdin from file
// ./program > output.txt      stdout to file
// ./program 2> errors.txt     stderr to file` },
      { heading:"String ↔ Number Conversions", lang:"c", code:
`#include <stdlib.h>

// atoi — quick, no error checking
int n = atoi("42");       // 42
int bad = atoi("hello");  // 0 (silent fail!)

// strtol — safe, with error detection
char *endptr;
long val = strtol("123abc", &endptr, 10);
if (*endptr != '\\0')
    printf("Invalid chars: '%s'\\n", endptr);

// Number → string
char str[32];
snprintf(str, sizeof(str), "%d", 42);`,
        tip:"Prefer strtol/strtod over atoi/atof. They let you detect invalid input via endptr, while atoi silently returns 0 on failure." }
    ]
  },
  {
    id:"bestpractices", icon:"✦", diff:"advanced",
    title:"Best Practices & Patterns",
    subtitle:"Defensive coding, clean C & compiler flags",
    sections:[
      { heading:"Defensive Programming", lang:"c", code:
`// 1. Validate all function arguments
int divide(int a, int b) {
    if (b == 0) {
        fprintf(stderr, "Error: div by zero\\n");
        return -1;
    }
    return a / b;
}

// 2. Always check allocations
int *buf = (int *)malloc(100 * sizeof(int));
if (!buf) { perror("malloc"); exit(EXIT_FAILURE); }

// 3. Initialise variables
int  x   = 0;
int *ptr = NULL;

// 4. Use sizeof, not hardcoded sizes
int arr[20];
int n = sizeof(arr) / sizeof(arr[0]);  // always 20`,
        tip:"Compile with -Wall -Wextra -fsanitize=address during development. These flags catch the majority of common C bugs." },
      { heading:"Guard Clauses (Early Return)", lang:"c", code:
`// BAD: deeply nested
int processFile(const char *path) {
    if (path != NULL) {
        FILE *fp = fopen(path, "r");
        if (fp != NULL) {
            // ... logic buried here ...
            fclose(fp);
            return 0;
        }
    }
    return -1;
}

// GOOD: guard clauses — flat and readable
int processFile(const char *path) {
    if (path == NULL) return -1;

    FILE *fp = fopen(path, "r");
    if (fp == NULL) return -1;

    // ... logic is clear and flat ...
    fclose(fp);
    return 0;
}` },
      { heading:"Error Handling with errno", lang:"c", code:
`#include <errno.h>
#include <string.h>

FILE *fp = fopen("missing.txt", "r");
if (fp == NULL) {
    fprintf(stderr, "fopen: %s\\n", strerror(errno));
    // Output: fopen: No such file or directory
}

// Return-code pattern (standard C idiom)
typedef enum {
    OK = 0,
    ERR_NULL_PTR,
    ERR_OUT_OF_BOUNDS,
    ERR_NO_MEMORY
} Status;

Status process(int *data, int len) {
    if (!data)    return ERR_NULL_PTR;
    if (len <= 0) return ERR_OUT_OF_BOUNDS;
    return OK;
}` },
      { heading:"Naming Conventions", lang:"c", code:
`// Macros — SCREAMING_SNAKE_CASE
#define MAX_BUFFER_SIZE 1024

// Types (structs, typedefs, enums) — PascalCase
typedef struct { int x, y; } Point;
typedef enum { RED, GREEN, BLUE } Color;

// Functions and variables — snake_case
int calculate_score(int hits, int misses);
int user_score = 0;

// Avoid magic numbers — give them names!
// BAD:  if (status == 3) { ... }
// GOOD: if (status == STATUS_ERROR) { ... }` },
      { heading:"Recommended Compiler Flags", lang:"bash", code:
`# Development — max warnings + runtime checks
gcc -Wall -Wextra -Wpedantic -g \\
    -fsanitize=address -std=c11 \\
    program.c -o program

# Release — optimised
gcc -O2 -std=c11 program.c -o program

# Flag reference:
# -Wall          most common warnings
# -Wextra        additional warnings
# -Wpedantic     strict ISO C compliance
# -g             debug symbols (gdb/valgrind)
# -O2            speed optimisation
# -std=c11       C11 standard
# -fsanitize=address  runtime memory checks`,
        tip:"Make -Wall -Wextra your default. Warnings are the compiler helping you. Fix every single one." }
    ]
  }
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let active      = 0;
let sidebarOpen = true;
let progress    = {};
try { progress = JSON.parse(localStorage.getItem("c_course_v2") || "{}"); } catch {}

// ══════════════════════════════════════════════
//  UTILITY
// ══════════════════════════════════════════════
const isMobile = () => window.innerWidth <= 640;

function esc(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// ══════════════════════════════════════════════
//  SYNTAX HIGHLIGHT
// ══════════════════════════════════════════════
function highlight(raw, lang) {
  if (lang !== "c" && lang !== "bash") return esc(raw);
  return raw.split("\n").map(line => {
    let commentSuffix = "";
    const ci = line.indexOf("//");
    if (ci !== -1) { commentSuffix = line.slice(ci); line = line.slice(0, ci); }
    let out = "", i = 0, src = line;
    while (i < src.length) {
      if (i === 0 && src.trimStart().startsWith("#")) {
        out += `<span class="sp">${esc(src)}</span>`; i = src.length; break;
      }
      if (src[i] === '"' || src[i] === "'") {
        const q = src[i]; let j = i + 1;
        while (j < src.length && src[j] !== q) { if (src[j]==="\\") j++; j++; }
        out += `<span class="ss">${esc(src.slice(i, j+1))}</span>`; i = j+1; continue;
      }
      if (/[a-zA-Z_]/.test(src[i])) {
        let j = i;
        while (j < src.length && /[a-zA-Z0-9_]/.test(src[j])) j++;
        const word = src.slice(i, j);
        const ctrl = ["return","break","continue","goto","sizeof","if","else","for","while","do","switch","case","default"];
        const kw   = ["int","float","double","char","void","struct","typedef","union","const","static","extern","auto","register","unsigned","signed","long","short","NULL","true","false","include","define","ifndef","ifdef","endif","pragma","enum","exit","FILE"];
        const isFunc = j < src.length && src[j] === "(";
        if (ctrl.includes(word))    out += `<span class="skr">${esc(word)}</span>`;
        else if (kw.includes(word)) out += `<span class="sk">${esc(word)}</span>`;
        else if (isFunc)            out += `<span class="sf">${esc(word)}</span>`;
        else                        out += esc(word);
        i = j; continue;
      }
      if (/[0-9]/.test(src[i]) || (src[i]==="." && /[0-9]/.test(src[i+1]||""))) {
        let j = i;
        while (j < src.length && /[0-9a-fxXbB._fFuUlL]/.test(src[j])) j++;
        out += `<span class="sn">${esc(src.slice(i,j))}</span>`; i = j; continue;
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
  return `<div class="code-wrap">
    <div class="code-header">
      <span class="code-lang">${label}</span>
      <button class="copy-btn" onclick="copyCode('${id}',this)">COPY</button>
    </div>
    <pre id="${id}">${highlight(code, lang)}</pre>
  </div>`;
}

function renderTable(headers, rows) {
  const ths = headers.map(h=>`<th>${h}</th>`).join("");
  const trs = rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  return `<div class="tbl-wrap"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderCallout(type, text) {
  const icons = {tip:"💡", warn:"⚠️", note:"ℹ️"};
  return `<div class="callout callout-${type}">
    <span class="callout-icon">${icons[type]||"💡"}</span>
    <span class="callout-text">${text}</span>
  </div>`;
}

function renderSection(s) {
  let h = `<div class="section"><div class="sec-head"><span class="sec-arrow">▶</span> ${s.heading}</div>`;
  if (s.body)    h += `<p class="sec-body">${s.body}</p>`;
  if (s.tip)     h += renderCallout("tip",  s.tip);
  if (s.warn)    h += renderCallout("warn", s.warn);
  if (s.note)    h += renderCallout("note", s.note);
  if (s.bullets) h += `<ul class="sec-ul">${s.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`;
  if (s.table)   h += renderTable(s.table.headers, s.table.rows);
  if (s.code)    h += renderCode(s.code, s.lang||"c");
  return h + `</div>`;
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
  }).catch(() => {
    // Fallback for older browsers
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(pre);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand("copy");
    sel.removeAllRanges();
    btn.textContent = "✓ COPIED";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "COPY"; btn.classList.remove("copied"); }, 1800);
  });
};

// ══════════════════════════════════════════════
//  PROGRESS
// ══════════════════════════════════════════════
function saveProgress() {
  try { localStorage.setItem("c_course_v2", JSON.stringify(progress)); } catch {}
}

window.markDone = function markDone(id) {
  progress[id] = true;
  saveProgress();
  updateProgressUI();
  renderModule(active);
  renderSidebar();
};

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
  let html = "", count = 0;
  modules.forEach((m, i) => {
    const visible = !query || m.title.toLowerCase().includes(query) || m.subtitle.toLowerCase().includes(query);
    if (!visible) return;
    count++;
    const check = progress[m.id]
      ? `<span class="mod-check">✓</span>`
      : `<span class="mod-diff diff-${m.diff||'beginner'}"></span>`;
    html += `<div class="mod-item ${i===active?"active":""}" onclick="navigate(${i})" role="button" tabindex="0">
      <span class="mod-icon">${m.icon}</span>
      <div class="mod-info">
        <div class="mod-name">${m.title}</div>
        <div class="mod-sub">${m.subtitle}</div>
      </div>
      ${check}
    </div>`;
  });
  if (!count) html = `<div class="no-results">No modules match "${query}"</div>`;
  list.innerHTML = html;
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

  // Desktop nav buttons
  document.getElementById("prev-btn").disabled = idx === 0;
  document.getElementById("next-btn").disabled = idx === modules.length - 1;

  // Mobile nav buttons
  const mobPrev = document.getElementById("mob-prev");
  const mobNext = document.getElementById("mob-next");
  if (mobPrev) mobPrev.disabled = idx === 0;
  if (mobNext) mobNext.disabled = idx === modules.length - 1;

  // Difficulty labels
  const diffLabel = {beginner:"Beginner", intermediate:"Intermediate", advanced:"Advanced"};
  const diffBadge = `<div class="diff-badge ${m.diff||'beginner'}">● ${diffLabel[m.diff]||"Beginner"}</div>`;

  // Tags
  const tags = m.sections.map(s => `<span class="tag">${s.heading}</span>`).join("");

  // Sections
  const sectHtml = m.sections.map(renderSection).join("");

  // Footer
  const nextBtnHtml = idx < modules.length - 1
    ? `<button id="next-link-btn" onclick="navigate(${idx+1}); markDone('${m.id}')">Next: ${modules[idx+1].title} →</button>`
    : "";

  const done       = modules.filter(x => progress[x.id]).length;
  const isLastDone = idx === modules.length - 1 && done >= modules.length - 1;
  const banner     = isLastDone
    ? `<div id="complete-banner" class="show"><div class="emoji">🎉</div><div class="ct">Course Complete!</div><div class="cs">You've finished all ${modules.length} modules. Keep coding!</div></div>`
    : `<div id="complete-banner"></div>`;

  document.getElementById("content-inner").innerHTML = `
    <div class="mod-header">
      <div class="mod-num">MODULE ${String(idx+1).padStart(2,"0")} / ${modules.length}</div>
      <h1 class="mod-h1">${m.title}</h1>
      <div class="mod-desc">${m.subtitle}</div>
      ${diffBadge}
      <div class="tag-row">${tags}</div>
    </div>
    ${sectHtml}
    <div class="mod-footer">
      <button id="mark-btn" class="${progress[m.id]?"done":""}" onclick="markDone('${m.id}')">
        ${progress[m.id] ? "✓ Completed" : "Mark as Complete"}
      </button>
      ${nextBtnHtml}
    </div>
    ${banner}`;

  document.getElementById("content").scrollTo({top:0, behavior:"instant"});
  renderSidebar();
}

// ══════════════════════════════════════════════
//  NAVIGATION  (with fade)
// ══════════════════════════════════════════════
window.navigate = function(idx) {
  if (idx < 0 || idx >= modules.length) return;
  // close sidebar on mobile after navigating
  if (isMobile()) closeSidebar();
  const ci = document.getElementById("content-inner");
  ci.classList.add("fading");
  setTimeout(() => {
    active = idx;
    renderModule(idx);
    ci.classList.remove("fading");
  }, 130);
};

// ══════════════════════════════════════════════
//  SIDEBAR TOGGLE
// ══════════════════════════════════════════════
function openSidebar() {
  const sb  = document.getElementById("sidebar");
  const bd  = document.getElementById("backdrop");
  const btn = document.getElementById("toggle-btn");
  if (isMobile()) {
    sb.classList.remove("collapsed");
    sb.classList.add("open");
    bd.classList.add("show");
    btn.querySelector("#toggle-icon").textContent = "✕";
  } else {
    sb.classList.remove("collapsed");
    sidebarOpen = true;
    btn.querySelector("#toggle-icon").textContent = "☰";
  }
}

function closeSidebar() {
  const sb  = document.getElementById("sidebar");
  const bd  = document.getElementById("backdrop");
  const btn = document.getElementById("toggle-btn");
  if (isMobile()) {
    sb.classList.remove("open");
    sb.classList.add("collapsed");
    bd.classList.remove("show");
    btn.querySelector("#toggle-icon").textContent = "☰";
  } else {
    sb.classList.add("collapsed");
    sidebarOpen = false;
    btn.querySelector("#toggle-icon").textContent = "▶";
  }
}

function toggleSidebar() {
  const sb = document.getElementById("sidebar");
  if (isMobile()) {
    if (sb.classList.contains("open")) closeSidebar(); else openSidebar();
  } else {
    if (sidebarOpen) closeSidebar(); else openSidebar();
  }
}

// ══════════════════════════════════════════════
//  EVENT LISTENERS
// ══════════════════════════════════════════════

// Toggle button
document.getElementById("toggle-btn").addEventListener("click", toggleSidebar);

// Backdrop click closes drawer
document.getElementById("backdrop").addEventListener("click", closeSidebar);

// Desktop prev/next
document.getElementById("prev-btn").addEventListener("click", () => {
  if (active > 0) navigate(active - 1);
});
document.getElementById("next-btn").addEventListener("click", () => {
  markDone(modules[active].id);
  if (active < modules.length - 1) navigate(active + 1);
});

// Mobile bottom bar
document.getElementById("mob-prev").addEventListener("click", () => {
  if (active > 0) navigate(active - 1);
});
document.getElementById("mob-next").addEventListener("click", () => {
  markDone(modules[active].id);
  if (active < modules.length - 1) navigate(active + 1);
});
document.getElementById("mob-menu").addEventListener("click", () => {
  toggleSidebar();
});

// Search
document.getElementById("search-input").addEventListener("input", renderSidebar);

// Keyboard: ← → to navigate, T to toggle sidebar
document.addEventListener("keydown", (e) => {
  if (["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    if (active < modules.length - 1) { markDone(modules[active].id); navigate(active + 1); }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    if (active > 0) navigate(active - 1);
  } else if (e.key === "t" || e.key === "T") {
    toggleSidebar();
  }
});

// Keyboard: Enter/Space on sidebar items
document.getElementById("module-list").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.target.click(); }
});

// Resize: reset sidebar state when crossing breakpoint
window.addEventListener("resize", () => {
  const sb = document.getElementById("sidebar");
  const bd = document.getElementById("backdrop");
  if (!isMobile()) {
    // Going to desktop — clear mobile classes
    sb.classList.remove("open");
    bd.classList.remove("show");
    if (sidebarOpen) sb.classList.remove("collapsed");
    else sb.classList.add("collapsed");
    document.getElementById("toggle-icon").textContent = sidebarOpen ? "☰" : "▶";
  } else {
    // Going to mobile — clear desktop collapsed state
    if (!sb.classList.contains("open")) {
      sb.classList.add("collapsed");
    }
  }
});

// ══════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════
document.getElementById("footer-count").textContent = `${modules.length} modules · C89/C99/C11`;
// On mobile, start with sidebar closed
if (isMobile()) {
  document.getElementById("sidebar").classList.add("collapsed");
  sidebarOpen = false;
}
updateProgressUI();
renderModule(0);