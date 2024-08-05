export const defaultTreeData = [
  {
    children: [
      {
        children: [
          {
            key: '0-0-0-0',
            title: 'leaf',
          },
          {
            key: '0-0-0-1',
            title: 'leaf',
          },
          {
            key: '0-0-0-2',
            title: 'leaf',
          },
        ],
        key: '0-0-0',
        title: 'parent 1-0',
      },
      {
        children: [
          {
            key: '0-0-1-0',
            title: 'leaf',
          },
        ],
        key: '0-0-1',
        title: 'parent 1-1',
      },
      {
        children: [
          {
            data: {
              additional: {
                address: 'St. 45',
              },
              common: {
                age: 30,
                name: 'john',
              },
            },
            key: '0-0-2-0',
            title: 'leaf',
          },
          {
            key: '0-0-2-1',
            title: 'leaf',
          },
        ],
        key: '0-0-2',
        title: 'parent 1-2',
      },
    ],
    key: '0-0',
    title: 'parent 1',
  },
];
