'use server';

import { createItem, deleteItem, updateItem } from '@/lib/dynamodb';
import { getInitialUser } from '@/lib/seed';
import { User, USER_START } from '@/types/users.types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteUser(id: string) {
  await deleteItem({ pk: `${USER_START}${id}`, sk: `${USER_START}${id}` });
  revalidatePath('/dashboard/team');
}

export async function createUser(user: Partial<User>) {
  const { email, ...rest } = user;

  if (!email) {
    throw new Error('Email is required');
  }

  await createItem<User>({
    ...getInitialUser(email),
    ...rest,
    email: email?.toLowerCase()
  });

  revalidatePath('/dashboard/team');
}

export async function updateUser(id: string, user: User) {
  const { sk, pk, ...rest } = user;
  await updateItem<User>({ pk, sk }, rest);
  revalidatePath('/dashboard/team');
}

export async function redirectToTeam() {
  redirect('/dashboard/team');
}
