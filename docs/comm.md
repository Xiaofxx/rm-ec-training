# 通信协议

机器人是靠通信连接起来的系统：遥控器把操作指令发给主控，主控通过 CAN 总线指挥电调，还要用串口与视觉上位机交换数据。协议本身不复杂，重点是每种协议都在实物上跑通一次收发。

## UART（串口）、I2C、SPI

这里推荐一些教程：

[超简单的一种通信，2分钟搞懂，串口通讯的工作原理！](https://www.bilibili.com/video/BV1y34y147s5?vd_source=0ec807ca37217dda15dcd3c1863ba0c9)

[UART那么好用，为什么单片机还需要I2C和SPI？](https://www.bilibili.com/video/BV1im411Q73m?vd_source=0ec807ca37217dda15dcd3c1863ba0c9)

[深入理解SPi通讯协议，5分钟看懂！](https://www.bilibili.com/video/BV1F54y1M7e7?vd_source=0ec807ca37217dda15dcd3c1863ba0c9)

[【极速入门单片机】I2C总线的底层逻辑 时序电平全解析](https://www.bilibili.com/video/BV1dPaDzeEDg?vd_source=0ec807ca37217dda15dcd3c1863ba0c9)

当然，建议结合具体的模块，进行进一步的搭建学习

## CAN

CAN 是 RoboMaster 电控的重点：M3508 / M2006 / GM6020 电机全部通过 CAN 总线控制。

[【中科大RM电控合集】小白也能看懂的CAN通信+STM32CubeMX编程](https://www.bilibili.com/video/BV1HY411D7Ar?vd_source=0ec807ca37217dda15dcd3c1863ba0c9)

[Robomaster电控组小白的学习经验分享（一）——用大疆C型开发板控制GM6020电机转动到既定角度_大疆c板-CSDN博客](https://blog.csdn.net/weixin_73037889/article/details/130696750?ops_request_misc=&request_id=&biz_id=102&utm_term=C型开发板 CAN配置&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-130696750.142^v102^pc_search_result_base2&spm=1018.2226.3001.4187)

## 学习建议

每种协议配一次实物收发：UART 收遥控器数据、I2C 点亮 OLED、CAN 发报文控制电机。有条件用逻辑分析仪抓一遍波形，对照时序图理解（见"调试方法"章）。

