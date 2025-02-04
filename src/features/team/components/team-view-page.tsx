import { getUserByEmail } from '@/lib/dynamodb';
import { notFound } from 'next/navigation';
import { TeamMemberForm } from './team-form';

type TTeamViewPageProps = {
  userId: string;
};

export const TeamViewPage = async ({ userId }: TTeamViewPageProps) => {
  let teamMember = null;
  let pageTitle = 'Add a New Team Member';

  if (userId !== 'new') {
    const data = await getUserByEmail(userId);
    if (!data) {
      notFound();
    }
    teamMember = data;
    pageTitle = `Edit Team Member`;
  }

  return <TeamMemberForm initialData={teamMember} pageTitle={pageTitle} />;
};
