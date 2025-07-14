## Passos para adicionar e adaptar um novo componente

1. **Instalar o componente shadcn**

   ```bash
   npx shadcn-vue@latest add <componente>
   ```

2. **Analisar o adaptador**

   - Localize o componente correspondente em `components/adapter/<componente>`.
   - Estude a lógica implementada para garantir compatibilidade.

3. **Refatorar o componente shadcn**

   - Ajuste o(s) componente(s) em `components/ui/<componente>` para incorporar a lógica do adaptador.
   - Certifique-se de que o comportamento replica o do adaptador.

4. **Criar e aplicar estilos**

   - Implemente os estilos necessários em `components/ui/<componente>/index.ts`.
   - Utilize tokens personalizados do Tailwind conforme definido em `assets/css/tokens.css`.
   - Siga o exemplo de `ui/button` para estrutura e convenções.

5. **Testar e validar**
   - Verifique se o componente está funcionando conforme esperado.
   - Assegure-se de que os estilos e a lógica estejam consistentes com o adaptador.
