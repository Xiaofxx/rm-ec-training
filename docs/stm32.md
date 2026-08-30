# STM32 开发基础

STM32 是电控组使用最广泛的主控芯片，RoboMaster 官方 Development Board（Type C）的主控即 STM32F407。单片机外设（GPIO、中断、定时器、DMA）是嵌入式开发的核心基础，也是后面通信、RTOS、电机控制各章的前置。

## 环境配置

- [STM32CubeMX](https://www.st.com/en/development-tools/stm32cubemx.html) — ST 官方图形化配置工具：点选外设、生成 HAL 库初始化工程，官方例程也基于此。
- [Keil MDK5](https://www.keil.com/mdk5/) — 传统单片机 IDE，配套教程资料最多。
- [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html) — ST 官方免费 IDE，与 CubeMX 深度集成，不想折腾授权就选它。

[截图：CubeMX 配置界面示例]

## 入门视频（三选一跟完）

- [B 站搜索：江协科技 STM32](https://search.bilibili.com/all?keyword=江协科技+STM32) — 公认适合零基础的入门系列，讲解清晰、节奏合理；使用标准库，但外设思想与 HAL 完全相通。
- [野火 STM32 教程](https://doc.embedfire.com) — 有 HAL 库版本，文档 + 视频配套，与 CubeMX 工作流一致，向 RM 实战过渡最顺。
- [正点原子](http://www.alientek.com) — 例程数量多、资料下载中心齐全，适合当作"例程库"查阅。

## HAL 库与官方文档

- CubeMX 生成的工程自带 HAL 库源码，函数用法看源码注释或工程内说明文档。
- 芯片参考手册（如 RM0090）讲寄存器级细节，遇到疑难时查阅，可从 ST 官网或 RM 资料中心获取。

## RoboMaster 开发板

- [RoboMaster 规则 / 资料中心](https://bbs.robomaster.com/wiki/20204847) — Development Board Type C 的用户手册、原理图、官方例程都在这里下载。
- 拿到开发板后建议先跑通：点灯 → 遥控器收数 → CAN 收发（官方例程），正好对应后续各章。

## 学习路线建议

按 GPIO → 中断 → 定时器与 PWM → DMA → UART 的顺序推进，与"通信协议""电机控制"两章衔接。每个外设学完务必在实板上验证，不要停留在仿真。

## 待补充

- [ ] 开发板/配件领取方式与清单
- [ ] 队内 STM32 工程模板仓库链接
- [ ] CubeMX 环境配置踩坑记录
