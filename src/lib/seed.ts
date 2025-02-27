'server only';

import { User, USER_START } from '@/types/users.types';
import { createItem } from './dynamodb';
import { logger } from './logger';

const users = ['roman@pulsarai.ge', 'lado.demuradze@pulsarai.ge'];

export const getInitialUser = (user: string): User => ({
  id: user,
  name: user,
  email: user,
  role: 'ADMIN',
  company: 'retain',
  sk: `${USER_START}${user}`,
  GSI1PK: `${USER_START}${user}`,
  GSI1SK: `${USER_START}${user}`,
  pk: `${USER_START}${user}`,
  emailVerified: true,
  type: 'USER'
});

const seedUsers = async () => {
  try {
    logger.info('Seeding users');

    for (const user of users) {
      await createItem<User>(getInitialUser(user));
    }
    logger.info('Users seeded');
  } catch (error) {
    logger.error('Error seeding users', error);
  }
};

export const runSeed = async () => {
  await seedUsers();
};
