# 第二次作业标准答案

[返回第三次培训讲义](training-03.md)

源码统一采用 UTF-8 编码，每题独立为一个多文件小工程（`main.c` + 函数实现 `.c` + `.h`）。进入题目目录编译，例如第一题：

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic -Werror main.c sum_array.c -o sum_array.exe
```

其余各题把 `sum_array.c` 换成对应题的实现文件即可。


## 第1题：递归实现数组元素求和

### main.c

```c
#include <stdio.h>
#include "sum_array.h"

// 限制数组最大长度，避免输入过长导致数组越界。
#define MAX_ARRAY_SIZE 1000

int main(void)
{
    int arr[MAX_ARRAY_SIZE];
    int n;

    // 输入格式：先输入数组长度 n，再输入 n 个整数。
    if (scanf("%d", &n) != 1 || n < 1 || n > MAX_ARRAY_SIZE) {
        fprintf(stderr, "输入错误：数组长度必须在 1 到 %d 之间。\n", MAX_ARRAY_SIZE);
        return 1;
    }

    // 每次读取一个整数，并通过下标 arr[i] 存入对应位置。
    for (int i = 0; i < n; ++i) {
        if (scanf("%d", &arr[i]) != 1) {
            fprintf(stderr, "输入错误：请按要求输入整数。\n");
            return 1;
        }
    }

    // 将数组和有效长度传给递归函数，在主函数中输出最终结果。
    printf("%d\n", sumArray(arr, n));
    return 0;
}
```

### sum_array.c

```c
#include "sum_array.h"

int sumArray(const int arr[], int n)
{
    // 递归必须有明确的结束条件。
    // 当 n <= 0 时，没有需要累加的元素，因此元素和为 0。
    if (n <= 0) {
        return 0;
    }

    // 将问题拆成两部分：最后一个元素 arr[n - 1]，以及前 n - 1 个元素的和。
    // 每次递归都会让 n 减小 1，最终到达 n == 0 的递归出口。
    return arr[n - 1] + sumArray(arr, n - 1);
}
```

### sum_array.h

```c
#ifndef SUM_ARRAY_H
#define SUM_ARRAY_H

// 递归计算整型数组中前 n 个元素的和。
// arr 指向数组首元素，n 表示参与求和的元素个数。
// 使用 const 表明函数只读取数组，不会修改数组中的数据。
int sumArray(const int arr[], int n);

#endif // SUM_ARRAY_H
```


## 第2题：学生成绩统计与最高平均分查找

### main.c

```c
#include <stdio.h>
#include "score_stats.h"

int main(void)
{
    float score[STUDENT_COUNT][COURSE_COUNT];

    // 按顺序输入 4 名学生的成绩，每名学生依次输入 3 门课程成绩。
    // 输入示例：80 90 85  76 88 92  91 90 89  70 75 80
    for (int student_idx = 0; student_idx < STUDENT_COUNT; ++student_idx) {
        for (int course_idx = 0; course_idx < COURSE_COUNT; ++course_idx) {
            if (scanf("%f", &score[student_idx][course_idx]) != 1) {
                fprintf(stderr, "输入错误：请按要求输入数字成绩。\n");
                return 1;
            }
        }
    }

    // 学生编号从 1 开始，而数组下标从 0 开始，因此输出时加 1。
    for (int student_idx = 0; student_idx < STUDENT_COUNT; ++student_idx) {
        printf("学生 %d：%.1f\n",
               student_idx + 1, calcAverage(score, student_idx));
    }

    // findTopStudent 返回的是数组下标，输出学生编号时同样加 1。
    // 再调用 calcAverage 得到该学生的平均分。
    int top_idx = findTopStudent(score);
    printf("最高平均分：学生 %d，%.1f\n",
           top_idx + 1, calcAverage(score, top_idx));

    return 0;
}
```

### score_stats.c

```c
#include "score_stats.h"

float calcAverage(float score[STUDENT_COUNT][COURSE_COUNT], int student_idx)
{
    float total = 0.0f;

    // 先检查学生下标，避免访问二维数组中不存在的行。
    // 题目规定正常调用时下标在 0 到 3 之间；这里额外处理非法参数。
    if (student_idx < 0 || student_idx >= STUDENT_COUNT) {
        return 0.0f;
    }

    // 固定 student_idx 这一行，遍历这一行的 3 门课程成绩。
    // 使用二维数组下标访问元素，不使用指针算术。
    for (int course_idx = 0; course_idx < COURSE_COUNT; ++course_idx) {
        total += score[student_idx][course_idx];
    }

    // 转换为平均分并返回；本函数只计算，不负责输入或输出。
    return total / COURSE_COUNT;
}

