import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password)
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateActiveEvent($deviceId: ID!) {
    createActiveEvent(deviceId: $deviceId) {
      actionType
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($newPassword: String!) {
    changePassword(newPassword: $newPassword)
  }
`;

export const AVATAR_UPLOAD = gql`
  mutation AvatarUpload($file: Upload!) {
    avatarUpload(file: $file)
  }
`;
