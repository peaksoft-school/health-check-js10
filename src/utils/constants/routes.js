export const routes = {
   LOGIN: {
      changePassword: '/change-password',
   },
   ADMIN: {
      path: '/admin',
      onlineRegistration: 'online-registration',
      applications: 'applications',
      specialists: 'specialists',
      patients: 'patients',
      patientsId: 'patients/:id',
   },
   USER: {
      path: '/user',
   },
   DOCTOR: {
      path: '/doctor',
   },
}
