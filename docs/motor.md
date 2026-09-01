# 电机控制

这一章是电控组技术含量的集中体现，也是入队后参与项目的核心技能。

## 有刷直流电机（PWM + 驱动模块）

-  PWM 调速 + 方向控制的入门方案，配编码器可做测速闭环，是练习 PID 的最佳起点。

## PID 控制技术

PID是最基本的控制方法，几乎所有的自动化设备都使用pid控制算法作为基础控制方法，**PID是接触电机控制必须学明白的算法**，RM的赛车中有大量的pid应用，所以pid调参是一个电控的基本功。

[史上最详细的PID教程——理解PID原理及优化算法_串级pid为什么可以减小稳定时间-CSDN博客](https://blog.csdn.net/name_longming/article/details/115093338)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=657982678&bvid=BV1Uh4y1f7cL&cid=1183709606&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 无刷直流电机（RoboMaster 体系）

- [RoboMaster 规则 / 资料中心](https://bbs.robomaster.com/wiki/20204847) — M3508 / M2006 与 C610/C620 电调、GM6020 的说明书：CAN 控制帧格式、反馈报文、电流映射都在里面。
- 控制链路：主控 → CAN（见"通信协议"章）→ 电调 → 电机。电调内部跑 FOC，主控侧只需要发送目标电流。

## 前馈控制

- [搜索：前馈控制 + PID](https://www.bing.com/search?q=前馈控制+PID+云台) — 在反馈之外按模型直接补偿（重力、摩擦等），云台控制中与串级 PID 配合使用，各战队开源代码有大量实践。

## 学习建议

路线建议：在有刷电机 + 编码器上调速度环 → 位置环 → 串级，再迁移到 RM 电调的电流环。调参顺序先 P 后 D 再 I，配合 VOFA+ 之类上位机看曲线（见"调试方法"章）。
