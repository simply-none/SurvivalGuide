// ------------------------前台页面------------
const TopContainer = () => import('components/TopContainer.vue')

const Home = () => import('views/home/Home.vue')
const HomeMenu = () => import('views/home/HomeMenu.vue')
const SchoolRandom = () => import('views/home/SchoolRandom.vue')
const HomeLessons = () => import('views/home/HomeLessons.vue')

const SpecialCourse = () => import('views/specialcourse/SpecialCourse')
const SpecificCourseNav = () => import('views/specialcourse/SpecialCourseNav')
const SpecialCourseGood = () => import('views/specialcourse/SpecialCourseGood')
const SpecialCourseAll = () => import('views/specialcourse/SpecialCourseAll')

const LessonsLunbo = () => import('views/specialcourse/LessonsLunbo')

const LessonsADColumn3 = () => import('views/specialcourse/LessonsADColumn3')

const Lesson = () => import('views/lessonInfo/Lesson')
const LessonTitle = () => import('views/lessonInfo/LessonTitle')
const LessonBodyLeft = () => import('views/lessonInfo/LessonBodyLeft')
const LessonBodyRight = () => import('views/lessonInfo/LessonBodyRight')

const SchoolAll = () => import('views/school/SchoolAll')

const School = () => import('views/school/School')
const SchoolTitle = () => import('views/school/SchoolTitle')
const SchoolTeacher = () => import('views/school/SchoolTeacher')

const Teacher = () => import('views/teacher/teacher')
const TeacherHead = () => import('views/teacher/teacher-head')
const TeacherBody = () => import('views/teacher/teacher-body')

const Student = () => import('views/student/Student')
const StudentHead = () => import('views/student/StudentHead')
const StudentBody = () => import('views/student/StudentBody')

const Course = () => import('views/course/Course')
const CoursePlayer = () => import('views/course/CoursePlayer')
const CourseDiscuss = () => import('views/course/CourseDiscuss')
const CourseHomework = () => import('views/course/CourseHomework')

const Login = () => import('views/login/Login.vue')


const NotFound404 = () => import('components/NotFound404.vue')

const Main = () => import('views/main/Main')

const ArticleEditor = () => import('views/article/ArticleEditor')
const ArticleAll = () => import('views/articleall/ArticleAll')
const ArticleContent = () => import('views/articlecontent/ArticleContent')


const Shop = () => import('views/shop/Shop')

const HomeWork = () => import('views/homework/Homework')

// ----------------------------------后台页面-------------------


const AHome = () => import('admin/component/home')

const CourseApply = () => import('admin/component/CourseApply')
const CourseAudit = () => import('admin/component/CourseAudit')
const CourseOnline = () => import('admin/component/CourseOnline')
const CourseUpdate = () => import('admin/component/CourseUpdate')

const ManageArticle = () => import('admin/component/ManageArticle')

