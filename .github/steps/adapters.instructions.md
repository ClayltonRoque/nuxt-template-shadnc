## Passos para criar o adaptador do componente Pedido

1. **Definir as props do componente Pedido**

   - Analise o componente Pedido na pasta `node_modules/buefy/src/components`.
   - Identifique as props essenciais para o funcionamento do componente.
   - Declare as props usando a sintaxe do `<script setup>`.

2. **Criar o componente Pedido na pasta `components/adapters`**

   - Siga o padrão dos outros adaptadores (ex: ButtonAdapter).
   - Utilize `<script setup>` para definir as props necessárias.

3. **Utilizar o componente Pedido da pasta `components/ui/pedido`**

   - Importe o componente Pedido do diretório correto.
   - No template do adaptador, utilize o componente importado.

4. **Passar as props corretamente**

   - As props recebidas pelo adaptador devem ser repassadas para o componente Pedido.
   - Certifique-se de que todas as props estejam sendo transmitidas corretamente.

5. **Testar o funcionamento do adaptador**
   - Verifique se o adaptador está funcionando conforme esperado.
   - Assegure que as props estejam sendo recebidas e utilizadas corretamente pelo componente Pedido.
