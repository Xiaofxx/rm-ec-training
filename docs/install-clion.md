# 安装配置 CLion 进行STM32开发

## 前言

在入门阶段，我们会先使用 **Keil** 进行 STM32 开发。Keil 的工程配置较为直观，相关教程和示例也比较丰富，适合初学者快速熟悉代码编写、编译和程序下载等基本流程。

在队内项目开发中，我们主要使用 **CLion**。与 Keil 相比，CLion 更适合代码规模较大、需要多人协作和长期维护的工程。下面将介绍 CLion 及其前置工具的安装与配置流程。

## 准备安装文件

安装所需的 `software` 压缩包请优先从 QQ 群文件中下载。若 QQ 群下载不便，也可通过[百度网盘（备用下载渠道）](https://pan.baidu.com/s/1PLoIJmeH33LL_dX_05VRsg?pwd=vc2z)下载，提取码：`vc2z`。下载完成后，请先解压压缩包，再按照下文步骤进行安装。

## 安装 STM32CubeCLT（前置步骤）

1. 打开 `software` 文件夹，双击运行 `stm32cubeclt_1.22.0-Win-x86_64.exe` 安装程序。

    ![运行 STM32CubeCLT 安装程序](assets/clion/01.png)

2. 点击 **Next**。

    ![进入 STM32CubeCLT 安装向导](assets/clion/02.png)

3. 点击 **I Agree**，接受许可协议。

    ![接受许可协议](assets/clion/03.png)

4. 点击 **Browse** 选择安装路径。建议安装到 C 盘以外的磁盘，例如 `D:\tools\ST\STM32CubeCLT_1.22.0`。安装路径中不要包含中文，并请记住该路径，后续配置 CLion 时会用到。

    ![选择 STM32CubeCLT 安装路径](assets/clion/04.png)

5. 点击 **Install** 开始安装。

    ![开始安装 STM32CubeCLT](assets/clion/05.png)

6. 在弹出的窗口中点击 **安装**。

    ![确认安装设备软件](assets/clion/06.png)

7. 安装完成后，点击 **Next**。

    ![完成 STM32CubeCLT 安装](assets/clion/07.png)

8. 点击 **Finish** 退出安装向导。

    ![退出 STM32CubeCLT 安装向导](assets/clion/08.png)

## 安装 CLion

1. 打开 `software` 文件夹，双击运行 `CLion-2026.2.2` 安装程序。

    ![运行 CLion 安装程序](assets/clion/09.png)

2. 点击 **下一步**。

    ![进入 CLion 安装向导](assets/clion/10.png)

3. 点击 **浏览** 选择安装路径。建议安装到 C 盘以外的磁盘，例如 `D:\tools\JetBrains\CLion 2026.2.2`，且路径中不要包含中文。设置完成后，点击 **下一步**。

    ![选择 CLion 安装路径](assets/clion/11.png)

4. 按照图示勾选安装选项，然后点击 **下一步**。

    ![选择 CLion 安装选项](assets/clion/12.png)

5. 点击 **安装**。

    ![开始安装 CLion](assets/clion/13.png)

6. 等待安装完成，然后点击 **完成** 退出安装向导。

    ![完成 CLion 安装](assets/clion/14.png)

## 配置 CLion

1. 双击打开 CLion，在弹出的窗口中点击 **下一个**。

    ![首次启动 CLion](assets/clion/15.png)

2. 勾选 **我确认我已阅读并接受此《用户协议》的条款**，然后点击 **继续**。

    ![接受 CLion 用户协议](assets/clion/16.png)

3. 根据需要选择是否发送使用情况统计信息。本教程选择 **不发送**。

    ![选择不发送使用情况统计信息](assets/clion/17.png)

4. 在欢迎界面中点击右下角的 **齿轮** 图标，然后选择 **设置**。

    ![打开 CLion 设置](assets/clion/18.png)

5. 在设置页左侧依次选择 **构建、执行、部署** 和 **工具链**，点击页面左上角的加号，再选择 **系统**。

    ![添加系统工具链](assets/clion/19.png)

6. 使用前面记录的 STM32CubeCLT 安装路径配置工具链。例如，若安装路径为 `C:\ST\STM32CubeCLT_1.22.0`，则 CMake、构建工具、C 编译器、C++ 编译器和调试器均可在该目录下找到。参照下图完成配置后，依次点击 **应用** 和 **确定**。

    ![配置 STM32CubeCLT 工具链](assets/clion/20.png)

## 新建与构建第一个工程

1. 返回欢迎界面，选择 **新建项目**。

    ![新建 CLion 项目](assets/clion/21.png)

2. 在左侧栏中选择 **STM32CubeMX**，然后点击 **启动 STM32CubeMX**。

    ![从 CLion 启动 STM32CubeMX](assets/clion/22.png)

3. 在 STM32CubeMX 中选择 **ACCESS TO MCU SELECTOR**。

    ![打开 MCU 选择器](assets/clion/23.png)

4. 本教程以 **STM32F103C8T6** 为例。在弹出窗口左上角的搜索栏中输入 `STM32F103C8T6`，然后双击搜索结果中的第一个选项。

    ![选择 STM32F103C8T6](assets/clion/24.png)

5. 完成所需的外设和时钟配置后，打开顶部菜单栏中的 **Project Manager**。设置项目名称和保存路径，并记住该路径；将 **Toolchain/IDE** 修改为 **CMake**，然后点击右上角的 **GENERATE CODE**。

    ![配置并生成 STM32CubeMX 工程](assets/clion/25.png)

    > 注：如果列表中没有 **CMake** 选项，可返回 STM32CubeMX 主页面，点击 **CHECK FOR UPDATES** 检查并安装更新。若当前已是最新版本，该选项可能显示为灰色。

    ![检查 STM32CubeMX 更新](assets/clion/26.png)

6. 项目生成完成后返回 CLion，将刚才设置的项目保存路径填写到窗口上方的 **位置** 栏中，然后点击 **继续**。

    ![在 CLion 中打开生成的项目](assets/clion/27.png)

7. 在弹出的安全提示中，勾选 **信任“XX”文件夹中的所有项目**，然后点击 **信任“XX”文件夹**。

    ![信任项目文件夹](assets/clion/28.png)

8. 点击右上角的 **锤子** 图标构建项目。

    ![构建项目](assets/clion/29.png)

9. 若界面显示 **构建已完成**，则说明 CLion 和工具链配置正确。

    ![项目构建成功](assets/clion/30.png)

## 激活 CLion

刚安装的 CLion 只有 30 天免费试用期，如果不进行激活，试用期结束后将无法继续使用。所幸，自 2025 年 5 月起，JetBrains 已面向个人免费开放 CLion 的非商业使用许可。只需注册并登录 JetBrains Account，即可完成激活。下面介绍具体的激活步骤。

1. 打开 CLion，点击左上角的 **四横线** 图标展开主菜单。

    ![打开 CLion 主菜单](assets/clion/31.png)

2. 在菜单栏中依次选择 **帮助** > **注册**。

    ![打开 CLion 注册界面](assets/clion/32.png)

3. 在 **管理许可证** 窗口中，点击 **激活其他许可证**。

    ![选择激活其他许可证](assets/clion/33.png)

4. 选择 **免费非商业使用**，阅读并确认相关许可及数据收集说明，然后点击 **登录以进行非商业使用**。

    ![选择免费非商业使用](assets/clion/34.png)

5. 浏览器会自动打开 JetBrains Account 登录页面。已有账号时直接登录；没有账号时，先完成注册。按照页面提示完成授权后返回 CLion，即可启用非商业许可证。

    ![登录或注册 JetBrains Account](assets/clion/35.png)

## 关于烧录工具

本教程采用 **CLion + J-Link + Ozone** 的开发方式：使用 CLion 编写和构建代码，使用 J-Link 与 Ozone 完成程序烧录和调试。J-Link 与 Ozone 的安装及配置方法将在 [安装 J-Link 和 Ozone](install-jlink-ozone.md) 中介绍，因此本文不再讲解如何通过 CLion 烧录程序。如有需要，可以自行查阅 OpenOCD 的相关资料，并在 CLion 中完成配置。
