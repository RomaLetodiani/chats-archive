import { fakeTeam, TeamMember } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import { TeamMemberForm } from './team-form';

type TTeamViewPageProps = {
  userId: string;
};

export const TeamViewPage = async ({ userId }: TTeamViewPageProps) => {
  let teamMember = null;
  let pageTitle = 'Add a New Team Member';

  if (userId !== 'new') {
    const data = await fakeTeam.getTeamMemberById(Number(userId));
    teamMember = data.team_member as TeamMember;
    if (!teamMember) {
      notFound();
    }
    pageTitle = `Edit Team Member`;
  }

  return <TeamMemberForm initialData={teamMember} pageTitle={pageTitle} />;
};
