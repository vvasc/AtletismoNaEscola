import { ConteudoModule } from './conteudo.module';

describe('ConteudoModule', () => {
  let conteudoModule: ConteudoModule;

  beforeEach(() => {
    conteudoModule = new ConteudoModule();
  });

  it('should create an instance', () => {
    expect(conteudoModule).toBeTruthy();
  });
});
