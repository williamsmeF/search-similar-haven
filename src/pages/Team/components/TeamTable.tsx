
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Shield, Trash } from "lucide-react";
import { TeamMember } from "../types";
import { toast } from "sonner";

interface TeamTableProps {
  teamMembers: TeamMember[];
  onRoleChange: (id: string, newRole: string) => void;
  onRemoveMember: (id: string) => void;
  onResendInvite: (email: string) => void;
}

const TeamTable = ({ 
  teamMembers, 
  onRoleChange, 
  onRemoveMember, 
  onResendInvite 
}: TeamTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Team Members</h2>
        <p className="text-sm text-muted-foreground">
          {teamMembers.length} {teamMembers.length === 1 ? "member" : "members"} in your team
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-coveo-lightGray">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="hover:bg-coveo-lightGray/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-coveo-gray flex items-center justify-center text-white font-medium">
                      {member.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{member.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{member.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Select
                    defaultValue={member.role}
                    onValueChange={(value) => onRoleChange(member.id, value)}
                    disabled={member.id === "1"} // Can't change the first user (you)
                  >
                    <SelectTrigger className="w-32">
                      <div className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-coveo-blue" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="member">Team Member</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {member.status === "active" ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      {member.status === "pending" && (
                        <DropdownMenuItem onClick={() => onResendInvite(member.email)}>
                          Resend Invite
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => onRemoveMember(member.id)}
                        disabled={member.id === "1"} // Can't remove the first user (you)
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
