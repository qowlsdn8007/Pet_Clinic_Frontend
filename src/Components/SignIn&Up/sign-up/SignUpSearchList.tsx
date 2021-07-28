import { List, Avatar, Button, Skeleton } from 'antd';

import React, { useState, useEffect } from 'react';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

function SignUpSearchist() {
  const [initLoading, setInitLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<Object>>([]);
  const [list, setList] = useState<Array<Object>>([]);

  // function onLoadMore() {
  //   setLoading(true);
  //   setList(data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))));
  // const res = data.concat([
  //   {
  //     gender: 'male',
  //     name: { title: 'Mrs', first: 'Ks', last: 'Velioğlu' },
  //     email: 'kaya.velioglu@example.com',
  //     nat: 'TR',
  //   },
  //   {
  //     gender: 'female',
  //     name: { title: 'Mrs', first: 'Ka', last: 'Velioğlu' },
  //     email: 'kaya.velioglu@example.com',
  //     nat: 'TR',
  //   },
  // ]);
  //   console.log(`data: ${data}`);
  //   console.log(`res: ${res}`);
  //   setList(res);
  //   // setData(res);
  //   setLoading(false);
  //   () => {
  //     window.dispatchEvent(new Event('resize'));
  //   };

  //   // this.getData((res: any) => {
  //   //   const data = this.state.data.concat(res.results);
  //   //   this.setState(
  //   //     {
  //   //       data,
  //   //       list: data,
  //   //       loading: false,
  //   //     },
  //   //     () => {
  //   //       // Resetting window's offsetTop so:to display react-virtualized demo underfloor.
  //   //       // In real scene, you can using public method of react-virtualized:
  //   //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //   //       window.dispatchEvent(new Event('resize'));
  //   //     },
  //   //   );
  //   // });
  // }
  const getData = (callback: any) => {
    const res = [
      {
        gender: 'male',
        name: { title: 'Mrs', first: 'Ks', last: 'Velioğlu' },
        email: 'kaya.velioglu@example.com',
        nat: 'TR',
      },
      {
        gender: 'female',
        name: { title: 'Mrs', first: 'Ka', last: 'Velioğlu' },
        email: 'kaya.velioglu@example.com',
        nat: 'TR',
      },
    ];
    console.log(`data: ${res}`);
    return res;
  };

  function onLoadMore() {
    setLoading(true);
    setList(data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))));

    getData((res: any) => {
      console.log(`res: ${res[0]}`);
      const d = data.concat(res);
      setList(d);
      setLoading(false);
      window.dispatchEvent(new Event('resize'));
    });
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item: any) => (
        <List.Item actions={[<a key="list-select">선택</a>]}>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="yoyeyeah!"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

export default SignUpSearchist;
