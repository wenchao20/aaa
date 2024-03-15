/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2024-03-15 11:19:30
 * @LastEditors: Seven
 * @LastEditTime: 2024-03-15 11:19:41
 */
// tcplayer.d.ts

declare module 'tcplayer.js' {
    export class TCPlayer {
      constructor(options: TCPlayerOptions);
      play(): void;
      pause(): void;
      // 可以根据实际需要添加其他方法和属性的声明
    }
  
    interface TCPlayerOptions {
      container: HTMLElement | string;
      file: string;
      width?: string;
      height?: string;
      // 可以根据实际需要添加其他配置项
    }
  }
  