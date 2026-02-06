<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0 mb-6">
        Overlay Components
      </h1>
      <p class="text-surface-600 dark:text-surface-400 mb-8">
        This section showcases PrimeVue overlay components like Dialog, Drawer, Popover, Tooltip,
        etc.
      </p>
    </div>

    <!-- Delete Confirm Dialog Section -->
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">
        Delete Confirm Dialog
      </h2>
      <p class="text-surface-600 dark:text-surface-400 mb-4">
        A reusable confirmation dialog with customisable title, confirm label, and body slot.
      </p>
      <div class="flex flex-wrap gap-4">
        <Button label="Default Confirm Label" @click="showDefault = true" />
        <Button label="Custom Confirm Label" severity="danger" @click="showCustom = true" />
      </div>

      <DeleteConfirmDialog
        :is-visible="showDefault"
        header="Delete Item"
        confirm-button-label="Confirm"
        @handle-close="showDefault = false"
        @handle-delete="onDefaultDelete"
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </DeleteConfirmDialog>

      <DeleteConfirmDialog
        :is-visible="showCustom"
        header="Remove User"
        confirm-button-label="Remove"
        @handle-close="showCustom = false"
        @handle-delete="onCustomDelete"
      >
        <p>This will permanently remove the user and all associated data.</p>
      </DeleteConfirmDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import DeleteConfirmDialog from "@/components/dialogs/DeleteConfirmDialog.vue";

const showDefault = ref(false);
const showCustom = ref(false);

function onDefaultDelete() {
  showDefault.value = false;
}

function onCustomDelete() {
  showCustom.value = false;
}
</script>
