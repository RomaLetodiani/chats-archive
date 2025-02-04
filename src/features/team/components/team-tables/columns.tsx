'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/types/users.types';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'image',
    header: 'IMAGE',
    cell: ({ row }) => {
      return (
        <Avatar>
          {row.original.image && <AvatarImage src={row.original.image} />}
          <AvatarFallback>
            {row.original.email?.[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      );
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Role'
  },
  {
    accessorKey: 'company',
    header: 'Company'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
