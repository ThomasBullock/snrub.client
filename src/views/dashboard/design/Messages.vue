<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0 mb-6">
        Messages Components
      </h1>
      <p class="text-surface-600 dark:text-surface-400 mb-8">
        This section showcases PrimeVue message components like Toast, Message, InlineMessage, etc.
      </p>
    </div>

    <!-- Message Components Section -->
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">
        Message Component
      </h2>
      <div class="flex flex-wrap gap-4">
        <Message severity="success">Success Message</Message>
        <Message severity="info">Info Message</Message>
        <Message severity="warn" icon="pi pi-exclamation-triangle">Warn Message</Message>
        <Message severity="error">Error Message</Message>
        <Message severity="secondary">Secondary Message</Message>
        <Message severity="contrast">Contrast Message</Message>
      </div>
    </div>

    <!-- Toast Section -->
    <div>
      <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">
        Toast Component
      </h2>
      <p class="text-surface-600 dark:text-surface-400 mb-4">
        Click the buttons below to display toast notifications.
      </p>
      <div class="flex gap-3">
        <Button label="Success Toast" severity="success" @click="showSuccess" />
        <Button label="Error Toast" severity="danger" @click="showError" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Message from "primevue/message";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "Operation completed successfully!",
    life: 3000,
  });
};

const showError = () => {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: "Something went wrong. Please try again.",
    life: 3000,
  });
};
</script>
