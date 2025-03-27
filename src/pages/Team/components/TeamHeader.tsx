
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";

interface TeamHeaderProps {
  memberCount: number;
}

const TeamHeader = ({ memberCount }: TeamHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">Team Management</h1>
        <p className="text-muted-foreground">
          Manage your team members and their permissions
        </p>
      </div>

      <DialogTrigger asChild>
        <Button className="mt-4 md:mt-0 bg-coveo-blue hover:bg-coveo-blue/90">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </DialogTrigger>
    </div>
  );
};

export default TeamHeader;
