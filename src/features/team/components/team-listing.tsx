import { DataTable as TeamTable } from '@/components/ui/table/data-table';
import { listAllUsers } from '@/lib/dynamodb';
import { columns } from './team-tables/columns';

type TeamListingPage = {};

export const TeamListingPage = async ({}: TeamListingPage) => {
  const data = await listAllUsers();
  const teamMembers = data;

  return (
    <TeamTable
      columns={columns}
      data={teamMembers}
      totalItems={data.length}
      pageSizeOptions={[50]}
    />
  );
};
