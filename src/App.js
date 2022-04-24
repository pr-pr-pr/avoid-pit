import { useEffect, useState } from 'react';
import { Api } from './api';
import './App.css';
import Item from './components/Item';

function App() {
  // 搜索框文本
  const [searchText, setSearchText] = useState('');
  // 所有公司
  const [companies, setCompanies] = useState([]);
  // 列表
  const [list, setList] = useState([]);

  // 获取数据
  useEffect(() => {
    const fetchData = async () => {
      const data = await Api.getCompanies();
      setCompanies(data);
      setList(data);
    };
    fetchData();
  }, []);

  // 搜索
  useEffect(() => {
    if (!companies.length) {
      return;
    }
    const reg = new RegExp(searchText);
    const list = companies.filter(company => reg.test(company.title));
    setList(list);
  }, [searchText, companies]);

  return (
    <div className="app">
      <header className="app-header">
        {/* 搜索框 */}
        <input
          className="search"
          placeholder="请输入公司名"
          value={searchText}
          onInput={e => setSearchText(e.target.value)}
        />
      </header>
      <main className="app-main">
        {/* 列表 */}
        <div className="list">{list.map((company, i) => <Item key={i} {...company} />)}</div>
      </main>
    </div>
  );
}

export default App;
