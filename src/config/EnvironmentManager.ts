import * as dotenv from 'dotenv';
import * as path from 'path';

export class EnvironmentManager {
  private static instance: EnvironmentManager;
  private env: NodeJS.ProcessEnv;

  private constructor() {
    dotenv.config({ path: path.join(process.cwd(), '.env') });
    this.env = process.env;
  }

  public static getInstance(): EnvironmentManager {
    if (!EnvironmentManager.instance) {
      EnvironmentManager.instance = new EnvironmentManager();
    }
    return EnvironmentManager.instance;
  }

  public getBaseUrl(): string {
    return this.env.BASE_URL || 'https://www.saucedemo.com';
  }

  public getOrangeHrmUrl(): string {
    return this.env.ORANGEHRM_URL || 'https://opensource-demo.orangehrmlive.com';
  }

  public getSauceDemoUsername(): string {
    return this.env.SAUCEDEMO_USERNAME || 'standard_user';
  }

  public getSauceDemoPassword(): string {
    return this.env.SAUCEDEMO_PASSWORD || 'secret_sauce';
  }

  public getOrangeHrmUsername(): string {
    return this.env.ORANGEHRM_USERNAME || 'Admin';
  }

  public getOrangeHrmPassword(): string {
    return this.env.ORANGEHRM_PASSWORD || 'admin123';
  }

  public getDummyJsonApiUrl(): string {
    return this.env.DUMMYJSON_API_URL || 'https://dummyjson.com';
  }

  public getJsonPlaceholderApiUrl(): string {
    return this.env.JSONPLACEHOLDER_API_URL || 'https://jsonplaceholder.typicode.com';
  }

  public getPetstoreApiUrl(): string {
    return this.env.PETSTORE_API_URL || 'https://petstore.swagger.io/v2';
  }

  public getReqResApiUrl(): string {
    return this.env.REQRES_API_URL || 'https://reqres.in/api';
  }

  public getReqResApiKey(): string | undefined {
    return this.env.REQRES_API_KEY;
  }

  public isHeadless(): boolean {
    return this.env.HEADLESS === 'true';
  }
}
