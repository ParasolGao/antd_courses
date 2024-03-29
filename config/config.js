export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
          {
            /*父子级routes配置path项居然要保持一致才能渲染出来**/
            path: '/', 
            component: './HelloWorld'  
          },
          {
            path: '/helloworld',
            component: './Helloworld'
          },
          {
            path: '/dashboard',
            routes: [
                { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
            ]
          },
        ]
    }]
};