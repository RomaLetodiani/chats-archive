'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { createUser, redirectToTeam, updateUser } from '@/server/user.actions';
import { CHAT_COMPANIES, CHAT_PK, CHAT_ROLES } from '@/types/chats.types';
import { User } from '@/types/users.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Team member name must be at least 2 characters.'
  }),
  role: z.string(),
  email: z.string().email(),
  company: z.string()
});

type TTeamMemberFormProps = {
  initialData: User | null;
  pageTitle: string;
};

export const TeamMemberForm = ({
  initialData,
  pageTitle
}: TTeamMemberFormProps) => {
  const defaultValues = {
    name: initialData?.name || '',
    role: initialData?.role || '',
    email: initialData?.email || '',
    company: initialData?.company || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (initialData) {
      toast.promise(
        updateUser(initialData.id, {
          ...initialData,
          ...values,
          company: values.company as CHAT_PK,
          role: values.role as User['role']
        }),
        {
          loading: 'Updating team member...',
          success: 'Team member updated successfully',
          error: 'Failed to update team member'
        }
      );
    } else {
      toast.promise(
        createUser({
          ...values,
          company: values.company as CHAT_PK,
          role: values.role as User['role']
        }),
        {
          loading: 'Creating team member...',
          success: 'Team member created successfully',
          error: 'Failed to create team member'
        }
      );
    }

    await redirectToTeam();
  };

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Member Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter team member name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select role' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CHAT_ROLES.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Member Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter team member email'
                        {...field}
                        disabled={!!initialData}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='company'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select company' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CHAT_COMPANIES.map((company) => (
                          <SelectItem key={company} value={company}>
                            {company}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type='submit'>
              {initialData ? 'Update Team Member' : 'Add Team Member'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
