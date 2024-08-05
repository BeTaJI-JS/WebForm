import { ConfigProvider, Tree as TreeAntD } from "antd";
import React from 'react'

const TreeData =({treeData, setSelectedKeys}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tree: {
            colorBgContainer: "#CCF4F4",
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
}

export default TreeData;