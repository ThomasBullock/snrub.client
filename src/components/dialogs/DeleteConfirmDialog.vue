<template>
  <Dialog
    :visible="isVisible"
    :header="header"
    modal
    :dismissableMask="true"
    :draggable="false"
    @update:visible="emit('handleClose')"
  >
    <slot />

    <template #footer>
      <div class="flex gap-2 w-full">
        <Button label="Cancel" variant="outlined" class="flex-1" @click="emit('handleClose')" />
        <Button :label="confirmButtonLabel" class="flex-1" @click="emit('handleDelete')" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";

defineProps<{
  isVisible: boolean;
  header: string;
  confirmButtonLabel: string;
}>();

const emit = defineEmits<{
  handleClose: []; // event carries no payload (empty array = no arguments)
  handleDelete: [];
}>();
</script>
