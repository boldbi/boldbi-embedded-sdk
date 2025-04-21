// File: src/types/authorization-server.ts

export interface IAuthorizationServer {
    url?: string;
    data?: string;
    headers?: Record<string, string>;
    authorizionComplete?: string;
  }
  