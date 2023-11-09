export const USER_KEY = 'HEALTH_CHECK_USER_KEY'
export const routes = {
   LOGIN: {
      signIn: '/signin',
      signUp: '/signup',
      forgotPassword: '/forgot-password',
      changePassword: '/change-password',
   },
   ADMIN: {
      path: '/admin',
      onlineRegistration: 'online-registration',
      applications: 'applications',
      specialists: 'specialists',
      patients: 'patients',
   },
   USER: {
      path: '/user',
   },
   DOCTOR: {
      path: '/doctor',
   },
}
