# Keil 调试

Keil 自带的在线调试是入门最省事的方案：断点、单步、观察变量、外设寄存器视图一应俱全，网上教程和资料也最丰富。缺点是没有可视化曲线等界面——需要看曲线时用 [Ozone](debug-ozone.md)。

## 基本用法

- 进入调试：工具栏放大镜图标（或 Ctrl+F5），配合 ST-Link / DAP-Link / J-Link 通过 SWD 连接目标板
- 常用操作：断点（F9）、全速运行（F5）、单步步入（F11）、步过（F10）
- Watch 窗口：观察变量实时值；Memory 窗口：查看内存区域；Peripherals 菜单：外设寄存器视图

## 学习资料

- [B 站搜索：Keil 调试教程](https://search.bilibili.com/all?keyword=Keil+调试+教程) — 跟一个完整走一遍断点/单步/Watch 的视频即可
- [【中科大RM电控合集】手把手Keil+STM32CubeMX+VsCode环境配置](https://www.bilibili.com/video/BV1bU4y1D7nJ?vd_source=0ec807ca37217dda15dcd3c1863ba0c9) — 环境配置里含调试部分

!!! note
    调试实时性代码（如电机闭环，使用 RTOS）时断点会破坏时序，此时优先用串口打印 / 波形等手段，见[其他调试工具](debug-tools.md)。

## 待补充

- [ ] 队内常用的 Keil 调试技巧汇总
