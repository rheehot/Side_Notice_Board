import React, { useCallback, useState } from 'react';
import NoticeListItem from "./NoticeListItem";
import { FaSearch, IoIosAddCircle } from 'react-icons/all';

// list 더미데이터 작성
const NoticeLists = [
  {
    No: 1,
    Title: '스시혼',
    Kind: '일식',
    Revisit: 'true',
    Writer: 'donghwi',
    CreateDate: '2020-10-27',
  },
  {
    No: 2,
    Title: '계절밥상',
    Kind: '한식',
    Revisit: 'false',
    Writer: 'chul',
    CreateDate: '2020-10-27',
  },
];

//더미데이터 Kind
const DEIFNE_KIND = [
  {
    text: '한식',
    value: '한식',
  },
  {
    text: '일식',
    value: '일식',
  },
  {
    text: '중식',
    value: '중식',
  },
  {
    text: '양식',
    value: '양식',
  },
  {
    text: '분식',
    value: '분식',
  },

]

const NoticeList = () => {

  const [list, setList] = useState(NoticeLists);

  const [kinds, setKinds] = useState(DEIFNE_KIND)

  const kindLists = useCallback(() => {
    return kinds.map((kind, index) => <button key={index}>{kind.text}</button>)
  }, [kinds]);

  return (
    <>
      <h1>지역 맛집 게시판</h1>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
      {kindLists()}
      <span>
        <input type="text" placeholder='Title' /><FaSearch/>
      </span>
      <span>
        <button><IoIosAddCircle/>Create</button>
      </span>
      <NoticeListItem dataList={list} kindList={DEIFNE_KIND}/>
      {/*pageNation*/}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NoticeList;
