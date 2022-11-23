export type UserPermission = string[];
export type IncomePermission = string[] | '*:*:*';

const auth = (
  incomePerms: IncomePermission,
  userPermission: UserPermission
) => {
  const all_permission = '*:*:*';
  if (Array.isArray(incomePerms) && incomePerms.length) {
    const hasPermissions = userPermission.some((permission) => {
      return all_permission === permission || incomePerms.includes(permission);
    });
    return hasPermissions;
  }
  return false;
};

export default auth;
