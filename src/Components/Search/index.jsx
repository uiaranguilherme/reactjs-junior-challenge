import React, {useState, useContext} from 'react';
import Input from '../Input';
import { ButtonPrimary, ButtonSecundary } from '../Button';
import { Container, Search, CloseIcon, SearchIcon } from './styles';

import { Context } from '../../Context/ContextData';

import { searchAll } from '../../Services/api.Services';

function Shearch() {
  const { CurrentData } = useContext(Context);
  const [ , setCurrentData ] = CurrentData();
  const [inputShared, setInputShared] = useState('');

  async function HandleInput () {
    const { data } = await searchAll(inputShared);
    setCurrentData(data);
  }

  return(
      <Container>
          <Search>
            <Input
              onChange={ e =>{
                setInputShared(e.target.value)
                HandleInput()
              }}
              value={inputShared}
              label={"Pesquise"}
              width="25rem"
            />
          </Search>
          <ButtonPrimary
            onClick={HandleInput}
          >
            <SearchIcon/>
          </ButtonPrimary>
          <ButtonSecundary
            onClick={() => {
              setInputShared('')
              HandleInput()
            }
            }
          >
            <CloseIcon/>
          </ButtonSecundary>
      </Container>
  );
}

export default Shearch;