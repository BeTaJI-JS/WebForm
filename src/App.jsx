import { useMemo, useState } from 'react';

import './App.css';
import ButtonsBar from './components/ButtonsBar';
import Container from './components/Container';
import Content from './components/Content';
import TreeData from './components/TreeData';
import { defaultTreeData } from './data';
import { exportTreeData, importTreeData } from './helpers';

function App() {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [treeData, setTreeData] = useState([]);

  const selectedNode = useMemo(() => {
    if (selectedKeys.length === 0) {
      return;
    }
    const keys = selectedKeys[0].split('-').slice(2);
    let currentNode = treeData[0];
    console.log('keys', keys);
    for (const key of keys) {
      currentNode = currentNode.children[key];
    }
    return currentNode;
  }, [selectedKeys, treeData]);

  console.log('selectedNode===>', selectedNode);

  return (
    <Container>
      <div>
        {
          <ButtonsBar
            buttonsConfig={[
              {
                onClick: () => exportTreeData(treeData),
                title: 'Сохранить',
              },
              {
                onClick: importTreeData(setTreeData),
                title: 'Загрузить',
              },
            ]}
          />
        }
        <TreeData treeData={treeData} setSelectedKeys={setSelectedKeys} />
      </div>
      <Content selectedNode={selectedNode} />
    </Container>
  );
}

export default App;
