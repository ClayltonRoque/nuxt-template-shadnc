crie a tipagem necessaria leia a pasta adapters/(componente pedido). modifique o (componente pedido) dentro de adpters para usar os tipos criados

## Passos para criar e aplicar tipagem em componentes de adapter

1. **Identifique o componente solicitado**

   - Localize o componente dentro da pasta `components/adapter/(componente pedido)`.

2. **Crie o arquivo de tipagem**

   - No diretório `types/`, crie um arquivo TypeScript específico para o componente, por exemplo: `types/(componente pedido).ts`.

3. **Defina os tipos necessários**

   - Especifique as interfaces e tipos que representam as props e eventos do componente.

4. **Implemente os tipos no componente adapter**

   - Importe os tipos criados no arquivo do componente dentro de `components/adapter/(componente pedido)`.
   - Atualize as props e eventos do componente para utilizar os tipos definidos.

5. **Teste e valide**
   - Certifique-se de que o componente está utilizando corretamente os tipos e que não há erros de tipagem.
