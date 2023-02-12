import { memo } from 'react';

const Header = ({ numberOfItems }) => (
  <header id="page-header">
    <h1 className="text-2xl font-bold">Packing List</h1>
    <p id="number-of-items">
      {numberOfItems} {numberOfItems === 1 ? 'item' : 'items'}
    </p>
  </header>
);

export default memo(Header);
