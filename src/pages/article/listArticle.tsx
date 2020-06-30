import React, { useEffect, useState } from 'react';

import DataGrid, { Column, FormItem, Editing, Paging, Lookup } from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';

interface State {
  Id: string;
  title: string;
  description: string;
  content?: string;
}
function ListArticle() {
  let currentUserData: any;

  const [articleArray, setArticleArray] = useState([{}]);

  const initializeList = () => {
    if (localStorage.hasOwnProperty('articles')) {
      let article = JSON.parse(localStorage.getItem('articles')!);
      article.map((item: any) => {
        currentUserData = {
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Content: item.Content
        };
        setArticleArray((articleArray) => [...articleArray, currentUserData]);
      });
    }
  };

  useEffect(() => {
    initializeList();
    return () => console.log('unmount');
  }, []);

  return (
    <div>
      <div id="data-grid-demo">
        <DataGrid dataSource={articleArray} showBorders={true} key="ID">
          <Paging enabled={false} />
          <Editing mode="form" allowUpdating={true} allowDeleting={true} />
          <Column dataField="Title" caption="Title" width={70} />
          <Column dataField="Description" />
          <Column dataField="Content" />
          <FormItem colSpan={2} editorType="dxTextArea" editorOptions={{ height: 100 }} />
        </DataGrid>
      </div>
    </div>
  );
}

export default ListArticle;
