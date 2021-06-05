
// Admin Related routes
import AdminHome from '../views/admin/AdminHome.vue'
import AdminUser from '../views/admin/AdminUser.vue'
import AdminCatalog from '../views/admin/AdminCatalog.vue'
import AdminCreate from '../views/admin/AdminCreate.vue'
import ViewUser from '../views/admin/ViewUser.vue'

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
  {
    path: '/admin/catalog',
    name: 'adminCatalog',
    component: AdminCatalog,
  }, 
  {
    path: '/admin/catalog/create',
    name: 'adminCreate',
    component: AdminCreate,
  },
  {
    path: '/admin/users/:userId',
    name: 'viewUser',
    component: ViewUser,
  }
]

