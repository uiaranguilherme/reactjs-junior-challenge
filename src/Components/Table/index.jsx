import React, { useContext } from 'react';
import { Context } from '../../Context/ContextData';
import { Container, Header, Status, Name, Company, Phone, Email, Filter, ArrowIcon, AddUserIcon } from './styles';
import LineTable from '../../Components/LineTable';

function Table() {
    const { CurrentPage } = useContext(Context);
    const [ currentPage, setCurrentPage ] = CurrentPage();

    const [ , setModalIsVisible] = useContext(Context).Modal();

  return(
      <Container>
          <Header>
            <Status>
                <p>Status </p>
                <ArrowIcon/>
            </Status>
            <Name>
                <p>Nome </p> 
                <ArrowIcon/>
            </Name>
            <Company>
                <p>Empresa </p>
                <ArrowIcon/>
            </Company>
            <Phone>
                <p>Telefone </p>
                <ArrowIcon/>
            </Phone>
            <Email>
                <p>E-mail </p>
                <ArrowIcon/>
            </Email>
            <Filter>
                  <AddUserIcon 
                    onClick={() => setModalIsVisible(true)}
                  />
            </Filter>
          </Header>
          {currentPage.length !== 0 ?
              currentPage.map((Line) => {
                return(
                  <LineTable
                    key={Line.id}
                    data={Line}
                  />
                )
              }) : ''
            }
      </Container>
  );
}

export default Table;