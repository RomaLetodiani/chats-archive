import zod from 'zod';

const envSchema = zod.object({
  AUTH_SECRET: zod.string().min(1).default('auth-secret'),
  AUTH_TRUST_HOST: zod.string().min(1).default('true'),
  AUTH_GOOGLE_ID: zod.string().min(1),
  AUTH_GOOGLE_SECRET: zod.string().min(1),
  AWS_ACCESS_KEY_ID: zod.string().min(1),
  AWS_SECRET_ACCESS_KEY: zod.string().min(1),
  AWS_REGION: zod.string().min(1).default('eu-west-1')
});

export const env = envSchema.parse(process.env);
