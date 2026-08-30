# 通信协议

机器人是靠通信连接起来的系统：遥控器把操作指令发给主控，主控通过 CAN 总线指挥电调，还要用串口与视觉上位机交换数据。协议本身不复杂，重点是每种协议都在实物上跑通一次收发。

## UART（串口）

- [B 站搜索：江协科技 串口](https://search.bilibili.com/all?keyword=江协科技+USART) — 串口配置与中断接收讲得最直观的入门视频。
- 串口是 printf 调试（见"调试方法"章）和上下位机通信的基础。

## I2C

- [B 站搜索：江协科技 I2C](https://search.bilibili.com/all?keyword=江协科技+I2C) — 起始/停止/应答时序的入门讲解。
- I2C 总线规范原文可搜索 "I2C-bus specification UM10204" 从 NXP 官网获取；OLED、IMU 等模块多挂在 I2C 上（见"常用模块"章）。

## SPI

- [B 站搜索：江协科技 SPI](https://search.bilibili.com/all?keyword=江协科技+SPI) — 四线时序与片选逻辑入门。
- 速度高于 I2C，常见于屏幕、Flash 等高速外设。

## CAN

CAN 是 RoboMaster 电控的重点：M3508 / M2006 / GM6020 电机全部通过 CAN 总线控制。

- [B 站搜索：CAN 总线入门](https://search.bilibili.com/all?keyword=CAN总线+入门) — 帧结构、仲裁机制先建立概念。
- [RoboMaster 规则 / 资料中心](https://bbs.robomaster.com/wiki/20204847) — 官方电调（C610/C620）说明书给出完整的 CAN 控制帧格式与例程。
- [RoboMaster 论坛](https://bbs.robomaster.com) — 搜索 "CAN"，各战队在报文解析与电机控制上的实践帖很多。

## 学习建议

每种协议配一次实物收发：UART 收遥控器数据、I2C 点亮 OLED、CAN 点电机。有条件用逻辑分析仪抓一遍波形，对照时序图理解（见"调试方法"章）。

## 待补充

- [ ] 队内上下位机通信协议文档
- [ ] CAN 报文 ID 分配表
- [ ] 各协议实物接线图
