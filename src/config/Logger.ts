import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import * as path from "path";

export class Logger {
  private static instance: Logger;
  private logger: winston.Logger;

  private constructor() {
    const logDir = path.join(process.cwd(), "logs");

    const logFormat = winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.errors({ stack: true }),
      winston.format.printf(({ timestamp, level, message, stack }) => {
        return stack
          ? `${timestamp} [${level}]: ${message}\n${stack}`
          : `${timestamp} [${level}]: ${message}`;
      }),
    );

    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || "info",
      format: logFormat,
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize(), logFormat),
        }),
        new DailyRotateFile({
          dirname: logDir,
          filename: "test-%DATE%.log",
          datePattern: "YYYY-MM-DD",
          maxFiles: "14d",
          maxSize: "20m",
        }),
      ],
    });
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public info(message: string, ...meta: any[]): void {
    this.logger.info(message, ...meta);
  }

  public error(message: string, ...meta: any[]): void {
    this.logger.error(message, ...meta);
  }

  public warn(message: string, ...meta: any[]): void {
    this.logger.warn(message, ...meta);
  }

  public debug(message: string, ...meta: any[]): void {
    this.logger.debug(message, ...meta);
  }

  public http(message: string, ...meta: any[]): void {
    this.logger.http(message, ...meta);
  }
}
