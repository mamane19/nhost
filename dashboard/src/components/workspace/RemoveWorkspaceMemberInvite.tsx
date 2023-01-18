import { useCurrentWorkspaceAndApplication } from '@/hooks/useCurrentWorkspaceAndApplication';
import Button from '@/ui/v2/Button';
import Text from '@/ui/v2/Text';

export interface RemoveWorkspaceMemberInviteProps {
  /**
   * Function to be called when the user clicks on cancel.
   */
  close: VoidFunction;
  /**
   * Function to be called when the user clicks on remove.
   */
  handler: VoidFunction;
}

export default function RemoveWorkspaceMemberInvite({
  close,
  handler,
}: RemoveWorkspaceMemberInviteProps) {
  const { currentWorkspace } = useCurrentWorkspaceAndApplication();

  return (
    <div className="w-miniModal px-6 py-6 text-left grid grid-flow-row gap-2">
      <div className="grid grid-flow-row">
        <Text className="text-lg font-medium">
          Remove Invite from {currentWorkspace.name}?
        </Text>

        <Text>
          They can no longer access any of the projects in this workspace. You
          can invite them back later if you change your mind.
        </Text>
      </div>

      <div className="grid grid-flow-row gap-2">
        <Button color="error" onClick={handler}>
          Remove Workspace Invite
        </Button>
        <Button variant="outlined" color="secondary" onClick={close}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
