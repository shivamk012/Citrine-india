
// Admin Related routes
import AdminHome from '../views/admin/AdminHome.vue'
import AdminUser from '../views/admin/AdminUser.vue'

export default [
  {
    path: '/admin',
    name: 'adminHome',
    component: AdminHome,
  },
  {
    // UserProfile will be rendered inside User's <router-view>
    // when /user/:id/profile is matched
    path: '/admin/users',
    name: 'adminUser',
    component: AdminUser
  },    
]

