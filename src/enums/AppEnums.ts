/**
 * Application Enums to avoid magic strings across the framework.
 */

export enum AppEnvironment {
  DEV = "dev",
  QA = "qa",
  STAGING = "staging",
  PROD = "prod",
}

export enum PetStatus {
  AVAILABLE = "available",
  PENDING = "pending",
  SOLD = "sold",
}

export enum ProductSortOptions {
  NAME_A_TO_Z = "az",
  NAME_Z_TO_A = "za",
  PRICE_LOW_TO_HIGH = "lohi",
  PRICE_HIGH_TO_LOW = "hilo",
}
