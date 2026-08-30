# 常用模块

模块是开发板与物理世界之间的接口：IMU 感知姿态，驱动模块带动电机，舵机实现关节动作，OLED 提供本地显示，蓝牙串口让调试摆脱线材。本章按模块整理资料；硬件手册（Datasheet）永远是第一手资料。

## IMU（惯性测量单元）

- MPU6050 — 入门最常用的 6 轴 IMU，I2C 接口，资料极多：[搜索教程](https://www.bing.com/search?q=MPU6050+STM32+教程)
- BMI088 — RM 开发板自带的高性能 IMU，手册见[官方资料中心](https://bbs.robomaster.com/wiki/20204847)；姿态解算可参考战队开源代码。

## 直流电机驱动模块

- TB6612 / L298N — 有刷直流电机的经典驱动方案：[搜索教程](https://www.bing.com/search?q=TB6612+STM32+教程)。配合编码器测速，是"电机控制"章的练习对象。

## 舵机

- SG90 / MG995 等 — PWM 脉宽直接控制角度，与定时器 PWM 衔接：[搜索教程](https://www.bing.com/search?q=舵机+PWM+STM32)

## OLED 屏

- 0.96 寸 SSD1306（I2C 接口）— 最常用的调试显示件：[搜索教程](https://www.bing.com/search?q=0.96寸+OLED+SSD1306+STM32)，开源驱动库很多。

## 蓝牙串口模块

- HC-05 等透传模块 — 接在 UART 上即可无线打印与发指令，调试利器：[搜索教程](https://www.bing.com/search?q=HC-05+蓝牙+AT指令)

## 找例程的通用方法

在 GitHub 用 `芯片 + 模块名` 搜索，按 Star 排序参考高口碑实现，例如 [STM32 OLED](https://github.com/search?q=STM32+OLED&type=repositories)。读懂再移植，不要整包照抄。

## 待补充

- [ ] 队内常用模块清单与领用流程
- [ ] 各模块接线图 / 引脚分配表
- [ ] 已验证可用的驱动库链接
