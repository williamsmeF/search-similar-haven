
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamHeader from "./components/TeamHeader";
import TeamTable from "./components/TeamTable";
import AddMemberDialog from "./components/AddMemberDialog";
import { TeamMember, sampleTeamMembers } from "./types";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(sampleTeamMembers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "member",
  });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newTeamMember: TeamMember = {
      id: `temp-${Date.now()}`,
      name: newMember.name,
      email: newMember.email,
      role: newMember.role,
      status: "pending",
    };

    setTeamMembers([...teamMembers, newTeamMember]);
    toast.success(`Invitation sent to ${newMember.email}`);
    setIsAddDialogOpen(false);
    setNewMember({ name: "", email: "", role: "member" });
  };

  const handleResendInvite = (email: string) => {
    toast.success(`Invitation resent to ${email}`);
  };

  const handleRemoveMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
    toast.success("Team member removed");
  };

  const handleRoleChange = (id: string, newRole: string) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === id ? { ...member, role: newRole } : member
    ));
    toast.success("Role updated successfully");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16">
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <TeamHeader memberCount={teamMembers.length} />
          <AddMemberDialog
            newMember={newMember}
            setNewMember={setNewMember}
            onAddMember={handleAddMember}
            onCancel={() => setIsAddDialogOpen(false)}
          />
        </Dialog>

        <TeamTable 
          teamMembers={teamMembers}
          onRoleChange={handleRoleChange}
          onRemoveMember={handleRemoveMember}
          onResendInvite={handleResendInvite}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
