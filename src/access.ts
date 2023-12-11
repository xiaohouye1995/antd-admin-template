/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  const ALevelPermissionArr = ['admin', 'developer'];
  const BLevelPermissionArr = ['admin', 'designer'];
  return {
    canAdmin: currentUser && currentUser.roles === 'admin',
    canALevelPermission: currentUser && ALevelPermissionArr.indexOf(currentUser.roles) !== -1,
    canBLevelPermission: currentUser && BLevelPermissionArr.indexOf(currentUser.roles) !== -1,
  };
}
