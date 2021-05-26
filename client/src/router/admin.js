
// Admin Related routes
import AdminHome from '../views/admin/AdminHome.vue'
import AdminUser from '../views/admin/AdminUser.vue'

export default [
    {
      path: '/admin',
      name: 'adminHome',
      component: AdminHome,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'users',
          name: 'adminUser',
          component: AdminUser
        },
        // {
        //   // UserPosts will be rendered inside User's <router-view>
        //   // when /user/:id/posts is matched
        //   path: 'posts',
        //   component: UserPosts
        // }
      ]
    }
  ]

