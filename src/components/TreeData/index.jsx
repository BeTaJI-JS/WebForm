import { ConfigProvider, Tree as TreeAntD } from 'antd';

const TreeData = ({ setSelectedKeys, treeData }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tree: {
            colorBgContainer: '#CCF4F4',
          },
        },
      }}
    >
      <TreeAntD
        treeData={treeData}
        showLine
        onSelect={(selectedKeys) => {
          setSelectedKeys(selectedKeys);
        }}
      />
    </ConfigProvider>
  );
};

export default TreeData;
