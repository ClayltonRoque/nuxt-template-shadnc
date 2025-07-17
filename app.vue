<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { useNuxtApp } from "#app";
import {
  BButton,
  BSwitch,
  BTabs,
  BTabItem,
  BAutocomplete,
  BField,
} from "buefy";

// Buefy instance (Nuxt 3 plugin or provide)
const nuxtApp = useNuxtApp();
const $buefy = nuxtApp.$buefy || (inject("buefy") as any);

// UI State
const activeTab = ref(0);
const showBooks = ref(true);
const isImageModalActive = ref(false);
const isCardModalActive = ref(false);

// Autocomplete State
const name = ref("");
const selected = ref("");
const data = ref([
  "Angular",
  "Angular 2",
  "Aurelia",
  "Backbone",
  "Ember",
  "jQuery",
  "Meteor",
  "Node.js",
  "Polymer",
  "React",
  "RxJS",
  "Vue.js",
]);
const filteredData = computed(() =>
  data.value.filter((option) =>
    option.toLowerCase().includes(name.value.toLowerCase())
  )
);

// Dialogs
function confirm() {
  // @ts-ignore
  $buefy.dialog.confirm({
    message: "Continue on this task?",
    onConfirm: () => $buefy.toast.open("User confirmed"),
  });
}
function confirmCustom() {
  // @ts-ignore
  $buefy.dialog.confirm({
    title: "Privacy Politics",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nFusce id fermentum quam. Proin sagittis,\nnibh id hendrerit imperdiet, elit sapien laoreet elit,\nac scelerisque diam velit in nisl. Nunc maximus ex non\nlaoreet semper. Nunc scelerisque, libero sit amet pretium dignissim,\naugue purus placerat justo,\nsit amet porttitor dui metus in nisl.\nNulla non leo placerat, porta metus eu, laoreet risus.\nEtiam lacinia, purus eu luctus maximus, elit ex viverra tellus,\nsit amet sodales quam dui nec odio.\nNullam porta mollis est. Quisque aliquet malesuada fringilla.\nPellentesque volutpat lacus at ante posuere,\nnon pulvinar ante porta. Proin viverra eu massa nec porta.\nAliquam rhoncus velit quis sem hendrerit,\nut dictum nisl accumsan. Maecenas erat enim, scelerisque non ligula ac,\neleifend venenatis ligula.\nPraesent molestie mauris sed elit posuere, non malesuada libero gravida.\nIn hac habitasse platea dictumst.\nPellentesque habitant morbi tristique senectus\net netus et malesuada fames ac turpis egestas.`,
    cancelText: "Disagree",
    confirmText: "Agree",
    type: "is-success",
    onConfirm: () => $buefy.toast.open("User agreed"),
  });
}
function confirmCustomDelete() {
  // @ts-ignore
  $buefy.dialog.confirm({
    title: "Deleting account",
    message:
      "Are you sure you want to <b>delete</b> your account? This action cannot be undone.",
    confirmText: "Delete Account",
    type: "is-danger",
    hasIcon: true,
    onConfirm: () => $buefy.toast.open("Account deleted!"),
  });
}
</script>

<template>
  <section class="section">
    <header class="mb-6">
      <div class="title is-size-2">Componentes</div>
      <div class="is-size-5">
        Sessão que engloba componentes básicos da UI do projeto
      </div>
    </header>
    <div class="title is-size-3 is-spaced">Buttons</div>
    <div class="subtitle is-5 mb-2">Variações</div>
    <div class="buttons">
      <b-button rounded> Button </b-button>
      <b-button type="is-dark" rounded> Button </b-button>
      <b-button type="is-primary" rounded> Button </b-button>
      <b-button type="is-secondary" rounded> Button </b-button>
      <b-button type="is-primary" rounded outlined> Button </b-button>
      <b-button type="is-ghost" rounded> Button </b-button>
      <b-button rounded disabled> Button </b-button>
    </div>

    <div class="buttons">
      <b-button>Normal</b-button>
      <b-button disabled>Disabled</b-button>
      <b-button loading>Loading</b-button>
      <b-button rounded>Rounded</b-button>
      <b-button focused>Focused</b-button>
      <b-button hovered>Hovered</b-button>
      <b-button selected>Selected</b-button>
      <b-button active>Active</b-button>
    </div>

    <div class="buttons">
      <b-button type="is-primary" outlined>Outlined</b-button>
      <b-button type="is-success" outlined>Outlined</b-button>
      <b-button type="is-danger" outlined>Outlined</b-button>
      <b-button type="is-warning" outlined>Outlined</b-button>
    </div>

    <div class="buttons">
      <b-button type="is-primary" expanded>Expanded</b-button>
    </div>

    <div class="notification is-primary">
      <div class="buttons">
        <b-button type="is-primary" inverted>Inverted</b-button>
        <b-button type="is-primary" inverted outlined>Invert Outlined</b-button>
      </div>
    </div>

    <div class="subtitle mt-2 is-5">Tamanhos</div>
    <div class="buttons">
      <b-button type="is-primary" size="is-large" rounded> Button </b-button>
      <b-button type="is-primary" rounded> Button </b-button>
      <b-button type="is-primary" size="is-small" rounded> Button </b-button>
    </div>
    <div class="box mt-5 mb-5">
      <div class="title is-size-3 is-spaced mb-3">Forms</div>
      <div class="subtitle is-5 mb-2">Input</div>
      <div class="columns is-variable is-2 mb-3">
        <div class="column">
          <b-field>
            <b-input placeholder="Typing Here" rounded></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field type="is-danger" message="E-mail incorreto">
            <b-input placeholder="Typing Here" rounded></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input placeholder="Disabled" disabled rounded></b-input>
          </b-field>
        </div>
      </div>
      <div class="subtitle is-6 mb-2">Input sizes</div>
      <div class="columns is-variable is-2 mb-3">
        <div class="column">
          <b-field>
            <b-input
              placeholder="Typing Here"
              size="is-large"
              rounded
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input placeholder="Typing Here" rounded></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field>
            <b-input placeholder="Disabled" size="is-small" rounded></b-input>
          </b-field>
        </div>
      </div>
      <b-field class="mb-0">
        <b-input
          maxlength="200"
          type="textarea"
          placeholder="Write description here..."
          rounded
        ></b-input>
      </b-field>
    </div>
    <div class="subtitle mt-2 is-5">Autocomplete</div>
    <div class="autocompletes mb-5">
      <div class="columns">
        <div class="column is-4">
          <b-field>
            <b-autocomplete
              rounded
              v-model="name"
              :data="filteredData"
              placeholder="e.g. jQuery"
              icon="magnify"
              clearable
              @select="(option) => (selected = option)"
            >
              <template #empty>No results found</template>
            </b-autocomplete>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field>
            <b-autocomplete
              placeholder="Buscar"
              clearable
              disabled
              rounded
              @select="(option) => (selected = option)"
            >
              <template #empty>Nenhum resultado encontrado</template>
            </b-autocomplete>
          </b-field>
        </div>
      </div>
    </div>
    <div class="subtitle heading">Button Group</div>
    <div class="button-group mb-5">
      <b-field>
        <p class="control">
          <b-button icon-pack="fab" icon-left="twitter" rounded outlined />
        </p>
        <p class="control">
          <b-button
            icon-pack="fab"
            icon-left="facebook"
            type="is-primary"
            rounded
            outlined
          />
        </p>
        <p class="control">
          <b-button icon-pack="fab" icon-left="instagram" rounded outlined />
        </p>
      </b-field>
    </div>
    <div class="checkboxes mb-5">
      <div class="subtitle heading">Checkboxes</div>
      <b-field>
        <b-checkbox>Basic</b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox :indeterminate="true"> Indeterminate </b-checkbox>
      </b-field>
      <b-field>
        <b-checkbox disabled>Disabled</b-checkbox>
      </b-field>
    </div>
    <div class="block">
      <div class="title is-size-3 is-spaced">Tabs</div>
    </div>
    <div class="subtitle mt-2 is-5">Controle tabs</div>
    <div class="is-flex">
      <b-button label="Set Music" @click="activeTab = 1" />
      <b-switch class="ml-2" v-model="showBooks"> Show Books item </b-switch>
    </div>

    <div class="tabs-section">
      <div class="subtitle mt-2 is-5">tabs items</div>
      <b-tabs v-model="activeTab">
        <b-tab-item label="Pictures"> Lorem ipsum dolor sit amet. </b-tab-item>

        <b-tab-item label="Music">
          Lorem <br />
          ipsum <br />
          dolor <br />
          sit <br />
          amet.
        </b-tab-item>

        <b-tab-item :visible="showBooks" label="Books">
          What light is light, if Silvia be not seen? <br />
          What joy is joy, if Silvia be not by— <br />
          Unless it be to think that she is by <br />
          And feed upon the shadow of perfection? <br />
          Except I be by Silvia in the night, <br />
          There is no music in the nightingale.
        </b-tab-item>

        <b-tab-item label="Videos" disabled>
          Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar
          congue luctus. Nullam hendrerit iaculis augue vitae ornare. Maecenas
          vehicula pulvinar tellus, id sodales felis lobortis eget.
        </b-tab-item>
      </b-tabs>

      <div class="title is-size-3 is-spaced">Tooltips</div>
      <div>
        <b-tooltip label="Text is dashed" dashed> Simple text </b-tooltip>

        <b-tooltip
          label="Maybe you like a little animation"
          position="is-bottom"
          :animated="false"
        >
          <b-button label="No animation" />
        </b-tooltip>

        <b-tooltip label="You prefer dark?" type="is-dark" position="is-bottom">
          <b-button label="Dark" />
        </b-tooltip>

        <b-tooltip label="Or light?" type="is-light" position="is-bottom">
          <b-button label="Light" />
        </b-tooltip>

        <b-tooltip label="I'm never closing" always>
          <b-button label="Always" />
        </b-tooltip>

        <b-tooltip label="I'm square" position="is-bottom" square>
          <b-button label="Square" />
        </b-tooltip>

        <b-tooltip
          label="You love the light variant, dont you?"
          type="is-primary is-light"
          position="is-bottom"
        >
          <b-button label="Primary light variant" />
        </b-tooltip>
      </div>
      <div class="title is-size-3 is-spaced">Collapse</div>
      <b-collapse :model-value="false" aria-id="contentIdForA11y1">
        <template #trigger="props">
          <b-button
            label="Click me!"
            type="is-primary"
            aria-controls="contentIdForA11y1"
            :aria-expanded="props.open"
          />
        </template>
        <div class="notification">
          <div class="content">
            <h3>Subtitle</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
              lectus, nec rutrum justo nibh eu lectus.
              <br />
              Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat
              vel, interdum mattis neque.
            </p>
          </div>
        </div>
      </b-collapse>
      <div class="title is-size-3 is-spaced">Dialogs</div>
      <div class="buttons">
        <b-button
          label="Launch confirm (default)"
          type="is-primary"
          outlined
          size="is-medium"
          @click="confirm"
        />

        <b-button
          label="Launch confirm (custom)"
          type="is-secondary"
          outlined
          size="is-medium"
          @click="confirmCustom"
        />

        <b-button
          label="Launch confirm (custom)"
          type="is-danger"
          size="is-medium"
          @click="confirmCustomDelete"
        />
      </div>
      <div class="title is-size-3 is-spaced">Dropdown</div>
      <b-dropdown aria-role="list">
        <template #trigger="{ active }">
          <b-button
            label="Click me!"
            type="is-primary"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>

      <b-dropdown :triggers="['hover']" aria-role="list">
        <template #trigger>
          <b-button label="Hover me!" type="is-info" icon-right="menu-down" />
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>

      <b-dropdown disabled aria-role="list">
        <template #trigger>
          <b-button label="Disabled" icon-right="menu-down" />
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>

      <b-dropdown aria-role="list">
        <template #trigger>
          <p class="tag is-success" role="button">Custom trigger</p>
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>

      <b-dropdown :triggers="['contextmenu']" aria-role="list">
        <template #trigger>
          <b-button type="is-link" label="Right click" />
        </template>

        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>

      <div class="title is-size-3 is-spaced">Modal</div>
      <div class="buttons">
        <b-button
          label="Launch image modal"
          type="is-primary"
          size="is-medium"
          @click="isImageModalActive = true"
        />
        <b-button
          label="Launch card modal (keep scroll)"
          type="is-primary"
          size="is-medium"
          @click="isCardModalActive = true"
        />
      </div>

      <b-modal v-model="isImageModalActive">
        <p class="image is-4by3">
          <img src="/assets/frieren.jpg" />
        </p>
      </b-modal>

      <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="/assets/frieren.jpg" alt="Image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="/assets/frieren.jpg" alt="Image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a>#css</a>
              <a>#responsive</a>
              <br />
              <small>11:09 PM - 1 Jan 2016</small>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>
