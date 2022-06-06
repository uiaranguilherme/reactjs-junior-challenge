import React, {useState, useEffect, useContext}from 'react';
import { Container, CellStatus, CellName, CellCompany, CellPhone, CellEmail, Filter, EditIcon, TrashIcon } from './styles';
import { putOneForGuid, delOneForId } from '../../Services/api.Services';
import { Context } from '../../Context/ContextData';

function LineTable({data}) {
  /*  COMO É FEITO O ENVIO DE DATA INTEIRO, AQUI NESTE MOMENTO TEMOS TODOS OS ATRIBUTOS DE CADA CLIENTE DE FORMA SEPARADA*/
  //COntextos
  const { Modal, CurrentClient, IsEditing, CurrentData } = useContext(Context);
  const [ currentData, setCurrentData ] = CurrentData();
  const [ , setIsEditing ] = IsEditing();
  const [ , setIsVisible ] = Modal();
  const [ , setCurrentClient] = CurrentClient();

  const [active, setActive] = useState(null);

  useEffect(()=>{
    setActive(data.isActive)
    
  }, [data.isActive])

  async function OnOffButton(guid){
    setActive(!active);
    const { status } = await putOneForGuid(guid, {isActive : !active});
    data.isActive = !active;
  }

  function delClient(id){
    delOneForId(id);

    const arrFilter = currentData.filter(item => {return item.id !== data.id})
    setCurrentData([...arrFilter])
  }

  return (
    <Container
    >
      <CellStatus color={ active }
        onClick={() => {
          OnOffButton(data.guid);
        }}
      >
        {active ? 'Ativo' : 'Desativo'}
      </CellStatus>
      <CellName>
        <p>{data.name}</p>
      </CellName>
      <CellCompany>
        <p>{data.company}</p>
      </CellCompany>
      <CellPhone>
        <p>{data.phone}</p>
      </CellPhone>
      <CellEmail>
        <p>{data.email}</p>
      </CellEmail>
      <Filter>
        <EditIcon
          onClick={()=>{
            setCurrentClient(data);
            setIsVisible(true);
            setIsEditing(true);
          }}
        />
        <TrashIcon
          onClick={() => {delClient(data.id)}}
        />
      </Filter>
    </Container>
  )
}
export default LineTable