
// Admin Related routes
import AdminHome from '../views/admin/AdminHome.vue'
import AdminUser from '../views/admin/Users/AdminUser.vue'
import AdminCatalog from '../views/admin/Catalog/AdminCatalog.vue'
import AdminCreate from '../views/admin/Catalog/AdminCreate.vue'
import AdminCatalogEdit from '../views/admin/Catalog/Edit.vue'
import ViewUser from '../views/admin/Users/ViewUser.vue'

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
  },
  {
    path: '/admin/catalog/:productId',
    name: 'adminCatalogEdit',
    component: AdminCatalogEdit,
  }
]

