import { ConteudoRoutingModule } from './conteudo-routing.module';

describe('ConteudoRoutingModule', () => {
  let conteudoRoutingModule: ConteudoRoutingModule;

  beforeEach(() => {
    conteudoRoutingModule = new ConteudoRoutingModule();
  });

  it('should create an instance', () => {
    expect(conteudoRoutingModule).toBeTruthy();
  });
});
