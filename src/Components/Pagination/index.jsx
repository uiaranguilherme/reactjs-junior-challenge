import React, { useContext, useEffect, useState } from 'react';
import { Container, ArrowLeftIcon, ArrowRigthIcon, PagesArea, Page, PageLeft, PageRigth } from './styles';

import { Context } from '../../Context/ContextData';
import { getAll } from '../../Services/api.Services';

function Pagination() {

    const { CurrentPage, CurrentData } = useContext(Context);
    const [, setCurrentPage] = CurrentPage();
    const [currentData, setCurrentData, contextDataUpdate] = CurrentData();

    const [pagenate, setPagenate] = useState(0);
    const [currentPageNumber, setCurrentPageNumber] = useState(0);

    useEffect(()=>{
        contextDataUpdate() 
    }, [])

    useEffect(()=>{
        setPagenate( () => parseInt(currentData.length / 7 + 1 ) );
    }, [currentData, currentPageNumber, setPagenate, setCurrentData, ]);

    useEffect(()=>{
        Pagenate(currentPageNumber * 7, currentPageNumber * 7 + 7);
    }, [currentData, setCurrentData]);
    
    
    async function Pagenate(index, end){
        let page = currentData.slice(index, end);
        setCurrentPage(() => [...page])
    }
    
    function NextPage (){
        setCurrentPageNumber(currentPageNumber + 1);
        Pagenate(currentPageNumber * 7, currentPageNumber * 7 + 7);

        if(currentPageNumber === pagenate){
            setCurrentPageNumber(pagenate);
            Pagenate(currentPageNumber * 7, currentPageNumber * 7 + 7);
        }
    }
    function PreviewPage (){
        setCurrentPageNumber(() => currentPageNumber - 1);
        Pagenate(currentPageNumber * 7, currentPageNumber * 7 + 7);

        if(currentPageNumber === 0){
            setCurrentPageNumber(0);
            Pagenate(currentPageNumber * 7, currentPageNumber * 7 + 7);
        }
    }
    
  return(
    <Container>
        <PageLeft
            onClick={PreviewPage}
        >
            <ArrowLeftIcon/>
        </PageLeft>

        <PagesArea>
           {Array(pagenate).fill('').map((item, index) => {
               return(
                   <Page
                    key={index}
                    onClick={()=>{
                        setCurrentPageNumber(index)
                        Pagenate(index * 7, index * 7 + 7)
                    }}
                   >{index + 1}</Page>
               )
           })}
        </PagesArea>

        <PageRigth
            onClick={NextPage}
        >
            <ArrowRigthIcon/>
        </PageRigth>
    </Container>
  );
}

export default Pagination;