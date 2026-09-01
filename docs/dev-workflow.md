# 开发方式

单片机开发的完整工具链由三部分组成：**代码编写**（编辑器/IDE + 编译工具链）、**烧录**（把固件下载进芯片）、**调试**（调试器 + 调试上位机）。方案没有绝对的优劣，本章给出当前主流的组合与适配关系，安装配置教程见[如何配置软件环境](env-setup.md)。

## 代码编写

### 方案一：CLion（队内现用）

- [CLion](https://www.jetbrains.com/clion/) — 对 CMake 工程支持最好；STM32CubeMX 可直接生成 CMake 工程，配合 `arm-none-eabi-gcc` 工具链编译。JetBrains 学生认证免费。
- 适合追求现代开发体验的人：代码跳转、重构、Git 集成体验都是三者中最好的。

### 方案二：VSCode + 插件

- [Visual Studio Code](https://code.visualstudio.com/) + [EIDE 插件](https://em-ide.com/)（[市场页](https://marketplace.visualstudio.com/items?itemName=cl.eide)）— 图形化创建/导入工程，支持 Keil 5 与 GCC 工具链，编译烧录一体。
- 轻量免费，插件生态好；习惯 VSCode 的人上手快。

### 方案三：Keil MDK5

- [Keil MDK5](https://www.keil.com/mdk5/) — 传统单片机 IDE，编写、编译、烧录、调试一体，网上教程与历史工程模板最多。
- 注意：老工程常见 AC5 编译器，新建工程建议用 AC6；Keil 本身也可以只当"编译烧录器"，代码编辑交给 VSCode。

## 调试方式

- **Keil 在线调试** — 断点、单步、观察变量与外设寄存器视图，与 Keil 工程无缝衔接，入门最省事。
- [Ozone](https://www.segger.com/products/development-tools/ozone-j-link-debugger) — Segger 出品的独立调试上位机，免费使用，支持实时变量监视、波形、指令级分析，配合 J-Link 体验最佳；**队内现用方案**。
- VSCode + Cortex-Debug 插件（基于 OpenOCD/pyOCD）— 进阶玩法，编辑调试一窗搞定。

!!! note
    调试带实时性的代码（如电机闭环）时断点会破坏时序，此时优先用串口打印/波形，见[调试方法](debugging.md)章。

## 适配的调试器

| 调试器 | 价格量级 | 配套 | 说明 |
|--------|----------|------|------|
| [ST-Link V2/V3](https://www.st.com/en/development-tools/st-link-v2.html) | 约几十元 | Keil / STM32CubeIDE / CubeProgrammer | ST 官方，STM32 全系支持，入门首选 |
| [DAP-Link](https://daplink.io/) | 约十几元 | CMSIS-DAP 标准协议，Keil / VSCode(pyOCD) 均可 | 开源协议、便宜，一个顶多个（还带串口） |
| [J-Link](https://www.segger.com/products/debug-probes/j-link) | 数百元起 | Ozone / Keil / VSCode | 性能与功能最强，用 Ozone 必备 |

连接方式统一为 **SWD**（SWDIO、SWCLK、GND，可选 3.3V 供电），RM 开发板（C 板）上预留了 SWD 排针，接上即可。

## 选型建议

- 新生入门：Keil 或 CLion 二选一，先把"编写 → 编译 → 烧录 → 点灯"跑通
- 队内统一方向：**CLion 编写 + Ozone 调试 + J-Link**（队里调试器可以共享借用）
- 不确定就先用手里现成的，工具永远不是学不会单片机的理由

## 待补充

- [ ] 队内统一工程模板（CLion/CMake 版）仓库链接
- [ ] Ozone + J-Link 的队内配置说明（含工程导入步骤）
- [ ] 调试器借用清单
