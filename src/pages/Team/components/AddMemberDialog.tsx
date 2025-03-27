
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, User } from "lucide-react";

interface AddMemberFormData {
  name: string;
  email: string;
  role: string;
}

interface AddMemberDialogProps {
  newMember: AddMemberFormData;
  setNewMember: (member: AddMemberFormData) => void;
  onAddMember: () => void;
  onCancel: () => void;
}

const AddMemberDialog = ({ 
  newMember, 
  setNewMember, 
  onAddMember, 
  onCancel 
}: AddMemberDialogProps) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Invite Team Member</DialogTitle>
        <DialogDescription>
          Send an invitation to join your team. They'll receive an email with instructions.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              id="name"
              placeholder="Full name"
              className="pl-10"
              value={newMember.name}
              onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              className="pl-10"
              value={newMember.email}
              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <Select
            value={newMember.role}
            onValueChange={(value) => setNewMember({ ...newMember, role: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="member">Team Member</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          onClick={onAddMember}
          className="bg-coveo-blue hover:bg-coveo-blue/90"
        >
          Send Invitation
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default AddMemberDialog;
