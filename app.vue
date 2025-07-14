<script setup lang="ts">
import BCard from "~/components/adapters/Card.vue";
import Tabs from "~/components/adapters/Tabs.vue";
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
          <fb-Button variant="success" disabled>Outlined Success</fb-Button>
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

      <section class="mt-12">
        <h2 class="text-3xl font-bold text-neutral-grey-08 mb-2">Card</h2>
        <div class="flex justify-center gap-8">
          <BCard variant="default" shadow padding="md">
            <div
              class="bg-neutral-300 flex items-center justify-center w-full h-56"
            >
              <span class="text-neutral-500 text-2xl font-bold">1280×960</span>
            </div>
            <div class="flex flex-row gap-4 p-4">
              <img
                src="https://placehold.co/48x48"
                alt="avatar"
                class="rounded bg-neutral-200 w-12 h-12"
              />
              <div>
                <div class="font-bold text-lg leading-tight">
                  John Smith
                  <span class="font-normal text-neutral-400 text-base"
                    >@johnsmith</span
                  >
                </div>
                <div class="text-neutral-400 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a href="#" class="text-blue-400 hover:underline">@bulmaio</a
                  >. <a href="#" class="text-blue-400 hover:underline">#css</a>
                  <a href="#" class="text-blue-400 hover:underline"
                    >#responsive</a
                  >
                </div>
                <div class="text-neutral-600 text-xs mt-2">
                  11:09 PM - 1 Jan 2016
                </div>
              </div>
            </div>
          </BCard>
          <BCard variant="primary" shadow padding="md">
            <div
              class="bg-neutral-300 flex items-center justify-center w-full h-56"
            >
              <span class="text-2xl font-bold">1280×960</span>
            </div>
            <div class="flex flex-row gap-4 p-4">
              <img
                src="https://placehold.co/48x48"
                alt="avatar"
                class="rounded bg-neutral-200 w-12 h-12"
              />
              <div>
                <div class="font-bold text-lg leading-tight">
                  John Smith
                  <span class="font-normal text-base">@johnsmith</span>
                </div>
                <div class="text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a href="#" class="text-blue-400 hover:underline">@bulmaio</a
                  >. <a href="#" class="text-blue-400 hover:underline">#css</a>
                  <a href="#" class="text-blue-400 hover:underline"
                    >#responsive</a
                  >
                </div>
                <div class="text-xs mt-2">11:09 PM - 1 Jan 2016</div>
              </div>
            </div>
          </BCard>
        </div>
      </section>
      <section class="mt-12">
        <h2 class="text-3xl font-bold text-neutral-grey-08 mb-2">Tabs</h2>
        <div class="flex justify-center gap-8">
          <Tabs activeTab="home" :vertical="false" />
        </div>
      </section>
    </div>
  </div>
</template>
