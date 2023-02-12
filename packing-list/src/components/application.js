import { useState, useCallback, useMemo } from 'react';
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from '../lib/items';
import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';

const Application = () => {
  const [items, setItems] = useState(() => getInitialItems());

  const add = useCallback((name) => {
    const item = createItem(name);
    setItems((prevState) => [...prevState, item]);
  }, []);

  const update = useCallback((id, updates) => {
    setItems((prevState) => updateItem(prevState, id, updates));
  }, []);

  const remove = useCallback((id) => {
    setItems((prevState) => removeItem(prevState, id));
  }, []);

  const unpackedItems = useMemo(
    () => filterItems(items, { packed: false }),
    [items],
  );
  const packedItems = useMemo(
    () => filterItems(items, { packed: true }),
    [items],
  );

  const markAllAsUnpacked = useCallback(() => {
    return setItems((prevState) =>
      prevState.map((item) => ({ ...item, packed: false })),
    );
  }, []);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header numberOfItems={items.length} />
      <NewItem addItem={add} />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList
          title="Unpacked Items"
          items={unpackedItems}
          update={update}
          remove={remove}
        />
        <ItemList
          title="Packed Items"
          items={packedItems}
          update={update}
          remove={remove}
        />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