const routes = [
  // ------------------------------用户界面--------开始----------------------
  // ------------------------------用户界面--------开始----------------------
  // ------------------------------用户界面--------开始----------------------
  {
    path: '',
    name: 'main',
    component: Main,

    children: [{
        path: '',
        redirect: '/home'
      },
      {
        // --------------------------主页面------------------------
        path: 'home',
        component: Home,
        children: [{
            path: '',
            components: {
              'top-container': TopContainer,
              'home-menu': HomeMenu,
              'school-random': SchoolRandom,
              'home-lessons': HomeLessons,
            },
            meta: {
              title: '首页',
            }
          },


        ],


      },
      {
        // 当使用命名视图时，应该在子组件定义，即同一级不能同时出现component/components


        // -------------------一级课程分类页面------------------
        path: '/specialcourse/:class',
        component: SpecialCourse,
        children: [{
          path: '',
          components: {
            'special-course-nav': SpecificCourseNav,
            'lessons-lunbo': LessonsLunbo,
            'special-course-good': SpecialCourseGood,
            'lessons-ad-column3': LessonsADColumn3,
            'special-course-all': SpecialCourseAll,

          },
          meta: {
            title: '课程分类',
          }
        }]

      },
      {
        // -----------------课程详情页----------------------
        path: '/lessoninfo/:lessonname',
        component: Lesson,
        children: [{
          path: '',
          components: {
            'lesson-title': LessonTitle,
            'lesson-body-left': LessonBodyLeft,
            'lesson-body-right': LessonBodyRight,
          },
          meta: {
            title: '课程详情',
          }
        }]
      },
      {
        // ------------------------小节课程播放、讨论、作业-------------------
        path: '/course/:coursename',
        component: Course,
        children: [{
          path: '',
          components: {
            "course-player": CoursePlayer,
            "course-discuss": CourseDiscuss,
            "course-homework": CourseHomework
          },
          meta: {
            roles: ['xuesheng', 'jiaoshi'],
            title: '视频播放',
          }
        }]
      },
      {
        // -------------------所有学校页--------------------
        path: '/schools',
        component: SchoolAll,
        meta: {
          title: '学校列表',
        }
      },
      {
        // ------------------学校详情页--------------------
        path: '/school/:schoolname',
        component: School,
        children: [{
          path: '',
          components: {

            'school-title': SchoolTitle,
            'special-course-all': SpecialCourseAll,
            'school-teacher': SchoolTeacher,
          },
          meta: {
            title: '学校详情',
          }
        }]
      },
      {
        // -------------教师详情页-------------------
        path: '/teacher/:teacher',
        component: Teacher,
        children: [{
          path: '',
          components: {
            'teacher-head': TeacherHead,
            'teacher-body': TeacherBody,
          },
          meta: {
            title: '教师详情',
          }
        }]
      },
      {
        //-------------------学生详情页---------------
        path: '/student/:student',
        component: Student,
        children: [{
          path: '',
          components: {
            'student-head': StudentHead,
            'student-body': StudentBody,
          },
          meta: {
            roles: ['xuesheng', 'jiaoshi'],
            title: '个人中心'
          }
        }]
      },
      //----------------文章编辑、列表、展示
      {
        path: '/article/:ls',
        name: 'ArticleEditor',
        component: ArticleEditor,
        meta: {
          title: '编辑文章',
        }
      },
      {
        path: '/articleall/:ls',
        name: 'articleall',
        component: ArticleAll,
        meta: {
          title: '文章中心',
          article_id: ""
        }

      },
      {
        path: '/articlecontent/:article_id',
        name: 'article-content',
        component: ArticleContent,
        meta: {
          title: '文章内容',
        }
      },
      // -------------------积分兑换商城
      {
        path: '/shop/:ls',
        name: 'shop',
        component: Shop,
        meta: {
          title: '积分商城',
        }
      },
      // 作业界面
      {
        path: 'homework/:ls',
        name: 'homework',
        component: HomeWork,
        meta: {
          title: '作业',
        }
      },
      {
        // ----------------登录页面----------------
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          title: '登录',
        }
      },
      {
        path: '/none',
        name: 'none',
        component: () => import('components/common/none.vue')
      },
      // ------------------------404路由
      // {
      //   path: '*',
      //   component: NotFound404,
      // }
    ]
  },

  // ------------------------------用户界面--------结束----------------------
  // ------------------------------用户界面--------结束----------------------
  // ------------------------------用户界面--------结束----------------------

  // ---------------------------后台界面
  {
    path: '/admin',
    name: 'admin-home',
    component: AHome,
    children: [{
        path: '',
        name: 'admin',
        component: NotFound404,
        meta: {
          title: '后台首页',
        }
      },
      {
        path: 'apply_school',
        name: 'apply_school',
        component: NotFound404,
        meta: {
          title: '学校申请',
        }
      },
      {
        path: 'apply_teacher',
        name: 'apply_teacher',
        component: NotFound404
      },
      {
        path: 'apply_student',
        name: 'apply_student',
        component: NotFound404
      },
      {
        path: 'manage_school',
        name: 'manage_school',
        component: NotFound404
      },
      {
        path: 'manage_student',
        name: 'manage_student',
        component: NotFound404
      },
      {
        path: 'manage_teacher',
        name: 'manage_teacher',
        component: NotFound404
      },
      {
        path: 'course_apply',
        name: 'course_apply',
        component: CourseApply,
        meta: {
          title: '课程申请',
        }

      },
      {
        path: 'course_audit',
        name: 'course_audit',
        component: CourseAudit,
        meta: {
          title: '课程审核',
        }
      },
      {
        path: 'course_online',
        name: 'course_online',
        component: CourseOnline,
        meta: {
          title: '课程状态',
        }
      },
      {
        path: 'course_update',
        name: 'course_update',
        component: CourseUpdate,
        meta: {
          title: '课程更新',
        }
      },
      {
        path: 'manage_article',
        name: 'manage_article',
        component: ManageArticle
      },
      {
        path: 'manage_post',
        name: 'manage_post',
        component: NotFound404
      },
      {
        path: 'manage_props',
        name: 'manage_props',
        component: NotFound404
      },
      
    ]
  },


  // ----------------------------后台结束

  {
    path: '/none',
    name: 'none',
    component: () => import('components/common/none.vue')
  },
  // -------------------------------------------------------test用例---------------------------------------
  {
    path: '/test/slot',
    component: () => import('test/slot-parent.vue')
  },
  {
    path: '/test/panel',
    component: () => import('test/el-cascader-panel.vue')
  },
  {
    path: '/test/carousel',
    component: () => import('test/el-carousel.vue'),
  },
  {
    path: '/test/homemenu',
    component: () => import('test/t-home-menu'),
  },
  {
    path: '/test/textpic',
    component: () => import('test/text-pic-lunbo')
  },
  {
    path: '/test/specific',
    // component: () => import('components/home/SpecialCourseNav.vue')
  },
  {
    path: '/test/lunbos',
    component: () => import('test/lunbo-eazy')
  },
  {
    path: '/test/lunbo2',
    // component: () => import('test/lunbo2')
  },
  {
    path: '/test/el-img',
    component: () => import('test/el-img')
  },
  {
    path: '/test/video',
    component: () => import('test/vider-player'),
  },
  {
    path: '/test/impress',
    component: () => import('test/impressjs')
  },
  {
    path: '/test/chacao',
    component: () => import('test/chacaousing')
  },
  {
    path: '/co',
    component: () => import('components/common/ContainerFlex')
  },
  // ------------------------404路由
  {
    path: '*',
    component: NotFound404,
  }

]



export default routes