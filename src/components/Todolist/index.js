import React, { useState } from "react";
import { Row, Col, Input, Space, Divider, List, Typography } from "antd";
import styles from "./Todolist.module.scss";
import classNames from "classnames/bind";

import { useDispatch, useSelector } from "react-redux";

import todoSlice from "./todoSlice";

import { addTodo } from "./todoSlice";

const { Search } = Input;

const cx = classNames.bind(styles);
function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo);

  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    dispatch(todoSlice.actions.add(searchValue));
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
            dataSource={todoList}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TodoList;
