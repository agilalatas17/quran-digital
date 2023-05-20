import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MENU_ITEM } from "./constants";

function HeaderComponent() {
  const { Header } = Layout;
  const [current, setCurrent] = useState("");

  const handleClickMenu = (values) => {
    setCurrent(values.key);
  };
  return (
    <>
      <Header>
        <Menu
          onClick={handleClickMenu}
          selectedKeys={[current]}
          mode="horizontal"
          items={MENU_ITEM}
        />
      </Header>
    </>
  );
}

export default HeaderComponent;
