interface ResponseWrap<T = any> {
  code: number;
  success: boolean;
  message: string;
  data: null | T;
  time: string;
}

interface LoginParams {
  username: string;
  password: string;
}

interface UserInfo {
  userId: number;
  username: string;
  name: string;
  deptId: number;
  deptName: null;
  email: string;
  mobile: null;
  status: number;
  userIdCreate: number;
  gmtCreate: string;
  gmtModified: null;
  sex: string;
  birth: null;
  picId: number;
  liveAddress: null;
  hobby: null;
  province: null;
  city: null;
  district: null;
  asAdmin: null;
  saltValue: string;
  roleId: null;
  roleName: null;
  roleIds: [];
  permissionCodes: [];
}

interface LoginResponseData {
  token: string;
  userInfo: UserInfo;
}