int findTopStudent(float score[STUDENT_COUNT][COURSE_COUNT])
{
    // 先把第 0 名学生设为当前最高分学生，保证返回的是有效下标。
    int top_idx = 0;
    float top_average = calcAverage(score, top_idx);

    // 从第 1 名学生开始比较，并调用 calcAverage 统一计算每人的平均分。
    for (int student_idx = 1; student_idx < STUDENT_COUNT; ++student_idx) {
        float average = calcAverage(score, student_idx);

        // 只有发现严格更高的平均分才更新。
        // 如果平均分相同，不更新下标，因此会保留先出现的较小下标。
        if (average > top_average) {
            top_average = average;
            top_idx = student_idx;
        }
    }

    return top_idx;
}
```

### score_stats.h

```c
#ifndef SCORE_STATS_H
#define SCORE_STATS_H

// 本题固定为 4 名学生、每名学生 3 门课程。
// 将数量定义为常量，避免在多个文件中重复写数字。
#define STUDENT_COUNT 4
#define COURSE_COUNT 3

// 计算下标为 student_idx 的学生的平均分。
// student_idx 使用从 0 开始的数组下标，有效范围是 0 到 STUDENT_COUNT - 1。
float calcAverage(float score[STUDENT_COUNT][COURSE_COUNT], int student_idx);

// 查找平均分最高的学生，返回其数组下标。
// 如果最高平均分并列，返回下标较小的学生。
int findTopStudent(float score[STUDENT_COUNT][COURSE_COUNT]);

#endif // SCORE_STATS_H
```


## 第3题：结构体实现复数乘法运算

### main.c

```c
#include <stdio.h>
#include "complex.h"

int main(void)
{
    Complex c1;
    Complex c2;
    Complex result;

    // 依次输入两个复数的实部和虚部系数，例如：3 2  1 4。
    if (scanf("%d %d %d %d", &c1.real, &c1.im, &c2.real, &c2.im) != 4) {
        fprintf(stderr, "输入错误：请依次输入两个复数的实部和虚部整数。\n");
        return 1;
    }

    // 调用独立函数计算乘积。
    result = complexMult(c1, c2);

    // %+d 会在正数前显示 +，负数前显示 -，从而正确呈现实部与虚部。
    // 例如结果会输出为  -5+14i 或 3-2i 的形式。
    printf("%d%+di\n", result.real, result.im);

    return 0;
}
```

### complex.c

```c
#include "complex.h"

Complex complexMult(Complex c1, Complex c2)
{
    Complex result;

    // 根据 (a + bi)(c + di) = (ac - bd) + (ad + bc)i 计算。
    // 实部为两个实部相乘，再减去两个虚部系数的乘积。
    result.real = c1.real * c2.real - c1.im * c2.im;

    // 虚部系数为“第一个实部 × 第二个虚部”加上“第一个虚部 × 第二个实部”。
    result.im = c1.real * c2.im + c1.im * c2.real;

    // 结构体可以作为函数返回值，把完整的复数结果返回给调用者。
    return result;
}
```

### complex.h

```c
#ifndef COMPLEX_H
#define COMPLEX_H

// 用结构体表示复数：real 是实部，im 是虚部的系数。
// 例如 3 + 2i 表示为 real = 3、im = 2。
typedef struct {
    int real;
    int im;
} Complex;

// 接收两个 Complex 结构体，返回它们相乘得到的新复数。
// 参数按值传递，函数不会直接修改调用方的两个复数。
Complex complexMult(Complex c1, Complex c2);

#endif // COMPLEX_H
```


## 第4题：枚举类型实现小球颜色组合枚举

### main.c

```c
#include "color_combinations.h"

int main(void)
{
    // 组合枚举和输出由函数完成，主函数只负责调用。
    printColorCombinations();
    return 0;
}
```

### color_combinations.c

```c
#include <stdio.h>
#include "color_combinations.h"

