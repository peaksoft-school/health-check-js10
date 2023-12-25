export const routes = {
   LOGIN: {
      changePassword: '/change-password',
   },
   ADMIN: {
      path: '/online-registration',
      onlineRegistration: '/online-registration',
      applications: '/applications',
      specialists: '/specialists',
      patients: '/patients',
      patientsId: '/patients/:patientId',
   },
   USER: {
      path: '/homepage',
      service: '/service',
      doctors: '/doctors',
      aboutClinic: '/about-clinic',
      prices: '/prices',
      contacts: '/contacts',
   },
}
