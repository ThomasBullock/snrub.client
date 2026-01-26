<template>
  <div class="p-6 md:p-12 lg:p-20 bg-surface-50 dark:bg-surface-950">
    <DataTable :value="allUsers" class="shadow-sm rounded-2xl overflow-hidden">
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore();
const allUsers = usersStore.getAllUsers;
</script>

<style lang="scss" scoped></style>