// 将枚举值转换为对应的中文名称。
// 使用 switch 分支逐个匹配枚举值，避免使用字符串数组循环输出组合。
static const char *colorName(enum Color color)
{
    switch (color) {
    case Red:
        return "红色";
    case Yellow:
        return "黄色";
    case White:
        return "白色";
    default:
        return "未知颜色";
    }
}

void printColorCombinations(void)
{
    // 外层循环依次选择第一种颜色：红、黄、白。
    for (enum Color first = Red; first <= White;
         first = (enum Color)(first + 1)) {

        // 第二种颜色从 first + 1 开始，保证两种颜色不相同。
        // 这种遍历方式也避免了红黄与黄红被重复输出。
        for (enum Color second = (enum Color)(first + 1);
             second <= White;
             second = (enum Color)(second + 1)) {
            printf("%s - %s\n", colorName(first), colorName(second));
        }
    }
}
```

### color_combinations.h

```c
#ifndef COLOR_COMBINATIONS_H
#define COLOR_COMBINATIONS_H

// 枚举值默认从 0 开始递增，分别对应红、黄、白三种颜色。
// 这里使用枚举类型表示颜色，而不是用整数或字符串数组代替。
enum Color {
    Red,
    Yellow,
    White
};

// 遍历枚举值并输出所有不重复的两两不同颜色组合。
void printColorCombinations(void);

#endif // COLOR_COMBINATIONS_H
```


## 第5题：人员信息管理系统（结构体嵌套共用体）

### main.c

```c
#include <stdio.h>
#include "person.h"

int main(void)
{
    // 初始化 3 名人员，数组中的每个元素都是一个 Person 结构体。
    // 使用指定成员初始化，可以直观看到每个人的身份以及对应的共用体成员。
    Person people[3] = {
        { .name = "张三", .id = 1001, .role = 's', .info.score = 92.5f },
        { .name = "李老师", .id = 2001, .role = 't', .info.subject = "C语言基础" },
        { .name = "王五", .id = 1002, .role = 's', .info.score = 88.0f }
    };

    // 将结构体数组中的每个人依次传给 printPerson。
    for (int i = 0; i < 3; ++i) {
        printPerson(people[i]);
    }

    // personCount 由 printPerson 更新，主函数只负责在最后输出统计结果。
    printf("人员总数量：%d\n", personCount);
    return 0;
}
```

### person.c

```c
#include <stdio.h>
#include "person.h"

// 全局变量只在一个 .c 文件中定义一次，初始值为 0。
int personCount = 0;

void printPerson(Person p)
{
    // 共用体成员共享内存，必须先检查 role，再读取对应的有效成员。
    // 学生读取 info.score，教师读取 info.subject，不能混用这两个成员。
    if (p.role == 's') {
        printf("学生：姓名=%s，编号=%d，分数=%.1f\n",
               p.name, p.id, p.info.score);
    } else if (p.role == 't') {
        printf("教师：姓名=%s，编号=%d，授课科目=%s\n",
               p.name, p.id, p.info.subject);
    } else {
        // 对未知身份标记作出提示，但仍然计入本次函数调用次数。
        printf("未知身份：姓名=%s，编号=%d，标记=%c\n",
               p.name, p.id, p.role);
    }

    // 每调用一次 printPerson，已输出人员计数加 1。
    ++personCount;
}
```

### person.h

```c
#ifndef PERSON_H
#define PERSON_H

// 姓名与授课科目的字符数组容量，包含字符串结尾的 '\0' 空字符。
#define NAME_LENGTH 32
#define SUBJECT_LENGTH 32

// 共用体的所有成员共享同一块内存。
// 一个人只能根据身份使用其中一个成员：学生使用 score，教师使用 subject。
typedef union {
    float score;
    char subject[SUBJECT_LENGTH];
} ScoreInfo;

// Person 将基础身份信息与 ScoreInfo 组合起来。
// role == 's' 表示学生，role == 't' 表示教师。
typedef struct {
    char name[NAME_LENGTH];
    int id;
    char role;
    ScoreInfo info;
} Person;

// 全局计数器在 person.c 中定义，在其他源文件中通过 extern 声明访问。
// 每调用一次 printPerson，无论身份类型如何，计数器都会增加 1。
extern int personCount;

// 根据人员身份输出对应信息，并将已输出人员数 personCount 加 1。
void printPerson(Person p);

#endif // PERSON_H
```
