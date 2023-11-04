export const USER_KEY = 'HEALTH_CHECK_USER_KEY'
export const routes = {
   LOGIN: '/signin',
   ADMIN: {
      index: '/admin',
   },
   USER: {
      index: '/user',
   },
   DOCTOR: {
      index: '/doctor',
   },
}

export const defautltUsers = [
   {
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'ADMIN',
      token: 'admin_token',
   },
   {
      email: 'user@gmail.com',
      password: 'user123',
      role: 'USER',
      token: 'user_token',
   },
   {
      email: 'doctor@gmail.com',
      password: 'doctor123',
      role: 'DOCTOR',
      token: 'doctor_token',
   },
]
