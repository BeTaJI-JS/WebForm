import styles from './styles.module.scss';
const Content = ({ selectedNode }) => {
  return (
    <>
      {selectedNode ? (
        <div style={{ border: '1px solid red', height: 800, minWidth: 500 }}>
          <pre>{JSON.stringify(selectedNode, null, 2)}</pre>
        </div>
      ) : (
        <div className={styles.noDataLabel}>Нет данных для отображения</div>
      )}
    </>
  );
};

export default Content;
