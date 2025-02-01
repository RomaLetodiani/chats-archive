import { DataTable as TeamTable } from '@/components/ui/table/data-table';
import { fakeTeam, TeamMember } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { columns } from './team-tables/columns';

type TeamListingPage = {};

export const TeamListingPage = async ({}: TeamListingPage) => {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');
  const roles = searchParamsCache.get('role');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(roles && { roles: roles })
  };

  const data = await fakeTeam.getTeamMembers(filters);
  const totalProducts = data.total_team_members;
  const teamMembers: TeamMember[] = data.team_members;

  return (
    <TeamTable
      columns={columns}
      data={teamMembers}
      totalItems={totalProducts}
    />
  );
};
