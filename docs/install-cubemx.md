# 安装 STM32CubeMX

## 安装 Java 环境（前置步骤）

1. 打开 `cubemx` 文件夹，双击运行 `jre-8u191-windows-x64` 安装程序。

    ![运行 Java 安装程序](assets/cubemx/01.png)

2. 勾选 **更改目标文件夹**，然后点击 **安装**。

    ![更改 Java 的目标文件夹](assets/cubemx/02.png)

3. 在弹出的提示窗口中点击 **确定**。

    ![确认更改目标文件夹](assets/cubemx/03.png)

4. 点击 **更改**，选择合适的安装路径。建议安装到 C 盘以外的磁盘，例如 `D:\tools\java\jre1.8.0_191`。注意路径中不能含有中文。

    ![选择 Java 安装路径](assets/cubemx/04.png)

5. 确认安装路径后，点击 **下一步** 开始安装。

    ![开始安装 Java](assets/cubemx/05.png)

6. 安装完成后，点击 **关闭**。

    ![完成 Java 安装](assets/cubemx/06.png)

## 安装 STM32CubeMX

1. 打开 `cubemx` 文件夹，双击运行 `SetupSTM32CubeMX-6.6.1-Win` 安装程序。

    ![运行 STM32CubeMX 安装程序](assets/cubemx/07.png)

2. 点击 **Next**。

    ![进入 STM32CubeMX 安装向导](assets/cubemx/08.png)

3. 勾选 **I accept the terms of this license agreement**，然后点击 **Next**。

    ![接受许可协议](assets/cubemx/09.png)

4. 勾选 **I have read and understood the ST Privacy Policy and ST Terms of Use**，然后点击 **Next**。

    ![确认隐私政策和使用条款](assets/cubemx/10.png)

5. 点击 **Browse**，选择合适的安装路径。建议安装到 C 盘以外的磁盘，例如 `D:\tools\STMicroelectronics\STM32Cube\STM32CubeMX`。
注意路径中不能含有中文。
    ![选择 STM32CubeMX 安装路径](assets/cubemx/11.png)

6. 如果目标文件夹尚不存在，请在弹出的提示窗口中点击 **确定**，创建该文件夹。

    > 本教程使用虚拟机进行演示，因此截图中的软件安装在 C 盘。实际安装时，建议选择其他磁盘。

    ![创建 STM32CubeMX 安装文件夹](assets/cubemx/12.png)

7. 确认安装设置后，点击 **Next** 开始安装。

    ![开始安装 STM32CubeMX](assets/cubemx/13.png)

8. 等待安装完成，然后点击 **Next**。

    ![STM32CubeMX 安装完成](assets/cubemx/14.png)

9. 点击 **Done** 退出安装向导。

    ![退出 STM32CubeMX 安装向导](assets/cubemx/15.png)

至此，STM32CubeMX 已安装完成。
