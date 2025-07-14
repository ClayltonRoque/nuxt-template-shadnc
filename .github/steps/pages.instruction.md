### Passos para integrar o componente Pedido em `App.vue`

1. **Crie no app.vue um seção para o (componente pedido)**

2. **Importe o adaptador do componente Pedido**  
   Importe '(componente pedido)' de `components/adapter/(componente pedido).vue`.

3. **Consulte os tipos necessários**  
   Importe e utilize os tipos definidos em `types/(componente pedido).ts` para garantir que as props sejam de passada de forma correta por exemplo: tabs activeTab="activeTab".

4. **Adicione o container do componente Pedido**  
   Crie uma seção/container para o (componente pedido), seguindo o exemplo de estrutura fornecido.

5. **Utilize apenas props para personalização**  
   Evite estilos inline ou criação de CSS adicional. Personalize o componente apenas via props já existentes.

6. **Garanta conformidade com as convenções do projeto**  
   Certifique-se de que o uso do componente segue as diretrizes de migração e integração descritas na documentação.

7. **Exemplo de implementação**  
   Utilize o exemplo fornecido como referência para estrutura e organização do código.

- Exemplo de uso:

```vue
<section class="mt-12">
    <h2 class="text-3xl font-bold text-neutral-grey-08 mb-2">
      Componente pedido
    </h2>
    <div class="flex justify-center">
      <TabsAdapter :tabs="tabsData" />
    </div>
</section>
```
