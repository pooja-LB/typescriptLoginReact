import React, {useState, useEffect, useRef} from 'react';
import Form, {
    ButtonItem,
    GroupItem,
    SimpleItem,
    Label,
    CompareRule,
    EmailRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule,
    AsyncRule
  } from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';

import service from '../../data/article.data';



function AddArticle() {
    const [formData, setForm] = useState({ });
    const [articleArray, setArticleArray ] = useState([{}]);
    let currentUserData:any;

    const article = service.getArticle();
    const validateForm = (e:any) => {
        e.component.validate();
      };
      const ref = useRef();
      const buttonOptions = {
        text: 'Add',
        type: 'success',
        useSubmitBehavior: true
      };
      // useEffect(() => {
      //     if(localStorage.hasOwnProperty('articles')){
      //       const article = JSON.parse(localStorage.getItem('articles')!);
      //       article.map((item : any) =>{
      //            currentUserData = {
      //                ID: article.length,
      //                Title: item.Title,
      //                Description:item.Description,
      //                Content: item.Content
      //            } 
      //            setArticleArray(articleArray => [...articleArray, currentUserData])
      //           })
      //     }
      
      //   console.log(article, "add")
      // },[]);

    const handleSubmit = (e:any) => {
        setArticleArray([...articleArray, formData]);
            localStorage.setItem('articles', JSON.stringify(articleArray));
            notify({
                message: 'Article successfully added',
                position: {
                  my: 'center top',
                  at: 'center top'
                }
              }, 'success', 3000);
         e.preventDefault();
     }
 
      const formFieldDataChanged = (e:any) =>{
         const updatedField = e.dataField;
         const newValue = e.value;
         switch(updatedField){
            case 'Title': { 
              setForm({ ...formData, Title: newValue })
              break; 
           } 
            case 'Description': { 
              setForm({ ...formData, Description: newValue })
              break; 
           } 
            case 'Content': { 
              setForm({ ...formData, Content: newValue })
              break; 
           } 
           default: { 
            return formData
          } 
        }
        console.log(formData,"form")

     }


  return (
          <React.Fragment>
        <form  onSubmit={handleSubmit}>
            <Form
                onContentReady={validateForm}
                onFieldDataChanged={formFieldDataChanged}
                colCount={1}
                id="artcileform"
                formData={article}>
                <GroupItem caption="Login">

                        <SimpleItem dataField="Title"  editorType="dxTextBox">
                            <RequiredRule message="Title is required" />
                        </SimpleItem>
                        <SimpleItem dataField="Description">
                            <RequiredRule message="Description is required" />
                        </SimpleItem>
                        <SimpleItem dataField="Content">
                        </SimpleItem>
                </GroupItem>

                <ButtonItem horizontalAlignment="right"
              buttonOptions={buttonOptions}/>
            </Form>

            </form>
  </React.Fragment>
  );
}

export default AddArticle;
