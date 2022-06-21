import React, { useState } from "react";
import { Row, Col, Input, Space, Divider, List, Typography } from "antd";
import styles from "./Todolist.module.scss";
import classNames from "classnames/bind";
import { addAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const { Search } = Input;
const data = ["Racing car sprays burning fuel into crowd."];
const cx = classNames.bind(styles);
function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state);

  console.log("todolist:", todoList);
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    dispatch(addAction(searchValue));
  };
  return (
    <div>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={16}>
          <List
            header={
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Add"
                size="large"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={onSearch}
              />
            }
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TodoList;
