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
        >
          Variações
        </div>
        <div class="flex flex-row gap-4 mb-8">
          <fb-Button variant="default">Button</fb-Button>
          <fb-Button variant="primary">Button</fb-Button>
          <fb-Button variant="secondary">Button</fb-Button>
          <fb-Button variant="outline">Button</fb-Button>
          <fb-Button variant="ghost">Button</fb-Button>
          <fb-Button variant="disabled">Button</fb-Button>
        </div>

        <div
          class="text-xs font-bold text-neutral-grey-05 mb-2 uppercase tracking-widest"
        >
          Tamanhos
        </div>
        <div class="flex flex-row items-center gap-4">
          <fb-Button variant="primary" size="lg">Button</fb-Button>
          <fb-Button variant="primary" size="default">Button</fb-Button>
          <fb-Button variant="primary" size="sm">Button</fb-Button>
        </div>
      </section>
    </div>
    <Tabs default-value="account" class="w-[400px]">
      <TabsList>
        <TabsTrigger value="account"> Account </TabsTrigger>
        <TabsTrigger value="password"> Password </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password"> Change your password here. </TabsContent>
    </Tabs>
  </div>
</template>
