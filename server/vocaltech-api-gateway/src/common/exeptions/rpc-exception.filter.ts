import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class ExceptionFilter implements RpcExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const rpcError = exception.getError();

    // Validar si `rpcError` tiene estructura esperada
    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status =
        typeof rpcError.status === 'number' ? rpcError.status : 500; // Por defecto a 500 si no es número
      return response.status(status).json({
        statusCode: status,
        message: rpcError.message,
      });
    }

    // Si `rpcError` no tiene estructura esperada, se considera un error genérico
    console.error('Unexpected RPC Error:', rpcError);

    response.status(500).json({
      statusCode: 500,
      message:
        typeof rpcError === 'string' ? rpcError : 'Internal server error',
    });
  }
}
