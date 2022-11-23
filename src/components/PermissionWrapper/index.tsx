import React, { useMemo } from 'react';
import { GlobalState } from '@/store';
import { useSelector } from 'react-redux';
import authentication, { IncomePermission } from '@/utils/authentication';

type PermissionWrapperProps = {
  backup?: React.ReactNode;
  incomePerms: IncomePermission;
};

const PermissionWrapper = (
  props: React.PropsWithChildren<PermissionWrapperProps>
) => {
  const { backup, incomePerms } = props;
  const userInfo = useSelector((state: GlobalState) => state.userInfo);

  const hasPermission = useMemo(() => {
    return authentication(incomePerms, userInfo.permissions);
  }, [incomePerms, userInfo.permissions]);

  if (hasPermission) {
    return <>{convertReactElement(props.children)}</>;
  }
  if (backup) {
    return <>{convertReactElement(backup)}</>;
  }
  return null;
};

function convertReactElement(node: React.ReactNode): React.ReactElement {
  if (!React.isValidElement(node)) {
    return <>{node}</>;
  }
  return node;
}

export default PermissionWrapper;
