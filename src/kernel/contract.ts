export interface useCase<Input, Output>{
    execute(payload?: Input): Promise<Output>;
}