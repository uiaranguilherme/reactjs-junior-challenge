import { uuid } from 'uuidv4';
import { JSONFile, LowSync } from 'lowdb';
import jsonServer from 'json-server';
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const Middlewares = jsonServer.defaults({noCors : false})
const port = 3001;

server.use(Middlewares)
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
    if(req.method === 'POST'){
        req.body.guid = uuid();
    }
    
    next()
});

server.put('/clients/:guid', async (req, res) => {
    const adapter = new JSONFile('./db.json');
    const low = new LowSync(adapter);
    low.read();

    const { clients } = await low.data;
    const data = req.body

    const client = clients.find( (currentClient, index) => {
        if(currentClient.guid === req.params.guid){
             for(let dado in currentClient){
                 for(let Dado in data){
                     if(dado === Dado){
                         currentClient[dado] = data[Dado]
                     }
                 }
             }
            return currentClient
        }
     })
    res.send(client)
    
    low.data = { clients: [] }
     low.data.clients.push(...clients)
     low.write()
});

server.use(router);
server.listen(port, (req, res) => {
    console.log("Server is Running")
});