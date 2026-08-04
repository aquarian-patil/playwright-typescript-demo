import fs from "fs";
import path from "path";

/**
 * DataHelper class for reading and parsing JSON/CSV test data.
 */
export class DataHelper {
  /**
   * Reads a JSON file from the data directory.
   * @param fileName The name of the JSON file (e.g., 'users.json')
   * @returns Parsed JSON object
   */
  public static readJsonData<T>(fileName: string): T {
    const filePath = path.resolve(process.cwd(), "data", fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Data file not found at: ${filePath}`);
    }
    const rawData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(rawData) as T;
  }
}
