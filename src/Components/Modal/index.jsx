import React, { useState, useRef, useEffect, useContext }from 'react';
import { ButtonPrimary, ButtonSecundary } from '../Button';
import Input from '../Input';
import anime from 'animejs/lib/anime.es.js';
import { Context } from '../../Context/ContextData';
import * as Fake from '../../Services/fake.Services';

import { postOne, getAll, putOneForGuid } from '../../Services/api.Services';

//Alerta de sucesso ou erro em requisição
import { AlertEvent } from '../Messages';

import { Whapper, Container, Line, Section } from './styles';

function Modal() {

  //Contexto da Aplicação
  const {Modal, CurrentClient, CurrentData, IsEditing} = useContext(Context);
  const [ModalIsVisible, setModalIsVisible] = Modal();
  const [isEditing, setIsEditing] = IsEditing();
  const [currentClient, setCurrentClient] = CurrentClient();
  const [ currentData, setCurrentData ] = CurrentData();

  //Modal de Mensagem Sucesso ou Erro
  const [message, setMessage] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState(null);
  
  //Modal de Criação 
  const ModalDiv = useRef(null)
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [isActive, setIsActive] = useState(true);

  function animation(from, to){
    let animation = anime.timeline({
      duration: 350,
      easing: 'easeOutExpo',
    });
    animation.add({
      targets: ModalDiv.current.childNodes,
      translateX: [from, to],
      delay: anime.stagger(50, {start: 500}) 
    })
  }

  //zera os valores dos inputs
  function RestartInputs(){
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setAddress('');
    setNote('');

    animation(0, 550);
  }
  
  //recupera informações caso seja edição ...
  useEffect(()=>{
    if(isEditing){
      if(currentClient !== undefined){
        setName(currentClient.name);
        setCompany(currentClient.company);
        setEmail(currentClient.email);
        setPhone(currentClient.phone);
        setAddress(currentClient.address);
        setNote(currentClient.note);
        setIsActive(currentClient.isActive);
      }
    }
  }, [isEditing, setIsEditing, currentClient]);

  //retorna o modal de erro a não visivel
  useEffect(()=>{
    
    setTimeout(() => {
      animation(0, 0);
      setIsVisible(false);
      setType(null);
    }, 2000);
  }, [isVisible])

  //Cria Cliente Fake
  function FakeClient(){
    setName(Fake.NameGenarate());
    setCompany(Fake.CompanyGenerate());
    setEmail(Fake.EmailGenerate());
    setAddress(Fake.AddresseGenerate());
    setNote(Fake.NoteGenerate());
    setPhone(Fake.PhoneGenerate())
  }

  async function Save (){
    const client = {
      name, company, email, address, note, phone, isActive 
    }

    async function success(status){

      if(status > 201 || status < 400){
        setType('sucesso')
        setIsVisible(true);
        setMessage('Sucesso');
    
        setTimeout(() => {
          setModalIsVisible(false);
        }, 1500);
        setTimeout(() => {
          animation(0 , 550);
        }, 500);
        RestartInputs()
      }
    }

    if(isEditing){

      const { status } = await putOneForGuid(currentClient.guid, {name, company, email, address, note, phone, isActive})
      const data = await getAll();
      setCurrentData([...data])
      success(status);
      setIsEditing(false);
    }else{
      const { status, data } = await postOne(client);
      setCurrentData([...currentData, data])
      success(status);
      
    }
  }

  function Cancel(){
    
    setTimeout(() => {
      setModalIsVisible(false);
      animation(550, 0);
    }, 1000);

    setIsEditing(false)
    setCurrentClient(undefined)
    RestartInputs()
  }

  return(
    <Whapper display={ModalIsVisible ? 'flex' : 'none'}
      >
      <Container ref={ModalDiv} display={ModalIsVisible ? 'flex' : 'none'}>
          <header> Dados do Cliente </header>
          <Line>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Nome*"
              />
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                label="Empresa"
              />
          </Line>
          <Line>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email*"
              />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Telefone*"
              />
          </Line>
          <Line>
            <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                label="Endereço"
                width='100%'
            />
          </Line>
          <Line>
              <textarea
                value={note}
                onChange={(e) =>setNote(e.target.value)}
                placeholder="Deixe uma anotação..."
              />
          </Line>
          <Section>
              <div>
                <ButtonSecundary
                  onClick={FakeClient}
                >Fake</ButtonSecundary>
              </div>
              <div>
                <ButtonSecundary
                  onClick={Cancel}
                >Cancelar</ButtonSecundary>
                <ButtonPrimary
                  onClick={Save}
                >
                  Salvar
                </ButtonPrimary>
              </div>
          </Section>
          
            <AlertEvent isVisible={isVisible} message={message} type={type}/>
          
      </Container>
    </Whapper>
  );
}

export default Modal;