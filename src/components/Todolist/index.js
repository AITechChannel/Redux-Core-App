import { Checkbox, Col, Input, List, Row } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Todolist.module.scss";

import { useDispatch, useSelector } from "react-redux";

import todoSlice from "./todoSlice";

import { FiTrash } from "react-icons/fi";

const { Search } = Input;

const cx = classNames.bind(styles);
function TodoList() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log(state);

  const [check, setCheck] = useState(false);

  const todoList = useSelector((state) => state.todo);

  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    dispatch(
      todoSlice.actions.add({
        id: 4,
        name: searchValue,
        complete: false,
      })
    );
  };

  const handleOnDel = (index) => {
    dispatch(todoSlice.actions.del(index));
  };

  const handleCheck = (index) => {
    setCheck(!check);
    dispatch(todoSlice.actions.check(index));
    // console.log(dispatch(todoSlice.actions.check(index)));
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
            footer={<div>Tuananh Doan</div>}
            bordered
            dataSource={todoList}
            renderItem={(item, index) => (
              <List.Item>
                <div className={cx(item.complete ? "isActive" : null)}>
                  <Checkbox
                    checked={item.complete}
                    onClick={() => handleCheck(index)}
                  />
                  {` ${index + 1}. ${item.name}`}
                </div>
                <span>
                  <FiTrash onClick={() => handleOnDel(index)} />
                </span>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default TodoList;
