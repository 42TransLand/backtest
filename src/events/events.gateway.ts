import { ConsoleLogger } from '@nestjs/common/services';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8080)
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('ClientToServer')
  handleMessage(@MessageBody() data) {
    console.log(data);
    this.server.emit('ServerToClient', data);
  }


}
