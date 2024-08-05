
import React from 'react'
import { Button, ConfigProvider } from "antd";
import styles from './styles.module.scss'
const ButtonsBar = ({buttonsConfig =[]}) => {
  return (
    <div className={styles.buttonsBarContainer}>
      {buttonsConfig.map((button) => {
        return (
          <Button key={button.title} onClick={button.onClick}>
            {button.title}
          </Button>
        );
      })}
    </div>
  );
}

export default ButtonsBar;