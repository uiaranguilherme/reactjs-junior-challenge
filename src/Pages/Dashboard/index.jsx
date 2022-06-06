import React, { useState, useContext } from 'react';
import { Container } from './styles.js';
import Table from '../../Components/Table';
import Modal from '../../Components/Modal';
import Search from '../../Components/Search';
import Pagination from '../../Components/Pagination';

import { ContextData } from '../../Context/ContextData';

function Dashboard() {

  return (
      <>
      <ContextData>
        <Container>
          <Search />
          <Table/>
          <Pagination/>
          <Modal/>
        </Container>
      </ContextData>
      </>
  );
}

export default Dashboard;