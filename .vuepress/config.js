module.exports = {
  title: 'ZomCSS Documentation',
  description: 'Learn how to use ZomCSS',
  themeConfig:{
    sidebar: [
      {
        title: 'Layout',
        collapsable: false,
        children: [
          ['/guide/overview', 'Overview'],
          ['/guide/grid', 'Grid'],
          ['/guide/utilities-for-layout', 'Utilities for layout']
        ]
      },
      {
        title: 'Content',
        collapsable: true,
        children: [
          ['/guide/typography', 'Typography'],
          ['/guide/tables', 'Tables'],
          ['/guide/images', 'Images']
        ]
      },
      {
        title: 'Components',
        collapsable: true,
        children: [
          ['/guide/buttons', 'Buttons'],
          ['/guide/forms', 'Forms'],
          ['/guide/filter', 'Filter Navigation'],
          ['/guide/subnav', 'Subnav'],
          ['/guide/lightbox', 'Lightbox']
        ]
      },
      {
        title: 'Utilities',
        collapsable: true,
        children: [
          ['/guide/borders', 'Borders'],
          ['/guide/colors', 'Colors'],
          ['/guide/display', 'Display'],
          ['/guide/flex', 'Flex'],
          ['/guide/float', 'Float'],
          ['/guide/sizing', 'Sizing'],
          ['/guide/spacing', 'Spacing'],
          ['/guide/text', 'Text'],
          ['/guide/vertical', 'Vertical Align'],
          ['/guide/visibility', 'Visibility']
        ]
      }
    ]
  }
}