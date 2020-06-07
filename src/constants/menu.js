const topMenuBarItems = [
  {
    href: '#iq-home',
    title: 'Home  ',
    isCurrent: true,
    submenu: [
      {
        href: '/landing-page1',
        title: 'Home One'
      },
      {
        href: '/landing-page2',
        title: 'Home Two'
      },
      {
        href: '/landing-page3',
        title: 'Home Three'
      }
    ]
  },
  {
    href: '#iq-about',
    title: 'About Us ',
    submenu: [
      {
        href: '/about-us',
        title: 'About Us One'
      }
    ]
  },
  {
    href: '#services',
    title: 'Service',
    submenu : [
      {
        href: '/services',
        title: 'Data Analytics'
      }
    ]
  },
  {
    href: '#our-cases',
    title: 'Our Cases',
    submenu: [
      {
        href: '#portfolio',
        title: 'Portfolio',
        submenu:[
          {
            href: '/our-cases/portfolio-2-columns',
            title: 'Portfolio 2 Columns'
          },
          {
            href: '/our-cases/portfolio-3-columns',
            title: 'Portfolio 3 Columns'
          },
          {
            href: '/our-cases/portfolio-4-columns',
            title: 'Portfolio 4 Columns'
          },
          {
            href: '/our-cases/portfolio-5-columns',
            title: 'Portfolio 5 Columns'
          },
          {
            href: '/our-cases/portfolio-no-space',
            title: 'Portfolio No Space'
          }
        ]
      },
      {
        href: '/our-cases/masonry-2-portfolio',
        title: 'Masonry 2 Portfolio'
      },
      {
        href: '/our-cases/masonry-3-portfolio',
        title: 'Masonry 3 Portfolio'
      },
      {
        href: '/our-cases/masonry-no-space',
        title: 'Masonry No Space'
      }
    ]
  },
  {
    href: '#blog',
    title: 'Blog',
    submenu: [
      {
        href: '/blog',
        title: 'Blog'
      },
      {
        href: '#blog-grid',
        title: 'Blog Grid',
        submenu: [
          {
            href: '/blog/blog-one-column-grid',
            title: 'One Column Blog'
          },
          {
            href: '/blog/blog-two-column-grid',
            title: 'Two Column Blog'
          },
          {
            href: '/blog/blog-three-column-grid',
            title: 'Three Column Blog',
          }
        ]
      },
      {
        href: '#blog-right-sidebar-grid',
        title: 'Right SideBar Grid',
        submenu: [
          {
            href: '/blog/blog-right-sidebar-grid-one',
            title: 'Right Sidebar Grid 1'
          },
          {
            href: '/blog/blog-right-sidebar-grid-two',
            title: 'Right Sidebar Grid 2'
          }
        ]
      },
      {
        href: '#blog-left-sidebar-grid',
        title: 'Left SideBar Grid',
        submenu: [
          {
            href: '/blog/blog-left-sidebar-grid-one',
            title: 'Left Sidebar Grid 1'
          },
          {
            href: '/blog/blog-left-sidebar-grid-two',
            title: 'Left Sidebar Grid 1'
          }
        ]
      }
    ]
  },
  {
    href: '#pages',
    title: 'Pages',
    submenu: [
      {
        href: '/pages/our-team',
        title: 'Our Team'
      },
      {
        href: '/pages/client',
        title: 'Clients'
      },
      {
        href: '/pages/career',
        title: 'Careers',
      },
      {
        href: '/pages/contact-us',
        title: 'Contact Us',
      }
    ]
  }
];

const servicesMenu =  [
  {
    href: '/data-analytics',
    title: 'Data Analytics'
  },
  {
    href: '/managed-analytics',
    title: 'Managed Analytics'
  },
  {
    href: '/big-data-services',
    title: 'Big Data Services'
  },
  {
    href: '/data-science-consulting',
    title: 'Data Science Consulting'
  },
  {
    href: '/business-intelligence',
    title: 'Business Intelligence'
  },
  {
    href: '/data-visualization-services',
    title: 'Data Visualization'
  },
  {
    href: '/data-management',
    title: 'Data Management'
  },
  {
    href: '/artificial-intelligence',
    title: 'Artificial Intelligence'
  }
];

export { servicesMenu, topMenuBarItems };
