import { CelularMask } from './celular-mask';
import { CepMask } from './cep-mask';
import { CnpjMask } from './cnpj-mask';
import { CpfMask } from './cpf-mask';
import { Mask } from './mask';

export class TextMaskFactory {
  public createCep(): Mask {
    return new CepMask();
  }

  public createCnpj(): Mask {
    return new CnpjMask();
  }

  public createCelular(): Mask {
    return new CelularMask();
  }

  public createCpf(): Mask {
    return new CpfMask();
  }
}
