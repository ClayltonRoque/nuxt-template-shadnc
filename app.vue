<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <div class="min-h-screen bg-white px-8 py-8">
    <div class="mx-auto">
      <h1 class="text-5xl font-bold text-neutral-grey-08 mb-2">Componentes</h1>
      <p class="text-xl text-neutral-grey-05 mb-10">
        Sessão que engloba componentes básicos da UI do projeto
      </p>

      <section>
        <h2 class="text-3xl font-bold text-neutral-grey-08 mb-2">Buttons</h2>
        <div
          class="text-xs font-bold text-neutral-grey-05 mb-2 uppercase tracking-widest"
        ></div>

        <b-button
          >Adapter

          <template #icon-left><div>test</div></template>
        </b-button>

        <div
          class="text-xs font-bold text-neutral-grey-05 mb-2 uppercase tracking-widest"
        >
          Variações
        </div>
        <div class="flex flex-row gap-4 mb-8 flex-wrap">
          <fb-Button variant="default">Default</fb-Button>
          <fb-Button variant="primary">Primary</fb-Button>
          <fb-Button variant="secondary">Secondary</fb-Button>
          <fb-Button variant="success">Success</fb-Button>
          <fb-Button variant="info">Info</fb-Button>
          <fb-Button variant="warning">Warning</fb-Button>
          <fb-Button variant="danger">Danger</fb-Button>
          <fb-Button variant="link">Link</fb-Button>
          <fb-Button variant="ghost">Ghost</fb-Button>
          <fb-Button variant="default" outlined>Outlined Default</fb-Button>
          <fb-Button variant="primary" outlined>Outlined Primary</fb-Button>
          <fb-Button variant="secondary" outlined>Outlined Secondary</fb-Button>
          <fb-Button variant="success" outlined>Outlined Success</fb-Button>
          <fb-Button variant="info" outlined>Outlined Info</fb-Button>
          <fb-Button variant="warning" outlined>Outlined Warning</fb-Button>
          <fb-Button variant="danger" outlined>Outlined Danger</fb-Button>
          <fb-Button variant="link" outlined>Outlined Link</fb-Button>
          <fb-Button variant="primary" light>Light Primary</fb-Button>
          <fb-Button variant="secondary" light>Light Secondary</fb-Button>
          <fb-Button variant="success" light>Light Success</fb-Button>
          <fb-Button variant="info" light>Light Info</fb-Button>
          <fb-Button variant="warning" light>Light Warning</fb-Button>
          <fb-Button variant="danger" light>Light Danger</fb-Button>
        </div>

        <div
          class="text-xs font-bold text-neutral-grey-05 mb-2 uppercase tracking-widest"
        >
          Tamanhos e Arredondados
        </div>
        <div class="flex flex-row items-center gap-4 flex-wrap">
          <fb-Button variant="primary" size="lg" rounded
            >Large Rounded</fb-Button
          >
          <fb-Button variant="primary" size="default" rounded
            >Default Rounded</fb-Button
          >
          <fb-Button variant="primary" size="sm" rounded
            >Small Rounded</fb-Button
          >
        </div>
      </section>
    </div>

    <section class="mt-12">
      <h2 class="text-3xl font-bold text-neutral-grey-08 mb-2">TABS</h2>
      <Tabs default-value="books" class="w-full">
        <TabsList>
          <TabsTrigger value="pictures">Pictures</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="pictures">
          <div class="pt-6 m-2">Pictures content</div>
        </TabsContent>
        <TabsContent value="music">
          <div class="pt-6 m-2">Music content</div>
        </TabsContent>
        <TabsContent value="books">
          <div class="pt-6 m-2">Books content</div>
        </TabsContent>
        <TabsContent value="videos">
          <div class="pt-6 m-2">Videos content</div>
        </TabsContent>
      </Tabs>
    </section>
  </div>
</template>
