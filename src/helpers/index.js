export const exportTreeData = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export const importTreeData = (setTreeData) => () => {
  setTreeData(JSON.parse(localStorage.getItem('data')));
};
