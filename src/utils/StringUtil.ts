/**
 * StringUtil provides generic string manipulation and generation methods.
 */
export class StringUtil {
  /**
   * Generates a random alphanumeric string of a given length.
   */
  public static generateRandomString(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  /**
   * Generates a random email address for testing.
   */
  public static generateRandomEmail(): string {
    return `test_${this.generateRandomString(8)}@example.com`;
  }
}
