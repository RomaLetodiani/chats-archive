////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Product data
export type TeamMember = {
  photo_url: string;
  name: string;
  created_at: string;
  id: number;
  role: 'admin' | 'user';
  updated_at: string;
};

// Mock product data store
export const fakeTeam = {
  records: [] as TeamMember[], // Holds the list of team member objects

  // Initialize with sample data
  initialize() {
    const sampleTeamMembers: TeamMember[] = [];
    function generateRandomTeamMemberData(id: number): TeamMember {
      const roles = ['admin', 'user'] as const;

      return {
        id,
        name: faker.person.fullName(),
        role: faker.helpers.arrayElement(roles),
        created_at: faker.date
          .between({ from: '2024-01-01', to: '2025-01-01' })
          .toISOString(),
        photo_url: faker.image.avatarGitHub(),
        updated_at: faker.date.recent().toISOString()
      };
    }

    // Generate remaining records
    for (let i = 1; i <= 20; i++) {
      sampleTeamMembers.push(generateRandomTeamMemberData(i));
    }

    this.records = sampleTeamMembers;
  },

  // Get all team members with optional role filtering and search
  async getAll({ roles = [], search }: { roles?: string[]; search?: string }) {
    let teamMembers = [...this.records];

    // Filter team members based on selected roles
    if (roles.length > 0) {
      teamMembers = teamMembers.filter((member) => roles.includes(member.role));
    }

    // Search functionality across multiple fields
    if (search) {
      teamMembers = matchSorter(teamMembers, search, {
        keys: ['name', 'role']
      });
    }

    return teamMembers;
  },

  // Get paginated results with optional role filtering and search
  async getTeamMembers({
    page = 1,
    limit = 10,
    roles,
    search
  }: {
    page?: number;
    limit?: number;
    roles?: string;
    search?: string;
  }) {
    await delay(1000);
    const rolesArray = roles ? roles.split('.') : [];
    const allTeamMembers = await this.getAll({
      roles: rolesArray,
      search
    });
    const totalTeamMembers = allTeamMembers.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedTeamMembers = allTeamMembers.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_team_members: totalTeamMembers,
      offset,
      limit,
      team_members: paginatedTeamMembers
    };
  },

  // Get a specific product by its ID
  async getTeamMemberById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the product by its ID
    const teamMember = this.records.find((member) => member.id === id);

    if (!teamMember) {
      return {
        success: false,
        message: `Team member with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Team member with ID ${id} found`,
      team_member: teamMember
    };
  }
};

// Initialize sample products
fakeTeam.initialize();
