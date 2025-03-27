
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "pending";
  avatarUrl?: string;
}

export const sampleTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "member",
    status: "active",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "viewer",
    status: "active",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "member",
    status: "pending",
  },
];

export const roleLabels = {
  admin: "Admin",
  member: "Team Member",
  viewer: "Viewer",
};
