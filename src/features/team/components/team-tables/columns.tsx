'use client';
import { TeamMember } from '@/constants/mock-api';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';

export const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: 'photo_url',
    header: 'IMAGE',
    cell: ({ row }) => {
      return (
        <div className='relative aspect-square size-12'>
          <Image
            src={row.getValue('photo_url')}
            alt={row.getValue('name')}
            className='h-full w-full rounded-lg object-cover'
            fill
            sizes='100%'
          />
        </div>
      );
    }
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'role',
    header: 'ROLE'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
